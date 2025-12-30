import "./ProjectItem.css";
import PropTypes from 'prop-types';
import { Paragraph } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";

export default function ProjectItem({ name, desc, link }) {
    return (
        <div className="project-item-container">
            <Paragraph color={Text.paragraph1}>{name}</Paragraph>
            <Paragraph color={Text.paragraph2}>{desc}</Paragraph>

            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Paragraph color={Text.paragraph1}>{link}</Paragraph>
                </a>
            )}
        </div>
    );
}

ProjectItem.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    link: PropTypes.string
};
