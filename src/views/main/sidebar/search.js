import React from 'react'

export default class Search extends React.Component {
    render() {
        return (
            <div class='search-bar_sidebar'> 
                <div class='input-search_sidebar'>
                    <img class='' src='https://static.thenounproject.com/png/105498-200.png'></img>
                    <input class='col-10' value = {this.props.inputText} name = "inputText" onChange = {(text) => this.props.onChange(text.target.value)}/>
                </div>
            </div>
        )
    }
}