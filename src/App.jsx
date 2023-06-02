import React, { useMemo } from "react";
import "./App.css";
import fakeData from "./MOCK _DATA.json";
import { useTable } from "react-table";
import fakeData2 from "./data.json";

function App() {
  console.log(fakeData2);
  const data = useMemo(() => fakeData2, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Сотрудник",
        accessor: "employee",
      },
      {
        Header: "Магазин",
        accessor: "shop",
      },
      {
        Header: "Роль",
        accessor: "role",
      },
      {
        Header: "ДатаВремя_ПланС",
        accessor: "date_time_start",
      },
      {
        Header: "ДатаВремя_ПланПо",
        accessor: "date_time_end",
      },
    ],
    []
  );
  // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header: "ID",
  //       accessor: "id",
  //     },
  //     {
  //       Header: "First Name",
  //       accessor: "first_name",
  //     },
  //     {
  //       Header: "Last Name",
  //       accessor: "last_name",
  //     },
  //     {
  //       Header: "Email",
  //       accessor: "email",
  //     },
  //     {
  //       Header: "Gender",
  //       accessor: "gender",
  //     },
  //     {
  //       Header: "University",
  //       accessor: "university",
  //     },
  //   ],
  //   []
  // );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
