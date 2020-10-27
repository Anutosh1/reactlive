import React,{Component} from "react"
import PersonList from './Components/PersonList'

export default class App extends Component {

    render() {
        return(
            <div>
                <h3>Hello</h3>
                <PersonList />
            </div>
            
        )
    }

}