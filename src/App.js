import react from "react";
import {Headers} from "./componentes/header/index"
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./componentes/Paginas.js";
import { DataProvider } from "./componentes/coso/DataProvider.js";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Headers/>

        <Paginas/>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
