import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import EducationResumeCard from "./EducationResumeCard"
import ProgrammingLangCard from "./ProgrammingLangCard"
import ExperienceResumecard from './ExperienceResumecard'
import TechnologiesResumeCard from './TechnologiesResumeCard'
import allendai_resume from "../static/allendai_resume.pdf"

export default function Resume() {

    const data = useStaticQuery(graphql`
    query ResumeQuery {
      allResumeJson {
        edges {
          node {
            hometown
            full_name
            dob
            programming_languages
            web_technologies
            work_experience {
              fields {
                job
                date
                job_role
                description
              }
            }
            occupation
            education {
                university {
                  name
                  start_date
                  grad_date
                  gpa
                  degree
                  honors
                }
              }
            
          }
        }
      }
    }
    


  `)
  
  const node = data.allResumeJson.edges[0].node;

    return (
     
        <div>
            <div className="resume-card"><span>{node.occupation} 👨‍🎓</span></div>
            <EducationResumeCard universities={node.education.university} />
            <ProgrammingLangCard programming_languages={node.programming_languages}/>
            <TechnologiesResumeCard web_technologies={node.web_technologies}/>
            <ExperienceResumecard work_experience={node.work_experience}/>
            <a href={allendai_resume} download="allendai_resume"><div className="download-resume-button">Download</div></a>

        </div>
    )
}
