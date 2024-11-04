import { useState } from "react";
import ResultsTable from "./ResultsTable";

export default function UserInput() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 100,
    annualInvestment: 20,
    expectedReturn: 5.6,
    duration: 10,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value ? parseFloat(value) : "",
    }));
  }

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <div>
            <label>Initial Investment:</label>
            <input
              type="number"
              name="initialInvestment"
              onChange={handleChange}
              value={inputValues.initialInvestment}
            />
          </div>
          <div>
            <label>Annual Investment:</label>
            <input
              type="number"
              name="annualInvestment"
              onChange={handleChange}
              value={inputValues.annualInvestment}
            />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>Exptected return:</label>
            <input
              type="number"
              name="expectedReturn"
              onChange={handleChange}
              value={inputValues.expectedReturn}
            />
          </div>
          <div>
            <label>Duration</label>
            <input
              type="number"
              name="duration"
              onChange={handleChange}
              value={inputValues.duration}
            />
          </div>
        </div>
      </section>
      <ResultsTable inputValues={inputValues} />;
    </>
  );
}
