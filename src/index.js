import * as React from "react";
import * as ReactDOM from "react-dom";
// Add the following two lines
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm">
            <h1 className="text-center mb-3">Hello, World.</h1>
            <Card style={{ maxWidth: "50%" }} className="mx-auto">
              <Card.Header>Parcel Example</Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-4 text-muted">
                  A Parcel.js Example Built with React
                </Card.Subtitle>
                <Card.Text>
                  I setup Parcel and built an app in 5 minutes and you can, too!
                  Click the button below to learn more!
                </Card.Text>
                <Card.Link
                  className="text-success"
                  href="https://github.com/methodbox/parcel-example"
                >
                  Learn More
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const mountApp = document.getElementById("app");
ReactDOM.render(<App />, mountApp);