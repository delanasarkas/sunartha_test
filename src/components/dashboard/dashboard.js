import React, {useState, useEffect} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';
import Link from 'next/link'
import {
  Box,
  Card,
  CardHeader,
  CircularProgress
} from '@mui/material';
// Data Grid
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import servicesApi from 'src/services/services.api';

export const DashboardComponent = (props) => {

  // STATE
  const [dataWarehouse, setDataWarehouse] = useState([]);

  useEffect(() => {
    async function getWerehouse() {
      await servicesApi.getDataWarehouse()
      .then((res) => {
        // GET DATA
        const dataArr = res.data;

        setDataWarehouse(dataArr);
      })
      .catch(() => {
        console.clear()
      })
    }

    getWerehouse();
  
    return () => {
      setDataWarehouse([]);
    }
  }, [])
  
  // HEADER GRID DATA
  const columns = [
    { 
      field: 'WarehouseID', 
      headerName: 'ID', 
      width: 150 ,
      renderCell: (params) => {
        return <a href={`/detail-warehouse?id=${params.row.WarehouseID}`}>{params.row.WarehouseID}</a>
      },
    },
    { 
      field: 'Branch', 
      headerName: 'Branch', 
      width: 200 ,
    },
    { 
      field: 'Description', 
      headerName: 'Desc', 
      width: 300 ,
    },
    { 
      field: 'LastSync', 
      headerName: 'Last Sync', 
      width: 200 ,
    },
  ];

  return (
    dataWarehouse.length !== 0 ?
    <Card {...props}>
      <CardHeader title="Warehouse" />
      <PerfectScrollbar>
        <Box sx={{ width: '100%', height: 350 }}>
          {
            dataWarehouse.length !== 0 && 
            <DataGrid 
            rows={dataWarehouse} 
            columns={columns} 
            getRowId={(row) => row.WarehouseID}
            components={{ Toolbar: GridToolbar }}
            sx={{
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
            }}/>
          }
        </Box>
      </PerfectScrollbar>
    </Card>
    :
    <Box sx={{ textAlign: 'center', marginY: 10 }}>
        <CircularProgress />
    </Box>
  )
};
