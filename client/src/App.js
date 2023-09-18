import Home from './components/Home/Home';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Vehicles from './components/Vehicles/Vehicles';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
          
        <Route path="vehicles">
            <Route index element={<Vehicles />} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
