import Header from "./sub_compo/Header";
import Dice from "./sub_compo/Dice";
import { useState } from "react";

const Page2 = () => {
  let[score,setScore]=useState(0);
  let [numClick,setNumClick]=useState(0);
  
  return (
    <>
    <Header score={score} numClick={numClick} setNumClick={setNumClick} setScore={setScore}></Header>
    <Dice score={score} setScore={setScore} numClick={numClick} setNumClick={setNumClick}></Dice>
    </>
  );
}

export default Page2;
