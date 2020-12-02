import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default class findPair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      fname: "",
    };
    this.findbtn = this.findbtn.bind(this);
  }
  handlePairChange = (text) => {
    this.setState({ fname: text });
  };

  renderItem = ({ item }) => {
    return (
      <View>
        <View>
          <Text style={styles.eachText}>{item.qoutes}</Text>
        </View>
      </View>
    );
  };

  findbtn() {
    const { fname } = this.state;
    const axios = require("axios");
    if (fname == "") {
      alert("Please enter data");
    } else {
      const url = `http://localhost:2480/function/qoutes-db/findqoute/${fname}/`;

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
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.header_container}>
          <Text style={styles.header}>Qoute</Text>
        </View>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input_Text}
            placeholder="Enter FirstName "
            name="fname"
            onChangeText={this.handlePairChange}
          />
        </View>

        <View style={styles.padding}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                this.findbtn();
              }}
            >
              <Text style={styles.Labels}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList data={this.state.dataSource} renderItem={this.renderItem} />
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
  },
  input_Text: {
    fontSize: 20,
  },

  eachBox: {
    height: 70,
    width: 400,
    backgroundColor: "#843b62",
    alignSelf: "center",
    border: "3px solid #0b032d",
    paddingTop: 5,
  },
  eachText: {
    alignSelf: "center",
    fontSize: 20,
    paddingTop: 5,
  },
});
