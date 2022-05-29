<script>
	import {createEventDispatcher} from "svelte";

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		console.log('Button wurde in der Button-Komponente geklickt.')
		dispatch("Signal");
	}

</script>

<button 
	on:click= {handleClick}>Testbuton - Klicktest
</button>