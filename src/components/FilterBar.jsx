import removeIcon from "../assets/images/icon-remove.svg";
import Button from "./Button";

function FilterBar({ filters, onRemove, onClear, className = "" }) {
  if (!filters?.length) return null;

  return (
    <div className={`filter-bar ${className}`}>
      <div className="filters">
        {filters.map((filter) => (
          <div className="filter-tag" key={`${filter.type}-${filter.value}`}>
            <p>{filter.value}</p>
            <Button
              className="remove-btn"
              onClick={() => onRemove(filter)}
              aria-label={`Remove ${filter.value} filter`}
            >
              <img src={removeIcon} alt="" aria-hidden="true" />
            </Button>
          </div>
        ))}
      </div>

      <Button className="clear-btn" onClick={onClear}>
        Clear
      </Button>
    </div>
  );
}

export default FilterBar;
