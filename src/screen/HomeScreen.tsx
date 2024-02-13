"use client";
import { useEffect, useState } from "react"
import "./home_screen.scss"

const HomeScreen = () => {
  const [title, setTitle] = useState(true)
  const [gif, setGif] = useState("https://media4.giphy.com/media/CJ5bKVKLSQsrs3nJw2/giphy.gif?cid=ecf05e47rly5v8gd0bphd5ct7n85siobd7eyy0xe3hkml64d&ep=v1_gifs_related&rid=giphy.gif&ct=s")
  const handleYesClick = () => {
    setTitle(!true);
    setGif(
      'https://media3.giphy.com/media/jyuuoHidVXPuJ2iBRT/giphy.gif?cid=ecf05e470ggvsfgcfvaku3680ddxs6r8epgs7adgdpeapi89&ep=v1_gifs_related&rid=giphy.gif&ct=s'
    );
  }
  const handleNoMouseOver = () => {

    const noBtn = document.querySelector('.no-btn') as HTMLButtonElement;

    if (noBtn) {
      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      noBtn.style.left = randomX + 'px';
      noBtn.style.top = randomY + 'px';
    }

  };
  return (
    <div className="wrapper">
      <h2 className="question">{
        title ? `${"Do you agree to be my girlfriend?"}` : `${"I love you too!❤️"}`
      }</h2>
      <div className="gif">
        <img
          alt="gif"
          src={gif} />
      </div>

      <div className={`${title ? "" : "hidden"}`}>
        <div className="btn-group">
          <button className="yes-btn" onClick={handleYesClick} >
            Yes
          </button>
          <button className="no-btn" onMouseOver={handleNoMouseOver} >
            No
          </button>
        </div>
      </div>

    </div>
  )
}

export default HomeScreen
