import React from "react";
import PropTypes from "proptypes";

import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import "./styles.css";

const Table = ({ columns = [], dataSource = [] }) => {
  return (
    <div>
      <div className="table-container">
        <table className="table-content">
          <Header columns={columns} />
          <Body data={dataSource} />
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
