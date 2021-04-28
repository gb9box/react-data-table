import { useMemo } from "react";
import PropTypes from "proptypes";
import classNames from "classnames";

import { ReactComponent as PrevSvg } from "../../assets/images/prev.svg";
import { ReactComponent as NextSvg } from "../../assets/images/next.svg";
import "./styles.css";

const Footer = ({ curPage = 1, total, pageSize, setCurrentPage }) => {
  const lastPage = useMemo(
    () => (total && total > 1 ? parseInt(total / pageSize) + 1 : 1),
    [total, pageSize]
  );

  return (
    <ul
      className="table-pagination table-pagination-right"
      unselectable="unselectable"
    >
      <li
        title="Previous Page"
        className={classNames([
          "table-pagination-prev",
          curPage <= 1 ? "table-pagination-disabled" : "",
        ])}
        onClick={() => (curPage <= 1 ? {} : setCurrentPage(curPage - 1))}
      >
        <button className="table-pagination-item-link" type="button">
          <span
            role="img"
            className="table-pagination-icon table-pagination-icon-prev"
          >
            <PrevSvg />
          </span>
        </button>
      </li>
      {Array.apply(0, Array(lastPage)).map((num, idx) => (
        <li
          key={`page-${idx}`}
          title={idx + 1}
          className={classNames([
            "table-pagination-item",
            curPage === idx + 1 ? "table-pagination-item-active" : "",
          ])}
          onClick={() => (curPage === idx + 1 ? {} : setCurrentPage(idx + 1))}
        >
          {idx + 1}
        </li>
      ))}
      <li
        title="Next Page"
        className={classNames([
          "table-pagination-next",
          curPage >= lastPage ? "table-pagination-disabled" : "",
        ])}
        onClick={() => (curPage >= lastPage ? {} : setCurrentPage(curPage + 1))}
      >
        <button className="table-pagination-item-link" type="button">
          <span
            role="img"
            className="table-pagination-icon table-pagination-icon-next"
          >
            <NextSvg />
          </span>
        </button>
      </li>
    </ul>
  );
};

Footer.propTypes = {
  curPage: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  setCurrentPage: PropTypes.func,
};

export default Footer;
