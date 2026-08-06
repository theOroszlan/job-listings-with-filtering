import { useState } from "react";
import JobCard from "./components/JobCard";
import FilterBar from "./components/FilterBar";
import data from "./data/data.json";

function App() {
  const [jobs, setJobs] = useState(data);
  const [filters, setFilters] = useState([]);

  return (
    <div className="wrapper">
      <div class="header-background"></div>
      <main>
        <FilterBar filters={filters} />
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </main>
    </div>
  );
}

export default App;
