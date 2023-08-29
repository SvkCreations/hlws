import './App.css';
import { useEffect } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';
import WhatFengShuiCanDo from './components/WhatFengShuiCanDo';
import WhatIsFengShui from './components/WhatIsFengShui';
import WhyFengShui from './components/WhyFengShui';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Main/>
      <WhyFengShui/>
      <WhatIsFengShui/>
      <WhatFengShuiCanDo/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
