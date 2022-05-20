<script>
import { GraphQLClient, gql } from 'graphql-request'

async function main() {
  const endpoint = 'https://eu-central-1.aws.realm.mongodb.com/api/client/v2.0/app/vftestapp0-mhegz/graphql'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImJhYXNfZG9tYWluX2lkIjoiNjI0MWM0N2NmMmFlYTg2YmFkOTYwYTA3IiwiZXhwIjoxNjUzMDYxMTY0LCJpYXQiOjE2NTMwNTkzNjQsImlzcyI6IjYyODdhZjI0Y2Q4MGI1NmRhNmI1NjMzNiIsInN0aXRjaF9kZXZJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInN0aXRjaF9kb21haW5JZCI6IjYyNDFjNDdjZjJhZWE4NmJhZDk2MGEwNyIsInN1YiI6IjYyODdhZjI0Y2Q4MGI1NmRhNmI1NjMzNCIsInR5cCI6ImFjY2VzcyJ9.HDRZzUobsCeTc-oXNHbaLbORdWZ3YjVmulXfg01Ylqo',
        //apiKey: 'tSZzomqB98AePyPGALsLzahodck5BpNgGZYbszR1mU3TQqQwiWJmPQKcyRXAkTMV',
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
