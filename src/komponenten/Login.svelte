<script>

    import {benutzerID} from '../speicher/store'
    import {benutzerEingeloggt} from '../speicher/store'
    import ButtonLogin from '../komponenten/ButtonLogin.svelte'
    import { goto } from '$app/navigation'
    import * as Realm from "realm-web"

    let errortext ="";

    /**
      * @type {string}
      */
    let kompemail;

    /**
      * @type {string}
      */
    let komppwd;


    const id = import.meta.env.VITE_APP_ID;
    const config = {id,};
    const app = new Realm.App(config);

    $: credentials = Realm.Credentials.emailPassword(kompemail, komppwd);

    const handleLogin = async () => {
      try {
        const user = await app.logIn(credentials);

        $benutzerID = user.id;
        $benutzerEingeloggt = user.isLoggedIn;

        console.log(id);
        console.assert(user.id === app.currentUser?.id);
        console.log("User.ID= " + user.id);
        console.log("App.Current.User.ID= " + app.currentUser?.id);
        console.log("ID: " + id);
        console.log("Access-Token-CurrentUser: " + app.currentUser?.accessToken)
        console.log("Access-Token-User: " + user.accessToken)

      return user;
      } 
      catch (e){
        console.error("error log in");
        errortext = "Login fehlgeschlagen.";
      }
      
    }
    const weiter = async () => {
      //console.log("weiter-Funktion getriggert");
      goto("/filter");
    }

    $: if ($benutzerEingeloggt) {
      //console.log("Access-Token-Funktion: " + app.currentUser?.accessToken);
      errortext = ""
      weiter();
    }

    const handleLogout = async () => {
      try {

      return console.log('LOGOUT-Funktion durchgelaufen');;
      } 
      catch (e){
        console.error("error logou");
        errortext = "Logout fehlgeschlagen.";
      }
      
    }

 </script>


<slot></slot>


<h2>Anmeldung (Atlas)</h2>
<div id="textinput">
        <div>E-Mail: <input class="input" type="text" bind:value= {kompemail} /></div>
        <div>Passwort: <input class="input" type="password" bind:value= {komppwd} /></div>
</div>
<ButtonLogin 
    on:LoginSignal={() => console.log("Login-Button-Klick wurde in Login-Komponente empfangen.")} 
    on:LoginSignal={() => handleLogin()}/>   

    <div>{errortext}</div>