<script>
/*
    const query = gql`
              {
                abfrageJahr(input: {
                  Jahr : [2018, 2019, 2020]
                }) {
                  Jahr
                  MAKennung
                  Demo {
                    Altersgrp
                    AnstVerh
                    BuKr
                    BuLine
                  }
                }
              }
                `
*/

/*
query ($varJahr: [Int]){
  abfrageJahr(input: {
    Jahr : $varJahr
  }) {
    Jahr
    MAKennung
    Demo {
      Altersgrp
      AnstVerh
      BuKr
      BuLine
    }
  }
}
*/

  import { GraphQLClient, gql } from 'graphql-request'
  import {resultatAbfrage} from '../speicher/store'
  import {resultatAbfrage2} from '../speicher/store'
  import {jahreszahlen} from '../speicher/store'
  import {benutzerID} from '../speicher/store'
  import {benutzerAccessToken} from '../speicher/store' // geht noch nicht!
  import {db_name} from '../speicher/store'
  import {db_alter} from '../speicher/store'
  import {db_akt_id} from '../speicher/store'

  import * as Realm from "realm-web"

  //import {jahreszahlenStat} from '../speicher/store' // temporär deaktiviert

  const SVSENVVAR_O = import.meta.env.VITE_MDBA_EP_URLO;
  const id = import.meta.env.VITE_APP_ID; // kann ggf. weg - habe ich in die index.svelte kopiert
    //const VITE_MDBA_EP = process.env.VITE_MDBA_EP; => geht nicht!
    //console.log("Hallo:" + SVSENVVAR_O); => geht!

  import ButtonSuchStart from '../komponenten/ButtonSuchStart.svelte'
  import Base from 'svelte-chartjs/src/Base.svelte';

  // GraphQL-Verarbeitung
    //$: resultatString = JSON.stringify($resultatAbfrage);
    //console.log($resultatAbfrage)

/*
    // BAUSTELLE AUTH USER - START
    const config = {
      id,
    };
    console.log(id);

    const app = new Realm.App(config);

    // Create an anonymous credential
    //const credentials = Realm.Credentials.anonymous();
    $: credentials = Realm.Credentials.emailPassword($benutzerEmail, $benutzerPwd);
    const handleLogin = async () => {
      try {
    // Authenticate the user
    const user = await app.logIn(credentials);
    // `App.currentUser` updates to match the logged in user
    $benutzerID = user.id;
    main().then((val) => ($resultatAbfrage = val));
    
    console.assert(user.id === app.currentUser?.id);
    console.log("User.ID= " + user.id);
    console.log("App.Current.User.ID= " + app.currentUser?.id);
    console.log("ID: " + id);
    console.log("Access-Token: " + app.currentUser?.accessToken)


      } catch (e){
        console.error("error log in");
      }
    }
*/
    // BAUSTELLE AUTH USER - ENDE

// Connect to your MongoDB Realm app
    const config = {id,};
    const app = new Realm.App(config);

