import React from 'react';
import JobCard from './JobCard';
import FilterBar from './FilterBar';

class JobList extends React.Component {
   state = {
      jobs: [],
      location: "", 
      jobType: "", 
      skills: ""
   }

   componentDidMount = () => {
      fetch('https://divercity-test.herokuapp.com/jobs')
         .then(resp => resp.json())
         .then(data => this.setState({
            jobs: data.jobs
         }))
   }

   filterBySkill = () => {
      let jobsToShow = []
      this.state.jobs.map((job) => {
         let skillMatch = job.filter(job => job.skills_tags.toLowerCase().includes(this.state.skills.toLowerCase()))
         if (skillMatch.length > 0) {
            jobsToShow.push(job)
         }
      })
      return jobsToShow;
   }

   render() {
      return (
         <div>
            <h1 className="header">Job Openings</h1>
            <FilterBar />
            {this.state.jobs && this.state.jobs.map(job => <JobCard key={job.id} job={job}/>)}
         </div>
      )
   }
}

export default JobList
