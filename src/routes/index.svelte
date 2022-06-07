<script>
    /*
    import Kuchendiagramm from '../komponenten/Kuchendiagramm.svelte';
    import Eingabeformular from '../komponenten/Eingabeformular.svelte';
    import GraphQlAbfrage from '../komponenten/GraphQLAbfrage.svelte';
    import JahreszahlAuswahl from '../komponenten/JahreszahlAuswahl.svelte';
    import Statistik from '../komponenten/Statistik.svelte';
    import Login from '..//komponenten/Login.svelte';
*/
    //import LoginComponent from '../komponenten/LoginComponent.svelte';

    import Router from 'svelte-spa-router'

    import Home from './index.svelte'
    import Login from './login.svelte';
    import Logout from './logout.svelte';
    import Dashboard from './dashboard.svelte';


    const routes = {
    '/': Home,
    '/login/': Login,
    '/logout/': Logout,
    '/dasboard/': Dashboard,
    '*': NotFound,
}
</script>

<svelte:head>
</svelte:head>

<Router {routes}/>


<h1>Testseite</h1>
<Login>

<!-- HTML 
    <LoginComponent />
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