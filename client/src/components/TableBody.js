import { useEffect, useRef, useState } from "react";
import { useDataContext } from "../hooks/useDataContext";

const TableBody = ({ data, setEditData, setOpenEdit }) => {
  const { dispatch } = useDataContext();
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const handleDelete = async (id) => {
    console.log(id)
    const response = await fetch("/api/data/" + id, {
      method: "DELETE"
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: "DELETE_DATA", payload: json })
    }
  };

  const handleEdit = (edit) => {
    setEditData(edit);
    setOpenEdit((prev) => !prev);
  };

  // Close search menu when clicking outside of it while the menu is active
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && openMenu) {
        setOpenMenu((prev) => !prev);
      }
    };
    document.documentElement.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.documentElement.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <tr className="h-16 border-b-2 border-zinc-600 hover:bg-zinc-700">
      <td className="pl-2">{data.name}</td>
      <td className="pl-2 capitalize">{data.item}</td>
      <td className="pl-2">{data.quantity}</td>
      <td className="mt-2.5 flex justify-center relative" ref={menuRef}>
        <div onClick={() => setOpenMenu((prev) => !prev)} className="p-2 rounded hover:bg-zinc-500 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <div className={`${openMenu ? "grid" : "hidden"} z-10 absolute top-10 py-1 px-2 space-y-1 rounded-lg bg-zinc-900 border-2 border-zinc-700`}>
          <button onClick={ () => handleEdit(data) } type="button" className="w-full p-2 rounded-md font-bold text-center text-blue-500 hover:text-blue-400">Edit</button>
          <button onClick={ () => handleDelete(data._id) } type="button" className="p-2 rounded-md font-bold text-red-500 hover:text-red-400">Delete</button>
        </div>
      </td>
    </tr>
  )
};

export default TableBody;