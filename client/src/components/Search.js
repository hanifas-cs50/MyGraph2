const Search = () => {
  return (
    <div className="relative w-full ml-3 mr-4 text-white">
      <span className="absolute inset-y-0 left-1 flex items-center pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-[1.15rem]">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </span>
      <input
        className="w-full rounded-md pl-9 pr-2 py-1.5 bg-zinc-900 border-2 border-zinc-700 focus:border-zinc-500 outline-none"
        type="text"
        placeholder="Search..."
      />
    </div>
  )
};

export default Search;