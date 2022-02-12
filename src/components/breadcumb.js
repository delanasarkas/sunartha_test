import React from 'react'
import { Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';

const Breadcumb = () => {
  const router = useRouter();

  return (
    <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          <a>
            Home
          </a>
        </Link>
        <Link
            underline="hover"
            color="inherit"
            href="/"
        >
          <a>
            Warehouse
          </a>
        </Link>
        {
          (router && router.pathname === '/detail-warehouse') &&
          <Link
            underline="hover"
            color="inherit"
            href={`/detail-warehouse?id=${router.query.id}`}
          >
            <a>
              Detail Location Warehouse - {router.query.id}
            </a>
          </Link>
        }
    </Breadcrumbs>
  )
}

export default Breadcumb