<script>
    //import {benutzerID} from '../speicher/store'
    import {benutzerEingeloggt} from '../speicher/store'
    import Kuchendiagramm from '../komponenten/Kuchendiagramm.svelte';
    import Eingabeformular from '../komponenten/Eingabeformular.svelte';
    import Statistik from '../komponenten/Statistik.svelte';
    import NewLogin from '../routes/newLogin.svelte';
	//import ButtonLogout from '../komponenten/ButtonLogout.svelte';
    import LoginStatus from '../komponenten/LoginStatus.svelte';
    import Menu from '../komponenten/Menu.svelte';
</script>


{#if $benutzerEingeloggt } 
<!--
    <p>Eingeloggt? {$benutzerEingeloggt}</p>
    <p>Benutzer-ID: {$benutzerID}</p>
    <ButtonLogout></ButtonLogout> 
    <hr>
    -->
    <LoginStatus></LoginStatus>
    <Menu></Menu>

    <h1>Dashboard</h1>
    <br/>
	<Eingabeformular></Eingabeformular>
	<br/>
	<Statistik></Statistik>
	<br/>
	<Kuchendiagramm></Kuchendiagramm>
    <br/>
    <hr>
{:else}
    <NewLogin></NewLogin>
{/if}