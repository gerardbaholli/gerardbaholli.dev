import "./Content.css";
import About from "../About/About.jsx";
import Main from "../Main/Main.jsx";

export default function Content() {
    return (
        <div className="content-container">
            <About />
            <Main />
        </div>
    );
}
