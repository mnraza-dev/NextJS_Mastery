
import React from 'react'
import * as motion from 'motion/react-client'
const Home = () => {
  return (
    <div>
      
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 , rotateY: 360 }}
          transition={{ duration: 1 }}
        />
    
    </div>
  )
}

export default Home