<script>

    //import {createEventDispatcher} from "svelte";
	import {benutzerID} from '../speicher/store'
	import {benutzerEingeloggt} from '../speicher/store'
	import * as Realm from "realm-web"
	import { goto } from '$app/navigation'

	//const dispatch = createEventDispatcher();

	const handleLogOutClick = () => {
		console.log('LOGOUT-Button wurde geklickt.')
		//dispatch("LogoutSignal");
		console.log('Die User.id vorher: ' + $benutzerID)
		loggeAus();
		console.log('Die User.id nachher: ' + $benutzerID)
		
	}

	const id = import.meta.env.VITE_APP_ID; 
	const config = {id,};
    const app = new Realm.App(config);

	async function loggeAus() {
  if (!app.currentUser) {
    // If no user is logged in ...
  } else {
    console.log("'isLoggedin' VOR Logout: "+app.currentUser?.isLoggedIn);

    await app.currentUser.logOut();
    
	console.log("Logout durchgeführt.")
    console.log("'isLoggedin' NACHH Logout: "+app.currentUser?.isLoggedIn);

	$benutzerID = app.currentUser?.id;
    $benutzerEingeloggt = app.currentUser?.isLoggedIn;
	
	goto("/logout");
  }
  return console.log("Logout-Funktion abgeschlossen!")
}

</script>

<button 
	on:click|preventDefault = {handleLogOutClick}>Logout
</button>
