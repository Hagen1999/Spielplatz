<script>

    //import {min} from 'simple-statistics' => VERALTET
    //import {mean} from 'simple-statistics' => VERALTET
    //import Pie from "svelte-chartjs/src/Pie.svelte" => VERALTET, da das Diagramm im externen Modul liegt

    // Externe Module
    import * as ss from 'simple-statistics'


    // Interne Komponenten
    import {datenreihe1} from '../speicher/store'
    import {datenreihe2} from '../speicher/store'
    import Kuchendiagramm from '../komponenten/Kuchendiagramm.svelte';
 

    // Meine Variablen
    let abc =  $datenreihe1; // die externe Referenz auf die ersten Rohwerte im Store
    let def =  $datenreihe2; // die externe Referenz auf die zweiten Rohwerte im Store


    // Berechnungen
    let mengeDerZahlen = abc.length; // hier wird die Länge des ersten Arrays rückgemeldet

    const mein_minwert = ss.min(abc); // Minimalwert der Datenreihe 1
    const mein_maxwert = ss.max(abc); // Maximalwert der Datenreihe 1
    const mein_mittelwert = ss.mean(abc); // Mittelwert der Datenreihe 1
    const mein_median = ss.median(abc); // Median der Datenreihe 1
    const meine_summe = ss.sum(abc); // Summenwert der Datenreihe 1
    const mein_sdwert = ss.standardDeviation(abc); // Standardabweichung der Datenreihe 1

    // Regressionsanalyse
    const meine_regression = ss.linearRegression([abc, def]); // die eigentliche Regressionsberechnung
    const resultat_regr = JSON.stringify(meine_regression); // hier wird das Ergebnis zum JSON-Objekt
    const resultat_regr_str = JSON.parse(resultat_regr); // hier wird das JSON-Objekt zum geparsten String

</script>


<svelte:head><title>Testwerte: {abc}</title></svelte:head>

<h1>Testberechnungen </h1>
<h2>Zwei Zahlenreihen mit {mengeDerZahlen} Werten</h2>

<div class="textblock">
    <div> Die erste Datenreihe des zentralen Speichers lautet: {$datenreihe1} </div>
    <div> Die zweite Datenreihe des zentralen Speichers lautet: {$datenreihe2} </div>
    <br/>
    <div> Das lokale ABC-Array als Verknüpfung zum zentralen Speicher lautet: {abc} </div>
    <div> Das lokale DEF-Array als Verknüpfung zum zentralen Speicher lautet: {def} </div>
    <br/>
    <div> Das berechnete "Min"-Ergebnis (der kleinste Wert) des ABC-Arrays lautet: {mein_minwert} </div>
    <div> Das berechnete "Max"-Ergebnis (der größte Wert) des ABC-Arrays lautet: {mein_maxwert} </div>
    <div> Der berechnete Mittelwert des ABC-Arrays lautet: {mein_mittelwert} </div>
    <div> Der berechnete Median des ABC-Arrays lautet: {mein_median} </div>
    <div> Die berechnete Summe des ABC-Arrays lautet: {meine_summe} </div>
    <div> Der berechnete SD-Wert des ABC-Arrays lautet: {mein_sdwert} </div>
    <br/>
    <div> Der berechnete Regressionswert der ABC- und DEF-Arrays als JSON-Objekt lautet: {resultat_regr} </div>
    <div> Der berechnete Regressionsprädiktorvariable P (m) lautet: {resultat_regr_str.m} (= Modellgüte)</div>
    <div> Der berechnete Regressionskoeefizient R^2 (b) lautet: {resultat_regr_str.b} % (= Effektstärke)</div>
    <br/>
</div>
<Kuchendiagramm>Verteilung der ABC-Reihe (externe Diagramm-Komponente):</Kuchendiagramm>


<style>
    .textblock {
        color: darkgreen;
        padding-left: 1rem;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>