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

    changeTitle(title) {
        this.setState({
            title: "Welcome " + title + "!!!",
        });
    }  

    render() {
        return (
            <div>
                <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)} />
                <Footer />
            </div>
        );
    }
}