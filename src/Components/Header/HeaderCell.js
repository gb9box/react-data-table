import { useState } from "react";
import classNames from "classnames";
import PropTypes from "proptypes";

import { ReactComponent as AscendSvg } from "../../assets/images/ascend.svg";
import { ReactComponent as DescendSvg } from "../../assets/images/descend.svg";
import { ReactComponent as FilterSvg } from "../../assets/images/filter.svg";
import "./styles.css";

const sortDirections = ["descend", "ascend"];
function HeaderCell({ column, onClickSort, onClickFilter }) {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const onFilterSubmit = () => {
    onClickFilter(filter, column.onFilter);
    setFilterOpen(false);
  };

  const onFilterCancel = () => {
    setFilter("");
    onClickFilter("", null);
    setFilterOpen(false);
  };

  return (
    <th key={column.key}>
      <div className="table-header-col">
        <span
          className="table-header-col-content"
          onClick={(e) =>
            column.sorter
              ? onClickSort(
                  column.key,
                  sortDirections[column.direction],
                  column.sorter
                )
              : e.defaultPrevented()
          }
        >
          <span className="table-header-col-title">{column.title}</span>
          {column.sorter && (
            <span className="table-header-col-sorter">
              <span
                className={classNames([
                  "table-header-col-icon",
                  column.direction === 1 ? "active" : "",
                ])}
              >
                <DescendSvg />
              </span>
              <span
                className={classNames([
                  "table-header-col-icon",
                  column.direction === 2 ? "active" : "",
                ])}
              >
                <AscendSvg />
              </span>
            </span>
          )}
        </span>
        {column.onFilter && (
          <span
            className="table-header-col-filter"
            onClick={(e) => setFilterOpen(!isFilterOpen)}
          >
            <span
              className={classNames([
                "table-header-col-icon",
                isFilterOpen || filter.length > 0 ? "active" : "",
              ])}
            >
              <FilterSvg />
            </span>
          </span>
        )}
        {isFilterOpen && (
          <span className="filter-panel">
            <div className="filter-content">
              <div>
                <input
                  id="filter"
                  name="filter"
                  value={filter}
                  maxLength={128}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
              <div className="filter-button-group">
                <button onClick={onFilterSubmit}>OK</button>
                <button onClick={onFilterCancel}>Reset</button>
              </div>
            </div>
          </span>
        )}
      </div>
    </th>
  );
}

HeaderCell.propTypes = {
  column: PropTypes.object,
  onClickSort: PropTypes.func,
  onClickFilter: PropTypes.func,
};

export default HeaderCell;
