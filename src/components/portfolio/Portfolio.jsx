import { getCategories, getProjects } from 'helper/api';
import React, { useEffect, useState } from 'react';
import './Portfolio.scss';
import PortfolioList from './PortfolioList';

const Portfolio = () => {

  const [selected, setSelected] = useState(0);
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    (async () => {

      setCategories(await getCategories());
      setProjects(await getProjects());

    })();
  }, []);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Projects</h1>
      <ul>
        {categories && categories.map((category) => {
          // @ts-ignore
          return <PortfolioList key={category.id} title={category.title} active={selected === +category.id} setSelected={setSelected} itemId={+category.id} />
        })}
      </ul>
      <div className="container">
        {projects &&
          projects.filter((project) => { return project.category.includes(selected) })
            .map((project) => {
              return (
                project.url ? <a href={project.url || '/#'} key={project.id} target="_blank" rel="noreferrer">
                  <div className="item">
                    <img src={project.imageURL} alt={project.alt} />
                    <h3>{project.title}</h3>
                  </div>
                </a>
                  :
                  <div className="item">
                    <img src={project.imageURL} alt={project.alt} />
                    <h3>{project.title}</h3>
                  </div>
              )
            })
        }
        {!projects && <h1>Not Found!</h1>}
      </div>
    </div>
  )
}

export default Portfolio