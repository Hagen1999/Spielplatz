<script>
    import {benutzerID} from '../speicher/store'
    import {benutzerEingeloggt} from '../speicher/store'
    import ButtonLogout from '../komponenten/ButtonLogout.svelte';
</script>

<p>Eingeloggt? {$benutzerEingeloggt}</p>
<p>Benutzer-ID: {$benutzerID}</p>
<ButtonLogout></ButtonLogout> 
<hr>