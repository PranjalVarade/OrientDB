import React, { Component, useState } from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default class postData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      qoutes: "",
    };
    this.headleFirstNameChange = this.headleFirstNameChange.bind(this);
    this.headleQouteChange = this.headleQouteChange.bind(this);
    this.postbtn = this.postbtn.bind(this);
  }
  headleFirstNameChange = (text) => {
    this.setState({ firstName: text });
  };
  headleQouteChange = (text) => {
    this.setState({ qoutes: text });
  };

  postbtn() {
    const { firstName, qoutes } = this.state;
    const data = {
      firstName: firstName,
      qoutes: qoutes,
    };

    const axios = require("axios");
    if (qoutes == "") {
      alert("Please enter data");
    } else {
      makePostRequest();

      async function makePostRequest() {
        try {
          var axios = require("axios");

          var config = {
            method: "post",
            url: `http://localhost:2480/function/qoutes-db/addQoute/${firstName}/${qoutes}`,

            headers: {
              Authorization: "Basic cm9vdDpyb290",
            },
          };
          axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));

            alert("Qoute posted");
          });
        } catch (error) {
          console.log(error);
          alert("Error");
        }
      }
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.main_container}>
        <View style={styles.header_container}>
          <Text style={styles.header}>Post Your Qoute</Text>
        </View>

        <View style={styles.input_container}>
          <TextInput
            style={styles.input_Text}
            placeholder="Enter Your Name"
            name="firstName"
            onChangeText={this.headleFirstNameChange}
          />
    </View>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input_Text}
            placeholder="Enter Qoute"
            name="qoutes"
            onChangeText={this.headleQouteChange}
          />
        </View>
        <View style={styles.padding}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                this.postbtn();
              }}
            >
              <Text style={styles.Labels}>Post the qoute</Text>
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
  input_container: {
    width: 200,
    borderBottomWidth: 2,
  },
  input_Text: {
    fontSize: 20,
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
});
