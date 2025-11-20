import "./Content.css";
import About from "../About/About.jsx";
import Background from "../Background/Background.jsx";

export default function Content() {
    return (
        <div className="content-container">
            <About />
            <Background />
        </div>
    );
}
