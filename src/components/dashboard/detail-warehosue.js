import React, {useState, useEffect} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useRouter } from 'next/router';
import {
  Box,
  Card,
  CardHeader,
  CircularProgress
} from '@mui/material';
// Data Grid
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import servicesApi from 'src/services/services.api';

export const DetailWarehouseComponent = (props) => {

  // STATE  
  const [dataDetailWarehouse, setDataDetailWarehouse] = useState([]);
  const router = useRouter().query;

  useEffect(() => {
    async function getWerehouseById() {
      await servicesApi.getDataWarehouseById(router.id)
      .then((res) => {
        // GET DATA
        const dataArr = res.data;

        setDataDetailWarehouse([dataArr]);
      })
      .catch(() => {
        console.clear()
      })
    }

    if(router && router.id){
        getWerehouseById();
    }
  
    return () => {
      setDataDetailWarehouse([]);
    }
  }, [router])
  
  // HEADER GRID DATA
  const columns = [
    { 
      field: 'WarehouseID', 
      headerName: 'Warehouse ID', 
      width: 150 
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
    dataDetailWarehouse.length !== 0 ?
    <Card {...props}>
      <CardHeader title={`Detail Location Warehouse - ${router.id}`} />
      <PerfectScrollbar>
        <Box sx={{ width: '100%', height: 350 }}>
          {
            dataDetailWarehouse.length !== 0 && 
            <DataGrid 
            rows={dataDetailWarehouse} 
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
