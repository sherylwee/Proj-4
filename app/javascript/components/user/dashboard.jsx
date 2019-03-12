import React from "react";
import PropTypes from "prop-types";
import Logo from "../../../assets/images/logo";

import {
  Header,
  Icon,
  Button,
  Container,
  Image,
  Menu
} from "semantic-ui-react";

import { Route, HashRouter as Router, Switch, NavLink } from "react-router-dom";

import "whatwg-fetch";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.deleteHandler = this.deleteHandler.bind(this);
    this.state = {
        loadData: false,
        allItems: []
    }
  }

  deleteHandler(e) {
    console.log(e.target.dataset.id);
    var reactThis = this;
    // console.log("deleting")
    fetch(`/items/${e.target.dataset.id}`, {
      method: "delete"
    })
      .then(function(response) {
        console.log("delete");

        fetch("/items", {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        })
          .then(function(response) {
            reactThis.setState({ loadData: true });
            return response.json();
          })
          .then(function(data) {
            console.log(data);
            reactThis.setState({ allItems: data, loadData: false });
          });
        return response.json();
      })
      .catch(function(error) {
        console.log(error);
      });
  }


  componentDidMount() {
    var reactThis = this;

    fetch("/items", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(function(response) {
        reactThis.setState({ loadData: true });
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        reactThis.setState({ allItems: data, loadData: false });
      });
  }

render() {
    const items = this.state.allItems.map((item, index) => {
        return (

            
            <div key={index}>
            <p/>
            <Header as="h3">
            <Icon name="camera retro" style={{ fontSize: "0.8em", color: "#444444" }}/>
            <Header.Content>{item.name}</Header.Content>
            </Header>
            <Image src={item.picture} style={{width: "60vh"}}/>
            <p/><Icon name="ellipsis horizontal" style={{ fontSize: "0.8em", color: "#444444" }}/>{item.description}
            <p/>
            <Button
            basic
            color="orange"
            animated="fade"
            as={NavLink}
            to={"/delete"}
            data-id={item.id}
            onClick={this.deleteHandler}
          >
            <Button.Content visible>Delete</Button.Content>
            <Button.Content hidden>
              <Icon name="trash alternate" />
            </Button.Content>
          </Button>


            <Menu fixed="top" style={{ backgroundColor: "#eca400" }}>
            <Container>
              <Menu.Item as="a" header>
                <Image
                  // size="small"
                  width={115}
                  src={Logo}
                  style={{ marginRight: "1.5em" }}
                  // as={NavLink}
                  // to={"/profile"}
                />
              </Menu.Item>
              <Menu.Item as={NavLink} to={"/new"} style={{ color: "white" }}>
                New user
              </Menu.Item>
            </Container>
          </Menu>
            </div>        

            
        );
    });
    return (
        <div style={{ marginTop: "80px", marginLeft: "80px" }}>
        {items}
        </div>
        
    )
}

}

export default Dashboard;
