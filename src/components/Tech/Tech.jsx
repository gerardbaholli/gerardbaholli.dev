import "./Tech.css";
import { H3, Paragraph } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";

export default function Tech() {

    const techData = [
        // Game Dev
        { name: "Unity", icon: "/icons/dev/unity-plain.svg" },
        { name: "Unreal Engine", icon: "/icons/dev/unrealengine-original.svg" },

        // Core Web & Languages
        { name: "HTML5", icon: "/icons/dev/html5-plain.svg" },
        { name: "CSS3", icon: "/icons/dev/css3-plain.svg" },
        { name: "JavaScript", icon: "/icons/dev/javascript-plain.svg" },
        { name: "TypeScript", icon: "/icons/dev/typescript-plain.svg" },
        { name: "Python", icon: "/icons/dev/python-plain.svg" },
        { name: "Java", icon: "/icons/dev/java-plain.svg" },
        { name: "C#", icon: "/icons/dev/csharp-plain.svg" },

        // Frameworks & Libraries
        { name: "React", icon: "/icons/dev/react-original.svg" },
        { name: "Three.js", icon: "/icons/dev/threejs-original.svg" },
        { name: "Node.js", icon: "/icons/dev/nodejs.svg" },
        { name: "Express", icon: "/icons/dev/express-original.svg" },

        // Databases & Data
        { name: "PostgreSQL", icon: "/icons/dev/postgresql.svg" },
        { name: "SQLite", icon: "/icons/dev/sqlite-plain.svg" },
        { name: "Oracle", icon: "/icons/dev/oracle-original.svg" },
        { name: "JSON", icon: "/icons/dev/json-plain.svg" },
        { name: "XML", icon: "/icons/dev/xml-plain.svg" },

        // Tools & DevOps
        { name: "Git", icon: "/icons/dev/git-plain.svg" },
        { name: "Perforce", icon: "/icons/dev/perforce-plain.svg" },
        { name: "DBeaver", icon: "/icons/dev/dbeaver-plain.svg" },
        { name: "gRPC", icon: "/icons/dev/grpc-plain.svg" },
        { name: "Selenium", icon: "/icons/dev/selenium-original.svg" },

        // Design
        { name: "Figma", icon: "/icons/dev/figma-plain.svg" },
        { name: "Affinity", icon: "/icons/dev/affinity.svg" },
    ];

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
