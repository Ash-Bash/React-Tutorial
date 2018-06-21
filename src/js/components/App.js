import React from "react";

// Components
import Footer from "./Footer";
import Header from "./Header";

export default class App extends React.Component {
    constructor() {
        super();
        this.name = "It's Ash-Bash"
    }

    getVal() {
        return 2 + 2;
    }

    render() {
        const helloWorldText = "Hello, World!!!!";
        return (
            <div>
                <Header />
                <h1>{helloWorldText}, 2 + 2 Equals {this.getVal()}</h1>
                <h2>{this.name}</h2>
                <Footer />
            </div>
        );
    }
}