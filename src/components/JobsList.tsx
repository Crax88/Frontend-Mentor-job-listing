import { JobCard } from "./JobCard";
import { TFilter, TJob } from "../App";

type TProps = {
  jobs: TJob[];
  onSelectFilter: (filter: TFilter) => void;
};

export const JobsList = ({ jobs, onSelectFilter }: TProps) => {
  return (
    <div className="jobs-container">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onSelectFilter={onSelectFilter} />
      ))}
    </div>
  );
};
