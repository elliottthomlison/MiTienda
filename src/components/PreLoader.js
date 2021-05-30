import ClipLoader from "react-spinners/ClipLoader";
import React from "react";
import { useState } from "react";
import { css } from "@emotion/react";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000000");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <ClipLoader color={color} loading={loading} css={override} size={150} />
    </div>
  );
}

export default App;