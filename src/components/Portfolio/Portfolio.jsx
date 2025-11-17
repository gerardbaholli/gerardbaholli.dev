import { Link } from "react-router-dom";
import portfolioData from "../../data/PortfolioData.json";

function Portfolio() {

  return (
    <div>
      <div>portfolio</div>
      <ul>
        {portfolioData.projects.map((project, index) => (
          <li key={index}>
            <Link to={project.path}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
