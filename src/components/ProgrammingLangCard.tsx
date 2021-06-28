import React from 'react'

interface Props{
    programming_languages:Array<string>;
}
export default function ProgrammingLangCard({programming_languages}:Props) {

    return (
        <div className="resume-card">
            <span>Programming Languages 🌐</span>
            <div className="mt-4">
            {programming_languages.map((lang:string,index:number)=>{
                return <div key={index}>{lang}</div>
            })}
            </div>
            
        </div>
    )
}
