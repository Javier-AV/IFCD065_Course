document.getElementById("check-btn").addEventListener("click", function() {
    // Declarem el valor introduit i el resultat.
    const input = document.getElementById("text-input").value;
    const result = document.getElementById("result");
    
    if (!input) {
        alert("Please input a value.");
        return;
    }
    // Treu els valors que no serveixen i el posem en minúscules.
    const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Dona la volta al string i el neteja. .split("") transforma l'string en un array de caracters, .reverse() dona la volta a l'array y .join("") transforma l'array que hem donat la volta en un string.
    const reversedInput = cleanedInput.split("").reverse().join("");
    // si tots dos son igual diu que es un palindrome, si no son iguals, doncs no ho és. Es fa mitjançant una comparació.
    if (cleanedInput === reversedInput) {
        result.textContent = `${input} is a palindrome.`;
    } else {
        result.textContent = `${input} is not a palindrome.`;
    }
});