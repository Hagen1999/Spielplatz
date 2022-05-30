<script>

import Pie from "svelte-chartjs/src/Pie.svelte"
import {tortenfarben1} from '../speicher/store'
import {datenreihe3} from '../speicher/store'

   $: data = {
      //labels: ["Red", "Green", "Yellow", "Grey", "Dunkelgrau"],
      labels: $tortenfarben1, // => VAR der Legende wird aus dem zentralen Store geladen
      datasets: [
        {
          data: $datenreihe3, // => Datenwerte werden aus dem zentralen Store geladen
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

<h2>Kuchendiagramm</h2>
    <div>    
      <slot></slot>
      <div><Pie {data} {options} /></div>
    </div>