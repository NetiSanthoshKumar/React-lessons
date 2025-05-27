import React, { useState, useEffect } from 'react';

const CricketScoreboard = () => {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [message, setMessage] = useState('___');

  useEffect(() => {
    if (wickets >= 10) {
      setMessage("Game Over!!");
    }
  }, [wickets]);

  const handleRun = () => {
    if (wickets < 10) {
      setRuns(runs + 1);
      setMessage("Well Done!!");
    }
  };

  const handleWicket = () => {
    if (wickets < 10) {
      setWickets(wickets + 1);
      setMessage("Better Luck Next Time!")
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center',border:'2px solid black' }}>
      <h2> <strong>Cricket Score Board</strong></h2>

      <div style={{ display: 'flex', justifyContent: 'center',alignItems:"center", margin: '20px 0' }}>
        <div style={{ border: '2px solid black', padding: '20px', borderRadius: '10px' }}>
          <h3>{runs} Run</h3>
          <button onClick={handleRun}>Run</button>

          <h3>{wickets} Wicket</h3>
          <button onClick={handleWicket}>Wicket</button>
        </div>

        <div style={{ border: '2px solid black', padding: '20px', borderRadius: '10px',justifyContent:"center" ,alignItems:'center'}}>
          {message ? (
            <h3>{message}</h3>
          ) : (
            <h3>Well Done!</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default CricketScoreboard;
