
import React from 'react'
import * as motion from 'motion/react-client'
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
          Hello
        </motion.div>
      </div>
    </div>
  )
}

export default Home