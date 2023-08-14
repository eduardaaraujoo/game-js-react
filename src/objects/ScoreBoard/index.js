import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import "./style.css";


function ScoreBoard() {
    return `
    <header class="score-board">
        ${PlayerName('Player1')}
        ${VsPlayer('vs')}
        ${PlayerName('Player2')}
    </header>
    `;
}






export default ScoreBoard;