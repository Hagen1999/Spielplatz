<script>
    import {benutzerID} from '../speicher/store'
    import {benutzerEingeloggt} from '../speicher/store'
    import JahreszahlAuswahl from '../komponenten/JahreszahlAuswahl.svelte';
    import GraphQlAbfrage from '../komponenten/GraphQLAbfrage.svelte';
    import NewLogin from '../routes/newLogin.svelte';
    import ButtonLogout from '../komponenten/ButtonLogout.svelte';
</script>


{#if $benutzerEingeloggt } 
    <p>Eingeloggt? {$benutzerEingeloggt}</p>
    <p>Benutzer-ID: {$benutzerID}</p>
    <ButtonLogout></ButtonLogout> 
    <hr>

    <h1>Filterseite</h1>
    <br/>
    <JahreszahlAuswahl></JahreszahlAuswahl>
    <br/>
    <GraphQlAbfrage></GraphQlAbfrage>
    <br/>
    <hr>
{:else}
    <p>User ist nicht eingeloggt!</p>
    <NewLogin></NewLogin>
{/if}