import React from "react";

function Footer() {
  return (
    <footer className="px-4 py-8 bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-wrap items-center justify-center space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row items-center space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-6 h-6 text-white"
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
          <li>
            <a href="#" className="hover:text-white transition duration-300">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition duration-300">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition duration-300">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
