<script>
    import Kuchendiagramm from '../komponenten/Kuchendiagramm.svelte';
    import Eingabeformular from '../komponenten/Eingabeformular.svelte';
    import GraphQlAbfrage from '../komponenten/GraphQLAbfrage.svelte';
    import JahreszahlAuswahl from '../komponenten/JahreszahlAuswahl.svelte';
    import Statistik from '../komponenten/Statistik.svelte';
    import Login from '..//komponenten/Login.svelte';
</script>

<div>
	Die Komponente 'AfterLogin' wurde aufgerufen.

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
</div>