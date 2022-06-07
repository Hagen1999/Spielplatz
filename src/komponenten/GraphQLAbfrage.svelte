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
  import {jahreszahlen} from '../speicher/store'
  import {benutzerID} from '../speicher/store'
  import {benutzerEmail} from '../speicher/store'
  import {benutzerPwd} from '../speicher/store'
  import * as Realm from "realm-web"

  //import {jahreszahlenStat} from '../speicher/store' // temporär deaktiviert

  const SVSENVVAR_O = import.meta.env.VITE_MDBA_EP_URLO;
  const id = import.meta.env.VITE_APP_ID;
    //const VITE_MDBA_EP = process.env.VITE_MDBA_EP; => geht nicht!
    //console.log("Hallo:" + SVSENVVAR_O); => geht!

  import ButtonSuchStart from '../komponenten/ButtonSuchStart.svelte'
  import Base from 'svelte-chartjs/src/Base.svelte';

  // GraphQL-Verarbeitung
    //$: resultatString = JSON.stringify($resultatAbfrage);
    //console.log($resultatAbfrage)


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

    // BAUSTELLE AUTH USER - ENDE

  ////// BAUSTELLE Aufruf von außen muss noch eingebunden werden
  const klickTest = () => {
    handleLogin(); // nicht verifiziert!!!!
    //main().then((val) => ($resultatAbfrage = val));
    console.log('Es wurde der Button geklickt - Effekt auf Funktion in der Komponente GraphQLAbfrage');
  }
  ////// BAUSTELLE/


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
    await app.currentUser?.refreshCustomData(); // habe ich selbst eingefügt - Quelle Youtube Video Realm,React,MongoDB 
    const requestHeaders = {        
        authorization: 'Bearer ' + app.currentUser?.accessToken,
          //apiKey: '...',
      }

    const data = await client.request(query, variables, requestHeaders);
    return data;
  }
  
  //$: main().catch((error) => console.error(error));
  //$: main().then((val) => ($resultatAbfrage = val));

  </script>
  
  <slot></slot>

  <!-- ////////////////////////////////// HTML /////////////////////////////////////////////-->
  <!-- ///////////////////////////// Button "Suche" ////////////////////////////////////////-->
  <h2>GraphQL-Abfrage</h2>
  <!--
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
    <div>Benutzer-ID: {$benutzerID}</div>
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

      <br/>
      </div>

<!-- ////////////////////////////////// HTML /////////////////////////////////////////////-->


<style>
  .textblock {
      color: darkgreen;
      padding-left: 1rem;
      font-family: Arial, Helvetica, sans-serif;
  }
</style>