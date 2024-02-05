import react from "react";
import {Headers} from "./componentes/header/index"
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import {Paginas} from "./componentes/Paginas"

function App() {
  return (
    <div className="App">
      <Router>
        <Headers/>

        <Paginas/>
      </Router>
    </div>
  );
}

export default App;
