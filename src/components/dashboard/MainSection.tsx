import React from "react";
import Link from "next/link";
import {
  Typography,
  Grid
} from "@mui/material";

const Blog = () => {
  return (
    <Grid container spacing={3} >
      <Grid item xs={12} md={12} lg={12} style={{ backgroundImage: 'url(images/backgrounds/background.png)', backgroundSize: '100%', width: '100%', height: '64.0625vw' }}>
        <Grid container spacing={2} style={{ borderBottom: 'solid #D9D9D9 1px' }}>
          <Grid item xs={12} md={9} lg={9} style={{ color: 'white', margin: '13vw 4.16vw 6.5vw 1vw', zIndex: '2' }}>
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
            <Typography style={{ marginTop: '10vw' }}>
              <Link href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1.66vw' }}>
                Креативная студия дизайна и разработки.
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} lg={3} style={{ 
              position: 'absolute',
              left: '58.4%',
              right: '5.5%',
              top: '33.39%',
              bottom: '44.47%',
              zIndex: '1',
              display: 'flex',
              width: '40.104vw',
              height: '42.448vw'
           }}>
            <img
              src='images/profile/designer.png'
              alt="img"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12} style={{ backgroundImage: 'url(images/backgrounds/background2.png)', backgroundSize: '100%', width: '100%', height: '56.4vw' }}>
        <Grid container>
           <Grid item xs={12} md={12} lg={12}>
            <Grid container>
              <Grid item xs={12} md={4} lg={4} style={{ color: 'white', marginLeft: '1vw' }}>
                <Typography style={{ fontSize: '1.25vw', lineHeight: 'normal', fontFamily: 'system-ui' }}>
                  Передадим ценности вашей компании с помощью разработки и продвижения сайта / сервиса / приложения
                </Typography>
              </Grid>
            </Grid>
           </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Blog;
