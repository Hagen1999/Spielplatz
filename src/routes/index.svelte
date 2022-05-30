<script>
    import Kuchendiagramm from '../komponenten/Kuchendiagramm.svelte';
    import Eingabeformular from '../komponenten/Eingabeformular.svelte';
    import GraphQlAbfrage from '../komponenten/GraphQLAbfrage.svelte';
    import JahreszahlAuswahl from '../komponenten/JahreszahlAuswahl.svelte';
    import Statistik from '../komponenten/Statistik.svelte';
</script>

<svelte:head>
</svelte:head>

<!-- HTML -->

<br/>
<JahreszahlAuswahl></JahreszahlAuswahl>
<br/>
<GraphQlAbfrage></GraphQlAbfrage>
<br/>
<Eingabeformular></Eingabeformular>
<br/>
<Statistik></Statistik>
<br/>
<Kuchendiagramm></Kuchendiagramm>