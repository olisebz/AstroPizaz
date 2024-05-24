'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
// import { Link } from 'react-router-dom';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-4 fixed w-full top-0 z-50 bg-transparent flex justify-center items-center`}
  >
    <div className="absolute w-full inset-0 gradient-01" />
    <div className="bg-gray-300 rounded-full px-6 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        {/* later change "a" to "Link" */}
        <a href="/" className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 px-4 py-2 rounded-full bg-white text-black shadow-md">Home</a>
        <a href="/pizzas" className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200">Pizzas</a>
        <a href="/contact" className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200">Projects</a>
        <a href="/admin" className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200">Skills</a>
     </div>
    </div>
  </motion.nav>
);

export default Navbar;
