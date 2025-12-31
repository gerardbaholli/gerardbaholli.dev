import "./ProjectItem.css";
import PropTypes from 'prop-types';
import { Paragraph, FooterLink } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";

export default function ProjectItem({ title, description, techStack, links, image }) {
    return (
        <div className="project-item-container">
            {/* Opzionale: Immagine del progetto (se presente nel JSON) */}
            {image && (
                <div className="project-image-wrapper">
                    <img src={image} alt={title} className="project-image" />
                </div>
            )}

            <div className="project-content">
                {/* Header: Titolo */}
                <div className="project-header">
                    <Paragraph color={Text.paragraph1} className="project-title">
                        {title}
                    </Paragraph>
                </div>

                {/* Descrizione */}
                <div className="project-description">
                    <Paragraph color={Text.paragraph2}>
                        {description}
                    </Paragraph>
                </div>

                {/* Tech Stack (Badge) */}
                <div className="tech-stack-row">
                    {techStack.map((tech, index) => (
                        <span key={index} className="tech-badge">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="project-links">
                    {links.github && (
                        <FooterLink href={links.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </FooterLink>
                    )}
                    {links.demo && (
                        <FooterLink href={links.demo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </FooterLink>
                    )}
                </div>
            </div>
        </div>
    );
}

ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.shape({
        github: PropTypes.string,
        demo: PropTypes.string
    }).isRequired,
    image: PropTypes.string
};
