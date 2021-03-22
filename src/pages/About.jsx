// import React, { Component, useState } from 'react';
// import userService from './services/userService.js'


// class App extends Component {
//     state = {
//         fullName: '',
//         users: []
//     }


//     componentDidMount() {
//         this.loadUsers()
//     }


//     loadUsers = async () => {
//         const users = await userService.query()
//         this.setState({ users })
//     }




//     showName = () => {
//         alert(fullName);
//     };


//     handleNameInput = e => {
//         const [fullName, setFullName] = useState()
//         this.setState({ fullName: e.target.value });
//         setFullName({ fullName= this.state.fullName })
//         // setFullName(fullName)
//     };


//     render() {
    
//         const { fullName } = this.state
//         return (
//             <div>
//                 <h3>This is a Class Component</h3>
//                 <h4>{this.state.users.length}</h4>
//                 <input
//                     type="text"
//                     // onChange={() => setFullName({ fullName= this.state.fullName })}
//                     onChange={this.handleNameInput}
//                     value={fullName}
//                     placeholder="Your Name"
//                 />
//                 <button onClick={this.showName}>
//                     Alert
//         </button>
//             </div>
//         );
//     }
// }


// export default App;