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
  
  //$resultatAbfrage = {};
  

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
                  Jahr : [2018, 2019, 2020]
                }) {
                  Jahr
                  MAKennung
                }
              }
                `
  
    const data = await graphQLClient.request(query);
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