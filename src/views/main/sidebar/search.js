import React from 'react'

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText : '',
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleSearch(text) {

    }

    handleChangeText(text) {
        this.setState({
            inputText : text.target.value
        })
    }

    render() {
        return (
            <div>
                <input value = {this.state.inputText} name = "inputText" onChange = {this.handleChangeText}/>
                <button onClick = {this.handleSearch(this.state.inputText)}>S</button>
            </div>
        )
    }
}