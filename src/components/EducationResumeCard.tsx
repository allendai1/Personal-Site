import { GatsbyGraphQLType } from 'gatsby';
import React from 'react'
import { TypeQueryNode } from 'typescript';

interface Props{
    universities: Array<{
        name: string;
        start_date: string;
        grad_date: string;
        gpa: string;
        degree: string;
        honors: Array<string>;
    }>;
}
export default function EducationResumeCard({universities}:Props) {
    
    
    return (
        <div className="resume-card">
            <span>Education 🎓</span>
            {universities.map((school, index: number) => {
                return (
                    <div key={index} className="school-info-section">
                        <div>{school.name}</div>
                        {school.degree &&(<div className="italic">{school.degree}</div>)}
                        <div>{school.start_date}-{school.grad_date} {school.gpa? ` | ${school.gpa}` :""}</div>
                        {school.honors && (<div className="mb-4">Honors: {school.honors.join(', ')}</div>)}
                    </div>
                )
            })}</div>
    )
}
