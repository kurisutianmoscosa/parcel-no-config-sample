import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      homeLink: "Home",
    };
  } 

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName,
    });
  };

  onGreet() {
    alert(`Hello!`);
  };
  
  render() {
    let initAge = 25;

    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
            <Home 
              name={"Christian"} 
              initialAge={initAge} 
              greet={this.onGreet}
              changeLink={this.onChangeLinkName.bind(this)}
              initialLinkName={this.state.homeLink}
              />
          </div>
        </div>
      </div>
    );
  };
};

const mountApp = document.querySelector("#app");
ReactDOM.render(<App />, mountApp);