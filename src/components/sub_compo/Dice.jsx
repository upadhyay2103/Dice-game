import { useState } from 'react';
import './Dice.css'
import { BsFillDice1Fill } from "react-icons/bs";
import { BsFillDice2Fill } from "react-icons/bs";//<BsFillDice2Fill />
import { BsFillDice3Fill } from "react-icons/bs";//<BsFillDice3Fill />
import { BsFillDice4Fill } from "react-icons/bs";//<BsFillDice4Fill />
import { BsFillDice5Fill } from "react-icons/bs";//<BsFillDice5Fill />
import { BsFillDice6Fill } from "react-icons/bs";//<BsFillDice6Fill />

const Dice = ({score,setScore,numClick,setNumClick}) => {
  let [diceNum,setDiceNum]=useState(1);
  const rndm=()=>{
    var n=Math.round(Math.random()*6);
    if(n==0)
    {
      n++;
    }
    if(n==numClick)
    {
      var a=score;
      setScore(a+1);
    }
    else
    {
      setNumClick(0);
      reset();
    }
    setDiceNum(n);
  }
  const reset=()=>{
    setScore(0);
    setNumClick(0);
  }
  return (
    <div className='container2'>
      <div>
        {diceNum==1?<BsFillDice1Fill size={160}/>:''}
        {diceNum==2?<BsFillDice2Fill size={160}/>:''}
        {diceNum==3?<BsFillDice3Fill size={160}/>:''}
        {diceNum==4?<BsFillDice4Fill size={160}/>:''}
        {diceNum==5?<BsFillDice5Fill size={160}/>:''}
        {diceNum==6?<BsFillDice6Fill size={160}/>:''}
      </div>
      <p onClick={rndm}>Click on Dice to Roll</p>
      <button onClick={reset} className='b1'>Reset Score</button>
      <button className='b2'>Show Rules</button>
    </div>
  );
}

export default Dice;
