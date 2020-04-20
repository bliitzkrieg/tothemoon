import Head from 'next/head'

import {Howl, Howler} from 'howler';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import { ReactMotionLoop } from 'react-motion-loop';
import { spring } from 'react-motion';


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
  const [start, setStart] = useState(false);
  const wallet = "0xa2E15bC8F3885Ac768e17168d2c3E6415eF5565d";

  const cubes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const link = "https://chain.link/";

  const moon = () => {
    if (!start) {
      ambient.fade(0.1, 0, 3000)
      main.fade(0, 1, 3000)
      main.play()
      setStart(true);
    }
  };

  return (
    <div>
      <Head>
        <title>To the moon</title>
      </Head>
      <div className={start ? "start" : ''}>
        <div className="moon_container" onClick={moon}>
          <img src='/chainlink.svg' alt="The God Protocol" className="god_protocol"/>
          <div className="ready_text">Start</div>
          { start && <div className="quote">It's happening tonight...</div> }
          { start && <div className="together">We are all in this together</div> }
          { start && <a href={link} className="link">{link}</a> }

          {/* { start && cubes.map(cube => (
            <motion.div
              key={cube}
              className={`floater floater${cube}`}
              initial={{ y: -200, x: 100 * cube }}
              animate={{ y: -900, x: 50 * cube }} 
              transition={{ delay: 2, duration: 28 }}>
                <img src={`/${cube}.png`} alt="The God Protocol Cube" />
            </motion.div>
          )) } */}
          
          <motion.div className="cube_container" animate={{ scale: 0.4 }} transition={{ delay: 22, duration: 70 }}>
            <motion.div
              className={`cube`}
              animate={{ y: -900 }} 
              transition={{ delay: 18, duration: 28 }}>
                <img src={`/main.png`} alt="The God Protocol Cube" />
              <div className="green-candle"></div>
            </motion.div>
          </motion.div>

          { start && 
            <motion.div className="wallet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 30, duration: 20 }}>
              {wallet}
            </motion.div> 
          }

          { start && 
            <motion.img 
              initial={{ x: 1000, y: -800, scale: 1.1 }} 
              animate={{ x: 500, y: -320, scale: 0.4 }} 
              transition={{ delay: 30, duration: 20 }}
              className="saturn" 
              src="/saturn.png" 
              alt="saturn" />
          }
        </div>     
      </div>
    </div>
  )
}

export default Index
