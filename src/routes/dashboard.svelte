<script>
	import AfterLogin from '../komponenten/AfterLogin.svelte';
	import { testuserstore } from '../speicher/store';
	import LoginComponent from '../komponenten/LoginComponent.svelte';

</script>

<h1>Dashboard-Seite</h1>

{#if $testuserstore == true }
	<AfterLogin />
{:else }
	<LoginComponent />
{/if}