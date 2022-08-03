import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { FilterPanel } from "./components/FilterPanel";
import { JobsList } from "./components/JobsList";

export type TJob = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export type TFilter = string;

function App() {
  const [jobs, setJobs] = useState<TJob[]>([]);
  const [filters, setFilters] = useState<TFilter[]>([]);

  const handleSelectFilter = (filter: TFilter) => {
    if (!filters.includes(filter)) {
      setFilters((prev) => prev.concat(filter));
    }
  };

  const handleRemoveFilter = (filter: TFilter) => {
    setFilters((prev) => prev.filter((el) => el !== filter));
  };

  const handleClearFilters = () => {
    setFilters([]);
  };

  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const filterJobs = (jobs: TJob[]): TJob[] => {
    if (!filters.length) {
      return jobs;
    }

    return jobs.filter((job) => {
      const jobFilters = [job.role, job.level, ...job.languages, ...job.tools];
      return filters.every((filter) => jobFilters.includes(filter));
    });
  };

  return (
    <>
      <Header />
      <div className="container">
        <FilterPanel
          filters={filters}
          onRemoveFilter={handleRemoveFilter}
          onClearFilter={handleClearFilters}
        />
        <JobsList jobs={filterJobs(jobs)} onSelectFilter={handleSelectFilter} />
      </div>
    </>
  );
}

export default App;
