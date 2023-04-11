import { useMediaQuery, useTheme } from '@mui/material';
import Header from './components/Header';
import { MainLayout } from './components/MainLayout';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import { MobileLayout } from './components/MobileLayout';
import HeaderMobile from './components/Header-mb';
import HomeMobile from './pages/Mobile/Home-mb';
import AboutMobile from './pages/Mobile/About-mb';
import ProjectsMobile from './pages/Mobile/Projects-mb';
import SkillsMobile from './pages/Mobile/Skills-mb';
import FooterMobile from './components/Footer-mb';

function App() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {isSmall ? (
        <MobileLayout>
          <HeaderMobile />
          <HomeMobile />
          <AboutMobile />
          <ProjectsMobile />
          <SkillsMobile />
          <FooterMobile />
        </MobileLayout>
      ) : (
        <MainLayout>
          <Header />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Footer />
        </MainLayout>
      )}
    </>
  );
}

export default App;
