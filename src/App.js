import Table from "./Components/Table";

import "./App.css";
import dataSource from "./mockdata.json";

const columns = [
  {
    title: "Name",
    key: "name",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) =>
      record.name.toLowerCase().includes(value.toLowerCase()),
    sorter: (a, b) => (a.name > b.name ? 1 : -1),
  },
  {
    title: "Age",
    key: "age",
    sorter: (a, b) => (a.age > b.age ? 1 : -1),
  },
  {
    title: "Address",
    key: "address",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) =>
      record.address.toLowerCase().includes(value.toLowerCase()),
    sorter: (a, b) => (a.address > b.address ? 1 : -1),
  },
];

const extraOptions = {
  childrenCount: 3,
  pageSize: 5,
};

function App() {
  return (
    <div className="App">
      <Table
        columns={columns}
        dataSource={dataSource}
        extraOptions={extraOptions}
      />
    </div>
  );
}

export default App;
