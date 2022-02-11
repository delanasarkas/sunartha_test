import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';
// Data Grid
import { DataGrid } from '@mui/x-data-grid';
const rows = [
  { 
    id: 1, 
    branch: 'Hello', 
    active: 'World' ,
    desc: 'World' ,
    last_sync: 'World' ,
  },
  { 
    id: 1, 
    branch: 'Hello', 
    active: 'World' ,
    desc: 'World' ,
    last_sync: 'World' ,
  },
  { 
    id: 1, 
    branch: 'Hello', 
    active: 'World' ,
    desc: 'World' ,
    last_sync: 'World' ,
  },
  { 
    id: 1, 
    branch: 'Hello', 
    active: 'World' ,
    desc: 'World' ,
    last_sync: 'World' ,
  },
  { 
    id: 1, 
    branch: 'Hello', 
    active: 'World' ,
    desc: 'World' ,
    last_sync: 'World' ,
  },
  { 
    id: 1, 
    branch: 'Hello', 
    active: 'World' ,
    desc: 'World' ,
    last_sync: 'World' ,
  },
];

const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 100 
  },
  { 
    field: 'branch', 
    headerName: 'Branch', 
    width: 200 ,
  },
  { 
    field: 'active', 
    headerName: 'Active', 
    width: 200 ,
  },
  { 
    field: 'desc', 
    headerName: 'Desc', 
    width: 200 ,
  },
  { 
    field: 'last_sync', 
    headerName: 'Last Sync', 
    width: 150 ,
  },
];

export const DashboardComponent = (props) => (
  <Card {...props}>
    <CardHeader title="Warehouse" />
    <PerfectScrollbar>
      <Box sx={{ width: '100%', height: 400 }}>
        <DataGrid 
        rows={rows} 
        columns={columns} 
        sx={{
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}/>
      </Box>
    </PerfectScrollbar>
  </Card>
);
