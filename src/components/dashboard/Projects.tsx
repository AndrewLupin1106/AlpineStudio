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
                  <Grid item xs={12} md={4} lg={4} style={{ backgroundColor: 'white', width: '36.77vw', height: '16.14vw', margin: '14.6vw 0 0 60vw', borderRadius: '40px' }}>
                    <Grid container>
                      <Grid item xs={12} md={8} lg={8}>
                        <Link href="#" className="projectTagBorder" style={{ width: '30%' }}>
                          Refocus
                        </Link>
                      </Grid>
                      <Grid item xs={12} md={3} lg={3} style={{ marginLeft: '1vw' }}>
                        <Link href="#" className="projectTagBorder">
                          2022
                        </Link>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12} md={9} lg={9} style={{ margin: '9vw 0 0 1.5vw' }}>
                        <Link href="#" style={{ fontSize: '1.8vw', textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                          Путеводитель по IT
                        </Link>
                      </Grid>
                      <Grid item xs={12} md={3} lg={3} style={{ marginLeft: '2vw' }}>
                        <Link href="#">
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={11} lg={11} style={{ backgroundImage: 'url(images/projects/югвидео.png)', backgroundSize: 'cover', margin: 'auto', height: '36.8vw' }}>
                <Grid container>
                  <Grid item xs={12} md={12} lg={12}>
                    <Link href="#" className="projectTag">
                      Сайт «Под ключ»
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4} style={{ backgroundColor: 'white', width: '36.77vw', height: '16.14vw', margin: '14.6vw 0 0 60vw', borderRadius: '40px' }}>
                    <Grid container>
                      <Grid item xs={12} md={8} lg={8}>
                        <Link href="#" className="projectTagBorder" style={{ width: '30%' }}>
                          Югвидео
                        </Link>
                      </Grid>
                      <Grid item xs={12} md={3} lg={3} style={{ marginLeft: '1vw' }}>
                        <Link href="#" className="projectTagBorder">
                          2022
                        </Link>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12} md={10} lg={10} style={{ margin: '7vw 0 0 1.5vw' }}>
                        <Link href="#" style={{ fontSize: '1.8vw', textDecoration: 'none', color: 'black', fontWeight: 'bold', lineHeight: 'normal' }}>
                          Компания, занимающаяся системами безопасности
                        </Link>
                      </Grid>
                      <Grid item xs={12} md={2} lg={2} style={{ marginLeft: '2vw' }}>
                        <Link href="#">
                        </Link>
                      </Grid>
                    </Grid>
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
