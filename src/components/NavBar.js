import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import QuestionsContext from "../context/questions/QuestionsContext";
import { Menu, X } from "lucide-react";

function NavBar() {
  const context = useContext(QuestionsContext);
  const { mode, setMode } = context;
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const updateMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
  };

  return (
    <div>
      <div
        className={`${mode} top-0 left-0 w-full bg-gray-100 border-gray-800 dark:bg-gray-800 shadow-md z-50 transition duration-500`}
      >
        <nav>
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen p-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={process.env.PUBLIC_URL + "/dsaTracker.png"}
                className="h-8"
                alt="Website Logo"
                title="Website Logo"
              />
              <span className="self-center text-2xl font-mono font-semibold whitespace-nowrap text-gray-800 dark:text-white">
                A2Z-DSA-Tracker
              </span>
            </Link>

            <div className="hidden sm:flex items-center">
              <div className="dark-mode-toggler ml-auto">
                <label
                  htmlFor="darkModeToggle"
                  className="flex items-center cursor-pointer"
                  title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
                >
                  <div
                    className={`relative w-10 h-6 rounded-full shadow-inner bg-gray-300 dark:bg-orange-500`}
                  >
                    <input
                      type="checkbox"
                      className="absolute w-6 h-6 rounded-full appearance-none cursor-pointer"
                      id="darkModeToggle"
                      checked={mode === "dark"}
                      onChange={updateMode}
                    />
                    <div
                      className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-300 ${
                        mode === "light"
                          ? "translate-x-0 bg-gray-200"
                          : "translate-x-4 bg-white"
                      }`}
                    ></div>
                  </div>
                  <div className="ml-2 text-white dark:text-gray-300">🌙</div>
                </label>
              </div>
            </div>
            <div className="flex w-[75px] justify-end sm:hidden">
              <div className="dark-mode-toggler mr-2">
                <label
                  htmlFor="darkModeToggle"
                  className="flex items-center cursor-pointer"
                >
                  <div className="relative w-10 h-6 rounded-full shadow-inner bg-gray-300 dark:bg-orange-500">
                    <input
                      type="checkbox"
                      className="absolute w-6 h-6 rounded-full appearance-none cursor-pointer"
                      id="darkModeToggle"
                      checked={mode === "dark"}
                      onChange={updateMode}
                    />
                    <div className="dark:block hidden ml-1 text-white dark:text-gray-300 text-sm">
                      🌙
                    </div>
                    <div
                      className={`absolute left-1.5 top-1 w-4 h-4 rounded-full transition-transform duration-300 ${
                        mode === "light"
                          ? "translate-x-0 bg-gray-200"
                          : "translate-x-4 bg-white"
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
              <button onClick={toggleNavbar}>
                {isOpen ? (
                  <X className="dark:text-white " />
                ) : (
                  <Menu className="dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
