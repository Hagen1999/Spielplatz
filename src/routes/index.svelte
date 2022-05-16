<script>

import {min} from 'simple-statistics'
import { LayerCake } from 'layercake';

let abc =  [1, 5, -10, 100, 2, -30];
const xyz = min(abc); // => -10

const points = [
  {x: 0, y: 0},
  {x: 5, y: 10},
  {x: 10, y: 20},
  {x: 15, y: 30},
  {x: 20, y: 40}
];


</script>

<h1>Welcome to SvelteKit by svs</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div> Das Array besteht aus: {abc} </div>
<div> Das Ergebnis "Min" lautet: {xyz} </div>
  
  <div class="chart-container">
    <LayerCake
      data={ points }
      x='x'
      y='y'
    >
      <!-- Components go here -->
    </LayerCake>
  </div>


  <style>
    /*
      The wrapper div needs to have an explicit width and height in CSS.
      It can also be a flexbox child or CSS grid element.
      The point being it needs dimensions since the <LayerCake> element will
      expand to fill it.
    */
    .chart-container {
      width: 100%;
      height: 300px;
    }
  </style>

