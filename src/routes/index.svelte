<script>
    /*
    import Kuchendiagramm from '../komponenten/Kuchendiagramm.svelte';
    import Eingabeformular from '../komponenten/Eingabeformular.svelte';

    import JahreszahlAuswahl from '../komponenten/JahreszahlAuswahl.svelte';
    import Statistik from '../komponenten/Statistik.svelte';
    import Login from '..//komponenten/Login.svelte';
*/
    import JahreszahlAuswahl from '../komponenten/JahreszahlAuswahl.svelte';
    import GraphQlAbfrage from '../komponenten/GraphQLAbfrage.svelte';
    import LoginComponent from '../komponenten/LoginComponent.svelte';
    import Login from '..//komponenten/Login.svelte';
    

</script>

<svelte:head>
</svelte:head>

<main>
<h1>Index-Seite</h1>

<a href="/filter">Link Filterseite</a>

<Login/>
<br/>
<JahreszahlAuswahl></JahreszahlAuswahl>
<br/>
<GraphQlAbfrage></GraphQlAbfrage>

<!-- HTML 
<a href = "/login"> Logintestseite</a>
<br/>
<Login></Login>
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
-->
</main>