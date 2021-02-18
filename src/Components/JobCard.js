import React from 'react';

const JobCard = (props) => {
   return (
      <div className="job-card">
         <h3>{props.job.title}, {props.job.company.toUpperCase()}</h3>
         <div dangerouslySetInnerHTML={{__html: props.job.description}}></div>
         <p>Job Type: {props.job.job_type}</p>
         <p>Skills</p>
         {props.job.skills_tag.map(skill => <p>{skill}</p>)}
         <p>Current Number of Applicants: {props.job.applicant_count}</p>
      </div>
   );
}

export default JobCard;

