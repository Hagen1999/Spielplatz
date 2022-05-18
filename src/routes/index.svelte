<script>

import {min} from 'simple-statistics'
import {mean} from 'simple-statistics'

import {datenreihe1} from '../speicher/store'
import Kuchendiagramm from '../komponenten/Kuchendiagramm.svelte';
import Pie from "svelte-chartjs/src/Pie.svelte"

let abc =  $datenreihe1; // die externe Referenz auf die Rohwerte im Store
const mein_minwert = min(abc); // Minimalwert der Datenreihe
const mein_mittelwert = mean(abc); // Minimalwert der Datenreihe

</script>

<svelte:head><title>Testseite sv - Berechnung: {mein_minwert}</title></svelte:head>

<h1>Welcome to SvelteKit by svs2: Formelresultat {mein_minwert}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div> Die Datenreihe des zentralen Speichers lautet: {$datenreihe1} </div>
<div> Das lokale ABC-Array als Verknüpfung zum zentralen Speicher lautet: {abc} </div>
<br/>
<div> Das berechnete "Min"-Ergebnis (der kleinste Wert) des ABC-Arrays lautet: {mein_minwert} </div>
<div> Der berechnete Mitelwert des ABC-Arrays lautet: {mein_mittelwert} </div>
<br/>
<Kuchendiagramm>Hier wird das Diagramm als externe Komponente eingebunden:</Kuchendiagramm>
