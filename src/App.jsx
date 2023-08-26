

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="HOLA MUNDO" />
     </div>
  );
}

export default App;