<script>
    import {datenobjekt} from '../speicher/store';
    import {datenreihe3} from '../speicher/store';

    $datenreihe3[0] = $datenobjekt.x1;
    $datenreihe3[1] = $datenobjekt.x2;
    $datenreihe3[2] = $datenobjekt.x3;
    $datenreihe3[3] = $datenobjekt.x4;
    $datenreihe3[4] = $datenobjekt.x5;
    $datenreihe3[5] = $datenobjekt.x6;

    const speicherformular = () => {
        if ($datenobjekt.x1 >0) {
            return ($datenobjekt.x1); }
        else {
            return ($datenobjekt.x1);}
        }
</script>

<slot></slot>

    <form on:input|preventDefault={speicherformular}>
        <div>Zahl 1: <input class="input" type="number" bind:value= {$datenobjekt.x1} /></div>
        <div>Zahl 2: <input class="input" type="number" bind:value= {$datenobjekt.x2} /></div>
        <div>Zahl 3: <input class="input" type="number" bind:value= {$datenobjekt.x3} /></div>
        <div>Zahl 4: <input class="input" type="number" bind:value= {$datenobjekt.x4} /></div>
        <div>Zahl 5: <input class="input" type="number" bind:value= {$datenobjekt.x5} /></div>
        <div>Zahl 6: <input class="input" type="number" bind:value= {$datenobjekt.x6} /></div>
    </form>
    <br/>
    <div>Zahl des 1. Felds: {$datenobjekt.x1}</div>
    <div>Zahl des 2. Felds: {$datenobjekt.x2}</div>
    <div>Zahl des 3. Felds: {$datenobjekt.x3}</div>
    <div>Zahl des 4. Felds: {$datenobjekt.x4}</div>
    <div>Zahl des 5. Felds: {$datenobjekt.x5}</div>
    <div>Zahl des 6. Felds: {$datenobjekt.x6}</div>
    <div>Die Eingabe als Array: {$datenreihe3}</div>
    <br/>

    <style>
        .input {
            color: darkblue;
            padding-left: 1em;
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
