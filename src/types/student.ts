import { GridColDef } from "@mui/x-data-grid";

export interface StudentRow {
    id: number;
    lastName: string;
    firstName: string | null;
    age: number | null;
    classroom?: number;
    attendance?: string;
  }
  
  export interface Column extends Omit<GridColDef, 'field' | 'headerName' | 'width'> {
    field: string;
    headerName: string;
    width: number;
  }
  

  export interface StudentDataGridProps {
    rows: StudentRow[];
    columns: Column[];
    page: number;
    rowsPerPage: number;
    onPageChange: (newPage: number) => void;
    onRowClick?: (row: StudentRow) => void;
    actionButtons?: (row: StudentRow) => React.ReactNode;
  }
  