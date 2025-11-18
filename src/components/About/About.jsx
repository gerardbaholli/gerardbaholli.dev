import "./About.css";
import { Paragraph } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";

export default function About() {
    return (
        <div className="about-container">
            <Paragraph color={Text.paragraph1}>About</Paragraph>
        </div>
    );
}
