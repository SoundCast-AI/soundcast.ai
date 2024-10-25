import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="flex items-center justify-center p-3">
        <div className="flex items-center bg-black  border-[1px] border-indigo-200 border-l-[#888491] border-t-[#4d4d4d] border-r-[#888491] border-b-[#888491] p-2 rounded-md">
          <div className="bg-purple-600 p-2 rounded-sm">
            <div className="w-6 h-6"></div>
          </div>
          <div className="ml-8 space-x-6 pl-8">
            <Link
              to="/explore"
              className=" text-[#9f9a9a] text-sm hover:text-white"
            >
              Explore
            </Link>
            <a href="#" className=" text-[#9f9a9a] text-sm hover:text-white">
              Contact Us
            </a>
          </div>
          <div className="pl-14">
            <button className="p-3 bg-gradient-to-r from-indigo-500 from-10% via-indigo-400 via-30% to-indigo-500 to-90% text-sm rounded-md hover:bg-purple-400">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
