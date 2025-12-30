import "./Projects.css";
import { H3 } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";
import ProjectItem from "../ProjectItem/ProjectItem.jsx";

export default function Projects() {
    return (
        <div className="projects-container">
            <H3 color={Text.paragraph1}>Projects</H3>

            <div className="projects-list">

                <ProjectItem
                    name="Portfolio Website"
                    desc="Un sito web personale costruito con React."
                    link="https://github.com/tuo-username/portfolio"
                />

                <ProjectItem
                    name="E-commerce App"
                    desc="Applicazione di vendita online."
                    link="https://github.com/tuo-username/shop"
                />
            </div>
        </div>
    );
}
