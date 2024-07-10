import Project from '../components/Project'
import works from '../assets/work.json'

function Projects() {
  return (
    <>
      <div className="container work">
        <h2>My Projects</h2>
        <ul className="work-images">

          {works.map((work, i) => {
            return i < 3 ? <Project work={work} /> : ''
          })}

        </ul>
        <ul className="work-images">

          {works.map((work, i) => {
            return i > 2 ? <Project work={work} /> : ''
          })}

        </ul>
      </div>
    </>
  )
}

export default Projects