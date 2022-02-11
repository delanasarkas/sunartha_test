import React from 'react'
import { Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/dist/client/link';

const Breadcumb = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
            Home
        </Link>
        <Link
            underline="hover"
            color="inherit"
            href="/"
        >
            Warehouse
        </Link>
    </Breadcrumbs>
  )
}

export default Breadcumb