
import React from 'react'
import * as motion from 'motion/react-client'
const Home = () => {
  // Duration: How long the animation takes to complete
  // Delay: The delay before the animation starts
  // Easing: The easing function used for the animation

  return (
    <div>
      
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 , scale: 1.5  , skew: 0.5 }}
          whileHover={{ scale: 2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
    
    </div>
  )
}

export default Home