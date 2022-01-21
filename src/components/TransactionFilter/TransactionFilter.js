import "../TransactionFilter/TransactionFilter.css";

const TransactionFilter = ({handleYearChange, selected }) => {
	const handleDropDown = (event) => {
		handleYearChange(event.target.value);
	};
	return (
		<div className="trans-Filter">
			<div className="trans-heading">
				<label>Filter by year</label>
				<select value={selected} onChange={handleDropDown}>
					<option value="All">All</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export default TransactionFilter;
