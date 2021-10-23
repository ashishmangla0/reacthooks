import logo from './logo.svg';
import './App.css';
import useOnScreen from './hooks/useOnScreen';
import { useRef } from 'react';



function App() {
  
const HeaderRef = useRef( null);
const onScreenOptions ={
  threshold: .5
}
const isOnScreen = useOnScreen(HeaderRef,onScreenOptions);
  
  return (
    <div className="App">

      <header ref={HeaderRef}>
        this is header for header fixsddsfdd fsdfds  
      </header><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      {
        isOnScreen ? 'asdfdsfsdf': 'bbbbbbbbbbbbbbbbb'
      }
    </div>
  );
}

export default App;
