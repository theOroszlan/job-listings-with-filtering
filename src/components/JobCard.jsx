import Button from "./Button";

function JobCard({ job, className = "", handleFilter }) {
  if (!job) return null;

  const filters = [
    { type: "role", value: job.role },
    { type: "level", value: job.level },
    ...job.languages.map((language) => ({
      type: "language",
      value: language,
    })),
    ...job.tools.map((tool) => ({
      type: "tool",
      value: tool,
    })),
  ];

  return (
    <article
      className={`job-card ${job.featured ? "featured" : ""} ${className}`}
    >
      <img
        className="company-logo"
        src={job.logo}
        alt={`${job.company} logo`}
      />
      <div className="job-details">
        <div className="company-info">
          <p className="company-name">{job.company}</p>
          <div className="job-status">
            {job.new && <p className="job-new">NEW!</p>}
            {job.featured && <p className="job-featured">FEATURED</p>}
          </div>
        </div>
        <h2 className="job-position">{job.position}</h2>
        <ul className="job-meta">
          <li>{job.postedAt}</li>
          <li>{job.contract}</li>
          <li>{job.location}</li>
        </ul>
      </div>
      <div className="job-filter-btns">
        {filters.map((filter) => (
          <Button
            className="filter-btn"
            key={`${filter.type}-${filter.value}`}
            onClick={() => handleFilter(filter)}
          >
            {filter.value}
          </Button>
        ))}
      </div>
    </article>
  );
}

export default JobCard;
