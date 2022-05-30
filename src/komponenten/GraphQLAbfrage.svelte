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
  import {jahreszahlenStat} from '../speicher/store'

  import ButtonSuchStart from '../komponenten/ButtonSuchStart.svelte'
  
  //$resultatAbfrage = {};

  ////// BAUSTELLE Aufruf von außen muss noch eingebunden werden
  let mainStart = main();

  const klickTest = () => {
    console.log('Es wurde der Button geklickt - Effekt auf Funktion in der Komponente GraphQLAbfrage');
    mainStart = main();
  }
  ////// BAUSTELLE/


  async function main() {
    
    //const endpoint = MDBA_EP;
    const endpoint = ''

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
      varJahr: $jahreszahlen //, geht noch nicht so richtig , nach Aktivierung im Quellcode zur Laufzeit
    }
    console.log(variables);

    const requestHeaders = {
        authorization: 'Bearer ',
          //apiKey: '...',
      }

    const data = await client.request(query, variables, requestHeaders);

    return data;
    /*
    return {
          props: {
            data,
          },
        };
    */
  }
  
  
  $: main().catch((error) => console.error(error));
  $: main().then((val) => ($resultatAbfrage = val));

  </script>
  
  <slot></slot>

  <!-- ////////////////////////////////// HTML /////////////////////////////////////////////-->
  <!-- ////////////////////// Button "Suche" & Ergebnistabelle /////////////////////////////-->

  <ButtonSuchStart 
    on:Signal={() => console.log("Buttondrücker wurde in externer Komponente empfangen.")} 
    on:Signal={() => klickTest()}/>
  
  {JSON.stringify($resultatAbfrage)}

  <p>{mainStart}</p>
  <div>
    {#each ($resultatAbfrage.abfrageJahr) as jahreszeile}
        <li><b>| {jahreszeile.Jahr} | {jahreszeile.MAKennung} | {jahreszeile.Demo.Altersgrp} | {jahreszeile.Demo.BuLine} | {jahreszeile.Demo.AnstVerh} | {jahreszeile.Demo.BuKr} |</b></li>
    {/each}
</div>

<!-- ////////////////////////////////// HTML /////////////////////////////////////////////-->