import { X, Github, MessageSquare } from "lucide-react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="Logo" className="h-10" />
              <span className="text-white font-semibold">SOUNDCAST AI</span>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <X size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Github size={20} />
              </a>
            </div>

            <div className="text-sm">
              © 2024 SOUNDCAST AI. ALL RIGHTS RESERVED
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Developers</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Github
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Schedule Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Term of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
