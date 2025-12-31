import "./ExperienceItem.css";
import PropTypes from 'prop-types';
import { Paragraph } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";

export default function ExperienceItem({ company, role, period, location }) {
    return (
        <div className="experience-item-container">
            
            <div className="experience-header-row">
                <Paragraph color={Text.paragraph1}>{company}</Paragraph>
                
                
                <Paragraph color={Text.paragraph1} className="location-text">
                    {location}
                </Paragraph>
            </div>

            <div className="experience-subheader-row">
                <Paragraph color={Text.paragraph2} className="role-text">
                    {role}
                </Paragraph>

                <Paragraph color={Text.paragraph2} className="period-text">
                    {period}
                </Paragraph>
            </div>
        </div>
    );
}

ExperienceItem.propTypes = {
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
};
