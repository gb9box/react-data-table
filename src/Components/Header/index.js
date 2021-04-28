import React, { useState } from "react";
import PropTypes from "proptypes";

import HeaderCell from "./HeaderCell";
import "./styles.css";

const Header = ({ columns = [], onChange }) => {
  const [option, setOption] = useState({});
  const [curColumns, setCurrentColumns] = useState(
    columns.map((col) => ({ ...col, direction: 0 }))
  );

  const onClickSort = (key, direction, sorter) => {
    const newOption = { ...option, direction, sorter };
    setOption({ ...newOption });
    setCurrentColumns(
      curColumns.map((col) => ({
        ...col,
        direction: key === col.key && col.direction < 2 ? col.direction + 1 : 0,
      }))
    );
    onChange(newOption);
  };

  const onClickFilter = (filter, onFilter) => {
    const newOption = { ...option, filter, onFilter };
    setOption({ ...newOption });
    onChange(newOption);
  };

  return (
    <thead className="table-header">
      <tr>
        {curColumns.map((col) => (
          <HeaderCell
            key={`cell-${col.key}`}
            column={col}
            onClickSort={onClickSort}
            onClickFilter={onClickFilter}
          />
        ))}
      </tr>
    </thead>
  );
};

Header.propTypes = {
  columns: PropTypes.array,
  onChange: PropTypes.func,
};

export default Header;
