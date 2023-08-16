import "./style.css";

function ArrowDown(currentPlayer = 1) {
    return`
    <img class="arrow-down" 
    data-currentPlayer="${currentPlayer}"
    src="src/img/IconArrowDown.png" alt="Ícone de uma seta para baixo">
    `;
}




export default ArrowDown;
