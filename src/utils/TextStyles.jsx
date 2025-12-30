import styled from "styled-components";

/* ---------- HEADINGS ---------- */
export const H1 = styled.h1`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -1%;
  color: ${(props) => props.color || "inherit"};

  @media (min-width: 800px) { font-size: 22px; }
  @media (min-width: 1280px) { font-size: 24px; }
`;

export const H2 = styled.h2`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -1%;
  color: ${(props) => props.color || "inherit"};

  @media (min-width: 800px) { font-size: 18px; }
  @media (min-width: 1280px) { font-size: 20px; }
`;

export const H3 = styled.h3`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: -1%;
  color: ${(props) => props.color || "inherit"};
  margin-bottom: 30px;

  @media (min-width: 800px) { font-size: 16px; }
  @media (min-width: 1280px) { font-size: 18px; }
`;

/* ---------- PARAGRAPHS ---------- */
export const Paragraph = styled.p`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0;
  color: ${(props) => props.color || "inherit"};

  @media (min-width: 800px) { font-size: 14px; }
  @media (min-width: 1280px) { font-size: 16px; }
`;

/* ---------- PARAGRAPH LIST ---------- */
export const ParagraphList = styled.ul`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0;
  list-style-type: disc;
  padding-left: 20px;
  color: ${(props) => props.color || "inherit"};

  li {
    margin-bottom: 0.5em;
  }

  @media (min-width: 800px) { font-size: 18px; }
  @media (min-width: 1280px) { font-size: 20px; }
`;

/* ---------- LINK ---------- */
export const Link = styled.span`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -2%;
  color: ${(props) => props.color || "inherit"};

  @media (min-width: 800px) { font-size: 14px; }
  @media (min-width: 1280px) { font-size: 16px; }
`;

export const FooterLink = styled.a`
  font-family: "Schibsted Grotesk", system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -2%;
  
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  
  color: ${(props) => props.color || "#ababab"};
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }

  @media (min-width: 800px) { font-size: 14px; }
  @media (min-width: 1280px) { font-size: 16px; }
`;