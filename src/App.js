import './App.css';
import Navbar from './Navbar';
import Practice from './Components/Practice';
import First from './Components/First';
import Search from './Components/Search';
function App() {
  let Component
  switch(window.location.pathname){
    case '/':
      Component = First;
      break;
    case '/practice':
      Component = Practice;

      break;
    default:
      Component = () => <a href='https://empleo.chaco.gob.ar/informatorio#/'>Visite este link para saber mas</a>

  }
  return (
    <>

    <Navbar/>
    <Search/>
    <Component/>
    </>
  )
}

export default App;