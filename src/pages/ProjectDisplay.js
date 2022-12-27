import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../assets/helpers/ProjectList'
// import GitHubIcon from '@material-ui/icons/GitHub'
import '../components/Style/ProjectDisplay.css'

function ProjectDisplay() {
  const { id } = useParams()
  const project = ProjectList[id]
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <h2>
        <b>Skills:</b> {project.skills}
      </h2>
      <p>
        <b>Description:</b> {project.description}
      </p>
    </div>
  )
}

export default ProjectDisplay
