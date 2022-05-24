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
  
  import { GraphQLClient, gql } from 'graphql-request'
  import {resultatAbfrage} from '../speicher/store'
  
  
  $resultatAbfrage = {};
  
  async function main() {
  
    const graphQLClient = new GraphQLClient('', {
      headers: {
        authorization: 'Bearer ',
          //apiKey: '...',
      },
    })
  
          const query = gql`
              {
                abfrageJahr(input: {
                  Jahr : [2018]
                }) {
                  Jahr
                  MAKennung
                }
              }
                `
  
    const data = await graphQLClient.request(query);
    /*
    console.log("Das Ergebnis in der Funktion: " + JSON.stringify(data, undefined, 2));
  
    const final = JSON.stringify(data);
    
    return final;
    */
    console.log("Das Ergebnis in der Funktion: " + JSON.stringify(data, undefined, 2));
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
  
  //$: main().then((val) => console.log("DIE DATEN außerhab: " + val));
  $: main().then((val) => ($resultatAbfrage = val));
  //$: main().then((val) => console.log("DIE DATEN außerhab: " + resultatAbfrage));
  //$: resultatAbfrage2 = JSON.parse(resultatAbfrage.abfrageJahr[0].Jahr); geht nicht!!
  
  /*
  <div>
    {#each resultatAbfrage.abfrageJahr as {Jahr, MAKennung}}
    <p>{Jahr} {MAKennung}</p>
  {/each}
  </div>


  */


  </script>
  
  <slot></slot>
  
  {JSON.stringify($resultatAbfrage)}
  
  {#if $resultatAbfrage }
  <div>
      Die Antworten lauten:
     <p>1. {$resultatAbfrage}</p>
  </div>
  
  {:else}
  <div>
    Die Antworten lauten:
   <p>2. {$resultatAbfrage}</p>
  </div>
  {/if}