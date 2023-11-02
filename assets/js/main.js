"use strict";

// ===================================================
//      JS-Vertiefung – Array-Sort-Level-1_1
// ===================================================

console.log("%c JS-Vertiefung – Array-Sort-Level-1_1", "color: tomato");

// Aufgabenstellung:
// In dieser Übung geht es darum, Arrays alphabetisch zu sortieren.
// Sortiere die Programmiersprachen alphabetisch.
// Der Code für das Array steht im Code-Snippet.
// Deklariere die Funktion sortierung.
// Verwende den Befehl sort(), um die Aufgabe zu erfüllen.
// Rufe die Funktion sortierung auf.
// Überprüfe den Erfolg in der Konsole.

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const sortierung = languages.sort();

console.log(sortierung);

// ===================================================
//      JS-Vertiefung – Array-Sort-Level-1_2
// ===================================================

console.log("%c JS-Vertiefung – Array-Sort-Level-1_2", "color: tomato");

// Aufgabenstellung:
// In dieser Übung geht es darum, Arrays nicht alphabetisch von A-Z, sondern von Z-A zu sortieren.
// Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.
// Der Code steht im Code-Snippet.
// Deklariere die Funktion sortierung2.
// Verwende den Befehl sort() und reverse(), um die Aufgabe auszuführen.
// Rufe die Funktion sortierung2 auf.
// Überprüfe das Ergebnis in der Konsole.

const sortierung2 = languages.sort().reverse();

console.log(sortierung2);

// ===================================================
//      JS-Vertiefung – Array-Sort-Level-2_1
// ===================================================

console.log("%c JS-Vertiefung – Array-Sort-Level-2_1", "color: tomato");

// Aufgabenstellung:
// Schreibe ein kleines Programm, das Zeichenketten umkehrt.
// Diese Funktion soll jeden String, der ihr übergeben wird umdrehen können (nutze einen Parameter).
// Du wirst Array-Methoden verwenden müssen, um den String umzudrehen.
// Rufe die Funktion mit deinem Namen als Parameter auf.
// Überprüfe das Ergebnis in der Konsole.
// Versuche diese Begriffe umzukehren: Sergio, Hannah, Regallager, Reliefpfeiler und Rentner.
// Versuche diese Sätze umzukehren: "Ella mag alle Bohnen" und "han nesaH has ennaH".

const stringReverse = (elem) => elem.split('').reverse().join('');

console.log(stringReverse('Rainer'));
console.log(stringReverse('Sergio'));
console.log(stringReverse('Hannah'));
console.log(stringReverse('Regallager'));
console.log(stringReverse('Reliefpfeiler'));
console.log(stringReverse('Rentner'));
console.log(stringReverse('Ella mag alle Bohnen'));
console.log(stringReverse('han nesaH has ennaH'));

console.log("%c JS-Vertiefung – Array-Sort-Level-2_1 Bonus", "color: tomato");

const stringReverse2 = (elem) => {
	let stringSplit = elem.split(' ');
	if (stringSplit.length > 1 ) {
		console.log(`${stringSplit.length} Wörter`);
		let stringJoin = stringSplit.join(' ');
		return stringJoin.split('').reverse().join('');
	} else {
		console.log(`${stringSplit.length} Wort`);
		return elem.split('').reverse().join('');
	}
}

console.log(stringReverse2('Rainer'));
console.log(stringReverse2('Sergio'));
console.log(stringReverse2('Hannah'));
console.log(stringReverse2('Regallager'));
console.log(stringReverse2('Reliefpfeiler'));
console.log(stringReverse2('Rentner'));
console.log(stringReverse2('Ella mag alle Bohnen'));
console.log(stringReverse2('han nesaH has ennaH'));

// ===================================================
//      JS-Vertiefung – Array-Sort-Level-2_2
// ===================================================

console.log("%c JS-Vertiefung – Array-Sort-Level-2_2", "color: tomato");

// Aufgabenstellung:
// In dieser Übung lernst du, wie man die Nummern 0-∞ aufsteigend sortiert.
// Sortiere die Nummern aufsteigend.
// Der Code steht im Code-Snippet.
// Verwende den Befehl sort() und Google, um die Aufgabe korrekt auszuführen.
// Überprüfe das Ergebnis in der Konsole.

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

const sortNumbers = numArray2.sort((num1, num2) => num1 - num2)
console.log(sortNumbers);