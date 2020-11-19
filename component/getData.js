import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default class getData extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      liked: false,
    };
  }
  likeImage = async () => {
    const likeState = await !this.state.liked;
    this.setState({ liked: likeState });
  };
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
    const { liked } = this.state;
    const colorValue = liked ? "#fb7777" : "#fff";
    const likeValue = liked ? "1" : "0";
    return (
      <View style={styles.main_container}>
        <FlatList data={this.state.dataSource} renderItem={this.renderItem}>
          <TouchableOpacity onPress={this.likeImage}>
            <Ionicons name="md-heart" size={55} color={colorValue} />
          </TouchableOpacity>
          <Text style={styles.likeNumberStyle}>{likeValue}</Text>
        </FlatList>
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
  eachBox: {
    height: 50,
    width: 400,
    backgroundColor: "#843b62",
    alignSelf: "center",
    border: "3px solid #0b032d",
  },
  eachText: {
    alignSelf: "center",
    fontSize: 20,
    paddingTop: 5,
  },
});
