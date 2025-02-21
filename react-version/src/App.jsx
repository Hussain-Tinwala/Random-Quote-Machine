import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuoteMachine from './components/QuoteMachine'

import { motion } from 'motion/react'


function App() {
  return (
    <>
      <motion.div
        drag
        whileDrag={{
          scale: 0.8
        }}
        dragConstraints={{
          top: 0,
          left: 0,
          right:0,
          bottom:50
          
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          // rotate:360
          // x: 50,
          // y:50
         }}
        transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            // repeat: 3,
            // ease: 'anticipate'
        }}
        >
          <QuoteMachine />

        </motion.div>


    </>
  )
}

export default App;