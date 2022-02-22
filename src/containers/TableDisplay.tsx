import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "sno", headerName: "S.No", width: 10 },
  { field: "product", headerName: "Product", width: 20 },
  { field: "price", headerName: "Price", width: 20 },
  { field: "about", headerName: "About", width: 30 },
  { field: "category", headerName: "Category", width: 10 },
  { field: "actions", headerName: "Update/Delete", width: 70 },
];

const rows = [
  {
    id: 1,
    sno: 1,
    product: "Snow",
    price: 35,
    about: "Jon",
    category: "category",
    actions: "actions",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
