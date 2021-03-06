import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Filters.scss';

function FilterByYear(props) {
  const handleChange = (ev) => {
    props.handleFilterByYear(ev.target.value);
  };
  const renderYear = () => {
    return props.getYear.map((year, index) => {
      return (
        <option className="filter__box" value={year} key={index}>
          {year}
        </option>
      );
    });
  };

  return (
    <>
      <label className="filter__label " htmlFor="year">
        Year
      </label>
      <select
        className="filter__box filter__checkbox"
        name="year"
        onChange={handleChange}
        value={props.filterByYear}
      >
        <option className="filter__box" value="">
          All
        </option>
        {renderYear()}
      </select>
    </>
  );
}

export default FilterByYear;
