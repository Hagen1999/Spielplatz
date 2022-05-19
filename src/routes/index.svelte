<script>

    //import {min} from 'simple-statistics' => VERALTET
    //import {mean} from 'simple-statistics' => VERALTET
    //import Pie from "svelte-chartjs/src/Pie.svelte" => VERALTET, da das Diagramm im externen Modul liegt

    // Externe Module
    import * as ss from 'simple-statistics'

    // Interne Komponenten
    import {datenreihe1} from '../speicher/store'
    import {datenreihe3} from '../speicher/store'
    import Kuchendiagramm from '../komponenten/Kuchendiagramm.svelte';
    import Eingabeformular from '../komponenten/Eingabeformular.svelte';
 
    // Meine Variablen
    $: abc = $datenreihe1; // die externe Referenz auf die ersten Rohwerte im Store
    $: ghi = $datenreihe3;

    // Berechnungen
    $: mengeDerZahlen = abc.length; // hier wird die Länge des ersten Arrays rückgemeldet

    $: mein_minwert = ss.min(ghi); // Minimalwert der Datenreihe 1
    $: mein_maxwert = ss.max(ghi); // Maximalwert der Datenreihe 1
    $: mein_mittelwert = ss.mean(ghi); // Mittelwert der Datenreihe 1
    $: mein_median = ss.median(ghi); // Median der Datenreihe 1
    $: meine_summe = ss.sum(ghi); // Summenwert der Datenreihe 1
    $: mein_sdwert = ss.standardDeviation(ghi); // Standardabweichung der Datenreihe 1

    // Regressionsanalyse
    $: meine_regression = ss.linearRegression([abc, ghi]); // die eigentliche Regressionsberechnung
    $: resultat_regr = JSON.stringify(meine_regression); // hier wird das Ergebnis zum JSON-Objekt
    $: resultat_regr_str = JSON.parse(resultat_regr); // hier wird das JSON-Objekt zum geparsten String

</script>


<svelte:head>
    <title>Testwerte: {ghi}</title>
</svelte:head>

<h1>Testberechnungen </h1>
<h2>Zwei Zahlenreihen mit {mengeDerZahlen} Werten</h2>

<div class="textblock">
    <div> Die statische Datenreihe (1) des zentralen Speichers lautet: {$datenreihe1} </div>
    <div> Die dynamische Datenreihe (3) des zentralen Speichers lautet: {$datenreihe3} </div>
    <br/>
    <div> Das lokale STAT-Array (abc) als Verknüpfung zum zentralen Speicher lautet: {abc} </div>
    <div> Das lokale DYN-Array (ghi) als Verknüpfung zum zentralen Speicher lautet: {ghi} </div>
    <br/>
    <div> <b>Die berechneten Ergebnisse des dynamischen Arrays:</b></div>
    <ul> "Min"-Wert (der kleinste Wert): {mein_minwert} </ul>
    <ul> "Max"-Wert (der größte Wert): {mein_maxwert} </ul>
    <ul> Mittelwert: {mein_mittelwert} </ul>
    <ul> Median: {mein_median} </ul>
    <ul> Summenwert: {meine_summe} </ul>
    <ul> SD-Wert: {mein_sdwert} </ul>
    <br/>
    <div> <b>Lineare Regression</b></div>
    <div> Der berechnete Regressionswert der ABC- und DEF-Arrays als JSON-Objekt lautet: {resultat_regr} </div>
    <div> Der berechnete Regressionsprädiktorvariable P (m) lautet: {resultat_regr_str.m} (= Modellgüte)</div>
    <div> Der berechnete Regressionskoeefizient R^2 (b) lautet: {resultat_regr_str.b} % (= Effektstärke)</div>
    <br/>
</div>
<Eingabeformular>Das Formular...</Eingabeformular>
<Kuchendiagramm>Verteilung der dynamischen Datenreihe (externe Diagramm-Komponente):</Kuchendiagramm>


<style>
    .textblock {
        color: darkgreen;
        padding-left: 1rem;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>