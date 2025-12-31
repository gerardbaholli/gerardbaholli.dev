import "./Main.css";
import Projects from "../Projects/Projects.jsx";
import Experience from "../Experience/Experience.jsx";
import Skills from "../Skills/Skills.jsx";
import Education from "../Education/Education.jsx";

export default function Main() {
    return (
        <div className="main-container">
            <Education />
            <Experience />
            <Projects />
            <Skills />
        </div>
    );
}
