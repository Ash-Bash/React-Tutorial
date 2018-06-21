import React from "react";

// Components
import Title from "./header/Title";

export default class Header extends React.Component {

    render() {
        
        return (
            <header>
                <Title title={this.props.title}/>
            </header>
        );
    }
}