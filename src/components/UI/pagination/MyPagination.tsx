import { usePagesArray } from "../../../hooks/usePagesArray";

const MyPagination = function ({totalPage, page, changePage}) {
     let pagesArray = usePagesArray(totalPage);
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default MyPagination;
