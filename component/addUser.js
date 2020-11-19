import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
export default class addUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
    // this.headleDeleteQouteChange = this.headleDeleteQouteChange.bind(this);
    this.addUserbtn = this.addUserbtn.bind(this);
  }
  handlefirstNameChange = (text) => {
    this.setState({ firstName: text });
  };
  handlelastNameChange = (text) => {
    this.setState({ lastName: text });
  };

  addUserbtn() {
    const { firstName, lastName } = this.state;
    const axios = require("axios");
    if (firstName == "" && lastName == "") {
      alert("Please enter data");
    } else {
      makeaddRequest();
      async function makeaddRequest() {
        try {
          //const url1 = `http://localhost:2480/command/qoutes-db/sql/DELETE%20VERTEX%20qoute%20WHERE%20qoutes=\"${qoute_delete}\"`;
          //console.log(url1);
          var config_addUser = {
            method: "post",
            //url: 'http://localhost:2480/command/qoutes-db/sql/DELETE VERTEX qoute WHERE  qoutes= \'you can do it\'',
            //url:'http://localhost:2480/command/qoutes-db/sql/DELETE VERTEX qoute WHERE  qoutes= qoute_delete?qoutes=',
            //url: `http://localhost:2480/command/qoutes-db/sql/DELETE%20VERTEX%20qoute%20WHERE%20qoutes=\"${qoute_delete}\"`,
            //url: `http://localhost:2480/command/qoutes-db/sql/DELETE VERTEX qoute WHERE qoutes= '"${qoute_delete}"'`,
            url: `http://localhost:2480/function/qoutes-db/addUser/${firstName}/${lastName}`,
            headers: {
              Authorization: "Basic cm9vdDpyb290",
            },
          };
          axios(config_addUser).then(function (response) {
            console.log(JSON.stringify(response.data));
            alert("User Added ");
          });
        } catch (error) {
          console.log(error);
          alert("Error");
        }
      }
    }
  }
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.header_container}>
          <Text style={styles.header}>Add New User</Text>
        </View>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input_Text}
            placeholder="Enter the first Name of the user"
            name="firstName"
            onChangeText={this.handlefirstNameChange}
          />
        </View>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input_Text}
            placeholder="Enter the Last Name of the user"
            name="lastName"
            onChangeText={this.handlelastNameChange}
          />
        </View>

        <View style={styles.padding}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                this.addUserbtn();
              }}
            >
              <Text style={styles.Labels}>Add User</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#ffb997",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    alignSelf: "center",
  },
  header_container: {
    paddingBottom: 30,
    width: 250,
  },
  header: {
    fontSize: 25,
    fontColor: "#621940",
    alignSelf: "center",
  },
  container: {
    border: "3px solid #0b032d",
    borderRadius: 7,
    width: 300,

    paddingBottom: 7,
    backgroundColor: "#843b62",
  },
  Labels: {
    fontSize: 25,
    alignSelf: "center",
  },
  padding: {
    paddingTop: 20,
  },
  input_container: {
    width: 200,
    borderBottomWidth: 2,
    //paddingBottom:50,
  },
  input_Text: {
    fontSize: 20,
  },
});
