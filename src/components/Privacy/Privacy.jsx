import "./Privacy.css";
import { Paragraph, H3 } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";
import PropTypes from 'prop-types';

export default function Privacy({ onClose }) {
    return (
        <div className="privacy-modal-overlay" onClick={onClose}>
            <div className="privacy-modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                
                <H3 color={Text.paragraph1}>Privacy & Cookie Policy</H3>
                
                <div style={{ marginTop: '20px' }}>
                    <Paragraph style={{ color: Text.paragraph1, marginBottom: '10px' }}>Cookies and Local Storage</Paragraph>
                    <Paragraph color={Text.paragraph2}>
                        This website uses Local Storage solely to save your language preference (Italian/English). 
                        This is a purely technical functionality essential for the user experience and does not track 
                        your behavior or collect personal data. No profiling or marketing cookies are used.
                    </Paragraph>
                </div>
            </div>
        </div>
    );
}

Privacy.propTypes = {
    onClose: PropTypes.func.isRequired
};
