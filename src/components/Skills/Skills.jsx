import "./Skills.css";
import { Paragraph } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";

export default function Skills() {
    return (
        <div className="skills-container">
            <Paragraph color={Text.paragraph1}>Skills</Paragraph>
        </div>
    );
}
