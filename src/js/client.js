import React from "react";
import ReactDom from "react-dom";

class Layout extends React.Component {
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
                <h1>{helloWorldText}, 2 + 2 Equals {this.getVal()}</h1>
                <h2>{this.name}</h2>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDom.render(<Layout/>, app);