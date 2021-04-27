import React from "react";
import PropTypes from "proptypes";

import "./styles.css";

const Header = ({ columns = [] }) => {
  return (
    <thead className="table-header">
      <tr>
        {columns.map((col) => (
          <th key={col.key}>{col.title}</th>
        ))}
      </tr>
    </thead>
  );
};

Header.propTypes = {
  columns: PropTypes.array,
};

export default Header;
