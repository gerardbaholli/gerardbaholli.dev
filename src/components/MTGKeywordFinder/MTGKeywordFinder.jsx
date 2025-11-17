import { useState, useEffect } from "react";
import MTGKeywordData from "../../data/MTGKeywordData.json";
import Keyword from "../Keyword/Keyword.jsx";
import "./MTGKeywordFinder.css";
import mtgLogo from "/images/mtg-logo.png";


function MTGKeywordFinder() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredKeywords, setFilteredKeywords] = useState([]);
    const [description, setDescription] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

    // Implementazione del debounce
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300); // 300ms di ritardo

        return () => clearTimeout(timeoutId); // Cancella il timeout precedente se l"utente digita prima
    }, [searchTerm]);

    // Funzione di ricerca che scatta dopo il debounce
    useEffect(() => {
        if (debouncedSearchTerm.length === 0) {
            setFilteredKeywords([]);
            setDescription("");
            return;
        }

        const matches = MTGKeywordData.keywords.filter(
            (item) =>
                item["it-word"].toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                item["en-word"].toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );

        setFilteredKeywords(matches);
        setDescription("");
    }, [debouncedSearchTerm]);

    // Funzione per selezionare un risultato
    const handleSelect = (keyword) => {
        setSearchTerm(keyword["it-word"]);
        setFilteredKeywords([]);
        setDescription(keyword["it-description"]);
    };

    // Funzione per evidenziare la corrispondenza nel testo
    const highlightMatch = (text) => {
        const regex = new RegExp(`(${debouncedSearchTerm})`, "gi");
        return text.split(regex).map((part, index) =>
            part.toLowerCase() === debouncedSearchTerm.toLowerCase() ? (
                <span key={index} style={{ backgroundColor: "#33679e" }}>{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <div className="mtg-keyword-finder-container">

            <div className="logo-container">
                <img src={mtgLogo} alt="MTG Logo" />
            </div>

            <div className="input-container">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Cerca una keyword..."
                    className="search-input"
                />
            </div>

            {filteredKeywords.length > 0 && (
                <div className="results-container">
                    {filteredKeywords.map((keyword, index) => (
                        <Keyword
                            key={index}
                            keyword={keyword}
                            onSelect={handleSelect}
                            highlightMatch={highlightMatch} // Passiamo la funzione come prop
                        />
                    ))}
                </div>
            )}

            {description && <p className="description">{description}</p>}
        </div>
    );
}

export default MTGKeywordFinder;
