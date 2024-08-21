import { useState } from "react";
import { useDataContext } from "../hooks/useDataContext";

const EditForm = ({ editData, formEditRef, setOpenEdit }) => {
  const { dispatch } = useDataContext();
  const [name, setName] = useState(editData.name);
  const [item, setItem] = useState(editData.item);
  const [quantity, setQuantity] = useState(editData.quantity);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const load = { item: item, quantity: quantity }

    const response = await fetch("/api/data/" + editData._id, {
      method: "PATCH",
      body: JSON.stringify(load),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const json = await response.json();
    console.log(json)

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName(editData.name);
      setItem(editData.item);
      setQuantity(editData.quantity);
      setError(null);
      dispatch({ type: "EDIT_DATA", payload: {_id: json._id, name: json.name, item: item, quantity: quantity, orderDate: json.orderDate} });
      setOpenEdit((prev) => !prev);
    }
  }

  return (
    <>
      <form ref={formEditRef} onSubmit={(e) => handleSubmit(e)} className="w-96 pt-6 pb-8 px-8 mx-auto space-y-6 rounded-lg font-medium bg-zinc-800">
        <h1 className="font-bold text-2xl text-white">
          Edit Data
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          Edit
        </button>
      </form>
    </>
  )
};

export default EditForm;