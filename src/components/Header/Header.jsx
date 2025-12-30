import "./Header.css";
import { H1, H2 } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";
import { useLanguage } from "../../context/LanguageContext";

export default function Header() {

    const { lang, setLang, t } = useLanguage();

    return (
        <div className="header-container">
            <div className="header-title">
                <H1 color={Text.paragraph1}>Gerard Baholli</H1>
                <H2 color={Text.paragraph2}>{t("job_title")}</H2>
            </div>
            
            <div className="header-language">
                <button
                    className={`language-button ${lang === "it" ? "active" : ""}`}
                    onClick={() => setLang("it")}
                >
                    it
                </button>
                <button
                    className={`language-button ${lang === "en" ? "active" : ""}`}
                    onClick={() => setLang("en")}
                >
                    en
                </button>
            </div>
        </div>
    );
}
