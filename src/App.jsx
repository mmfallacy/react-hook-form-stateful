import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dropdown from "./components/Dropdown";
import { Controller, useForm } from "react-hook-form";

function App() {
    const [count, setCount] = useState(0);

    const { register, handleSubmit, control } = useForm();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <p>
                    <button
                        type="button"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        count is: {count}
                    </button>
                </p>
                <p>
                    Edit <code>App.jsx</code> and save to test HMR updates.
                </p>
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <Controller
                        control={control}
                        name="dropdown"
                        render={({ field: { ref, ...rest } }) => (
                            <Dropdown options={["Filter", "Test"]} {...rest} />
                        )}
                    />
                    <select {...register("select")}>
                        <option>Test</option>
                        <option>Filter</option>
                    </select>
                    <button type="submit">Go</button>
                </form>
                {" | "}
                <a
                    className="App-link"
                    href="https://vitejs.dev/guide/features.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vite Docs
                </a>
            </header>
        </div>
    );
}

export default App;
