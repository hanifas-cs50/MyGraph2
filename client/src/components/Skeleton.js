const TableSkeleton = () => {
  return (
    <>
      <tr className="h-16 border-b-2 border-zinc-600 animate-pulse">
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td>
          <div className="grid h-full w-full">
            <div className="place-self-center size-8 rounded-lg bg-zinc-500"></div>
          </div>
        </td>
      </tr>
      <tr className="h-16 border-b-2 border-zinc-600 animate-pulse">
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td>
          <div className="grid h-full w-full">
            <div className="place-self-center size-8 rounded-lg bg-zinc-500"></div>
          </div>
        </td>
      </tr>
      <tr className="h-16 border-b-2 border-zinc-600 animate-pulse">
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td>
          <div className="grid h-full w-full">
            <div className="place-self-center size-8 rounded-lg bg-zinc-500"></div>
          </div>
        </td>
      </tr>
      <tr className="h-16 border-b-2 border-zinc-600 animate-pulse">
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td>
          <div className="grid h-full w-full">
            <div className="place-self-center size-8 rounded-lg bg-zinc-500"></div>
          </div>
        </td>
      </tr>
      <tr className="h-16 border-b-2 border-zinc-600 animate-pulse">
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td className="pl-2">
          <div className="h-8 w-full rounded-lg bg-zinc-500"></div>
        </td>
        <td>
          <div className="grid h-full w-full">
            <div className="place-self-center size-8 rounded-lg bg-zinc-500"></div>
          </div>
        </td>
      </tr>
    </>
  )
};

const GraphSkeleton = () => {
  return (
    <div className="grid px-6 py-4 grid-cols-3 overflow-hidden rounded-md bg-white" id="graph-container">
      <div className="bg-zinc-100 rounded-lg animate-pulse h-64">
      </div>
      <div className="bg-zinc-100 rounded-lg animate-pulse h-64 ml-4">
      </div>
      <div className="bg-zinc-100 rounded-lg animate-pulse h-64 ml-4">
      </div>
      <div className="col-span-3 border-b border-zinc-600 my-4"></div>
      <div className="bg-zinc-100 rounded-lg animate-pulse h-64">
      </div>
      <div className="bg-zinc-100 rounded-lg animate-pulse h-64 ml-4">
      </div>
      <div className="bg-zinc-100 rounded-lg animate-pulse h-64 ml-4">
      </div>
    </div>
  )
};

export { TableSkeleton, GraphSkeleton }