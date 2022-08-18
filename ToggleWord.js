import React, { useState } from "react";

export function ToggleWord() {
    
    const [showText, setShowText] = useState(false);
      return (
        <div>
          {showText && <h1>Hello World</h1>}
              <button onClick={() => setShowText(!showText)}>Toggle</button>
              <hr></hr>
        </div>
      );
    };


