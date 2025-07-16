import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          delay: 0.3,
          duration: 1.2,
        }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex item-center justify-between h-16 md:h-20"
      >
        {/* Logo/Name */}
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            JD
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Jayvrat Dwivedi
          </span>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
