import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { translations } from '../utils/Translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {

    const [lang, setLangState] = useState(() => {
        let savedLang;
        try {
            savedLang = localStorage.getItem('language');
        } catch {
            // Storage blocked (e.g. cookies disabled): use default language
        }
        return Object.keys(translations).includes(savedLang) ? savedLang : 'en';
    });

    const setLang = (newLang) => {
        setLangState(newLang);
        try {
            localStorage.setItem('language', newLang);
        } catch {
            // Storage blocked: preference just isn't persisted
        }
    };

    const t = (key) => {
        return translations[lang][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