// Gets a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
  // Guarantee that there's a logged in user with a valid access token
  if (!app.currentUser) {
    // If no user is logged in ...
                      // SPRINGE AUF DIE LOGIN SEITE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                //ALTERNATIV: await app.logIn(Realm.Credentials.emailPassword());
  } else {
    // An already logged in user's access token might be stale. To guarantee that the token is
    // valid, we refresh the user's custom data which also refreshes their access token.
    console.log("TOKEN-VORHER: "+app.currentUser?.accessToken);
    await app.currentUser.refreshCustomData();
    console.log("Refresh des Tokens durchgeführt.")
    console.log("TOKEN-NACHHER: "+app.currentUser?.accessToken);
  }
  return app.currentUser?.accessToken;
}


  const klickTest = () => {
    getValidAccessToken();
    main().then((val) => ($resultatAbfrage = val));
    main2().then((val) => ($resultatAbfrage2 = val));
    console.log('Es wurde der Button geklickt - Effekt auf Funktion in der Komponente GraphQLAbfrage');
  }


  export const main = async () => {
    const endpoint = SVSENVVAR_O // ENV Variable in Gitpod MUSS vor dem DEPLOY verändert werden!!
    const client = new GraphQLClient(endpoint)
    const query = gql`
              query ($varJahr: [Int]){
                    abfrageJahr(input: {
                      Jahr : $varJahr
                    }) {
                      Jahr
                      MAKennung
                      Demo {
                        Altersgrp
                        AnstVerh
                        BuKr
                        BuLine
                      }
                    }
                  }
                `
    const variables = {
      //varJahr: [2018, 2019, 2020], Ursprungstest mit staischen Anagben    
      //varJahr: $jahreszahlenStat//, geht!
      varJahr: $jahreszahlen //, geht!
    }
    //console.log(variables);
    //await app.currentUser?.refreshCustomData(); // habe ich selbst eingefügt - Quelle Youtube Video Realm,React,MongoDB 
    const requestHeaders = {        
        authorization: 'Bearer ' + app.currentUser?.accessToken,
        //authorization: 'Bearer ' + getValidAccessToken()
          //apiKey: '...',
      }

    const data = await client.request(query, variables, requestHeaders);
    return data;
  }
  
  //$: main().catch((error) => console.error(error));
  //$: main().then((val) => ($resultatAbfrage = val));


  export const main2 = async () => {
    const endpoint = SVSENVVAR_O // ENV Variable in Gitpod MUSS vor dem DEPLOY verändert werden!!
    const client = new GraphQLClient(endpoint)
    const query = gql`
                query {
                  vftest_interactivedata{
                    _id
                    name
                    hierarchie
                    alter
                    orte
                    }
                  }
                `
    const variables = {
      //varJahr: $jahreszahlen
    }
    const requestHeaders = {        
        authorization: 'Bearer ' + app.currentUser?.accessToken,
      }

    const data = await client.request(query, variables, requestHeaders);
    return data;
  }

  export const gql_mutation = async (/** @type {string} */ _id, /** @type {string} */ name, /** @type {number} */ alter) => {
    const endpoint = SVSENVVAR_O // ENV Variable in Gitpod MUSS vor dem DEPLOY verändert werden!!
    const client = new GraphQLClient(endpoint)
    const mutation = gql`
                mutation ($_id: ObjectId, $name: String, $alter: Int){
                  updateOneVftest_interactivedatum(set:{
                    _id : $_id
                    name: $name
                    alter: $alter
                  }){
                    _id
                    name
                    alter
                    }
                  }
                `
    const variables = {
      _id: $db_akt_id,
      name: $db_name,
      alter: $db_alter
    }
    const requestHeaders = {        
        authorization: 'Bearer ' + app.currentUser?.accessToken,
      }

    const data = await client.request(mutation, variables, requestHeaders);
    return data;
  }


  /**
* @param {string} id
* @param {string} name
* @param {number} alter
*/
  function bereiteMutationVor(id, name, alter){
      $db_akt_id = id;
      $db_name = name;
      $db_alter = alter;
      gql_mutation($db_akt_id, $db_name, $db_alter );
    return 
  }
  </script>
  
  <slot></slot>

  <!-- ////////////////////////////////// HTML /////////////////////////////////////////////-->
  <!-- ///////////////////////////// Button "Suche" ////////////////////////////////////////-->
    <!--
  <h2>GraphQL-Abfrage</h2>

    <div> Console.Log {console.log($jahreszahlen)}</div>
    //<div> Console.Log {console.log($jahreszahlenStat)}</div>
    <div> Console.Log {console.log($resultatAbfrage)}</div>
  <br>
  -->
  <ButtonSuchStart 
    on:Signal={() => console.log("Filter-Button wurde in externer Komponente gedrückt.")} 
    on:Signal={() => klickTest()}/>
    <br>
    <br>
    <div class="textblock">
      <!-- 
      <br/>
    <div>JSON.Stringify: 
      <br>
      {JSON.stringify($resultatAbfrage)} 
    </div>
    <br>
    <div>Das GraphQL Stringify-Objekt: 
      <br>
      {resultatString}</div>
    <br/>
    -->

    <h3>Ergebnisse:</h3>
        <div>
            {#each ($resultatAbfrage.abfrageJahr) as jahreszeile}
                <li><b>| {jahreszeile.Jahr} | {jahreszeile.MAKennung} | {jahreszeile.Demo.Altersgrp} | {jahreszeile.Demo.BuLine} | {jahreszeile.Demo.AnstVerh} | {jahreszeile.Demo.BuKr} |</b></li>
            {/each}
        </div>
      <br/>
        <div>Das erste Jahr: {$resultatAbfrage.abfrageJahr[0].Jahr}</div>
        <div>Anzahl der Datensätze: {$resultatAbfrage.abfrageJahr.length}</div>
        <br/>
        <!-- <div>Benutzer-ID: {$benutzerID}</div> -->

      <br/>
        <div><li><b>Veränderbare Daten in DB:</b></li>
            {#each ($resultatAbfrage2.vftest_interactivedata) as userzeile}            
                  <br/><b>ID: {userzeile._id} 
                  <br/>Name: <input class="input" type="text" bind:value= {userzeile.name} />
                  <br/>Alter: <input class="input" type="number" bind:value= {userzeile.alter} />
                  <br/>Hierarchie: {userzeile.hierarchie}
                  <br/>Orte: <input class="input" type="text" bind:value= {userzeile.orte} />
                </b>
                <br/>
                <!-- /////
                <button 
	                  on:click|preventDefault={() => console.log(userzeile._id)}>Verändern
                </button>
                ////-->
                <button 
                on:click|preventDefault={() => bereiteMutationVor(userzeile._id, userzeile.name, userzeile.alter)}>Verändern 
            </button>
                <br/>
            {/each}
        </div>
      </div>

<!-- ////////////////////////////////// HTML /////////////////////////////////////////////-->


<style>
  /*
  .textblock {
      color: darkgreen;
      padding-left: 1rem;
      font-family: Arial, Helvetica, sans-serif;
  }
  */
</style>