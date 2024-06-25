import "./App.css";
import { Landing } from "./Pages/Landingpage/Landing";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Playingpage } from "./Pages/playpage/playingpage";
function App() {
  const [value, setvalue] = useState(false);
  const OpenNextPage = () => {
    setvalue(true);
    console.log(value);
  };
  return (
    <>{value === true ? <Playingpage /> : <Landing event={OpenNextPage} />}</>
  );
}

export default App;
