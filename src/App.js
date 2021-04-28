import Table from "./Components/Table";

import "./App.css";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) =>
      record.name.toLowerCase().includes(value.toLowerCase()),
    sorter: (a, b) => (a.name > b.name ? 1 : -1),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => (a.age > b.age ? 1 : -1),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    filterMultiple: false,
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) =>
      record.address.toLowerCase().includes(value.toLowerCase()),
    sorter: (a, b) => (a.address > b.address ? 1 : -1),
    sortDirections: ["descend", "ascend"],
  },
];

function App() {
  return (
    <div className="App">
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}

export default App;
