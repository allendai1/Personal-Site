import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import IMAGES,{requiresInvert} from "../images/index";
import { fixedImageSizes } from 'gatsby-plugin-image/dist/src/image-utils';
/**
 * 
 * @returns JSX.Element
 */
export default function ProjectCard(): JSX.Element {
    const data = useStaticQuery(graphql`
    query MyQuery2 {
        allContentfulProjectCard {
          edges {
            node {
              id
              projectName
              githubRepo
              subtitle
              createdAt
              order
              body {
                body
              }
              techStack {
                title
              }
            }
          }
        }
      }
      
      
    
      
  `)
 

  interface Edge{
      node:{
          projectName: string;
          body: {body:string};
          githubRepo: string;
          techStack:Array<{title:string}>;
          subtitle: string;
          order: number;
      }
  }

  return (
        <>
            {
                
                data.allContentfulProjectCard.edges.sort((a:Edge,b:Edge)=>{return a.node.order - b.node.order}).map((e:Edge, index:number) => {
                    return (
                        <div key={index} className="project-card">
                            <div className="project-card-header"><p><span>{e.node.projectName}</span> | <span>{e.node.subtitle}</span></p>
                            <a href={e.node.githubRepo} target="_blank" rel="noopener noreferrer"><img className="dark-mode-invert" src={IMAGES.Github} alt="Github"></img></a>
                            </div>
                            <p className="project-card-description">{e.node.body?.body || "nothing"}</p>
                            <div className="project-card-techcons">{e.node.techStack.map((t,index:number)=>{
                                return <img className={requiresInvert.includes(t.title) ? "dark-mode-invert" : ""}src={IMAGES[t.title]} alt={t.title} title={t.title} key={index}></img>
                            })}</div>
                            
                        </div>

                    )

                })
            }

        </>
    )
}
