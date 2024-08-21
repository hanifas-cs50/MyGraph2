import clsx from "clsx";
import { Link } from "react-router-dom";
import generatePagination from "../utils"

const Pagination = ({ totalPages, currentPage, createPageURL }) => {
  const allPages = generatePagination(currentPage, totalPages);

  const PaginationNumber = ({ page, href, position, isActive }) => {
    const className = clsx("flex size-10 items-center justify-center font-semibold text-sm", {
      "rounded-l": position === "first" || position === "single",
      "rounded-r": position === "last" || position === "single",
      "z-10 bg-zinc-700 text-white": isActive,
      "bg-zinc-800 hover:bg-zinc-600 text-zinc-300": !isActive && position !== "middle",
      "bg-zinc-800 text-zinc-500 pointer-events-none": position === "middle"
    });

    return isActive && position === "middle" ? (
      <div className={className}>{page}</div>
    ) : (
      <Link to={href} className={className}>
        {page}
      </Link>
    );
  };

  const PaginationArrow = ({ href, direction, isDisabled }) => {
    const className = clsx("flex size-10 items-center justify-center rounded-md bg-zinc-800", {
      "pointer-events-none text-zinc-500": isDisabled,
      "hover:bg-zinc-600 text-gray-300": !isDisabled,
      "mr-2": direction === "left",
      "ml-2": direction === "right"
    });

    const icon = direction === "left" ? (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    )

    return isDisabled ? (
      <div className={className}>{icon}</div>
    ) : (
        <Link to={href} className={className}>{icon}</Link>
    );
  };

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position;

          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={index}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          )
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  )
};

export default Pagination;