import { useState } from "react";
import styles from "../styles/Home.module.css";
import Navbar from "./modules/navbar";
import { backgroundContainer as Background } from "./styles";

export default function Home() {
  const [bgColor, setBgColor] = useState("black");
  const [color, setColor] = useState("red");

  function setTheme() {}
  return (
    <>
      <Background
        onClick={() => console.log("CALL COLOR")}
        bgColor={bgColor}
        color={color}
      >
        <Navbar />
      </Background>
    </>
  );
}
