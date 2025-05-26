import React, { useRef, useState } from "react";

export default function App15() {
  const nameRef = useRef();
  const num1Ref = useRef();
  const num2Ref = useRef();
  const colorRef = useRef();
  const helloRef = useRef();

  const [sum, setSum] = useState(null);

  const handleNameSubmit = () => {
    alert(nameRef.current.value);
    nameRef.current.style.color = "blue";
  };

  const handleSumSubmit = () => {
    const num1 = parseInt(num1Ref.current.value) || 0;
    const num2 = parseInt(num2Ref.current.value) || 0;
    setSum(num1 + num2);
  };

  const handleColorSubmit = () => {
    const color = colorRef.current.value;
    helloRef.current.style.color = color;
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>App15</h1>
      <h2><strong>useRef hook - to create uncontrolled component</strong></h2>

      <div>
        <input type="text" ref={nameRef} defaultValue="John" style={{border:"2px solid black"}} />
        <button onClick={handleNameSubmit}>Submit</button>
      </div>

      <hr />

      <div>
        <input type="number" ref={num1Ref} defaultValue="4" style={{ fontWeight: "bold", fontSize: "18px", marginRight: "10px", border: "2px solid black" }} />
        <input type="number" ref={num2Ref} defaultValue="5" style={{ fontWeight: "bold", fontSize: "18px", marginRight: "10px", border: "2px solid black" }} />
        <button onClick={handleSumSubmit} style={{ fontWeight: "bold", border: "2px solid black" }}>Submit</button>
        {sum && (
          <div style={{ fontSize: "24px", fontWeight: "bold", marginTop: "10px" }}>{sum}</div>
        )}
      </div>

      <hr />

      <div>
        <input type="text" ref={colorRef} defaultValue="Blue" style={{ fontWeight: "bold", marginRight: "10px", border: "2px solid black" }} />
        <button onClick={handleColorSubmit} style={{ fontWeight: "bold", border: "2px solid black" }}>Submit</button>
        <div ref={helloRef} style={{ fontWeight: "bold", marginTop: "10px", fontSize: "20px" }}>
          Hello world
        </div>
      </div>
    </div>
  );
}
