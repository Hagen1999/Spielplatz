<script>
import { GraphQLClient, gql } from 'graphql-request'

export async function main() {
  const endpoint = ''

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: '',
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
  //console.log("toll2");
  //console.log(JSON.stringify(data));

  const final = JSON.stringify(data, undefined, 2);

  const jahr0 = JSON.stringify(data.abfrageJahr[0].Jahr);
  const jahr1 = JSON.stringify(data.abfrageJahr[1].Jahr);
  const jahr2 = JSON.stringify(data.abfrageJahr[2].Jahr);
  const jahre = "Jahre: " + jahr0 + jahr1 +  jahr2;

  console.log(JSON.stringify(data.abfrageJahr[1].Jahr));
  console.log("Jahre: " + jahr0, jahr1, jahr2);
  console.log("Jahre als String: " + jahre);

  return final;
}

/*
main().then((final2) => {
  //const title = document.querySelector('h1');
  //title.textContent = final2;
  //const resultatAbfrage = final;
  const final3 = JSON.stringify(final2);
  //console.log("die Antwort: " + final3 + " war das!");
  return final3;
});
*/

main().catch((error) => console.error(error));
//const resultatAbfrage = main().catch((error) => console.error(error));
//const resultatAbfrage = main().then();
//$: dieAntwort = JSON.stringify(resultatAbfrage);
//$: resultatAbfrage2 = JSON.parse(dieAntwort);


</script>

<slot></slot>

<div>
    Das JSON-Objekt die Antwort lautet: .
</div>
