import { Card } from "./Card";
import { Badge } from "./Badge";
import { TFilter } from "../App";

type TProps = {
  filters: string[];
  onRemoveFilter: (filter: TFilter) => void;
  onClearFilter: () => void;
};

export const FilterPanel = ({
  filters,
  onRemoveFilter,
  onClearFilter,
}: TProps) => {
  if (filters.length === 0) {
    return null;
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel_list">
        {filters.map((filter) => (
          <Badge
            key={filter}
            variant="clearable"
            onClear={() => onRemoveFilter(filter)}
          >
            {filter}
          </Badge>
        ))}
      </div>

      <button onClick={onClearFilter}>Clear</button>
    </Card>
  );
};
