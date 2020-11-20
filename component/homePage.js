import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

export default class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
    };
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.main_container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require("/Users/pranjalvarade/Desktop/fall2020/Nosql/newNosql/assets/orientdb_icon.png")}
          />
        </View>
        <View style={styles.header_container}>
          <Text style={styles.header}>OrientDB</Text>
        </View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.props.navigation.navigate("postData")}
        >
          <Text style={styles.Labels}>Post Qoute</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.props.navigation.navigate("deleteData")}
        >
          <Text style={styles.Labels}>Delete Qoute</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.props.navigation.navigate("getData")}
        >
          <Text style={styles.Labels}>Get all Qoutes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.container}
          onPress={() => this.props.navigation.navigate("addUser")}
        >
          <Text style={styles.Labels}>Add User</Text>
        </TouchableOpacity>
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
  container: {
    border: "3px solid #0b032d",
    borderRadius: 7,
    width: 300,

    paddingBottom: 7,
    backgroundColor: "#843b62",
  },
  header_container: {
    paddingBottom: 30,
  },
  header: {
    fontSize: 40,
    fontColor: "#621940",
  },
  Labels: {
    fontSize: 25,
    alignSelf: "center",
  },
  imgContainer: {
    //backgroundColor:"black",
  },
  img: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },
});
