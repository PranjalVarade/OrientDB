import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class getData extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.eachBox}>
        <Text style={styles.eachText}>{item.qoutes}</Text>
      </View>
    );
  };
  componentDidMount() {
    const url =
      "http://localhost:2480/query/qoutes-db/sql/select%20qoutes%20from%20qoute";

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
      <View style={styles.main_container}>
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
  eachBox: {
    height: 70,
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
