import React, { useState } from "react";
import { render } from "react-panorama";

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);

    return (
        <Panel style={{ flowChildren: "down" }}>
            <Label text={`Count: ${count}`} />
            <TextButton className="ButtonBevel" text="Increment" onactivate={increment} />
        </Panel>
    );
}

render(<Counter />, $.GetContextPanel());
