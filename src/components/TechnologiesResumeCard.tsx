import React from 'react'

interface Props{
    web_technologies: Array<string>;
}

export default function TechnologiesResumeCard({web_technologies}: Props) {
    return (
        <div className="resume-card">
            <span>Technologies 💻</span>
            <div className="flex flex-col flex-wrap mt-4">
            {web_technologies.map((tech:string, index:number)=>{
                return <div key={index} className="">{tech}</div>
            })}
            </div>
            
        </div>
    )
}
