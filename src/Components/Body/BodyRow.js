import { useState } from "react";
import PropTypes from "proptypes";
import classNames from "classnames";

import "./styles.css";

function BodyRow({ row, keys, childrenCount, depth }) {
  const [isExpanded, setExpand] = useState(false);

  return (
    <>
      <tr
        className={classNames(["table-row", row.children ? "expandable" : ""])}
      >
        {keys.map((key, index) => (
          <td key={`td-${key}`}>
            {index === 0 && (
              <span>
                {row.children ? (
                  <label
                    className={classNames([
                      "table-row-expand-icon",
                      isExpanded ? "" : "table-row-expand-icon-collapsed",
                    ])}
                    style={{ marginLeft: `${16 * depth}px` }}
                    onClick={() => setExpand(!isExpanded)}
                  />
                ) : (
                  <label
                    className="table-row-expand-icon table-row-expand-icon-spaced"
                    style={{ marginLeft: `${16 * depth}px` }}
                  />
                )}
              </span>
            )}

            <span>{row[key]}</span>
          </td>
        ))}
      </tr>
      {row.children &&
        isExpanded &&
        row.children
          .slice(0, childrenCount)
          .map((child) => (
            <BodyRow
              key={`child-${child.key}`}
              row={child}
              keys={keys}
              depth={depth + 1}
            />
          ))}
    </>
  );
}

BodyRow.propTypes = {
  row: PropTypes.object,
  keys: PropTypes.array,
  childrenCount: PropTypes.number,
  depth: PropTypes.number,
};

export default BodyRow;
