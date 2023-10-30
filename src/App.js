import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <h1>We are checking out how Sass work</h1>
      <Navbar />
      <div className="steps">
        <h3>Steps To Set up:</h3>
        <ol>
          <li> npx create-react-app . </li>
          <li>
            {" "}
            <strong>vscode extension: Sass</strong>{" "}
          </li>
          <li>
            {" "}
            <strong>vscode extension: Live Sass Compiler</strong>{" "}
          </li>
          <li> Create a new folder components under src: create a Navbar.js</li>
          <li> Create a new folder styles under src : create a main.css</li>
          <li>
            Click to Watch Sass from the status bar to turn on the live
            compilation and then click to Stop Watching Sass from the status bar
            to turn off live compilation.
          </li>
          <li>
            You can also do this way -- Press F1 or ctrl+shift+P and enter Live
            Sass: Watch Sass to start watching and Live Sass: Stop Watching Sass
            to stop watching.
          </li>

          <li> import "./App.css";</li>
          <li>the scss file should be auto complier</li>
        </ol>
      </div>
      <br></br>
      <div className="steps">
        <h3>What is special in SASS</h3>
        <div className="features">
          <ul className="feature">
            <h4>Nesting the style</h4>
            <li>Check out nesting example in main.scss</li>
            <li>
              Check out how to import variables file, also make sure the file
              start with underscore __
            </li>
          </ul>

          <ul className="feature">
            <h4>Mixin</h4>
            <li>
              See Mixin example in main.scss, wehere features has the theme
            </li>
          </ul>
          <ul className="feature">
            <h4>Extend</h4>
            <li>
              See Extend example in main.scss, wehere <strong>feature</strong>{" "}
              has the theme
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
