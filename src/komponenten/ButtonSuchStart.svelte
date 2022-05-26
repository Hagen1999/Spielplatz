<script>
    import GraphQlAbfrage from './GraphQLAbfrage.svelte';

	function handleClick() {
		console.log('Button wurde geklickt.')
        //GraphQlAbfrage.klick; geht nicht!
	}
</script>

<button on:click={handleClick}>
	Testbuton - Klicktest
</button>