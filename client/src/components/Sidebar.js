import { NavLink } from "react-router-dom";
import { useDataContext } from "../hooks/useDataContext";

const Sidebar = ({ openSide, setOpenCreate, formBtnRef }) => {
  const { dispatch } = useDataContext();

  return (
    // too laggy for : transition-all
    <aside className={`${openSide ? "w-96" : "w-0 -translate-x-96 hidden"} h-screen sticky top-0 left-0 text-white border-r-2 border-zinc-700 bg-zinc-800`}>
      {/* <div> */}
        <h1 className="h-16 px-8 flex items-center font-bold text-2xl border-b-2 border-zinc-700">
          MyGraph2
        </h1>
        <div className="px-4 py-6 flex flex-col font-medium text-zinc-300">
          <NavLink
            onClick={() => dispatch({ type: "SET_DATA", payload: "" })}
            to="/"
            className={({ isActive }) => `mb-2 px-4 py-2 rounded-md flex items-center ${isActive ? "text-white bg-zinc-600" : "hover:text-white"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6 mb-0.5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Dashboard
          </NavLink>
          <NavLink
            onClick={() => dispatch({ type: "SET_DATA", payload: "" })}
            to="/table"
            className={({ isActive }) => `mb-4 px-4 py-2 rounded-md flex items-center ${isActive ? "text-white bg-zinc-600" : "hover:text-white"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6 mb-0.5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
            </svg>
            Table
          </NavLink>
          <span className="mb-4 border-b-2 border-zinc-500"></span>
          <button ref={formBtnRef} onClick={() => setOpenCreate((prev) => !prev)} type="button" className="px-4 py-2 rounded-md flex justify-center items-center text-white bg-blue-700 hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Create
          </button>
        </div>
      {/* </div> */}
    </aside>
  )
};

export default Sidebar;