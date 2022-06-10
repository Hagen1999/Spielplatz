<script>
    import {benutzerID} from '../speicher/store'
    import {benutzerEingeloggt} from '../speicher/store'
    import JahreszahlAuswahl from '../komponenten/JahreszahlAuswahl.svelte';
    import GraphQlAbfrage from '../komponenten/GraphQLAbfrage.svelte';
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

    <h1>Filter</h1>
    <br/>
    <JahreszahlAuswahl></JahreszahlAuswahl>
    <br/>
    <GraphQlAbfrage></GraphQlAbfrage>
    <br/>
    <hr>
{:else}
    <NewLogin></NewLogin>
{/if}