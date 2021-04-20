import { motion } from "framer-motion"

function Saturn() {
  return (
    <motion.img 
      initial={{ x: 1000, y: -800, scale: 1.3 }} 
      animate={{ x: 500, y: -320, scale: 0.6 }} 
      transition={{ delay: 75, duration: 20 }}
      className="saturn" 
      src="/saturn.png" 
      alt="saturn" />
  );
}

export default Saturn
