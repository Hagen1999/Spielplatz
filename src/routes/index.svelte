<script>

import {min} from 'simple-statistics'

let abc =  [1, 5, 10, 100, 20, 25, 30];
const xyz = min(abc); // => -10


import Pie from "svelte-chartjs/src/Pie.svelte"

let data = {
  labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
  datasets: [
    {
      data: abc,
      backgroundColor: [
        "#F7464A",
        "#46BFBD",
        "#FDB45C",
        "#949FB1",
        "#4D5360",
        "#AC64AD"
      ],
      hoverBackgroundColor: [
        "#FF5A5E",
        "#5AD3D1",
        "#FFC870",
        "#A8B3C5",
        "#616774",
        "#DA92DB"
      ]
    }
  ]
};

let options = {
  responsive: true
}


</script>

<h1>Welcome to SvelteKit by svs2</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div> Das Array besteht aus: {abc} </div>
<div> Das Ergebnis "Min" lautet: {xyz} </div>

<div><Pie {data} {options}/></div>
