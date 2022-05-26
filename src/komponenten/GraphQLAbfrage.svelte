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
  
  //$resultatAbfrage = {};

  ////// BAUSTELLE
  export function klickTest(){
    console.log('Es wurde der Button geklickt - Effekt auf Funktion in der Komponente GraphQLAbfrage');
  }
  ////// BAUSTELLE/


  async function main() {
    
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
      varJahr: [2018, 2019, 2020],
      //varJahr: {jahreszahlenStat}, geht nicht!
      //varJahr: {jahreszahlen}, geht nicht!
    }

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
  
  {JSON.stringify($resultatAbfrage)}