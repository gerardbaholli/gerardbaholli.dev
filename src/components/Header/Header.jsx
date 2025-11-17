import "./Header.css";
import { Link } from "../../utils/TextStyles.jsx";
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
                <Link color={Text.paragraph1} className="header-title-first">Gerard Baholli,</Link>
                <Link color={Text.paragraph2} className="header-title-second">Software Developer</Link>
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
