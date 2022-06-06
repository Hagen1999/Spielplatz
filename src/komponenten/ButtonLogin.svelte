<script>
	import {createEventDispatcher} from "svelte";

	const dispatch = createEventDispatcher();

	const handleLoginClick = () => {
		console.log('LOGIN-Button wurde geklickt.')
		dispatch("LoginSignal");
	}

</script>

<button 
	on:click|preventDefault = {handleLoginClick}>Login
</button>