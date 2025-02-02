import React from "react";
import "./App.css";
import { Button } from "./components/Button/Button.tsx";

function App() {
    return (
        <div className="App flex flex-row gap-8 items-start">
            <div className="flex flex-row gap-2 items-start">
                <div className="flex flex-col gap-2 items-start">
                    <Button tone="brand" variant="primary" size="small">
                        Brand
                    </Button>
                    <Button tone="brand" variant="primary" size="medium">
                        Brand
                    </Button>
                    <Button tone="brand" variant="primary" size="large">
                        Brand
                    </Button>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <Button tone="brand" variant="outline" size="small">
                        Brand
                    </Button>
                    <Button tone="brand" variant="outline" size="medium">
                        Brand
                    </Button>
                    <Button tone="brand" variant="outline" size="large">
                        Brand
                    </Button>
                </div>
            </div>

            <div className="flex flex-row gap-2 items-start">
                <div className="flex flex-col gap-2 items-start">
                    <Button tone="danger" variant="primary" size="small">
                        Danger
                    </Button>
                    <Button tone="danger" variant="primary" size="medium">
                        Danger
                    </Button>
                    <Button tone="danger" variant="primary" size="large">
                        Danger
                    </Button>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <Button tone="danger" variant="outline" size="small">
                        Danger
                    </Button>
                    <Button tone="danger" variant="outline" size="medium">
                        Danger
                    </Button>
                    <Button tone="danger" variant="outline" size="large">
                        Danger
                    </Button>
                </div>
            </div>
            {/* Disabled */}
            <div className="flex flex-row gap-2 items-start">
                <div className="flex flex-col gap-2 items-start">
                    <Button
                        tone="brand"
                        variant="primary"
                        size="small"
                        disabled={true}
                    >
                        Brand
                    </Button>
                    <Button
                        tone="brand"
                        variant="primary"
                        size="medium"
                        disabled={true}
                    >
                        Brand
                    </Button>
                    <Button
                        tone="brand"
                        variant="primary"
                        size="large"
                        disabled={true}
                    >
                        Brand
                    </Button>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <Button
                        tone="danger"
                        variant="outline"
                        size="small"
                        disabled={true}
                    >
                        Danger
                    </Button>
                    <Button
                        tone="danger"
                        variant="outline"
                        size="medium"
                        disabled={true}
                    >
                        Danger
                    </Button>
                    <Button
                        tone="danger"
                        variant="outline"
                        size="large"
                        disabled={true}
                    >
                        Danger
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
