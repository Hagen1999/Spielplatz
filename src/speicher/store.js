import { writable } from "svelte/store";

export const datenreihe1 = writable([50,25,10,5,5,5]);// Beispieldaten 1
export const datenreihe2 = writable([55,20,14,4,6,6]);// Beispieldaten 2
export const datenreihe3 = writable([]);// Beispieldaten 3
export const tortenfarben1 = writable(["Rot", "Grün", "Gelb", "Grau", "Dunkelgrau"]); // Beispieldaten Legende

export const datenobjekt = writable(
  {  
    x1 : 50,
    x2 : 25,
    x3 : 10,
    x4 : 5,
    x5 : 5,
    x6 : 5
  }    
);// Beispieldatenreihe als JSON-Objekt