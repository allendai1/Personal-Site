import React from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


export default function NameList() {
  //   const data = useStaticQuery(graphql`
  //   query ResumeQery {
  //     allResumeJson {
  //       edges {
  //         node {
  //           hometown
  //           full_name
  //           dob
  //           programming_languages
  //           web_technologies
  //           work_experience {
  //             fields {
  //               job
  //               date
  //               job_role
  //               description
  //             }
  //           }
  //           occupation
  //           education {
  //             gpa
  //             start_date
  //             end_date
  //             degree
  //             honors
  //             university
  //           }
  //         }
  //       }
  //     }
  //   }
    


  // `)
  // const node = data.allResumeJson.edges[0].node;
  // console.log(node.education)

    return (
        <div className="flex flex-col-reverse">
            <button className="btn-blue">Button</button>
            
        </div>
    )
}
