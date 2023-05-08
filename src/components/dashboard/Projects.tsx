import React from "react";
import Link from "next/link";
import {
  CardContent,
  Typography,
  Grid,
  Rating,
  Tooltip,
  Fab,
} from "@mui/material";
import { Stack } from "@mui/system";
import { IconBasket } from "@tabler/icons-react";
import Image from "next/image";


const Blog = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Typography component={Link} href="/" >
          hello
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Blog;
