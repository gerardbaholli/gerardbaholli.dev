import "./About.css";
import { Paragraph, H3 } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";
import LinkButton from "../LinkButton/LinkButton.jsx";
import { useLanguage } from "../../context/LanguageContext";
import aboutData from "../../data/About.json";

export default function About() {
    const { t, lang } = useLanguage();

    const cvLink = lang === 'it'
        ? "/GerardBaholli-Curriculum-It.pdf"
        : "/GerardBaholli-Curriculum-En.pdf";

    return (
        <div className="about-container">
            <H3 color={Text.paragraph1}>{t("about_title")}</H3>
            <Paragraph color={Text.paragraph2}>{aboutData[lang]}</Paragraph>

            <div className="link-list">
                <LinkButton href={cvLink} target="_blank" rel="noopener noreferrer">
                    {t("curriculum_button")}
                </LinkButton>
                <LinkButton href="mailto:gerardbaholli@gmail.com">
                    {t("contact_button")}
                </LinkButton>
            </div>
        </div>
    );
}
