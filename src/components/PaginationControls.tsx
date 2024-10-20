import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PaginationControlsProps {
  btnCount: number;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  btnCount,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentPage = () => {
    const params = new URLSearchParams(location.search);
    return Number(params.get("page")) || 1;
  };

  const currentPage = getCurrentPage();

  const paginationItems = () => {
    const items: (number | string)[] = [];
    const totalPages = btnCount;

    if (totalPages > 0) items.push(1);

    if (currentPage > 4) {
      items.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      if (totalPages <= 4 || (i !== 1 && i !== totalPages)) {
        items.push(i);
      }
    }

    if (currentPage < totalPages - 2) {
      items.push("...");
    }

    if (totalPages > 1) items.push(totalPages);

    return items;
  };

  const items = paginationItems();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(location.search);
    params.set("page", page.toString());
    navigate(`${location.pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center gap-2 pt-[80px]">
      <button
        disabled={currentPage === 1}
        className="text-white p-1"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <img
          src="/Arrow.svg"
          alt="prev arrow"
          width={24}
          height={24}
          className="rotate-180"
        />
      </button>

      {items.map((item, index) =>
        typeof item === "number" ? (
          <button
            key={item}
            className={`${
              currentPage === item
                ? "bg-[#EE5335] text-white w-[32px] h-[32px] "
                : "text-black"
            } p-1 text-[14px] font-[600] cursor-pointer rounded-[2px]`}
            onClick={() => handlePageChange(item)}
          >
            {item}
          </button>
        ) : (
          <span key={`ellipsis-${index}`} className="p-1">
            ...
          </span>
        )
      )}

      <button
        disabled={currentPage === btnCount}
        className="text-white p-1"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <img src="/Arrow.svg" alt="next arrow" width={24} height={24} />
      </button>
    </div>
  );
};

export default PaginationControls;
