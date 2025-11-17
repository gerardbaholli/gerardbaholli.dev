import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className="page-not-found">
            <h1>404 - Pagina non trovata</h1>
            <p>La pagina che stai cercando non esiste.</p>
            <Link to="/" className="back-link">Torna alla home</Link>
        </div>
    );
}

export default PageNotFound;
