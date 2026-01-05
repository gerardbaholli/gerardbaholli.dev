import "./LinkArrow.css";
import PropTypes from 'prop-types';
import { FooterLink } from "../../utils/TextStyles.jsx";

const ARROW_ICON = "/icons/arrow_outward_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg";

export default function LinkArrow({ 
    href = "#",
    children, 
    target = "_self",
    rel = ""
}) {
    return (
        <a href={href} className="link-arrow-container" target={target} rel={rel}>
            {/* Nota: FooterLink deve comportarsi come un elemento inline o block, non un <a> annidato */}
            <FooterLink as="span" className="link-text">{children}</FooterLink>
            
            {/* Usiamo un div vuoto invece di img */}
            <div 
                className="link-arrow-mask" 
                style={{ '--icon-url': `url(${ARROW_ICON})` }} 
            />
        </a>
    );
}

LinkArrow.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string
};
