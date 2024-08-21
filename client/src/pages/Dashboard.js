import { useEffect } from "react";
import { BarGraph, DoughnutGraph, HorizontalBarGraph, LineGraph, MonthBarGraph, PieGraph } from "../components/Graph";
import { useDataContext } from "../hooks/useDataContext";
import { GraphSkeleton } from "../components/Skeleton";

const Dashboard = () => {
  const { dispatch, graphdata } = useDataContext();

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await fetch(`/api/data/all`);
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_DATA", payload: json })
      }
    };

    fetchDatas();
  }, [dispatch]);

  return (
    <>
      <h1 className="mb-4 font-bold text-2xl text-white">
        Dashboard
      </h1>
      {
        graphdata ?
          <div className="grid px-6 py-4 grid-cols-3  overflow-hidden rounded-md bg-white" id="graph-container">
            <div className="h-64">
              <LineGraph chartData={graphdata} />
            </div>
            <div className="h-64">
              <PieGraph chartData={graphdata} />
            </div>
            <div className="h-64">
              <BarGraph chartData={graphdata} />
            </div>
            <div className="col-span-3 border-b border-zinc-600 my-4"></div>
            <div className="h-64">
              <DoughnutGraph chartData={graphdata} />
            </div>
            <div className="h-64">
              <HorizontalBarGraph chartData={graphdata} />
            </div>
            <div className="h-64">
              <MonthBarGraph chartData={graphdata} />
            </div>
          </div>
          : <GraphSkeleton />
      }
    </>
  )
};

export default Dashboard;