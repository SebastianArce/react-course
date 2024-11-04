import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultsTable({ inputValues }) {
  const investmentResults = calculateInvestmentResults(inputValues);
  let validDuration = true;
  if (inputValues.duration < 1) {
    validDuration = false;
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {validDuration &&
          investmentResults.map((result) => (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.cumulativeInterest)}</td>
              <td>{formatter.format(result.investedCapital)}</td>
            </tr>
          ))}
        {!validDuration && (
          <tr>
            <td colSpan="5">Please enter a valid duration</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
