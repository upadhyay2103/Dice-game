import './start.css'

const Start = ({setPlaying}) => {
  return (
    <div className='container'>
      <div className="image">
        <img src="https://s3-alpha-sig.figma.com/img/fce5/e0a7/6d3e531201ecd44ca61f9d27ff82e0ae?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bYDLr6h0H~axYyNwmKrvjfhTpJZ0St5DO8gwx9QgsotgHGlrn02uAUmpDoE4UVF67bvqW9g2ecxjQAQgWgZRTp1O~cqJdWmnO0AX5S1-sfk8KuCcGnKYuiFrXKnvgc72Awk1ld1RKHFxvREazuFdYql9onlzMs7DqvGEJEyBL9adFGoSGSvbzAkB-XO2BZx65Xt~CF2f~RyAk2Vob~s5RGi1vFB2EghKlRqs~MBovISvNZ85d6idFb5XkT~OdDbfeRW4i-BZjbAOnn8eDT1X6pCScEZdadXqySdzQh4rf6roe0PLTlW2oFknhrDOZwGzG372knB3sGZyyVlQj0mMIw__" width="540px" alt="mkmk" />
      </div>
      <div className="sideCont">
        <div className='naam'>DICE GAME</div>
        <div className='play' onClick={()=>setPlaying(true)}><p>PLAY NOW</p></div>
      </div>
    </div>
  );
}

export default Start;
