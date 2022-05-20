<script>
    import { GraphQLClient, gql } from 'graphql-request'

async function main() {
  const endpoint = 'https://eu-central-1.aws.realm.mongodb.com/api/client/v2.0/app/vftestapp0-mhegz/graphql'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        apiKey: 'tSZzomqB98AePyPGALsLzahodck5BpNgGZYbszR1mU3TQqQwiWJmPQKcyRXAkTMV',
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

  const data = await graphQLClient.request(query)
  console.log(JSON.stringify(data, undefined, 2))

  const final = JSON.stringify(data);
  return final
}

main().catch((error) => console.error(error));
const resultatAbfrage = main().catch((error) => console.error(error));

$:  dieAntwort = JSON.stringify(resultatAbfrage);
$: resultatAbfrage2 = JSON.parse(dieAntwort);


</script>

<slot></slot>

<div>
    Das JSON-Objekt lautet: {resultatAbfrage2}.
</div>
