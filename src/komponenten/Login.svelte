<script>

    import {benutzerID} from '../speicher/store'
    import {benutzerAccessToken} from '../speicher/store'
    import {benutzerEingeloggt} from '../speicher/store'
    import ButtonLogin from '../komponenten/ButtonLogin.svelte'
    import * as Realm from "realm-web"

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
      }
      
    }
    const weiter = async () => {
      console.log("weiter-Funktion getriggert");
      //load('/filter');
    }

    $: if ($benutzerEingeloggt) {
      console.log("Access-Token-Funktion: " + app.currentUser?.accessToken);
      weiter();
    }

 </script>



<slot></slot>



<h2>MongoDB-Authentifizierung</h2>

        <div>E-Mail: <input class="input" type="text" bind:value= {kompemail} /></div>
        <div>Passwort: <input class="input" type="password" bind:value= {komppwd} /></div>

<!--
        <div>E-Mail: <input class="input" type="text" bind:value= {$benutzerEmail} /></div>
        <div>Passwort: <input class="input" type="password" bind:value= {$benutzerPwd} /></div>
--->

<ButtonLogin 
    on:LoginSignal={() => console.log("Login-Button-Klick wurde in Login-Komponente empfangen.")} 
    on:LoginSignal={() => handleLogin()}/>