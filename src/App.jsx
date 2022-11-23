import { Header } from "./components/Header.jsx";
import { LeftContainer } from "./components/LeftContainer.jsx";
import { CenterContainer } from "./components/CenterContainer.jsx";
import { RightContainer } from "./components/RightContainer.jsx";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div className="container-body">
        <LeftContainer />
        <CenterContainer />
        <RightContainer />
      </div>
    </div>
  );
}

export default App;
