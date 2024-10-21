"use client";

import { useState, useEffect } from "react";
import { useSearchProducts } from "../../hook/useSearching";

const Search = () => {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState<string>("");
  const { data } = useSearchProducts(debouncedInput);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input.length > 0 ? input : "");
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [input]);
  console.log(data, " search data");
  return (
    <div className="flex items-center justify-center rounded-lg gap-1 py-2 pl-[10px] border-solid border-[1px] border-[rgba(0, 0, 0, 0.2)] rounded-[7px] cursor-pointer">
      <img src="/search.svg" alt="search" className="w-6 h-6" />
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="ძებნა"
        className="text-sm font-medium text-[rgba(0, 0, 0, 0.4)] focus:outline-none"
      />
    </div>
  );
};

export default Search;
