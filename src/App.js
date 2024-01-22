import react from "react";
import {Headers} from "./componentes/header/index"
import { Productoslist } from "./componentes/productos/index"
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Productoslist/>
    </div>
  );
}

export default App;
