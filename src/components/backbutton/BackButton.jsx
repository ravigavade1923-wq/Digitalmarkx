import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      className="back-btn"
      onClick={() => navigate(-1)}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.08, x: -4 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaArrowLeft />
      <span>Back</span>
    </motion.button>
  );
};

export default BackButton;