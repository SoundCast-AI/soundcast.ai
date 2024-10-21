import React from "react";
import { ExternalLink, Shield, Cpu, BookOpen } from "lucide-react";

const LandingPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="flex items-center justify-center p-3">
          <div className="flex items-center bg-black  border-[1px] border-indigo-200 border-l-[#888491] border-t-[#4d4d4d] border-r-[#888491] border-b-[#888491] p-2 rounded-md">
            <div className="bg-purple-600 p-2 rounded-sm">
              <div className="w-6 h-6"></div>
            </div>
            <div className="ml-8 space-x-6 pl-8">
              <a href="#" className="text-[#9f9a9a] text-sm hover:text-white">
                Software
              </a>
              <a href="#" className=" text-[#9f9a9a] text-sm hover:text-white">
                Clients
              </a>
              <a href="#" className=" text-[#9f9a9a] text-sm hover:text-white">
                Company
              </a>
              <a href="#" className=" text-[#9f9a9a] text-sm hover:text-white">
                Pricing
              </a>
            </div>
            <div className="pl-14">
              <button className="p-3 bg-gradient-to-r from-indigo-500 from-10% via-indigo-400 via-30% to-indigo-500 to-90% text-sm rounded-md hover:bg-purple-400">
                Sign Up
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center mt-20 px-4">
          <span className="bg-gray-800/50 border-[1px] border-indigo-200 border-l-[#5f62ff] border-t-indigo-500 border-r-[#9d82e3] border-b-[#7a47ff] text-sm px-6 py-2 rounded-full">
            Chat with your fav personality
          </span>
          <h1 className="text-5xl mt-8 mb-4">
            Unlock Potential With Cutting-Edge
            <br />
            Machine Learning Technologies
          </h1>
          <p className="text-gray-400 mb-12">
            Comprehensive resources, tutorials, and real-world applications.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-7xl mx-auto">
          {/* Easy Integration */}
          <div className="bg-gradient-to-l from-[#3d3d3d] to-[#000000] border-2 border-[#a19191]  p-6 rounded-xl ">
            <h3 className="text-xl font-semibold mb-4">Easy Integration</h3>
            <p className="text-gray-400">
              Seamless tool integration. Connect effortlessly with Python, R,
              and other tools to maximize your productivity.
            </p>
          </div>

          {/* Secure and Reliable */}
          <div className="bg-gradient-to-r from-[#3d3d3d] to-[#000000]  border-2 border-[#a19191] p-6 rounded-xl row-span-2">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold mb-4">
                Secure And Reliable
              </h3>
              <Shield className="text-purple-600" />
            </div>
            <p className="text-gray-400">
              Top-notch data security. Your information is encrypted and
              protected, ensuring your data is safe and accessible only to you.
            </p>
          </div>

          {/* Cutting-Edge Algorithms */}
          <div className="bg-gradient-to-r from-[#3d3d3d] to-[#000000] border-2 border-[#a19191] p-6 rounded-xl row">
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-semibold">Cutting-Edge Algorithms</h3>
              <p className="text-gray-400">
                Harness advanced machine learning models. Solve complex problems
                with the latest algorithms, from deep learning to NLP.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800/50 p-2 rounded-lg text-center">
                  <span className="text-sm">Pattern Detection</span>
                </div>
                <div className="bg-gray-800/50 p-2 rounded-lg text-center">
                  <span className="text-sm">Scalable Tech</span>
                </div>
                <div className="bg-gray-800/50 p-2 rounded-lg text-center">
                  <span className="text-sm">Automated Learning</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-l from-[#3d3d3d] to-[#000000] border-2 border-[#a19191] p-6 rounded-xl row">
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-semibold">Cutting-Edge Algorithms</h3>
              <p className="text-gray-400">
                Harness advanced machine learning models. Solve complex problems
                with the latest algorithms, from deep learning to NLP.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800/50 p-2 rounded-lg text-center">
                  <span className="text-sm">Pattern Detection</span>
                </div>
                <div className="bg-gray-800/50 p-2 rounded-lg text-center">
                  <span className="text-sm">Scalable Tech</span>
                </div>
                <div className="bg-gray-800/50 p-2 rounded-lg text-center">
                  <span className="text-sm">Automated Learning</span>
                </div>
              </div>
            </div>
          </div>
          {/* Learning Resources */}
          <div className="bg-gradient-to-r from-[#3d3d3d] to-[#000000] border-2 border-[#a19191] p-6 rounded-xl">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold mb-4">Learning Resources</h3>
              <span className="bg-purple-600 px-2 py-1 rounded-full text-xs">
                New
              </span>
            </div>
            <p className="text-gray-400">
              Master machine learning. Access documentation, tutorials, and
              community support to advance your skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
// #5F51C1
