import React from "react";
import PropTypes from "proptypes";

const Body = ({ data = [] }) => {
  return (
    <tbody className="table-body">
      {data.map((row) => (
        <tr key={row.key}>
          <td>{row.name}</td>
          <td>{row.age}</td>
          <td>{row.address}</td>
        </tr>
      ))}
    </tbody>
  );
};

Body.propTypes = {
  data: PropTypes.array,
};

export default Body;
