import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Content />
            <footer>
                <li>
                    <a href="#history">Disney</a>
                </li>
                <li>
                    <a href="#powers">Marvel</a>
                </li>
            </footer>
        </div>
    );
}

export default App;
