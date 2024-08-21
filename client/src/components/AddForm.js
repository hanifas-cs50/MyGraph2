import { useState } from "react";
import { useDataContext } from "../hooks/useDataContext";

const AddForm = ({ formRef, setOpenCreate }) => {
  const { dispatch } = useDataContext();
  const [name, setName] = useState("");
  const [item, setItem] = useState("small box");
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name === "") setName("anon");

    const load = { name: name, item: item, quantity: quantity, orderDate: new Date("2021-03-25") }

    const response = await fetch("/api/data/", {
      method: "POST",
      body: JSON.stringify(load),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setItem("small box");
      setQuantity(0);
      setError(null);
      dispatch({type: "CREATE_DATA", payload: json});
      setOpenCreate((prev) => !prev);
    }
  }

  return (
    <>
      <form ref={formRef} onSubmit={(e) => handleSubmit(e)} className="w-96 pt-6 pb-8 px-8 mx-auto space-y-6 rounded-lg font-medium bg-zinc-800">
        <h1 className="font-bold text-2xl text-white">
          Add Data
        </h1>
        <div className="text-zinc-900">
          <label htmlFor="name" className="block mb-3 text-md text-zinc-300">
            Name
          </label>
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="w-full p-2 outline-none placeholder:text-zinc-400 bg-zinc-300 border-2 border-zinc-700 focus:border-zinc-500" id="name" placeholder="John Doe" />
        </div>
        <div className="text-zinc-900">
          <label htmlFor="item" className="block mb-3 text-md text-zinc-300">
            Item
          </label>
          <select
            id="item"
            onChange={(e) => setItem(e.target.value)}
            value={item}
            className="appearance-none block w-full p-2 outline-none bg-zinc-300 border-2 border-zinc-700 focus:border-zinc-500"
          >
            <option>Small Box</option>
            <option>Medium Box</option>
            <option>Large Box</option>
          </select>
        </div>
        <div className="text-zinc-900">
          <label htmlFor="quantity" className="block mb-3 text-md text-zinc-300">
            Quantity
          </label>
          <input onChange={(e) => setQuantity(e.target.value)} value={quantity} type="number" className="w-full p-2 outline-none placeholder:text-zinc-400 bg-zinc-300 border-2 border-zinc-700 focus:border-zinc-500" id="quantity" placeholder="10" min={0} max={100} />
        </div>
        <button type="submit" className="w-full px-4 py-2 rounded-md flex justify-center items-center text-white bg-blue-700 hover:bg-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Create
        </button>
      </form>
    </>
  )
};

export default AddForm;