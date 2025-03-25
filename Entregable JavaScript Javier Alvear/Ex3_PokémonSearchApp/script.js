document.getElementById("search-button").addEventListener("click", async () => {
    // Transforma l'input a minuscules.
    const searchValue = document.getElementById("search-input").value.trim().toLowerCase();
    if (!searchValue) return;
    try {
        // Fem un crit a l'API, afegim missatge d'error si no encaixa amb cap pokémon.
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchValue}`);
        if (!response.ok) throw new Error("Pokémon not found");
        const data = await response.json();
        // Actualiza els diferents elements de l'HTML.
        document.getElementById("pokemon-name").innerText = data.name.toUpperCase();
        document.getElementById("pokemon-id").innerText = `#${data.id}`;
        document.getElementById("weight").innerText = `Weight: ${data.weight}`;
        document.getElementById("height").innerText = `Height: ${data.height}`;
        document.getElementById("hp").innerText = data.stats[0].base_stat;
        document.getElementById("attack").innerText = data.stats[1].base_stat;
        document.getElementById("defense").innerText = data.stats[2].base_stat;
        document.getElementById("special-attack").innerText = data.stats[3].base_stat;
        document.getElementById("special-defense").innerText = data.stats[4].base_stat;
        document.getElementById("speed").innerText = data.stats[5].base_stat;
        // Actualitza la imatge del pokémon.
        document.getElementById("sprite").src = data.sprites.front_default;
        document.getElementById("sprite").alt = data.name;
        // Reinicia els tipus que podia haver-hi i afegeix els que toquen.
        const typesDiv = document.getElementById("types");
        typesDiv.innerHTML = "";
        data.types.forEach(type => {
            const typeElement = document.createElement("span");
            typeElement.innerText = type.type.name.toUpperCase();
            typesDiv.appendChild(typeElement);
        });
    } catch (error) {
        alert("Pokémon not found");
    }
});