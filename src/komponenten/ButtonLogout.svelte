<script>

    import {createEventDispatcher} from "svelte";

	const dispatch = createEventDispatcher();

	const handleLoginClick = () => {
		console.log('LOGOUT-Button wurde geklickt.')
		dispatch("LogoutSignal");
	}

</script>

<button 
	on:click|preventDefault = {handleLoginClick}>Logout
</button>
