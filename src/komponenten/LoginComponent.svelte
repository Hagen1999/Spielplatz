<script>
	import { testuserstore } from '../speicher/store';
    import { testuser } from '../speicher/store';
    import { testpass } from '../speicher/store';

    import JahreszahlAuswahl from '../komponenten/JahreszahlAuswahl.svelte';
    import Dashboardseite from '../routes/dashboard.svelte';

	let username = '';
	let password = '';
	let error = ''

	async function login() {
		const user = await getUserDetails( username, password )
		if ( user ) {
			console.log(user)
			$testuserstore = user
            console.log("Username und Passwort KORREKT.")
			if ( error ) error = ''
		}
		else {
			error = 'Username/Passwort nicht gültig.'
			console.log("Username und Passwort FALSCH.")
		}
	}

    export const getUserDetails = async ( /** @type {string} */ username, /** @type {string} */ password ) => {
	if ( username === testuser && password === testpass ){
        console.log('ist wahr');  
        return true
    }
	else {
        console.log('ist falsch');
        return false
    }
}

</script>

<form on:submit|preventDefault={login}>

	<div>
		<label for="username">E-Mail: </label>
		<input type="email" id="username" bind:value={username} />
	</div>

	<div>
		<label for="password">Passwort: </label>
		<input type="password" id="password" bind:value={password} />
	</div>

	<button type="submit">Submit</button>
	<div id="error_message">
		<small>{error}</small>
	</div>

</form>

{#if $testuserstore } 
	<p>User ist im Svelte-Frontend eingeloggt.</p>
<div>
    <Dashboardseite></Dashboardseite>
</div>
{:else}
	<p>User ist nicht eingeloggt.</p>
{/if}