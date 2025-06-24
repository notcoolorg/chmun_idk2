import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAboutClick = () => {
      navigate("/");
      let attempts = 0;
      const maxAttempts = 10;
      const interval = setInterval(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection || attempts >= maxAttempts) {
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
          clearInterval(interval);
        }
        attempts++;
      }, 100); // Check every 100ms, up to 1 second
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link to={"/"}>
            <div className="text-2xl font-bold">CHMUN</div>
          </Link>
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Committees", "Resources", "Register"].map((item) =>
              item === "About" ? (
                <button
                  key={item}
                  onClick={handleAboutClick}
                  className="text-gray-300 hover:cursor-pointer hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ) : (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
          {/* Hamburger Button for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/90 border-t border-gray-800">
            <div className="flex flex-col items-center space-y-4 py-4">
              {["Home", "About", "Committees", "Resources", "Register"].map((item) =>
                item === "About" ? (
                  <button
                    key={item}
                    onClick={handleAboutClick}
                    className="text-gray-300 hover:text-white text-lg font-medium transition-colors duration-200"
                  >
                    {item}
                  </button>
                ) : (
                  <Link
                    key={item}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white text-lg font-medium transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
