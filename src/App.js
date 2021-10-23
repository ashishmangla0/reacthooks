import logo from './logo.svg';
import './App.css';
import useMedia from './hooks/useMedia';
import MobileView from './components/MobileView';
import DesktopView from './components/DesktopView';



function App() {
  const checkViewport = useMedia(
  
    ['(max-width: 1199px)', '(min-width: 1200px)'],
    
  );

  const renderSwitch =(param)=> {
    switch(param) {
      case 1:
        return <DesktopView/>
      default:
        return <MobileView/>;
    }
  }

  const changeView = {
    0 :<MobileView/>
  }
  
  return (
    <div className="App">
      {renderSwitch(checkViewport)}
    
    </div>
  );
}

export default App;
