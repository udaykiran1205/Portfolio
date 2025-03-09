import styles from './App.module.css';
import { Contact } from './components/Contact/Contact';

import { Education } from './components/Education/Education';
import { Home } from './components/Home/Home';
import {Navbar} from './components/Navbar/Navbar'
import { Projects } from './components/Projects/Project';

import { Skills } from './components/Skills/Skills';
function App() {
 

  return (
    <div className={styles.App}>
      <Navbar /> 
      <Home />
      <Education />
      <Skills/>
      <Projects/>
      <Contact/>
    

    </div>
  )
}

export default App
