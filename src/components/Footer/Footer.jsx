import "./Footer.css";
import { useState } from 'react';
import { Paragraph, FooterLink } from "../../utils/TextStyles.jsx";
import { Text } from "../../utils/ColorStyles.jsx";
import Privacy from "../Privacy/Privacy.jsx";

export default function Footer() {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    return (
        <footer className="footer-container">
            <div className="footer-left">
                <Paragraph color={Text.paragraph2}>
                    © {new Date().getFullYear()} Gerard Baholli. All rights reserved.
                </Paragraph>
            </div>
            
            <div className="footer-right">
                <FooterLink href="https://github.com/gerardbaholli" target="_blank">
                    GitHub
                </FooterLink>
                <FooterLink href="https://www.linkedin.com/in/gerardbaholli/" target="_blank">
                    LinkedIn
                </FooterLink>
                <FooterLink onClick={() => setIsPrivacyOpen(true)}>
                    Privacy Policy
                </FooterLink>
            </div>

            {isPrivacyOpen && (
                <Privacy onClose={() => setIsPrivacyOpen(false)} />
            )}
        </footer>
    );
}