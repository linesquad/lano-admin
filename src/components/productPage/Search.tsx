import { useState, useEffect, useRef } from "react";
import { useSearchProducts } from "../../hook/useSearching";
import SearchedProductsModal from "./SearchedProductsModal";
import Loading from "../../ui/Loading";

const Search = () => {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState<string>("");
  const { data } = useSearchProducts(debouncedInput);
  const [showSearchedProducts, setShowSearchedProducts] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (input.length > 0) {
        setLoadingData(true);
      }
      setDebouncedInput(input.length > 0 ? input : "");
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  useEffect(() => {
    if (data && Array.isArray(data) && data.length >= 1) {
      setShowSearchedProducts(true);
      setLoadingData(false);
      console.log("here");
    } else {
      setShowSearchedProducts(false);
      setLoadingData(false);
    }
    setLoadingData(false);
  }, [data]);
  console.log(data, " search data");

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="relative">
      <div className="flex items-center justify-center rounded-lg gap-1 py-2 pl-[10px] border-solid border-[1px] border-[rgba(0, 0, 0, 0.2)] rounded-[7px] cursor-pointer">
        <img src="/search.svg" alt="search" className="w-6 h-6" />
        <input
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="ძებნა"
          className="text-sm font-medium text-[rgba(0, 0, 0, 0.4)] focus:outline-none"
        />
        {loadingData && (
          <div className="pr-[20px]">
            <Loading width="40px" height="30px" />
          </div>
        )}
      </div>
      {showSearchedProducts && (
        <SearchedProductsModal
          showSearchedProducts={showSearchedProducts}
          onClose={() => setShowSearchedProducts(false)}
          clearInput={() => setInput("")}
          data={data}
          inputRef={inputRef.current}
        />
      )}
      <div className="h-[10px]">
        {debouncedInput.length > 0 &&
          data &&
          Array.isArray(data) &&
          data.length < 1 && (
            <span className="px-[10px] ">No Products Found ...</span>
          )}
      </div>
    </div>
  );
};

export default Search;
