import React from 'react';

const JobCard = (props) => {
   return (
      <div className="job-card">
         <h3>{props.job.company.toUpperCase()}</h3>
         <h3>{props.job.title}, {props.job.job_type}</h3>
         <div dangerouslySetInnerHTML={{__html: props.job.description}}></div>
         <span className="skills">You may be a good fit for this role if you have the following skills:</span> 
         <div className="container">
            {props.job.skills_tag.map(skill => <p className="container-item">{skill}</p>)}
         </div>
         <div className="extra-details">
            <p>Current Number of Applicants: {props.job.applicant_count}</p>
         </div>
      </div>
   );
}

export default JobCard;

