import React, { useMemo } from "react";
import { useTable } from "react-table";
import fakeData2 from "../data.json";

const Tables = () => {
  console.log(fakeData2);
  const data = useMemo(() => fakeData2, []);
  const columns = useMemo(
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
        Cell: ({ value }) => {
          const dateTime = new Date(value);
          const formattedDate = dateTime.toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          });
          const formattedTime = dateTime.toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          });
          return <span>{`${formattedDate}, ${formattedTime}`}</span>;
        },
      },
      {
        Header: "ДатаВремя_ПланПо",
        accessor: "date_time_end",
        Cell: ({ value }) => {
          const dateTime = new Date(value);
          const formattedDate = dateTime.toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          });
          const formattedTime = dateTime.toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          });
          return <span>{`${formattedDate}, ${formattedTime}`}</span>;
        },
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
  );
};

export default Tables;
