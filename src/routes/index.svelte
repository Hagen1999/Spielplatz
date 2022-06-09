<script>
    /*
    import Kuchendiagramm from '../komponenten/Kuchendiagramm.svelte';
    import Eingabeformular from '../komponenten/Eingabeformular.svelte';
    import JahreszahlAuswahl from '../komponenten/JahreszahlAuswahl.svelte';
    import Statistik from '../komponenten/Statistik.svelte';
    import Login from '..//komponenten/Login.svelte';
    */

    //import JahreszahlAuswahl from '../komponenten/JahreszahlAuswahl.svelte';
    //import GraphQlAbfrage from '../komponenten/GraphQLAbfrage.svelte';
    import {benutzerID} from '../speicher/store'
    import {benutzerEingeloggt} from '../speicher/store'
    //import LoginComponent from '../komponenten/LoginComponent.svelte';
    //import AnmeldeStatus from '../komponenten/AnmeldeStatus.svelte';
    import Login from '../komponenten/Login.svelte';

</script>

<svelte:head>
</svelte:head>


<h1>Index-Seite</h1>
<p>Eingeloggt? {$benutzerEingeloggt}</p>
<p>Benutzer-ID: {$benutzerID}</p>
<hr>
<Login/>
<!-- HTML 
<br/>
<JahreszahlAuswahl></JahreszahlAuswahl>
<br/>
<GraphQlAbfrage></GraphQlAbfrage>


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