import { writable } from "svelte/store";

export const datenreihe1 = writable([50,25,10,5,5,5]);// Beispieldaten 1
export const datenreihe2 = writable([55,20,14,4,6,6]);// Beispieldaten 2
export const datenreihe3 = writable([0,0,0,0,0,0]);// Beispieldaten 3
export const tortenfarben1 = writable(["Rot", "Grün", "Gelb", "Grau", "Dunkelgrau"]); // Beispieldaten Legende

export const datenobjekt = writable(
  {  
    x1 : 0,
    x2 : 0,
    x3 : 0,
    x4 : 0,
    x5 : 0,
    x6 : 0
  }    
);

export const resultatAbfrage = writable(
  {
    "abfrageJahr":
      [{
        "Jahr":0,
        "MAKennung":0,
        "Demo":{
          "Altersgrp":0,
          "AnstVerh":0,
          "BuKr":0,
          "BuLine":0
        }
      }]
  }
  );

  export const jahreszahlen = writable([0]);
  //export const jahreszahlenStat = writable([2017,2018]); // als Test

  
  export const benutzerID = writable("");
  export const benutzerAccessToken = writable("");
  //export const benutzerEmail = writable("");
  //export const benutzerPwd = writable("");

  export const testuserstore = writable(false);
  export const testuser = 'sven@sven.de'
  export const testpass = 'sven'

