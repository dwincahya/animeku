import "./App.css";
import NavigationBar from "./component/NavigationBar";
import Intro from "./component/Intro";
import Film from "./component/Favorite";
import Series from "./component/Lastwatch";

import "./style/landingpage.css";

function App() {
  return (
    <div>
      {/* Start Intro */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End Intro*/}
      <div classname="Film">
        <Film />
      </div>
      <div className="series">
        <Series />
      </div>
    </div>
  );
}

export default App;
