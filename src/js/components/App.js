import React from "react";

// Components
import Footer from "./Footer";
import Header from "./Header";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome",
        };
    }
    render() {
        setTimeout(() => {
            this.setState({
                title: "Welcome Ashley!!",
            });
        }, 2000);
        return (
            <div>
                <Header title={this.state.title} />
                <Footer />
            </div>
        );
    }
}