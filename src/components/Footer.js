// src/Footer.js
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Links Section */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-2">Quick Links</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-6 w-6 text-gray-400 hover:text-white"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="h-6 w-6 text-gray-400 hover:text-white"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-6 w-6 text-gray-400 hover:text-white"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-6 w-6 text-gray-400 hover:text-white"
                />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-lg font-bold mb-2">Contact Us</h5>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
