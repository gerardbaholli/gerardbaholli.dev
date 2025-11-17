import PropTypes from 'prop-types';
import "./Keyword.css";

function Keyword({ keyword, highlightMatch }) {
    return (
        <div className="keyword-card">
            <div className='keyword-card-title'>
                {highlightMatch(keyword['it-word'])} - {highlightMatch(keyword['en-word'])}
            </div>
            <div className='keyword-card-description'>
                {keyword['it-description']}
            </div>
        </div>
    );
}

// Aggiungi la validazione delle props con PropTypes
Keyword.propTypes = {
    keyword: PropTypes.shape({
        'it-word': PropTypes.string.isRequired,
        'en-word': PropTypes.string.isRequired,
        'it-description': PropTypes.string.isRequired
    }).isRequired,
    highlightMatch: PropTypes.func.isRequired
};

export default Keyword;
