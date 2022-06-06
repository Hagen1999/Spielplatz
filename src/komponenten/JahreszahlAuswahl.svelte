<script>

import { jahreszahlen } from '../speicher/store'

	let scoops = 1901;
	//let flavours = [''];
    //let flavours = $jahreszahlen;

	let menu = [
		2017,
		2018,
		2019
	];

	/**
* @param {any[]} $jahreszahlen
*/
	function join($jahreszahlen) {
		if ($jahreszahlen.length === 1) return $jahreszahlen[0];
		return `${$jahreszahlen.slice(0, -1).join(', ')}, ${$jahreszahlen[$jahreszahlen.length - 1]}`;
	}
</script>

<slot></slot>

<!-- ////////////////////////////////// HTML /////////////////////////////////////////////-->
<!-- ///////////////////////// Radio-Buttons & Checboxen /////////////////////////////////-->

<h2>Jahreszahlauswahl</h2>

<!-- //////////////////////////////////
<h3>Radiobuttons: </h3>
<label><input type=radio bind:group={scoops} name="scoops" value={1901}>1901</label>
<label><input type=radio bind:group={scoops} name="scoops" value={1902}>1902</label>
<label><input type=radio bind:group={scoops} name="scoops" value={1903}>1903</label>
/////////////////////////////////////////////-->

<h3>Checkboxauswahl: </h3>

{#each menu as flavour}
	<label>
		<input type=checkbox bind:group={$jahreszahlen} name="flavours" value={flavour}>
		{flavour}
	</label>
{/each}

{#if $jahreszahlen.length === 0}
	<p>Bitte auswählen: </p>
{:else if $jahreszahlen.length > scoops}
	<p>Can't order more flavours than scoops!</p>
{:else}
	<p>
		<!-- Variablen: {scoops} {scoops === 1 ? '' : ','} -->
        {join($jahreszahlen)}
	</p>
{/if}

<!-- ////////////////////////////////// HTML /////////////////////////////////////////////-->