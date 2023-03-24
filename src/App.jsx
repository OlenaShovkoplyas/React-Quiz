import { Component } from 'react';
import './App.css';
import { Grid, Box, styled } from '@mui/material';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import NavList from './components/NavBar/NavList';
import brainChallenge from './brainChallenge.png'
import SearchBtn from './components/Buttons/SearchBtn';

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

class App extends Component {
  render() {
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
            <HeaderWrapper sx={{justifyContent: 'end'}}>
              <SearchBtn />                   
              <Header />
            </HeaderWrapper>
          </Grid>
  
          <Grid item lg={2} md={0} xs={0} display={{xs: "none", md: "none", lg: "block"}}>
            <NavBarWrapper>                      
              <NavList className='navListPosition' />
            </NavBarWrapper>
          </Grid>
  
          <Grid item lg={10} md={12} xs={12}>
            <MainWrapper>
              <MainPage />
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
}

export default App;
