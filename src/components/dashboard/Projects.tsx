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
            <Grid container spacing={1}>
              <Grid item xs={11} md={11} lg={11} style={{ backgroundImage: 'url(images/projects/refocus.png)', backgroundSize: '100%', margin: '3vw auto', height: '36.8vw' }}>
                <Grid container>
                  <Grid item xs={12} md={12} lg={12}>
                    <Link href="#" className="projectTag">
                      Fullstack-разработка
                    </Link>
                  </Grid>
                  <Grid item xs={8} md={4} lg={4} style={{ backgroundColor: 'white', width: '36.77vw', height: '16.14vw', margin: '14.6vw 0 0 60vw', borderRadius: '40px' }}>
                    <Grid container>
                      <Grid item xs={8} md={8} lg={8}>
                        <Link href="#" className="projectTagBorder" style={{ width: '30%' }}>
                          Refocus
                        </Link>
                      </Grid>
                      <Grid item xs={3} md={3} lg={3} style={{ marginLeft: '1vw' }}>
                        <Link href="#" className="projectTagBorder">
                          2022
                        </Link>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={9} md={9} lg={9} style={{ margin: '9vw 0 0 1.5vw' }}>
                        <Link href="#" style={{ fontSize: '1.8vw', textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                          Путеводитель по IT
                        </Link>
                      </Grid>
                      <Grid item xs={3} md={3} lg={3} style={{ marginLeft: '2vw' }}>
                        <Link href="#">
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                  <Grid container>
                    <Grid item style={{ backgroundImage: 'url(images/projects/medica.png)', backgroundSize: '100%', backgroundRepeat: 'no-repeat', margin: '0 0.7vw 0vw 3.3vw', width: '62.916vw', height: '37.8vw' }}>
                      <Grid container>
                        <Grid item xs={12} md={12} lg={12}>
                          <Link href="#" className="projectTag" style={{ width: '15%' }}>
                            Сайт «Под ключ»
                          </Link>
                        </Grid>
                        <Grid item xs={5} md={5} lg={5} style={{ backgroundColor: 'white', width: '36.77vw', height: '16.14vw', margin: '15.9vw 0 0 34.1vw', borderRadius: '40px' }}>
                          <Grid container>
                            <Grid item xs={8} md={8} lg={8}>
                              <Link href="#" className="projectTagBorder" style={{ width: '45%' }}>
                                Medica Mente
                              </Link>
                            </Grid>
                            <Grid item xs={4} md={3} lg={3} style={{ marginLeft: '1vw' }}>
                              <Link href="#" className="projectTagBorder">
                                2022
                              </Link>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item xs={10} md={10} lg={10} style={{ margin: '7vw 0 0 1.5vw' }}>
                              <Link href="#" style={{ fontSize: '1.8vw', textDecoration: 'none', color: 'black', fontWeight: 'bold', lineHeight: 'normal' }}>
                                Cтоматологическая клиника
                              </Link>
                            </Grid>
                            <Grid item xs={2} md={2} lg={2} style={{ marginLeft: '2vw' }}>
                              <Link href="#">
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item style={{ backgroundImage: 'url(images/projects/audit.png)', backgroundSize: '100%', backgroundRepeat: 'no-repeat', width: '30.83vw', height: '41.5vw' }}>
                      <Grid container>
                        <Grid item xs={8} md={8} lg={8}>
                          <Link href="#" className="projectTagBorderWhite" style={{ width: '45%' }}>
                            Бизнес-партнёр
                          </Link>
                        </Grid>
                        <Grid item xs={4} md={3} lg={3} style={{ marginLeft: '1vw' }}>
                          <Link href="#" className="projectTagBorderWhite">
                            2023
                          </Link>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                          <Link href="#" className="projectTag" style={{ width: '25%', marginTop: '30vw' }}>
                            В разработке
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={11} md={11} lg={11} style={{ backgroundImage: 'url(images/projects/югвидео.png)', backgroundSize: '100%', margin: 'auto', height: '37vw' }}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Link href="#" className="projectTag">
                      Сайт «Под ключ»
                    </Link>
                  </Grid>
                  <Grid item xs={4} md={4} lg={4} style={{ backgroundColor: 'white', width: '36.77vw', height: '16.14vw', margin: '14.3vw 0 0 60vw', borderRadius: '40px' }}>
                    <Grid container>
                      <Grid item xs={8} md={8} lg={8}>
                        <Link href="#" className="projectTagBorder" style={{ width: '30%' }}>
                          Югвидео
                        </Link>
                      </Grid>
                      <Grid item xs={3} md={3} lg={3} style={{ marginLeft: '1vw' }}>
                        <Link href="#" className="projectTagBorder">
                          2022
                        </Link>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={10} md={10} lg={10} style={{ margin: '7vw 0 0 1.5vw' }}>
                        <Link href="#" style={{ fontSize: '1.8vw', textDecoration: 'none', color: 'black', fontWeight: 'bold', lineHeight: 'normal' }}>
                          Компания, занимающаяся системами безопасности
                        </Link>
                      </Grid>
                      <Grid item xs={2} md={2} lg={2} style={{ marginLeft: '2vw' }}>
                        <Link href="#">
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={11} md={11} lg={11} style={{ backgroundImage: 'url(images/backgrounds/background3.png)', backgroundSize: '100%', margin: 'auto', height: '46vw', borderRadius: '45px', marginTop: '5vw' }}>
                <Typography style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '5vw', lineHeight: '130%', color: 'white', margin: '5vw 3vw 0 3vw' }}>
                  Мы делаем не только узкие задачи по дизайну и разработке  💻,<br></br> но и в  дальнейшем занимаемся   продвижением  💡  и налаживанием бизнес-процессов в компании.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  );
};

export default Blog;
