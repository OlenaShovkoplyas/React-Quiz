import React from 'react';
import './App.css';
import { Grid, Box, styled } from '@mui/material';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import logo from './mainlogo.png'


const HeaderWrapper = styled(Box)(() => ({
  backgroundColor: 'rgba(17, 94, 84, 0.373)',
  height: '130px',
  display: 'flex',
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
  height: '100px',
}));

function App() {
  return (
    <div className="App"> 
      <Grid container>
        <Grid item lg={3}>
        <HeaderWrapper>
            <img className='logoImg' src={logo} />
          </HeaderWrapper>
        </Grid>

        <Grid item lg={9}>
          <HeaderWrapper sx={{justifyContent: 'right'}}>
            <Header />
          </HeaderWrapper>
        </Grid>

        <Grid item lg={3}>
          <NavBarWrapper>
            <NavBar />
          </NavBarWrapper>
        </Grid>

        <Grid item lg={9}>
          <MainWrapper>
            <MainPage />
          </MainWrapper>
        </Grid>

        <Grid item lg={12}>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Grid>
  </Grid>   
  </div>
  );
}

export default App;
