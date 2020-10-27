import React from "react"
import axios from "axios"

export default class PersonList extends React.Component {
    state = {
        persons:[]
    }


    componentDidMount() {
        axios.get(`https://reqres.in/api/users?page=2`).then(res => {
                console.log('Hello viewer heres the data you want', res);
                this.setState({persons: res.data.data });
            })
    }

    render() {
        return (
            <div>
                <h1>Details</h1>
                {this.state.persons.map((person,index) => 
                    <div key={person.id}>
                        <p> {index+1} </p>
                        <p>Name : {person.first_name}  {person.last_name} & </p>
                        <p> Email :  {person.email}</p>
                        <img src={person.avatar} alt="im" ></img>
                        <br  />
                    </div> ) 
                }
            </div>
        )
    }

}