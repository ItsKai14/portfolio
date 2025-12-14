import { Link } from "react-router-dom";
import { memo } from "react";

const overlayStyle = { backgroundColor: "rgba(0, 0, 0, 0.2)" };

function Footer() {
    const year = new Date().getFullYear();
    const yearText = year > 2025 ? `2025 — ${year}` : "2025";

    return (
        <footer
            className="bg-dark text-center text-lg-start fixed-bottom mt-5"
            role="contentinfo"
            aria-label="Site footer"
        >
            <div className="text-center p-3" style={overlayStyle}>
                <span className="text-light">© {yearText} </span>
                <Link to="/" className="text-light text-decoration-none" aria-label="Go to Gamer Vault homepage">
                    CodeDotExe
                </Link>
            </div>
        </footer>
    );
}

export default memo(Footer);