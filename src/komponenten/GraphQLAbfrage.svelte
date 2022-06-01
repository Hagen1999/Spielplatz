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
  //import {jahreszahlenStat} from '../speicher/store' // temporär deaktiviert

  const SVSENVVAR_O = import.meta.env.VITE_MDBA_EP_URLO;
    //const VITE_MDBA_EP = process.env.VITE_MDBA_EP; => geht nicht!
    //console.log("Hallo:" + SVSENVVAR_O); => geht!

  import ButtonSuchStart from '../komponenten/ButtonSuchStart.svelte'

  // GraphQL-Verarbeitung
    //$: resultatString = JSON.stringify($resultatAbfrage);
    //console.log($resultatAbfrage)

  ////// BAUSTELLE Aufruf von außen muss noch eingebunden werden
  const klickTest = () => {
    main().then((val) => ($resultatAbfrage = val));
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

    const requestHeaders = {
        authorization: 'Bearer ',
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
    <div> Console.Log {console.log($jahreszahlen)}</div>
    <!-- <div> Console.Log {console.log($jahreszahlenStat)}</div> -->
    <div> Console.Log {console.log($resultatAbfrage)}</div>
  <br>

  <ButtonSuchStart 
    on:Signal={() => console.log("Buttondrücker wurde in externer Komponente empfangen.")} 
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
    <div>
        {#each ($resultatAbfrage.abfrageJahr) as jahreszeile}
            <li><b>| {jahreszeile.Jahr} | {jahreszeile.MAKennung} | {jahreszeile.Demo.Altersgrp} | {jahreszeile.Demo.BuLine} | {jahreszeile.Demo.AnstVerh} | {jahreszeile.Demo.BuKr} |</b></li>
        {/each}
    </div>
    <br/>
    <div> Das erste Jahr: {$resultatAbfrage.abfrageJahr[0].Jahr}</div>
    <div> Anzahl der Datensätze: {$resultatAbfrage.abfrageJahr.length}</div>
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