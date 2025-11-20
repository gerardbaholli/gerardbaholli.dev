import "./Content.css";
import About from "../About/About.jsx";
import Experience from "../Experience/Experience.jsx";
import Skills from "../Skills/Skills.jsx";

export default function Content() {
    return (
        <div className="content-container">
            <About />
            <Experience />
            <Skills />
        </div>
    );
}
