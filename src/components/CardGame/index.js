 import './style.css'
 
 function CardGame(icon = "alura-pixel", alt = "Logo da Alura") {
    return `
    <article class="card-game">
    <img src="src/img/${icon}.png" alt="${alt}">
    </article>
    `;
}

export default CardGame;