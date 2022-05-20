<script>
import { GraphQLClient, gql } from 'graphql-request'

async function main() {
  const endpoint = '...'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      //authorization: 'Bearer ...',
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
  console.log(JSON.stringify(data, undefined, 2));
  

  const final = JSON.stringify(data);
  return final;
  //return data;
}

main().catch((error) => console.error(error));
//const resultatAbfrage = main().catch((error) => console.error(error));
//const resultatAbfrage = main().then();
//$: dieAntwort = JSON.stringify(resultatAbfrage);
//$: resultatAbfrage2 = JSON.parse(dieAntwort);


</script>

<slot></slot>

<div>
    Das JSON-Objekt die Antwort lautet: {main().catch()}.
</div>
