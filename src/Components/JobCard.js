import React from 'react';

const JobCard = (props) => {
   return (
      <div className="job-card">
         <h3>{props.job.title} at {props.job.company}</h3>
         <p>{props.job.description}</p>
         <p>Job Type: {props.job.job_type}</p>
         <p>Number of Applicants: {props.job.applicant_count}</p>
         <p>Skills</p>
         {props.job.skills_tag.map(skill => <p>{skill}</p>)}
      </div>
   );
}

export default JobCard;

