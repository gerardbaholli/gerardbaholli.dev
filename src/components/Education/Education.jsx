import "./Education.css";
import { H3 } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";
import EducationItem from "../EducationItem/EducationItem.jsx";

export default function Education() {
    return (
        <div className="education-container">
            <H3 color={Text.paragraph1}>Education</H3>
            <div className="education-list">
                <EducationItem 
                    institute="University of California, Los Angeles (UCLA)"
                    degree="Bachelor of Fine Arts in Graphic Design"
                />
                <EducationItem 
                    institute="University of California, Los Angeles (UCLA)"
                    degree="Bachelor of Fine Arts in Graphic Design"
                />
            </div>
        </div>
    );
}
