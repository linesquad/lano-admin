const Filter = () => {
  return (
    <div className="flex items-center justify-center gap-1 px-7 py-2 border-solid border-[1px] border-[rgba(0, 0, 0, 0.2)] rounded-[7px] cursor-pointer">
      <img src="/filter.svg" alt="filter" className="w-6 h-6" />
      <span className="text-sm font-normal text-[rgba(0, 0, 0, 0.4)]">
        ფილტრაცია
      </span>
    </div>
  );
};

export default Filter;
