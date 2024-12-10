import './App.css';
import React from 'react';
import ReactPainter from 'react-painter';

function App() {
  return (
    <>
      <ReactPainter
        width={1000}
        height={600}
        render={({ canvas, triggerSave, setColor, setLineWidth, setLineCap, setLineJoin, imageDownloadUrl }) => (
          <div>
            <h1>Sketch Book</h1>
            <div className="toolbox">
              <div className="flex">
                <label htmlFor="">Brush Color</label>
                <input type="color" onChange={(e) => setColor(e.target.value)} />
              </div>
              <div className="flex">
                <label htmlFor="">Brush Size</label>
                <input
                  defaultValue={1}
                  type="range"
                  min="1"
                  max="50"
                  onChange={(e) => setLineWidth(Number(e.target.value))}
                />
              </div>
              <div className="flex">
                <label htmlFor="">Line Join</label>
                <select name="" id="" onChange={(e) => setLineJoin(e.target.value)}>
                  <option value="round">Round</option>
                  <option value="bevel">Bevel</option>
                  <option value="miter">Miter</option>
                </select>
              </div>
              <div className="flex">
                <label htmlFor="">Line Cap</label>
                <select name="" id="" onChange={(e) => setLineCap(e.target.value)}>
                  <option value="round">Round</option>
                  <option value="butt">Butt</option>
                  <option value="square">Square</option>
                </select>
              </div>
              <div className="flex">
                {imageDownloadUrl ? (
                  <a href={imageDownloadUrl} download="sketch.png">
                    Download
                  </a>
                ) : (
                  <button onClick={triggerSave}>Save</button>
                )}
              </div>
            </div>
            <div className="awesomeContainer">{canvas}</div>
          </div>
        )}
      />
    </>
  );
}

export default App;
