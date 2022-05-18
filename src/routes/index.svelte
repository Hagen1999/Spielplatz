<script>

//import {min} from 'simple-statistics'
//import {mean} from 'simple-statistics'

import * as ss from 'simple-statistics'

import {datenreihe1} from '../speicher/store'
import {datenreihe2} from '../speicher/store'
import Kuchendiagramm from '../komponenten/Kuchendiagramm.svelte';
import Pie from "svelte-chartjs/src/Pie.svelte"

let abc =  $datenreihe1; // die externe Referenz auf die ersten Rohwerte im Store
let def =  $datenreihe2; // die externe Referenz auf die zweiten Rohwerte im Store

let mengeDerZahlen = abc.length; // hier wird die Länge des Arrays rückgemeldet

const mein_minwert = ss.min(abc); // Minimalwert der Datenreihe
const mein_maxwert = ss.max(abc); // Maximalwert der Datenreihe
const mein_mittelwert = ss.mean(abc); // Mittelwert der Datenreihe
const mein_median = ss.median(abc); // Median der Datenreihe
const meine_summe = ss.sum(abc); // Summenwert der Datenreihe
const mein_sdwert = ss.standardDeviation(abc); // Standardabweichung der Datenreihe

const meine_regression = ss.linearRegression([abc, def]);
const resultat_regr = JSON.stringify(meine_regression);

</script>

<svelte:head><title>Testwerte: {abc}</title></svelte:head>

<h1>Testberechnungen </h1>
<h2>Zahlenreihe mit {mengeDerZahlen} Werten</h2>

<div> Die Datenreihe des zentralen Speichers lautet: {$datenreihe1} </div>
<div> Das lokale ABC-Array als Verknüpfung zum zentralen Speicher lautet: {abc} </div>
<br/>
<div> Das berechnete "Min"-Ergebnis (der kleinste Wert) des ABC-Arrays lautet: {mein_minwert} </div>
<div> Das berechnete "Max"-Ergebnis (der größte Wert) des ABC-Arrays lautet: {mein_maxwert} </div>
<div> Der berechnete Mittelwert des ABC-Arrays lautet: {mein_mittelwert} </div>
<div> Der berechnete Median des ABC-Arrays lautet: {mein_median} </div>
<div> Die berechnete Summe des ABC-Arrays lautet: {meine_summe} </div>
<div> Der berechnete SD-Wert des ABC-Arrays lautet: {mein_sdwert} </div>
<br/>
<div> Der berechnete Regressionswert der ABC-und DEF Arrays als JSON-Objekt lautet: {resultat_regr} </div>
<div> Der berechnete M-Regressionswert lautet: {resultat_regr} </div>
<div> Der berechnete B-Regressionswert lautet: {resultat_regr} </div>
<br/>
<Kuchendiagramm>Verteilung (externe Diagramm-Komponente):</Kuchendiagramm>
