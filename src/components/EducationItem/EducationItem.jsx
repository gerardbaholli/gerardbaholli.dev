import "./EducationItem.css";
import PropTypes from 'prop-types';
import { Paragraph } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";

export default function EducationItem({ institute, degree, year, location }) {
    return (
        <div className="education-item-container">
            
            {/* Riga 1: Istituto (sx) --- Location (dx) */}
            <div className="education-header-row">
                <Paragraph color={Text.paragraph1}>{institute}</Paragraph>
                
                {/* Se location non è obbligatorio, aggiungi il controllo {location && ...} */}
                <Paragraph color={Text.paragraph1} className="location-text">
                    {location}
                </Paragraph>
            </div>

            {/* Riga 2: Titolo di studio (sx) --- Anno (dx) */}
            <div className="education-subheader-row">
                <Paragraph color={Text.paragraph2}>{degree}</Paragraph>
                
                {year && (
                    <Paragraph color={Text.paragraph2} className="year-text">
                        {year}
                    </Paragraph>
                )}
            </div>
        </div>
    );
}

EducationItem.propTypes = {
    institute: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    year: PropTypes.string,
    location: PropTypes.string // Aggiunta prop location
};
