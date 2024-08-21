import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ openSide, setOpenSide }) => {
  const [openProf, setOpenProf] = useState(false);
  const profRef = useRef(null);

  // Close search menu when clicking outside of it while the menu is active
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profRef.current && !profRef.current.contains(e.target) && openProf) {
        setOpenProf((prev) => !prev);
      }
    };
    document.documentElement.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.documentElement.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openProf]);

  return (
    <nav className="w-full sticky top-0 left-0 z-10 bg-zinc-800">
      <div className="h-16 px-4 flex items-center border-b-2 border-zinc-700">
        <div onClick={() => setOpenSide(!openSide)} className="p-2 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-700 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <Search />
        <div onClick={() => setOpenProf(!openProf)} className="size-10 cursor-pointer" ref={profRef}>
          <img
            className="w-full mt-0.5 rounded-full hover:opacity-50"
            src="/2-ELzxldtU6kACf.png"
            alt="Profile"
            width={18}
            height={18}
            decoding="async"
          />
          <div className={`w-40 p-2 ${openProf ? "grid" : "hidden"} space-y-2 rounded-lg absolute top-14 right-2 bg-zinc-900 border-2 border-zinc-700`}>
            <Link className="p-2 rounded-md font-bold text-zinc-300 hover:text-white hover:bg-zinc-700" to="#">My Account</Link>
            <span className="border-b-2 border-zinc-500"></span>
            <Link className="p-2 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-700" to="#">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;