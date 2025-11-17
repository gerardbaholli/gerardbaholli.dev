import styled from "styled-components";

/* ---------- HEADINGS ---------- */
export const H1 = styled.h1`
  font-family: "Schibsted Grotesk", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 130%;
  letter-spacing: -1%;
  color: ${(props) => props.color || "inherit"};

  @media (min-width: 800px) { font-size: 36px; }
  @media (min-width: 1280px) { font-size: 44px; }
`;

export const H2 = styled.h2`
  font-family: "Schibsted Grotesk", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: -1%;
  color: ${(props) => props.color || "inherit"};

  @media (min-width: 800px) { font-size: 30px; }
  @media (min-width: 1280px) { font-size: 36px; }
`;

export const H3 = styled.h3`
  font-family: "Schibsted Grotesk", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -1%;
  color: ${(props) => props.color || "inherit"};

  @media (min-width: 800px) { font-size: 24px; }
  @media (min-width: 1280px) { font-size: 28px; }
`;

/* ---------- PARAGRAPHS ---------- */
export const Paragraph = styled.p`
  font-family: "Schibsted Grotesk", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0;
  color: ${(props) => props.color || "inherit"};

  @media (min-width: 800px) { font-size: 18px; }
  @media (min-width: 1280px) { font-size: 20px; }
`;

/* ---------- PARAGRAPH LIST ---------- */
export const ParagraphList = styled.ul`
  font-family: "Schibsted Grotesk", sans-serif;
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
export const Link = styled.a`
  font-family: "Schibsted Grotesk", sans-serif;
  font-weight: 600; /* semibold */
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -2%;
  color: ${(props) => props.color || "inherit"};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 800px) { font-size: 22px; }
  @media (min-width: 1280px) { font-size: 24px; }
`;
