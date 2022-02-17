import React from "react";

const FilterOption = () => {
  return (
    <div className="FilterOption hide">
      <p>Filters</p>
      <form>
        <div className="state">
          <select name="state">
            <option value="0">State</option>
          </select>
        </div>
        <div className="state">
          <select name="city">
            <option value="0">City</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FilterOption;
