<script>

    import {datenreihe2} from '../speicher/store';
    let datenEingabefeld1 = 0;
    let datenEingabefeld2 = 0;
    let datenEingabefeld3 = 0;
    export const eingegebeneDaten = {datenEingabefeld1};

    const speicherFormular1 = () => {}

</script>
<slot></slot>
    <form on:submit|preventDefault={speicherFormular1}>
        <input class="input" type="number" placeholder="Bitte Daten eigeben. " bind:value= {datenEingabefeld1} />
        <button type="submit">Los!</button>

    </form>
    <div>Der eingegebene Text des 1. Formularfelds: {datenEingabefeld1}</div>
    <div>Der eingegebene Text des 2. Formularfelds: {datenEingabefeld2}</div>
    <div>Der eingegebene Text des 3. Formularfelds: {datenEingabefeld3}</div>
    <div>Der eingegebene Text des Variable: {eingegebeneDaten}</div>
    <br/>
