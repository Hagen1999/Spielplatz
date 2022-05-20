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
);// Beispieldatenreihe als JSON-Objekt