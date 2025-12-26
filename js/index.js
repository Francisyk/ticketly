const artistas = [
    "Mitski",
    "Dreamcatcher",
    "Limp Bizkit",
    "Paramore",
    "Sleep Token",
    "Ariana Grande"
];

const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");

input.addEventListener("input", () => {
    const valor = input.value.toLowerCase();
    results.innerHTML = "";

    if (!valor) {
        results.style.display = "none";
        return;
    }

    const filtrados = artistas.filter(artista =>
        artista.toLowerCase().includes(valor)
    );

    filtrados.forEach(artista => {
        const div = document.createElement("div");
        div.textContent = artista;
        div.onclick = () => {
            window.location.href = "buyticket.html";
        };
        results.appendChild(div);
    });

    results.style.display = filtrados.length ? "block" : "none";
});