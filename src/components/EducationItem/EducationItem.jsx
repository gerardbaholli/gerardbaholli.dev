import "./EducationItem.css";
import PropTypes from 'prop-types';
import { Paragraph } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";

export default function EducationItem({ institute, degree, year }) {
    return (
        <div className="education-item-container">
            <div className="education-header-row">
                <Paragraph color={Text.paragraph1}>{institute}</Paragraph>
                {year && (
                    <Paragraph color={Text.paragraph1} className="year-text">
                        {year}
                    </Paragraph>
                )}
            </div>
            <Paragraph color={Text.paragraph2}>{degree}</Paragraph>
        </div>
    );
}

EducationItem.propTypes = {
    institute: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    year: PropTypes.string
};
