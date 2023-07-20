import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css";
import './src/styles/settings/colors.css';
import BoardGame from "./src/objects/BoardGame";
import PlayerName from "./src/components/PlayerName";

const app = document.querySelector("#app");

app.insertAdjacentHTML(
    "beforeend", 
    `
        ${PlayerName('Player1')}
        ${PlayerName('Player2')}
        ${BoardGame(6)}     
    
    `
 );
