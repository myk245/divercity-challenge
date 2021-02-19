import React from 'react';
import JobCard from './JobCard';

class JobList extends React.Component {
   render() {
      // console.log(this.props.jobs)
      return (
         <div>
            <h1 className="header">Job Openings</h1>
            {this.props.jobs && this.props.jobs.map(job => <JobCard key={job.id} job={job}/>)}
         </div>
      )
   }
}

export default JobList
