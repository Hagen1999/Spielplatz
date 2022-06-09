<script>
    import {benutzerID} from '../speicher/store'
    import {benutzerEingeloggt} from '../speicher/store'
    import Kuchendiagramm from '../komponenten/Kuchendiagramm.svelte';
    import Eingabeformular from '../komponenten/Eingabeformular.svelte';
    import Statistik from '../komponenten/Statistik.svelte';
    import NewLogin from '../routes/newLogin.svelte';
	import ButtonLogout from '../komponenten/ButtonLogout.svelte';
</script>

<h1>Dashboard-Seite</h1>

{#if $benutzerEingeloggt } 
    <p>Eingeloggt? {$benutzerEingeloggt}</p>
    <p>Benutzer-ID: {$benutzerID}</p> 
	<ButtonLogout></ButtonLogout>
    <hr>

    <h1>Statistik-Seite</h1>
    <br/>
	<Eingabeformular></Eingabeformular>
	<br/>
	<Statistik></Statistik>
	<br/>
	<Kuchendiagramm></Kuchendiagramm>
    <br/>
    <hr>
{:else}
    <p>User ist nicht eingeloggt!</p>
    <NewLogin></NewLogin>
{/if}