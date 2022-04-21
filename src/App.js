import './App.css';
import { Provider } from "react-redux"
import { store } from './store';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import { Education } from './components/Education/Education';
import { Intro } from './components/Intro/Intro';
import { Menu } from './components/Menu/Menu';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Skills } from './components/Skills/Skills';
import 'animate.css';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        {/* <div className='container'> */}
        <Menu />
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <Education />
        <Contacts />
        {/* </div> */}
      </div>
    </Provider>
  )

}

export default App;
