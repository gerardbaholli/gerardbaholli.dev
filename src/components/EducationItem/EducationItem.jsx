import "./EducationItem.css";
import { Title1, Title2 } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";

export default function EducationItem({ institute, degree }) {
    return (
        <div className="education-item-container">
            <Title1 color={Text.paragraph1}>{institute}</Title1>
            <Title2 color={Text.paragraph2}>{degree}</Title2>
        </div>
    );
}
