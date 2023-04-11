import Header from './components/Header';
import { MainLayout } from './components/MainLayout';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <MainLayout>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
    </MainLayout>
  );
}

export default App;
