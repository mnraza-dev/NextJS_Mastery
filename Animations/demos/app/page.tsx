import React from 'react'
import {motion} from 'motion/react'
const Home = () => {
  return (
    <div>
      <div className="box">
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hello world
        </motion.div>
      </div>
    </div>
  )
}

export default Home