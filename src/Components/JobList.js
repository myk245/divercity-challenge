import React from 'react';
import JobCard from './JobCard';
import FilterBar from './FilterBar';

class JobList extends React.Component {
   state = {
      jobs: [],
      displayFilterBar: false, 
      filterTerm: ""
   }

   componentDidMount = () => {
      fetch('https://divercity-test.herokuapp.com/jobs')
         .then(resp => resp.json())
         .then(data => this.setState({
            jobs: data.jobs
         }))
   }

   toggleFilterBar = () => {
      this.setState({
         displayFilterBar: !this.state.displayFilterBar
      })
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
