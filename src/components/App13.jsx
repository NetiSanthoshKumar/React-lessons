import React, { useState, useEffect } from "react";

export default function App13() {
  const [input, setInput] = useState(0);
  const [results, setResults] = useState({
    addition: 0,
    subtraction: 0,
    multiplication: 0,
    division: 0,
  });

  useEffect(() => {
    setResults({
      addition: 100 + Number(input),
      subtraction: 100 - Number(input),
      multiplication: 100 * Number(input),
      division: input !== 0 ? (100 / Number(input)).toFixed(2) : "∞",
    });
  }, [input]);

  const boxStyle = {
    border: "2px solid black",
    padding: "10px",
    margin: "10px",
    width: "180px",
    textAlign: "center",
    fontWeight: "bold",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
  };

  const inputBoxStyle = {
    border: "2px dashed black",
    padding: "10px",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "30px" }}>
      <h1>App13</h1>
      <h2>Assignment</h2>

      <div style={containerStyle}>
        <div style={boxStyle}>
          Addition<br />
          100 + {input} = {results.addition}
        </div>

        <div style={boxStyle}>
          Subtraction<br />
          100 - {input} = {results.subtraction}
        </div>

        <div style={inputBoxStyle}>
          input type=number<br />
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ marginTop: "5px", width: "60px", textAlign: "center" }}
          />
        </div>

        <div style={boxStyle}>
          Multiplication<br />
          100 * {input} = {results.multiplication}
        </div>

        <div style={boxStyle}>
          Division<br />
          100 / {input} = {results.division}
        </div>
      </div>
    </div>
  );
}

