import "./Header.css";
import { H1, H2 } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";
import { useState, useEffect } from "react";

export default function Header() {
    const [activeLang, setActiveLang] = useState("en");

    useEffect(() => {
        console.log("Language changed to", activeLang);
    }, [activeLang]);

    return (
        <div className="header-container">
            <div className="header-title">
                <H1 color={Text.paragraph1}>Gerard Baholli</H1>
                <H2 color={Text.paragraph2}>Software Developer</H2>
            </div>
            <div className="header-language">
                <button
                    className={`language-button ${activeLang === "it" ? "active" : ""}`}
                    onClick={() => setActiveLang("it")}
                >
                    it
                </button>
                <button
                    className={`language-button ${activeLang === "en" ? "active" : ""}`}
                    onClick={() => setActiveLang("en")}
                >
                    en
                </button>
            </div>
        </div>
    );
}
