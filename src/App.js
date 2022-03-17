import './App.css';
import Navcomponent from './Components/Navcomponent';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyComponent from './Components/MyComponent';
import Hellow from './Components/Hellow';
import HOC from './Components/HOC';
import Nopage from './Components/Nopage';

function App() {
9978612331 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navcomponent />} />
          <Route path="/contact/:id" element={<MyComponent />} />
          <Route path="hellow" element={<HOC component={Hellow} />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
