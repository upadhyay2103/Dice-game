import './Header.css'

const Header = ({score,setScore,numClick,setNumClick}) => {
  return (
    <div className='container1'>
      <div className='marks'>
        <div className='point'>{score}</div>
        <div className='txt'>Total Score</div>
      </div>
      <div className="menu">
        <div className="numbers">
        <div className={numClick==1?'highlight':'one'} onClick={()=>setNumClick(1)}><p>1</p></div>
        <div className={numClick==2?'highlight':'one'} onClick={()=>setNumClick(2)}><p>2</p></div>
        <div className={numClick==3?'highlight':'one'} onClick={()=>setNumClick(3)}><p>3</p></div>
        <div className={numClick==4?'highlight':'one'} onClick={()=>setNumClick(4)}><p>4</p></div>
        <div className={numClick==5?'highlight':'one'} onClick={()=>setNumClick(5)}><p>5</p></div>
        <div className={numClick==6?'highlight':'one'} onClick={()=>setNumClick(6)}><p>6</p></div>
        </div>
        <div className="msg"><p className='test'>SELECT A NUMBER</p></div>
      </div>
    </div>
  );
}

export default Header;
