import "./LinkButton.css";
import PropTypes from 'prop-types';
import { Link } from "../../utils/TextStyles.jsx";

const ARROW_ICON = "/arrow_outward_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg";

export default function LinkButton({ 
    href = "#",
    children, 
    target = "_self",
    rel = ""
}) {
    return (
        <a href={href} className="link-button-container" target={target} rel={rel}>
            <Link className="link-text">{children}</Link>
            <img src={ARROW_ICON} alt="Arrow icon" className="link-arrow-icon" />
        </a>
    );
}

LinkButton.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string
};
