// Estructura de datos idéntica al ejemplo del profesor
const exp_academica = [
    {
        "titulo": "GS Desarrollo de Aplicaciones Web",
        "periodo": "2025-27",
        "centro": "CPR Afundación A Coruña"
    },
    {
        "titulo": "Bachillerato científico",
        "periodo": "2022-24",
        "centro": "IES Monelos A Coruña"
    },
    {
        "titulo": "Educación Secundaria Obligatoria",
        "periodo": "2018-22",
        "centro": "IES Monelos A Coruña"
    }
];

const exp_profesional = [
    {
        "puesto": "Camarero",
        "periodo": "2026-Actualidad",
        "empresa": "Cafetería Central Park"
    },
    {
        "puesto": "Camarero",
        "periodo": "2024-25",
        "empresa": "Cafetería IES Monelos"
    }
];

// Renderizado dinámico en el DOM
document.addEventListener("DOMContentLoaded", () => {
    const contenedorAcademica = document.getElementById("contenedor-academica");
    const contenedorProfesional = document.getElementById("contenedor-profesional");

    // Renderizar Experiencia Académica
    exp_academica.forEach((item) => {
        const article = document.createElement("article");
        article.classList.add("item-cv");
        article.innerHTML = `
            <h3>${item.titulo}</h3>
            <p class="institucion">${item.centro}</p>
            <span class="periodo">${item.periodo}</span>
        `;
        contenedorAcademica.appendChild(article);
    });

    // Renderizar Experiencia Profesional
    exp_profesional.forEach((item) => {
        const article = document.createElement("article");
        article.classList.add("item-cv");
        article.innerHTML = `
            <h3>${item.puesto}</h3>
            <p class="institucion">${item.empresa}</p>
            <span class="periodo">${item.periodo}</span>
        `;
        contenedorProfesional.appendChild(article);
    });
});