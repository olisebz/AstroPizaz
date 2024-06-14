'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { Link, Router } from 'wouter';

const Navbar = () => (
  <Router>
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-4 fixed w-full top-0 z-50 bg-transparent flex justify-center items-center`}
    >
      <div className="absolute w-full inset-0 gradient-01" />
      <div className="bg-gray-300 rounded-full px-6 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200">
            <button className="px-4 py-2 rounded-full bg-white text-black shadow-md">Home</button>
          </Link>
          <Link to="/pizzas" className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200">
            <button>Pizzas</button>
          </Link>
          <Link to="/contact" className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200">
            <button>Contact</button>
          </Link>
          <Link to="/skills" className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200">
            <button>Skills</button>
          </Link>
        </div>
      </div>
    </motion.nav>
  </Router>
);

export default Navbar;
