import "./Projects.css";
import { H3 } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";
import ProjectItem from "../ProjectItem/ProjectItem.jsx";
import projectsData from "../../data/Projects.json";
import { useLanguage } from "../../context/LanguageContext";

export default function Projects() {
    const { lang, t } = useLanguage();

    return (
        <div className="projects-container">
            <H3 color={Text.paragraph1}>{t("projects_title")}</H3>

            <div className="projects-list">
                {projectsData.map((project) => (
                    <ProjectItem
                        key={project.id}
                        title={project.title}
                        description={project.description[lang]} // Lingua dinamica
                        techStack={project.techStack}
                        links={project.links}
                        image={project.image}
                    />
                ))}
            </div>
        </div>
    );
}
