import React from 'react';

const JobCard = (props) => {
   return (
      <div className="job-card">
         <h3>{props.job.company.toUpperCase()}</h3>
         <h3>{props.job.title}, {props.job.job_type}</h3>
         <p className="location">📍 {props.job.location}</p>
         <div className="primary-text" dangerouslySetInnerHTML={{ __html: props.job.description }}></div>
         <span className="skills">You may be a good fit for this role if you have the following skills:</span> 
         {props.job.skills_tag.map(skill => <p className="skills-section">{skill}</p>)}
         <br></br>
         <a className="button">Apply Now</a>
         <div className="extra-details">
            <p>Current Number of Applicants: {props.job.applicant_count}</p>
         </div>
      </div>
   );
}

export default JobCard;

