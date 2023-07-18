import CardGame from "./src/components/CardGame";
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css";
import './src/styles/settings/colors.css';

const app = document.querySelector("#app");
const htmlCardGame = CardGame()

app.insertAdjacentHTML("beforeend", htmlCardGame);
