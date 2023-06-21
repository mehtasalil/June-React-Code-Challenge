import { Label } from "@ui5/webcomponents-react";

const tableData = [
  {
    id: 1,
    title: "<Update Ticket Title>",
    status: "Completed",
  },
  {
    id: 2,
    title: "<Update Ticket Title>",
    status: "In Progress",
  },
  {
    id: 3,
    title: "<Update Ticket Title>",
    status: "Not Started",
  },
  {
    id: 4,
    title: "<Update Ticket Title>",
    status: "Blocked",
  },
];

function Solution() {
  return (
    <>
      <Label>Display table below</Label>
      {/* Put table component here */}
    </>
  );
}

export default Solution;
