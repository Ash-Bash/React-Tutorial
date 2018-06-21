import React from "react";

// Components
import Title from "./header/Title";

export default class Header extends React.Component {

    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <header>
                <Title title={this.props.title}/>
                <input onChange={this.handleChange.bind(this)}/>
            </header>
        );
    }
}