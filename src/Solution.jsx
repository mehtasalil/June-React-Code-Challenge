import React, { useState, useRef } from "react";
import {
  Label,
  AnalyticalTable,
  Table,
  TableColumn,
  TableRow,
  TableCell,
  Badge,
  Button,
  FlexBox,
  ButtonDesign,
  Toast,
} from "@ui5/webcomponents-react";
import AddRowDialog from "./Components/AddRowDialog";
import { fullTableData } from "./utils/data";
import { getColorFromString } from "./utils/utils";

const deleteRow = (id) => {
  // const getIndex = (tableRow) => (tableRow.id = id);
  // const indexDelete = fullTableData.findIndex(getIndex);
  // fullTableData.splice(indexDelete, 1);
};

const tableData = [
  {
    id: 1,
    title: "APIs",
    status: "Completed",
  },
  {
    id: 2,
    title: "React",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Mobile Apps",
    status: "Not Started",
  },
];

const tableColumns = [
  {
    Header: "ID",
    accessor: "id", // String-based value accessors!
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "",
    accessor: "action",
  },
];

function Solution() {
  const toast = useRef(null);

  const [toastText, setToastText] = useState("");

  const [rows, setRows] = useState(createRows(0, 10));

  function createRows(startIndex, indexOffset) {
    return fullTableData.slice(startIndex, indexOffset).map((tableLine) => (
      <TableRow key={tableLine.ID}>
        <TableCell
          style={{
            borderRightStyle: "solid",
            borderRightColor: "#f2f2f2",
          }}
        >
          <Label>{tableLine.id}</Label>
        </TableCell>
        <TableCell
          style={{
            borderRightStyle: "solid",
            borderRightColor: "#f2f2f2",
          }}
        >
          <Label>{tableLine.title}</Label>
        </TableCell>
        <TableCell
          style={{
            borderRightStyle: "solid",
            borderRightColor: "#f2f2f2",
          }}
        >
          <Badge
            colorScheme={tableLine.id % 11}
            style={{
              color: getColorFromString(tableLine.title),
            }}
          >
            {tableLine.status}
          </Badge>
        </TableCell>
        <TableCell>
          <Button
            onClick={() => {
              const getIndex = (tableRow) => {
                if (tableRow.id === tableLine.id) {
                  return tableRow;
                }
              };
              const indexDelete = fullTableData.findIndex(getIndex);
              fullTableData.splice(indexDelete, 1);
              setRows((prev) => createRows(0, 10));
              setToastText(`Line with ID ${tableLine.id} deleted`);
              toast.current.show();
            }}
            icon="delete"
            design={ButtonDesign.Transparent}
          />
        </TableCell>
      </TableRow>
    ));
  }

  const onLoadMore = () => {
    setRows((prev) => [...prev, ...createRows(prev.length, prev.length + 5)]);
  };

  const addRow = (newRow) => {
    if (fullTableData.length > 0) {
      const newTable = fullTableData.toReversed();
      newRow.id = newTable[0].id + 1;
    } else {
      newRow.id = 1;
    }
    fullTableData.push(newRow);
    setRows((prev) => createRows(0, 10));
    setToastText(`Line with ID ${newRow.id} added`);
    toast.current.show();
  };

  return (
    <>
      <Label>Display table below</Label>
      <p />
      <FlexBox justifyContent="End" direction="Row">
        <AddRowDialog addNewRow={addRow} />
      </FlexBox>
      <p />
      <Table
        onLoadMore={onLoadMore}
        noDataText={"No rows to display"}
        growing="Scroll"
        style={{
          padding: 10,
          backgroundColor: "pink",
          width: "97%",
          margin: 5,
          alignItems: "center",
        }}
        columns={
          <>
            {tableColumns.map((tableColumn) => (
              <TableColumn
                key={tableColumn.accessor}
                style={{
                  borderStyle: "solid",
                  borderColor: "#f2f2f2",
                }}
              >
                <Label>{tableColumn.Header}</Label>
              </TableColumn>
            ))}
          </>
        }
        //      children={<>{rows}</>}
      >
        {rows}
      </Table>
      <p />
      <Toast ref={toast}>{toastText}</Toast>
      {/* <AnalyticalTable
        data={fullTableData}
        columns={tableColumns}
        visibleRows={10}
        alternateRowColor
      /> */}
    </>
  );
}

export default Solution;
