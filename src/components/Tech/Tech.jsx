import "./Tech.css";
import { H3, Paragraph } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";
import techData from "../../data/Tech.json";

export default function Tech() {
    return (
        <div className="tech-container">
            <H3 color={Text.paragraph1}>Tech stack</H3>

            <div className="tech-grid">
                {techData.map((tech, index) => (
                    <div className="tech-card" key={index}>
                        <div className="icon-wrapper">
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="tech-icon"
                            />
                        </div>

                        <div className="tech-name">
                            <Paragraph color={Text.paragraph2}>{tech.name}</Paragraph>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
