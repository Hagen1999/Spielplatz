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

    import Home from "./index.svelte";
    import Filter from "./filter.svelte";
	import Router, {link} from 'svelte-spa-router';

	const routes = {
		'/': Home,
		'/filter': Filter,
	};

    

</script>

<svelte:head>
</svelte:head>

<h1>Testseite</h1>
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