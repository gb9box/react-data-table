# React Data Table

Reusable react data table component without using any third-party libraries.

## Key Features

- Sorting
- Filtering
- Data Grouping
- Pagination

## Requirements

It requires the following be installed in your project:

- Node v10+
- React 17.0.2+

## Installation

React Data Table no need install third-party libraries.

```sh
npm install
```

or

```sh
yarn install
```

## Usage

```js
import Table from "./components/Table";

const columns = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
];

const dataSource = [
  { name: "Jack", age: 28, address: "some where", key: "1" },
  { name: "Rose", age: 36, address: "some where", key: "2" },
];

React.render(<Table columns={columns} dataSource={dataSource} />, mountNode);
```

## API

### Properties

| Name         | Type     | Default                          | Description                      |
| ------------ | -------- | -------------------------------- | -------------------------------- |
| columns      | Object[] |                                  | The columns config of table      |
| dataSource   | Object[] |                                  | data record array to be rendered |
| extraOptions | Object   | { childrenCount: 3, pageSize: 5} | table custom props               |

### Column Props

| Name     | Type                    | Default | Description                                   |
| -------- | ----------------------- | ------- | --------------------------------------------- |
| key      | String                  |         | key of this column                            |
| title    | React Node              |         | title of this column                          |
| sorter   | Function(a, b)          |         | Set custom sort props per each header cell.   |
| onFilter | Function(value, record) |         | Set custom filter props per each header cell. |

### Sorting

Use `sorter` to make a column sortable. `sorter` can be a function of the type `function(a, b) { ... }` for sorting data locally.

```js
import Table from "./components/Table";

const columns = [
  {
    title: "Name",
    key: "name",
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
    sorter: (a, b) => (a.address > b.address ? 1 : -1),
  },
];

const dataSource = [
  { name: "Jack", age: 28, address: "some where", key: "1" },
  { name: "Rose", age: 36, address: "some where", key: "2" },
];

React.render(<Table columns={columns} dataSource={dataSource} />, mountNode);
```

### Filtering

Use `onFilter` to generate a filter menu in columns, `onFilter` to determine filtered result.

```js
import Table from "./components/Table";

const columns = [
  {
    title: "Name",
    key: "name",
    sorter: (a, b) => (a.name > b.name ? 1 : -1),
    onFilter: (value, record) =>
      record.name.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: "Age",
    key: "age",
    sorter: (a, b) => (a.age > b.age ? 1 : -1),
  },
  {
    title: "Address",
    key: "address",
    sorter: (a, b) => (a.address > b.address ? 1 : -1),
    onFilter: (value, record) =>
      record.address.toLowerCase().includes(value.toLowerCase()),
  },
];

const dataSource = [
  { name: "Jack", age: 28, address: "some where", key: "1" },
  { name: "Rose", age: 36, address: "some where", key: "2" },
];

React.render(<Table columns={columns} dataSource={dataSource} />, mountNode);
```

### Grouping Data

Display group data in Table when there is a field key `children` in `dataSource`.

Use `childrenCount` in `extraOptions` to make a limit for each grouped row’s children to display.

```js
import Table from "./components/Table";

const columns = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
];

const dataSource = [
  {
    name: "Jack",
    age: 28,
    address: "some where",
    key: "1",
    children: [
      { name: "Jack 10", age: 36, address: "some where", key: "10" },
      { name: "Jack 11", age: 36, address: "some where", key: "11" },
      { name: "Jack 12", age: 36, address: "some where", key: "12" },
      {
        name: "Jack 13",
        age: 36,
        address: "some where",
        key: "13",
        children: [
          { name: "Jack 130", age: 36, address: "some where", key: "130" },
          { name: "Jack 131", age: 36, address: "some where", key: "131" },
          { name: "Jack 132", age: 36, address: "some where", key: "132" },
        ],
      },
    ],
  },
  { name: "Rose", age: 36, address: "some where", key: "2" },
];

const extraOption = {
  childrenCount: 5, // determine limit of children count per each grouped rows.
};

React.render(
  <Table
    columns={columns}
    dataSource={dataSource}
    extraOptions={extraOptions}
  />,
  mountNode
);
```

### Pagination

Use `pageSize` in `extraOptions` to determine row count per page.

```js
const extraOption = {
  pageSize: 10,
};

React.render(
  <Table
    columns={columns}
    dataSource={dataSource}
    extraOptions={extraOptions}
  />,
  mountNode
);
```

## Development

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
