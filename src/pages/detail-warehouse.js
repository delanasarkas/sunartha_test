import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { DetailWarehouseComponent } from '../components/dashboard/detail-warehosue';
import { DashboardLayout } from '../components/dashboard-layout';
import Breadcumb from '../components/breadcumb'

const Dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard | Detail Location Warehouse
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Breadcumb />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <DetailWarehouseComponent />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
