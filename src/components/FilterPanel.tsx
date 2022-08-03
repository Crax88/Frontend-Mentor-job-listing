import { Card } from "./Card";
import { Badge } from "./Badge";

type TProps = {
  filters: string[];
};

export const FilterPanel = ({ filters }: TProps) => {
  return (
    <Card className="filter-panel">
      <div className="filter-panel_list">
        {filters.map((filter) => (
          <Badge key={filter} variant="clearable">
            {filter}
          </Badge>
        ))}
      </div>

      <button>Clear</button>
    </Card>
  );
};
