<script>
import { GraphQLClient, gql } from 'graphql-request'


let resultatAbfrage = {};

async function main() {
  const endpoint = ''

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      //authorization: 'Bearer',
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
                Demo {
                  Altersgrp
                  AnstVerh
                  BuKr
                  BuLine
                }
              }
            }
              `

  const data = await graphQLClient.request(query);
  //console.log(JSON.stringify(data, undefined, 2));
  

  //const final = JSON.stringify(data);
  //return final;

  return {
        props: {
          data,
        },
      };

}


$: main().catch((error) => console.error(error));
$: main().then((val) => console.log("DIE DATEN" + val));
$: main().then((val) => (resultatAbfrage = val));
$: dieAntwort = JSON.stringify(resultatAbfrage);
// $: resultatAbfrage2 = JSON.parse(dieAntwort);
</script>

<slot></slot>

<div>
    Die Antworten lauten:
   <p>1. {resultatAbfrage}</p>
   <p>2. {dieAntwort}</p>
</div>