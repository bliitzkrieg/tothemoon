import Head from 'next/head'

import { Howl } from 'howler';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"

import Wallet from '../components/Wallet';
import Saturn from '../components/Saturn';
import Landing from '../components/Landing';


const ambient = new Howl({
  src: ['ambient.mp4'],
  loop: true
});

const main = new Howl({
  src: ['epic_space_music.mp3']
});

ambient.fade(0, 0.1, 1);
ambient.play()

function Index() {
  const [playing, setPlaying] = useState(false);
  const [allowEvents, setAllowEvents] = useState(false);

  const cubes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const link = "https://chain.link/";

  useEffect(() => {
    if (playing) {
      setTimeout(() => setAllowEvents(true), 55000)
    }
  })

  const moon = () => {
    if (!playing) {
      main.stop();
      ambient.fade(0.1, 0, 3000)
      main.fade(0, 1, 3000)
      main.play()
      setPlaying(true);
    }
  };

  const reset = () => {
    setPlaying(false)
    main.fade(1, 0, 6000)
    ambient.fade(0, 0.1, 6000)
  };

  return (
    <div>
      <Head>
        <title>To the moon</title>
      </Head>
      <div className={playing ? "playing" : ''}>
        <div className="moon_container" onClick={moon}>

          <Landing />

          { playing && (
            <React.Fragment>
              <Wallet />
              <Saturn />

              <div className="quote">It's happening tonight...</div>
              <div className="together">We are all in this together</div>
              <a href={link} style={{ pointerEvents: allowEvents ? 'all' : 'none' }} className="link">{link}</a>


              <div onClick={ reset } className="reset">RESET</div>
            </React.Fragment>
          )}

          { playing && cubes.map((cube, index) => (
            <motion.div
              key={cube}
              className={`floater floater${cube}`}
              initial={{ 
                y: -100 + (index % 2 ? 300 : 0),
                x: -1500 * cube 
              }}
              animate={{ y: -200, x: 5000 }} 
              transition={{ delay: 45, duration: 45 }}>
                <img src={`/${cube}.png`} alt="The God Protocol Cube" />
            </motion.div>
          )) }
          
          
          { playing && <motion.div className="cube_container" animate={{ scale: 0.4 }} transition={{ delay: 22, duration: 70 }}>
            <motion.div
              className={`cube`}
              animate={{ y: -900 }} 
              transition={{ delay: 18, duration: 25 }}>
                <img src={`/main.png`} alt="The God Protocol Cube" />
              <div className="green-candle"></div>
            </motion.div>
          </motion.div>
          }

        </div>     
      </div>
    </div>
  )
}

export default Index
