import React from 'react';
import { Grid, Box, styled } from '@mui/material';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import NavList from '../NavBar/NavList';
import brainChallenge from '../../brainChallenge.png';
import SearchBtn from '../Buttons/SearchBtn';

const HeaderWrapper = styled(Box)(() => ({
  backgroundColor: 'rgba(17, 94, 84, 0.373)',
  height: '130px',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
}));

const NavBarWrapper = styled(Box)(() => ({
  backgroundColor: 'rgba(17, 94, 84, 0.5)',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
}));

const MainWrapper = styled(Box)(() => ({
  backgroundColor: 'white',
  padding: '20px',
  overflow: 'auto',
}));

const FooterWrapper = styled(Box)(() => ({
  backgroundColor: 'rgb(9, 33, 33, 0.822)',
}));

export default function GridTemplate({ children }) {
  return (
    <div className="App">
      <Grid container>
        <Grid item lg={2} md={2} xs={2}>
        <HeaderWrapper>
        <img src={brainChallenge} className='headLogo' />
          <NavBar />
        </HeaderWrapper>
        </Grid>

        <Grid item lg={10} md={10} xs={10}>
          <HeaderWrapper sx={{ justifyContent: 'end' }}>
            <SearchBtn />
            <Header />
          </HeaderWrapper>
        </Grid>

        <Grid item lg={2} md={0} xs={0} display={{ xs: 'none', md: 'none', lg: 'block' }}>
          <NavBarWrapper>
            <NavList className='navListPosition' />
          </NavBarWrapper>
        </Grid>

        <Grid item lg={10} md={12} xs={12}>
          <MainWrapper>
            { children }
          </MainWrapper>
        </Grid>

        <Grid item lg={12} md={12} xs={12}>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Grid>
  </Grid>
  </div>
  );
}
