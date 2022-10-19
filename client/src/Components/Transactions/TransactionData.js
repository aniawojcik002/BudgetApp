import React from "react";
import { useState, useEffect } from "react";

const TransactionData = () => {
  const [spending, setSpending] = useState([])
  const fetchData = async function () {
    const response = await fetch("http://localhost:5000/");
    const jsonData = await response.json();

    setSpending(jsonData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Kategoria</th>
              <th>Data</th>
              <th>Wartość</th>
            </tr>
          </thead>
          <tbody>
            {spending.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.category}</td>
                  <td>{item.money}</td>
                  <td>{item.DateOfSpending.slice(0,10)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionData;
