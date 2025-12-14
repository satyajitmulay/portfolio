import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  HiMenu,
  HiX,
  HiMoon,
  HiSun,
  HiHome,
  HiUser,
  HiCode,
  HiBriefcase,
  HiAcademicCap,
  HiMail,
} from "react-icons/hi";

const navItems = [
  { name: "Home", href: "#home", icon: HiHome },
  { name: "About", href: "#about", icon: HiUser },
  { name: "Skills", href: "#skills", icon: HiCode },
  { name: "Experience", href: "#experience", icon: HiBriefcase },
  { name: "Education", href: "#education", icon: HiAcademicCap },
  { name: "Contact", href: "#contact", icon: HiMail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            SM
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === "dark" ? (
                <HiSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <HiMoon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {theme === "dark" ? (
                <HiSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <HiMoon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 py-2 text-gray-700 dark:text-gray-300"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
