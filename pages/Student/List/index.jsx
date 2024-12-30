import React from "react";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Typography, Box, styled } from "@mui/material";

import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

import { DashboardLayout } from "@components/Global/Layout";

export const genders = [
  { name: "male", label: "Male", icon: <MaleIcon /> },
  { name: "female", label: "Female", icon: <FemaleIcon /> },
];

const columns = [
  {
    field: "id",
    headerName: "ID",
    minWidth: 70,
    flex: 0.5,
    renderCell: (params) => params.row.id || "N/A",
  },
  {
    field: "name",
    headerName: "Student Name",
    minWidth: 150,
    flex: 1,
    renderCell: (params) => params.row.name || "N/A",
  },
  {
    field: "parentName",
    headerName: "Parent Name",
    minWidth: 150,
    flex: 1,
    renderCell: (params) => params.row.parentName || "N/A",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    minWidth: 100,
    flex: 0.5,
    align: "left",
    headerAlign: "left",
    renderCell: (params) =>
      params.row.age !== null && params.row.age !== undefined
        ? params.row.age
        : "N/A",
  },
  {
    field: "grade",
    headerName: "Grade",
    minWidth: 100,
    flex: 0.5,
    renderCell: (params) => params.row.grade || "N/A",
  },
  {
    field: "mobile",
    headerName: "Mobile Number",
    minWidth: 150,
    flex: 1,
    renderCell: (params) => params.row.mobile || "N/A",
  },
  {
    field: "gender",
    headerName: "Gender",
    headerAlign: "center",
    align: "center",
    minWidth: 100,
    flex: 0.5,
    renderCell: (params) => {
      switch (params.value) {
        case "male":
          return <MaleIcon />;
        case "female":
          return <FemaleIcon />;
        default:
          return "N/A";
      }
    },
  },
  {
    field: "subjects",
    headerName: "Subjects",
    minWidth: 200,
    flex: 2,
    renderCell: (params) =>
      params.value && params.value.length > 0 ? params.value.join(", ") : "N/A",
  },
];

const rows = [
  {
    id: 1,
    name: "Snow",
    parentName: "Jon",
    age: 35,
    grade: "4A",
    mobile: "123-456-7890",
    subjects: ["Math", "Science"],
    gender: "male",
  },
  {
    id: 2,
    name: "Lannister",
    parentName: "Cersei",
    age: 42,
    grade: "7A",
    mobile: "234-567-8901",
    subjects: ["History", "English"],
    gender: "female",
  },
  {
    id: 3,
    name: "Lannister",
    parentName: "Jaime",
    age: 45,
    grade: "2A",
    mobile: "345-678-9012",
    subjects: ["Math", "Sports"],
    gender: "male",
  },
  {
    id: 4,
    name: "Stark",
    parentName: "Arya",
    age: 16,
    grade: "10C",
    mobile: "456-789-0123",
    subjects: ["Science", "English"],
    gender: "female",
  },
  {
    id: 5,
    name: "Targaryen",
    parentName: "Daenerys",
    age: null,
    grade: "10B",
    mobile: "567-890-1234",
    subjects: ["History", "Math"],
    gender: "female",
  },
  {
    id: 6,
    name: "Melisandre",
    parentName: null,
    age: 150,
    grade: "4A",
    mobile: "678-901-2345",
    subjects: ["Magic", "History"],
    gender: "other",
  },
  {
    id: 7,
    name: "Clifford",
    parentName: "Ferrara",
    age: 44,
    grade: "7A",
    mobile: "789-012-3456",
    subjects: ["Science", "English"],
    gender: "male",
  },
  {
    id: 8,
    name: "Frances",
    parentName: "Rossini",
    age: 36,
    grade: "1A",
    mobile: "890-123-4567",
    subjects: ["Art", "Music"],
    gender: "female",
  },
  {
    id: 9,
    name: "Roxie",
    parentName: "Harvey",
    age: 65,
    grade: "4B",
    mobile: "901-234-5678",
    subjects: ["English", "Math"],
    gender: "female",
  },
  {
    id: 10,
    name: "Morgan",
    parentName: "Smith",
    age: 29,
    grade: "8A",
    mobile: "111-222-3333",
    subjects: ["Physics", "Chemistry"],
    gender: "male",
  },
  {
    id: 11,
    name: "Blake",
    parentName: "Johnson",
    age: 32,
    grade: "9B",
    mobile: "222-333-4444",
    subjects: ["Biology", "Math"],
    gender: "male",
  },
  {
    id: 12,
    name: "Taylor",
    parentName: "Brown",
    age: 27,
    grade: "6C",
    mobile: "333-444-5555",
    subjects: ["History", "Literature"],
    gender: "female",
  },
  {
    id: 13,
    name: "Jordan",
    parentName: "Davis",
    age: 20,
    grade: "5A",
    mobile: "444-555-6666",
    subjects: ["Math", "Science"],
    gender: "male",
  },
  {
    id: 14,
    name: "Harper",
    parentName: "Wilson",
    age: 18,
    grade: "3B",
    mobile: "555-666-7777",
    subjects: ["Geography", "Sports"],
    gender: "female",
  },
  {
    id: 15,
    name: "Quinn",
    parentName: "Miller",
    age: 34,
    grade: "11A",
    mobile: "666-777-8888",
    subjects: ["Physics", "Chemistry"],
    gender: "other",
  },
  {
    id: 16,
    name: "Carter",
    parentName: "Taylor",
    age: 31,
    grade: "2C",
    mobile: "777-888-9999",
    subjects: ["Math", "English"],
    gender: "male",
  },
  {
    id: 17,
    name: "Alex",
    parentName: "Anderson",
    age: 39,
    grade: "9A",
    mobile: "888-999-0000",
    subjects: ["History", "Biology"],
    gender: "female",
  },
  {
    id: 18,
    name: "Avery",
    parentName: "Thomas",
    age: 28,
    grade: "7C",
    mobile: "999-000-1111",
    subjects: ["Chemistry", "Physics"],
    gender: "other",
  },
  {
    id: 19,
    name: "Bailey",
    parentName: "Jackson",
    age: 40,
    grade: "10A",
    mobile: "000-111-2222",
    subjects: ["English", "Art"],
    gender: "female",
  },
  {
    id: 20,
    name: "Dakota",
    parentName: "White",
    age: 22,
    grade: "1B",
    mobile: "123-321-4567",
    subjects: ["Music", "Sports"],
    gender: "male",
  },
];

const paginationModel = { page: 0, pageSize: 10 };

const TableHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  paddingBottom: theme.spacing(5),
}));

export const StudentList = () => {
  return (
    <DashboardLayout>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        slots={{
          toolbar: () => (
            <TableHeader>
              <Typography variant="h5">Student's List</Typography>
              <GridToolbarQuickFilter
                placeholder="Search student"
                sx={{
                  ".MuiInputBase-root": {
                    border: "1px solid",
                    borderColor: "border.main",
                    borderRadius: 20,
                    px: 5,
                    py: 2,

                    "&:before, &:after": {
                      display: "none",
                    },
                  },
                }}
              />
            </TableHeader>
          ),
        }}
      />
    </DashboardLayout>
  );
};
