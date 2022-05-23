<script context="module">

import { GraphQLClient, gql } from 'graphql-request'
import {bspDaten1} from '../speicher/store'
import {bspDaten2} from '../speicher/store'
import {bspDaten3} from '../speicher/store'
/*
function test(){
  return "Hallo Welt!";
}
    const teststring = test(); 
    console.log(teststring);

const test2 = () => {
  return "Hallo Welt2!";
    }
    const teststring2 = test2(); 
    console.log(teststring2);

function createUser2() {
  const user = {
    name: "Sven2",
    mail: "Mail2",
    pass: "Pass2"
  }
  return user;
}
$bspDaten2.name2 = createUser2().name;
$bspDaten2.mail2 = createUser2().mail;
$bspDaten2.pass2 = createUser2().pass;
console.log($bspDaten2.name2);


const createUser3 = () => ({
    name: "Sven3",
    mail: "Mail3",
    pass: "Pass3"
})
$bspDaten3.name3 = createUser3().name;
$bspDaten3.mail3 = createUser3().mail;
$bspDaten3.pass3 = createUser3().pass;
console.log($bspDaten3.name3);
*/


async function main() {
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
              }
            }
              `

  const data = await graphQLClient.request(query);
  console.log(JSON.stringify(data, undefined, 2));
  //console.log("toll2");
  //console.log(JSON.stringify(data));
  /*
  const final = JSON.stringify(data, undefined, 2);

  const jahr0 = JSON.stringify(data.abfrageJahr[0].Jahr);
  const jahr1 = JSON.stringify(data.abfrageJahr[1].Jahr);
  const jahr2 = JSON.stringify(data.abfrageJahr[2].Jahr);
  const jahre = "Jahre: " + jahr0 + jahr1 +  jahr2;

  console.log(JSON.stringify(data.abfrageJahr[1].Jahr));
  console.log("Jahre: " + jahr0, jahr1, jahr2);
  console.log("Jahre als String: " + jahre);

  //return [final, jahr0];
  return jahr0;
  */
  return {
      props: {
        data,
      },
    };
}
</script>

<script>



export /**
    * @type {{ abfrageJahr: any; }}
    */
    let data;

    
/*
$: irgendwas = main().then((result) => console.log(result));
$bspDaten1.name1 = main().then((result) => console.log(result));
$bspDaten1.mail1 = main().(JSON.stringify(data.abfrageJahr[1].Jahr));
$bspDaten1.pass1 = main().(JSON.stringify(data.abfrageJahr[2].Jahr));
console.log($bspDaten1.name1);
console.log($bspDaten1.mail1);
console.log($bspDaten1.pass1);



main().then((final2) => {
  //const title = document.querySelector('h1');
  //title.textContent = final2;
  //const resultatAbfrage = final;
  const final3 = JSON.stringify(final2);
  //console.log("die Antwort: " + final3 + " war das!");
  return final3;
});
*/
/*
main().catch((error) => console.error(error));
//const resultatAbfrage = main().catch((error) => console.error(error));
//const resultatAbfrage = main().then();
//$: dieAntwort = JSON.stringify(resultatAbfrage);
//$: resultatAbfrage2 = JSON.parse(dieAntwort);

*/




</script>

<slot></slot>

<div>Das JSON-Objekt in der Komponente lautet:  .</div>

<h1>DATENABFRAGE</h1>
  
{#each data.abfrageJahr as { Jahr, MAKennung }}
  <p>{Jahr} {MAKennung}</p>
{/each}

