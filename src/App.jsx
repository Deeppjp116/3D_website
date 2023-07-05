import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='reletive z-0 bg-hero-pattern'>
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        {/* <About /> */}
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
      </div>

      <Contact />
    
    </BrowserRouter>
  );
};

export default App;
