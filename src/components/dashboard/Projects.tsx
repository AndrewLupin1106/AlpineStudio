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
      <Grid item xs={12} md={12} lg={12} style={{ paddingBottom: '2vw', borderBottom: '1px black solid' }}>
        <Typography style={{ fontSize: '3.33vw', color: 'black', lineHeight: '140%', fontFamily: 'system-ui', fontWeight: 'bold', marginLeft: '3vw' }}>
          Проекты, которыми мы гордимся
        </Typography>
      </Grid>
      <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <Grid container>
              <Grid item xs={12} md={11} lg={11} style={{ backgroundImage: 'url(images/projects/refocus.png)', backgroundSize: 'cover', margin: '3vw auto', height: '36.8vw' }}>
                <Grid container>
                  <Grid item xs={12} md={12} lg={12}>
                    <Link href="#" className="projectTag">
                      Fullstack-разработка
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>

                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  );
};

export default Blog;
