<script>

    //import {benutzerEmail} from '../speicher/store';
    //import {benutzerPwd} from '../speicher/store';
    import {benutzerID} from '../speicher/store'
    import {benutzerAccessToken} from '../speicher/store'
    import ButtonLogin from '../komponenten/ButtonLogin.svelte'
    import * as Realm from "realm-web"

    /**
* @type {string}
*/
    let komppwd;
    /**
* @type {string}
*/
    let kompemail;
    
    const speichereLogin = () => {
        //$benutzerEmail;
        //$benutzerPwd;
        //console.log("User-E-Mail: " + $benutzerEmail);
        //console.log("User-PWD: " + $benutzerPwd);
        }

    const id = import.meta.env.VITE_APP_ID;
    const config = {id,};
    const app = new Realm.App(config);

    //$: credentials = Realm.Credentials.emailPassword($benutzerEmail, $benutzerPwd);
    $: credentials = Realm.Credentials.emailPassword(kompemail, komppwd);

    const handleLogin = async () => {
      try {

        const user = await app.logIn(credentials);

        $benutzerID = user.id;
        //const userAccTok = app.currentUser?.accessToken;
        //const userAccTok2 = user.accessToken;
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
    console.log("Access-Token-Funktion: " + app.currentUser?.accessToken)

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