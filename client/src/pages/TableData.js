import TableBody from "../components/TableBody";
import { useEffect, useState } from "react";
import { useDataContext } from "../hooks/useDataContext";
import Pagination from "../components/Pagination";
import { TableSkeleton } from "../components/Skeleton";
import { useSearchParams } from "react-router-dom";
import { useSetEdit } from "../App";

const TableData = () => {
  const { dispatch, graphdata } = useDataContext();
  const { setEditData, setOpenEdit } = useSetEdit();
  const [count, setCount] = useState(0);

  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`
  }

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await fetch(`/api/data${ createPageURL(currentPage) }`);
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_DATA", payload: json.datas })
        setCount(Math.ceil(Number(json.count) / 5));
      }
    };

    fetchDatas();
  }, [dispatch, currentPage]);

  // console.log(graphdata);

  return (
    <>
      <h1 className="mb-4 font-bold text-2xl text-white">
        Table
      </h1>
      <table className="w-full">
        <thead className="text-left text-zinc-300 border-b-2 border-zinc-600 hover:bg-zinc-700">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Item</th>
            <th className="p-2">Quantity</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {
            graphdata ?
            graphdata.map((data) => <TableBody key={data._id} data={data} setEditData={setEditData} setOpenEdit={setOpenEdit} />)
            : <TableSkeleton />
          }
        </tbody>
      </table>
      <div className="flex justify-center mt-8">
        <Pagination totalPages={count} currentPage={currentPage} createPageURL={createPageURL} />
      </div>
    </>
  )
};

export default TableData;