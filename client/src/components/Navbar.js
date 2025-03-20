import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
        setIsScrolled(true);
        } else {
        setIsScrolled(false);
        }
    };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Suggestions", path: "/suggestions" },
    // { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    //   w-full in other components cause the nav issue in small screens - use absolute
      className={`fixed w-screen z-50 transition-colors duration-300 px-5 font-Raleway ${
                isScrolled ? "bg-black/90 text-white" : "bg-transparent text-gray-800"
              }`}
    >
      <div className="h-14 px-2 lg:px-5 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-base lg:text-xl"><span className="font-PlayfairDisplay font-semibold">Ψ </span>SPACE</Link>

        {/* Navigation Items */}
        <div className="flex space-x-2 lg:space-x-8 h-full">
          {navItems.map((item) => (
            <div
              key={item.name}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative h-full flex"
            >
              <Link to={item.path}
                className="text-sm lg:text-lg font-semibold transition-colors duration-300 px-1 self-center"
              >
                {item.name}
              </Link>
              
              {(hoveredItem === item.name || location.pathname === item.path) && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-0 h-1 bg-violet-500"
                />
              )}
            </div>
            // </div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
