<script>

    import {benutzerEmail} from '../speicher/store';
    import {benutzerPwd} from '../speicher/store';
    import ButtonLogin from '../komponenten/ButtonLogin.svelte'

    const speichereLogin = () => {
        $benutzerEmail;
        $benutzerPwd;
        console.log("User-E-Mail: " + $benutzerEmail);
        console.log("User-PWD: " + $benutzerPwd);
        }
 </script>

<slot></slot>

<h2>Login</h2>

        <div>E-Mail: <input class="input" type="text" bind:value= {$benutzerEmail} /></div>
        <div>Passwort: <input class="input" type="password" bind:value= {$benutzerPwd} /></div>


    <ButtonLogin 
    on:LoginSignal={() => console.log("Login-Button wurde in externer Komponente empfangen.")} 
    on:LoginSignal={() => speichereLogin()}/>