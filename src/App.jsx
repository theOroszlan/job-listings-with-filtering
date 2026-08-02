import { useState } from "react";
import JobCard from "./components/JobCard";
import data from "./data/data.json";

function App() {
  const [jobs, setJobs] = useState(data);

  return (
    <div className="wrapper">
      <div class="header-background"></div>
      <main>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </main>
    </div>
  );
}

export default App;
