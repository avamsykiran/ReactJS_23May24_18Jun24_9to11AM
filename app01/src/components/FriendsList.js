import { Component } from 'react';

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: ["Vamsy", "Murthy", "Ramesh", "Suresh", "Ravi"]
        };
    }

    render() {
        return (
            <section>
                <h3>My Friends</h3>
                <ol>
                    {this.state.friends.map(f => <li> {f} </li> )}
                </ol>
            </section>
        );
    }
}

export default FriendsList;