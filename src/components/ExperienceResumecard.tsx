import React from 'react'


interface Props {
    work_experience: {
        fields: Array<{
            job: string;
            date: string;
            job_role: string;
            description: string;
        }>;
    }

}
export default function ExperienceResumecard({ work_experience }: Props) {
    return (
        <div className="resume-card">
            <span>Experience 📁</span>
            {work_experience.fields.map((entry, index) => {
                return <div className="job-info-section" key={index}>
                    <span>{entry.job} </span><span className="italic">{entry.job_role}</span>
                    <div >{entry.date}</div>
                    <div>{entry.description}</div>

                </div>
            })}

        </div>
    )
}
