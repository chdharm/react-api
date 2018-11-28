import React from 'react';
const divStyle = {
    margin: '40px',
    border: '5px solid pink'
  };
  const pStyle = {
    fontSize: '15px',
    textAlign: 'center'
  }; 
export class Product extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                data: [],
                value: "Please enter the value"
            }
            this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
        }    

        handleChange(event) {
            this.setState({value: event.target.value});
            alert("sadad");
          }
        
        handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
        }
        componentDidMount(){
            fetch('https://cors-anywhere.herokuapp.com/https://android2.herokuapp.com/users')
            .then(d => d.json())
            .then(d => {
                this.setState({
                    data: d
                })
            })
        }
        render(){
            return(
                <div className="container">
                <h2>Striped Rows</h2>
                <p>The .table-striped className adds zebra-stripes to a table:</p>            
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((product,i ) =>
                        <tr key={i} style={pStyle}>
                            <td>{product.name}</td>
                            <td>{product.email}</td>
                            <td>{product.age}</td>
                            <td>{product.created_at}</td>
                            <td>{product.updated_at}</td>
                        </tr>
                   )}
                    </tbody>
                </table>
                <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
                </div>
                
                );
        }


}