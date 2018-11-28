import React from 'react';
import {createStore} from 'redux';

const urlForUsername = username => 'https://api.github.com/users/' + username;

export class User extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
	}

	componentDidMount(){
		fetch(urlForUsername(this.props.username))
		.then(d => d.json())
		.then(d => {
			this.setState({
				githubData: d
			})
		})
	}
	render(){
		if(!this.state.githubData) return <p> Loading .. </p>
		return(

				<div>
				{this.state.githubData.repos_url}
				</div>
			);
	}

}
const reducer = (state,action) => {
    switch(action.type){
        case "Add":
        state = state + action.payload;
        break;
        case "Sub":
        break;
    }
    return state;

};
const store = createStore(reducer,1);
store.subscribe(() => {
    alert("State is" + store.getState());
});

store.dispatch(
{
    type: "Add",
    payload: 10
});
