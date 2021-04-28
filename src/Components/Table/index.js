import { useCallback, useState } from "react";
import PropTypes from "proptypes";

import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import "./styles.css";

const Table = ({ columns = [], dataSource = [], extraOptions }) => {
  const { pageSize = 5, childrenCount = 3 } = extraOptions;
  const [data, setData] = useState(dataSource);
  const [curPage, setCurrentPage] = useState(1);

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
          <Body
            data={data.slice((curPage - 1) * pageSize, curPage * pageSize)}
            keys={columns.map((col) => col.key)}
            childrenCount={childrenCount}
          />
        </table>
      </div>
      <Footer
        curPage={curPage}
        total={data.length}
        pageSize={pageSize}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
  extraOptions: PropTypes.object,
};

export default Table;
