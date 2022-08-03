import { Card } from "./Card";
import { Badge } from "./Badge";
import { TFilter, TJob } from "../App";

type TProps = {
  job: TJob;
  onSelectFilter: (filter: TFilter) => void;
};

export const JobCard = ({ job, onSelectFilter }: TProps) => {
  const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
  return (
    <Card isFeatured={job.featured} className="job-card">
      <img className="job-img" src={job.logo} alt={job.company} />
      <div className="job-info">
        <div className="job-info_main">
          <h3>{job.company}</h3>
          {job.new && (
            <Badge variant="rounded" colorTheme="primary">
              NEW!
            </Badge>
          )}
          {job.featured && (
            <Badge variant="rounded" colorTheme="dark">
              FEATURED
            </Badge>
          )}
        </div>
        <div className="job-info_position">{job.position}</div>
        <div className="job-info_meta">
          <span>{job.postedAt}</span>
          <span>{job.contract}</span>
          <span>{job.location}</span>
        </div>
      </div>
      <div className="job-tags">
        {jobTags.map((tag) => (
          <Badge key={tag} onClick={() => onSelectFilter(tag)}>
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
