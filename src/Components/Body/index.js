import PropTypes from "proptypes";

import BodyRow from "./BodyRow";
import "./styles.css";

const Body = ({ data = [], keys = [], childrenCount }) => {
  return (
    <tbody className="table-body">
      {data && data.length > 0 ? (
        data.map((row) => (
          <BodyRow
            key={`tr-${row.key}`}
            row={row}
            keys={keys}
            childrenCount={childrenCount}
            depth={0}
          />
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
  childrenCount: PropTypes.number,
};

export default Body;
