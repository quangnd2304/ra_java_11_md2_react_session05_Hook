import './App.css';
import ExUseState_UseEffect from './components/ExUseState_UseEffect';
import ExContext from './components/ExContext';
import ExUseRef from './components/ExUseRef';
import ExUseReducer from './components/ExUseReducer';

function App() {
  return (
    <div className="App">
      <ExUseState_UseEffect />
      <ExContext />
      <ExUseRef />
      <ExUseReducer />
    </div>
  );
}

export default App;
