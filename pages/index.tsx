import type { ReactElement } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Projects from '../src/components/dashboard/Projects';
import MainSection from '../src/components/dashboard/MainSection';

// components
import FullLayout from '../src/layouts/full/FullLayout';

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
        <MainSection />
      </Grid>
      <Grid item xs={12} lg={12}>
        <Projects />
      </Grid>
    </Grid>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};