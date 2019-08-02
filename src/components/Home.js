import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() => {
            this.setState({
                status: 1,
            });
        }, 1000);
        console.log("Constructor");
    }

    componentWillMount() {
        console.log("Component will mount");
    };

    componentDidMount() {
        console.log("Component did mount");
    };

    componentWillReceiveProps(nextProps) {
        console.log("Component will receive props", nextProps);
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component update", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
        //asd
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    onMakeOlder() {
       this.setState({
            age: this.state.age += 3
       });
    };

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }; 

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    };
    
    render() {
        return (
            <div>
                <p>Hello {this.props.name}, your age is {this.state.age} Status:  {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input 
                    type="text" 
                    value={this.state.homeLink} 
                    onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Link!</button>
            </div>
        ); 
    }
}

Home.propTypes  = {
    name: PropTypes.string,
    age: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string,
};
