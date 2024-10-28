import { Shield } from "lucide-react";
import Video2 from "../assets/video2.mp4";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-black text-white">
        <div className="relative w-full h-screen">
          <video
            src={Video2}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ opacity: 0.6 }}
          ></video>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <Link
              to="/explore"
              className="bg-gray-800/50 border-[1px] border-indigo-200 border-l-[#5f62ff] border-t-indigo-500 border-r-[#9d82e3] border-b-[#7a47ff] text-sm px-6 py-2 rounded-full"
            >
              Chat with your fav personality
            </Link>
            <h1 className="text-5xl mt-8 mb-4 text-white">
              Unlock Potential With Cutting-Edge
              <br />
              Machine Learning Technologies
            </h1>
            <p className="text-gray-400 mb-12">
              Comprehensive resources, tutorials, and real-world applications.
            </p>
          </div>
        </div>
        <hr className="border-t-2 border-[#696060]" />
        <div className="text-center mt-20 px-4">
          <h1 className="text-5xl mt-8 mb-4">
            Unlock Potential With Cutting-Edge
            <br />
            Machine Learning Technologies
          </h1>
          <p className="text-gray-400 mb-12">
            Comprehensive resources, tutorials, and real-world applications.
          </p>
        </div>

        <div className="grid grid-rows-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-rows-2 gap-6 p-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-l from-[#3d3d3d] to-[#000000] border-2 border-[#a19191]  p-6 rounded-xl ">
            <h3 className="text-xl font-semibold mb-4">Easy Integration</h3>
            <p className="text-gray-400">
              Seamless tool integration. Connect effortlessly with Python, R,
              and other tools to maximize your productivity.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#3d3d3d] to-[#000000]  border-2 border-[#a19191] p-6 rounded-xl row-span-1 md:row-span-2 lg:row-span-2">
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
        <hr className="border-t-2 border-[#696060]" />

        <div className="text-center mt-20 px-4">
          <h1 className="text-5xl mt-8 mb-4">
            Unlock Potential With Cutting-Edge
            <br />
            Machine Learning Technologies
          </h1>
          <p className="text-gray-400 mb-12">
            Comprehensive resources, tutorials, and real-world applications.
          </p>
        </div>
        <div className="bg-black text-white  py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  sm:grid-rows-2 gap-8">
            <div>
              <h3 className="text-purple-500 text-lg font-bold mb-4 text-center md:text-left lg:text-left ">
                USER DATA
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t-2 border-[#5b5b5b] mt-6">
                <div className="text-center">
                  <h4 className="text-4xl font-bold mt-4">30M+</h4>
                  <p className="text-gray-400">Total Users</p>
                </div>
                <div className="text-center">
                  <h4 className="text-4xl font-bold mt-4">4M+</h4>
                  <p className="text-gray-400">Daily Unique IP(ATH)</p>
                </div>
                <div className="text-center">
                  <h4 className="text-4xl font-bold mt-4">2B+</h4>
                  <p className="text-gray-400">Assets Volume</p>
                </div>
                <div className="text-center">
                  <h4 className="text-4xl font-bold mt-4">~20M</h4>
                  <p className="text-gray-400">Processed AA UserOps</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-purple-500 text-lg font-bold mb-4 text-center md:text-left lg:text-left ">
                DEVELOPER DATA
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t-2 border-[#5b5b5b] mt-6">
                <div className="text-center">
                  <h4 className="text-4xl font-bold mt-4">60K+</h4>
                  <p className="text-gray-400">Developers Using SDKs</p>
                </div>
                <div className="text-center">
                  <h4 className="text-4xl font-bold mt-4">400K+</h4>
                  <p className="text-gray-400">Monthly SDK Downloads</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-purple-500 text-lg font-bold mb-4 text-center md:text-left lg:text-left ">
                COMMUNITY DATA
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t-2 border-[#5b5b5b] mt-6">
                <div className="text-center">
                  <h4 className="text-4xl font-bold mt-4">900K+</h4>
                  <p className="text-gray-400">Twitter Followers</p>
                </div>
                <div className="text-center">
                  <h4 className="text-4xl font-bold mt-4">580K+</h4>
                  <p className="text-gray-400">Discord Members</p>
                </div>
                <div className="text-center">
                  <h4 className="text-4xl font-bold mt-4">120K+</h4>
                  <p className="text-gray-400">
                    Exclusive Community Assets Holders
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-purple-500 text-lg font-bold mb-4 text-center md:text-left lg:text-left ">
                BTC CONNECT
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t-2 border-[#5b5b5b] mt-6">
                <div className="text-center">
                  <h4 className="text-4xl font-bold mt-4">900K+</h4>
                  <p className="text-gray-400">Connected BTC Wallets</p>
                </div>
                <div className="text-center">
                  <h4 className="text-4xl font-bold mt-4">300K+</h4>
                  <p className="text-gray-400">Deployed BTC Smart Accounts</p>
                </div>
                <div className="text-center">
                  <h4 className="text-4xl font-bold mt-4">1.5M+</h4>
                  <p className="text-gray-400">Total Transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t-2 border-[#696060]" />

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
