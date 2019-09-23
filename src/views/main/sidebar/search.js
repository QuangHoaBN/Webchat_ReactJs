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
            <div class='search-bar_sidebar'> 
                <div class='input-search_sidebar'>
                    <img class='' src='https://static.thenounproject.com/png/105498-200.png'></img>
                    <input onChange = {(text) => this.props.onChange(text.target.value)} class='col-10'/>
                </div>
            </div>
        )
    }
}