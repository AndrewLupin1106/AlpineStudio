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
    <Grid container spacing={3} >
      <Grid xs={12} md={12} lg={12} style={{ backgroundImage: 'url(images/backgrounds/background.png)', backgroundSize: 'cover', width: '100%', height: '76.875rem' }}>
        <Grid xs={12} md={10} lg={10} style={{ color: 'white', margin: '27rem 5rem' }}>
          <Typography className="mainDescription">
            Комплексное&nbsp;
          </Typography>
          <Typography className="mainDescription">
            развитие&nbsp;
          </Typography>
          <Typography className="mainDescription">
            бизнеса&nbsp;
          </Typography>
          <Typography className="mainDescription">
            с упором на&nbsp;
          </Typography>
          <Typography className="mainDescription">
            Маректинг,&nbsp;
          </Typography>
          <Typography className="mainDescription">
            Бренд&nbsp;
          </Typography>
          <Typography className="mainDescription">
            &&nbsp;
          </Typography>
          <Typography className="mainDescription">
            Автоматизацию.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Blog;
