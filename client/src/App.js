import { useEffect, useRef, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";

export default function App() {
  const [openSide, setOpenSide] = useState(true);
  const [openCreate, setOpenCreate] = useState(false);
  const formRef = useRef(null);
  const formBtnRef = useRef(null);
  
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState({});
  const formEditRef = useRef(null);

  // Close search menu when clicking outside of it while the menu is active
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target) && e.target !== formBtnRef.current && openCreate) {
        setOpenCreate((prev) => !prev);
      } else if (formEditRef.current && !formEditRef.current.contains(e.target)) {
        setOpenEdit((prev) => !prev);
      }
    };
    document.documentElement.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.documentElement.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCreate]);

  return (
    <main className="flex h-full max-w-screen-2xl mx-auto">
      <Sidebar openSide={openSide} setOpenCreate={setOpenCreate} formBtnRef={formBtnRef} />
      <div className="w-full flex flex-col items-center">
        <Navbar openSide={openSide} setOpenSide={setOpenSide} />
        <section className="relative w-full h-full p-6">
          {
            openCreate ?
              <div className="h-full w-full absolute z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center bg-zinc-900/40">
                <AddForm formRef={formRef} setOpenCreate={setOpenCreate} />
              </div>
              : null
          }
          {
            openEdit ?
              <div className="h-full w-full absolute z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center bg-zinc-900/40">
                <EditForm editData={editData} formEditRef={formEditRef} setOpenEdit={setOpenEdit} />
              </div>
              : null
          }
          <Outlet context={{ setEditData, setOpenEdit }} />
        </section>
      </div>
    </main>
  )
}

export function useSetEdit() {
  return useOutletContext();
}