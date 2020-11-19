import { StatusBar } from "expo-status-bar";
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
import { insertNewPostToServer } from "/Users/pranjalvarade/Desktop/fall2020/Nosql/newNosql/server.js";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }
  /*constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      qoutes: "",
      qoute_list: null,
      qoute_delete: "",
    };
    this.headleFirstNameChange = this.headleFirstNameChange.bind(this);
    this.headleQouteChange = this.headleQouteChange.bind(this);
    //this.postbtn = this.postbtn.bind(this);
    this.getbtn = this.getbtn.bind(this);
    //this.deletebtn = this.deletebtn.bind(this);
  }
  headleFirstNameChange = (text) => {
    this.setState({ firstName: text });
  };
  headleQouteChange = (text) => {
    this.setState({ qoutes: text });
  };
  handleDeleteQouteChange = (text) => {
    this.setState({ qoute_delete: text });
  };*/
  /*updatebtn() {
    const axios = require("axios");
    makeUpdateRequest();
    async function makeUpdateRequest() {
      try {
        var config_update = {
          method: "post",
          url: "",

          headers: { Authorization: "Basic cm9vdDpyb290" },
        };
        axios(config_update).then(function(response)){
          console.log("updated");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }*/
  /*deletebtn() {
    const { qoute_delete } = this.state;
    const axios = require("axios");
    makeDeleteRequest();
    async function makeDeleteRequest() {
      try {
        const url1 = `http://localhost:2480/command/qoutes-db/sql/DELETE%20VERTEX%20qoute%20WHERE%20qoutes=\"${qoute_delete}\"`;
        console.log(url1);
        var config_delete = {
          method: "get",
          //url: 'http://localhost:2480/command/qoutes-db/sql/DELETE VERTEX qoute WHERE  qoutes= \'you can do it\'',
          //url:'http://localhost:2480/command/qoutes-db/sql/DELETE VERTEX qoute WHERE  qoutes= qoute_delete?qoutes=',
          url: `http://localhost:2480/command/qoutes-db/sql/DELETE%20VERTEX%20qoute%20WHERE%20qoutes=\"${qoute_delete}\"`,
          //url: `http://localhost:2480/command/qoutes-db/sql/DELETE VERTEX qoute WHERE qoutes= '"${qoute_delete}"'`,
          headers: {
            Authorization: "Basic cm9vdDpyb290",
          },
        };
        axios(config_delete).then(function (response) {
          console.log(JSON.stringify(response.data));
        });
      } catch (error) {
        console.log(error);
      }
    }
  }*/
  /*getbtn() {
    const axios = require("axios");
    makeGetrequest();
    async function makeGetrequest() {
      try {
        var config_read = {
          method: "get",
          url:
            "http://localhost:2480/query/qoutes-db/sql/select%20qoutes%20from%20qoute",
          headers: {
            Authorization: "Basic cm9vdDpyb290",
          },
        };
        axios(config_read).then(function (response) {
          console.log(JSON.stringify(response.data));
          
        });
      } catch (error) {
        console.log(error);
      }
    }
  }*/
  /* postbtn() {
    const { firstName, qoutes } = this.state;
    const data = {
      firstName: firstName,
      qoutes: qoutes,
    };

    const axios = require("axios");

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
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
*/
  renderItem = ({ item }) => {
    return (
      <View style={styles.eachBox}>
        <Text style={styles.eachText}>{item.qoutes}</Text>
      </View>
    );
  };
  componentDidMount() {
    const axios = require("axios");
    var config_read = {
      method: "get",
      url:
        "http://localhost:2480/query/qoutes-db/sql/select%20qoutes%20from%20qoute",
      headers: {
        Authorization: "Basic cm9vdDpyb290",
      },
    };

    const url =
      "http://localhost:2480/query/qoutes-db/sql/select%20qoutes%20from%20qoute";
    //const headers = { Authorization= "Basic cm9vdDpyb290" };
    fetch(url, {
      headers: {
        Authorization: "Basic cm9vdDpyb290",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.result,
        });
      });
  }

  render() {
    return (
      <View>
        <FlatList data={this.state.dataSource} renderItem={this.renderItem} />
      </View>
      /* <View>
        <TextInput
          placeholder="enter your name"
          name="firstName"
          onChangeText={this.headleFirstNameChange}
        />
        <TextInput
          placeholder="enter qoute"
          name="qoutes"
          onChangeText={this.headleQouteChange}
        />
        <TouchableOpacity
          onPress={() => {
            this.postbtn();
          }}
        >
          <Text>Post the qoute</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.getbtn();
          }}
        >
          <Text>Get all data</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="enter the qoute you want to delete"
          name="Qoute-delete"
          onChangeText={this.handleDeleteQouteChange}
        />
        <TouchableOpacity
          onPress={() => {
            this.deletebtn();
          }}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
        </View>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  eachBox: {
    height: 50,
    width: "100%",
    backgroundColor: "grey",
    alignSelf: "center",
  },
  eachText: {
    alignSelf: "center",
    fontSize: 20,
    paddingTop: 5,
  },
});
