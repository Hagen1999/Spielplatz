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
  
    const graphQLClient = new GraphQLClient('https://eu-central-1.aws.realm.mongodb.com/api/client/v2.0/app/vftestapp0-mhegz/graphql', {
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImJhYXNfZG9tYWluX2lkIjoiNjI0MWM0N2NmMmFlYTg2YmFkOTYwYTA3IiwiZXhwIjoxNjUzNDMxNDU2LCJpYXQiOjE2NTM0Mjk2NTYsImlzcyI6IjYyOGQ1NTk4OGMzZmM0ZGU5N2I4YzYwNyIsInN0aXRjaF9kZXZJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInN0aXRjaF9kb21haW5JZCI6IjYyNDFjNDdjZjJhZWE4NmJhZDk2MGEwNyIsInN1YiI6IjYyOGQ1NTk4OGMzZmM0ZGU5N2I4YzYwNSIsInR5cCI6ImFjY2VzcyJ9.TERvHP7g3-0zFp9Y0rfZhNbrCuZe5DkJW4hcx0SxGy8',
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