import { useState } from "react";
import JobCard from "./components/JobCard";
import FilterBar from "./components/FilterBar";
import data from "./data/data.json";

function App() {
  const [jobs, setJobs] = useState(data);
  const [filters, setFilters] = useState([]);

  const handleFilter = (filter) => {
    setFilters((prev) => {
      if (
        prev.some((f) => f.type === filter.type && f.value === filter.value)
      ) {
        return prev;
      }

      return [...prev, filter];
    });
  };

  const handleRemoveFilter = (filter) => {
    setFilters((prev) => {
      return prev.filter(
        (f) => !(f.type === filter.type && f.value === filter.value),
      );
    });
  };

  const handleClearFilters = () => {
    setFilters([]);
  };

  const getFilteredJobs = () => {
    if (filters.length === 0) return jobs;

    const filteredJobs = jobs.filter((job) =>
      filters.every((filter) => {
        const values = Array.isArray(job[filter.type])
          ? job[filter.type]
          : [job[filter.type]];

        return values.includes(filter.value);
      }),
    );

    return filteredJobs;
  };

  const filteredJobs = getFilteredJobs();

  return (
    <div className="wrapper">
      <div className="header-background"></div>
      <main>
        <FilterBar
          filters={filters}
          onRemove={handleRemoveFilter}
          onClear={handleClearFilters}
        />
        {filteredJobs.map((job) => (
          <JobCard handleFilter={handleFilter} key={job.id} job={job} />
        ))}
      </main>
    </div>
  );
}

export default App;
