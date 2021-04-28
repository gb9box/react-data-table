import React from "react";
import PropTypes from "proptypes";

const Body = ({ data = [], keys = [] }) => {
  return (
    <tbody className="table-body">
      {data && data.length > 0 ? (
        data.map((row) => (
          <tr key={`tr-${row.key}`}>
            {keys.map((key) => (
              <td key={`td-${key}`}>{row[key]}</td>
            ))}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={keys.length}>No Data Found!</td>
        </tr>
      )}
    </tbody>
  );
};

Body.propTypes = {
  data: PropTypes.array,
  keys: PropTypes.array,
};

export default Body;
