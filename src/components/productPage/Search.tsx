const Search = () => {
  return (
    <div className="flex items-center justify-center rounded-lg gap-1 py-2 pl-[10px] border-solid border-[1px] border-[rgba(0, 0, 0, 0.2)] rounded-[7px] cursor-pointer">
      <img src="/search.svg" alt="search" className="w-6 h-6 " />
      <input
        type="text"
        placeholder="ძებნა"
        className="text-sm font-medium text-[rgba(0, 0, 0, 0.4)] focus:outline-none"
      />
    </div>
  );
};

export default Search;
