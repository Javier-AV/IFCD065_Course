document.getElementById("check-btn").addEventListener("click", function () {
    const userInput = document.getElementById("user-input").value.trim();
    const resultDiv = document.getElementById("results-div");

    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }
    // Explico com funciona aquesta expresió:
    // 1. ^ s'encarrega que la comparació començi al principi de l'string i $ marca el final de l'string.
    // 2. (1\s?)? Accepta el número 1 personal que ha d'anar seguit d'un espai.
    // 3. (\(\d{3}\)|\d{3}) permet o 3 digits dins un parentesi o 3 digits sense parentesi.
    // 4. [\s\-]? Permet un separador opcional entre el codi d'area i la següent part del número.
    // 5. \d{3} El seguent segment de 3 digits del número.
    // 6. [\s\-]? Un altre cop considera que pot haver-hi un altre separador (-).
    // 7. \d{4} S'encarrega que l'última part del número de teléfon es de 4 digits.
    const validPattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    // Si compleix totes les condicions anteriors retorna true, sino retorna false.
    if (validPattern.test(userInput)) {
        resultDiv.textContent = `Valid US number: ${userInput}`;
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = `Invalid US number: ${userInput}`;
        resultDiv.style.color = "red";
    }
});

document.getElementById("clear-btn").addEventListener("click", function () {
    document.getElementById("user-input").value = "";
    document.getElementById("results-div").textContent = "";
});