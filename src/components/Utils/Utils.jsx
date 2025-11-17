import { Link } from 'react-router-dom';

function Utils() {

  const utils = [
    {
      name: "MTG Keyword Finder",
      path: "/utils/MTGKeywordFinder"
    }

  ];

  return (
    <div>
      <div>
        utils
      </div>
      <ul>
        {utils.map((project, index) => (
          <li key={index}>
            <Link to={project.path}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Utils;
