import React, { useCallback, useState } from "react";
import PropTypes from "proptypes";

import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import "./styles.css";

const Table = ({ columns = [], dataSource = [] }) => {
  const [data, setData] = useState(dataSource);

  const onChangeFilter = useCallback(
    (option) => {
      let newData = [];
      if (option.filter) {
        newData = data.filter((one) => option.onFilter(option.filter, one));
      } else {
        newData = [...dataSource];
      }
      if (option.direction) {
        newData = newData.sort((a, b) =>
          option.direction === "descend"
            ? -1 * option.sorter(a, b)
            : option.sorter(a, b)
        );
      }
      setData([...newData]);
    },
    [data, dataSource]
  );

  return (
    <div>
      <div className="table-container">
        <table className="table-content">
          <Header
            columns={columns}
            onChange={(option) => onChangeFilter(option)}
          />
          <Body data={data} keys={columns.map((col) => col.key)} />
        </table>
      </div>
      <Footer />
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
};

export default Table;
