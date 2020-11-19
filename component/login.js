import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.headleUsernameChange = this.headleUsernameChange.bind(this);
    this.headlePasswordChange = this.headlePasswordChange.bind(this);
    //this.onPress = this.onPress.bind(this);
    this.loginbtn = this.loginbtn.bind(this);
  }

  headleUsernameChange = (text) => {
    this.setState({ username: text });
  };
  headlePasswordChange = (text) => {
    this.setState({ password: text });
  };

  //onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  validate_field = () => {
    const { username, password } = this.state;
    if (username == "") {
      alert("please enter username");
      return false;
    } else if (password == "") {
      alert("please enter password");
      return false;
    }
    return true;
  };

  //onPress = () => {
  loginbtn(navigate) {
    const { username, password } = this.state;
    if (this.validate_field()) {
      const axios = require("axios");
      makeloginRequest();

      async function makeloginRequest() {
        //console.log("spotlist_login");
        //console.log(username);
        //console.log(password);
        /*try {
            let res = await axios.post(
              "http://backendnewapp.eba-nx2wxw6k.us-east-1.elasticbeanstalk.com/api/auth/login",
              {
                username: username,
                password: password,
              }
            );
            //this.props.navigation.navigate("ClientExpertComp");
            navigate("HomeScreen");
            console.log("logged in");
            //this.props.navigation.navigate("ClientExpertComp");
          } catch (e) {
            console.log(e);
          }
        }
      }*/
      }
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.main_Container}>
        <View>
          <Image
            style={styles.img}
            source={require("/Users/pranjalvarade/Desktop/fall2020/Nosql/newNosql/assets/orientdb_icon.png")}
          />
        </View>
        <View style={styles.header_container}>
          <Text style={styles.header}>OrientDB</Text>
        </View>
        <View style={styles.textContainer}>
          {/*Input fields for login*/}
          <TextInput
            placeholder="USERNAME"
            placeholderTextColor="#0b032d"
            returnKeyType="next"
            //keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={this.headleUsernameChange}
            name="username"
            //onChangeText={(text) => this.setState({ username: text })}
          />
          {/*Input field for username*/}

          <TextInput
            placeholder="PASSWORD"
            secureTextEntry={true}
            placeholderTextColor="#0b032d"
            style={styles.input}
            onChangeText={this.headlePasswordChange}
            name="password"
            //onChangeText={(text) => this.setState({ password: text })}
          />
          {/*Input field for password*/}
        </View>
        <TouchableOpacity
          style={styles.loginbtnContainer}
          //onPress={this.onPress}
          //onPress={() => this.loginbtn(navigate)}
          onPress={() =>
            this.props.navigation.navigate("homePage", {
              screen: "postData",
              userName: this.state.username,
            })
          }
        >
          <Text style={styles.loginbtnText}>LOGIN</Text>
        </TouchableOpacity>
        {/*login button */}

        <View style={styles.bottombtnContainer}>
          <TouchableOpacity
            style={styles.createaccbtnContainer}
            //onPress={createAccbtn}
            //onPress={() => this.props.navigation.navigation("createAccount")}
            onPress={() => this.props.navigation.navigate("createAccount")}
          >
            {/*login button*/}

            <Text style={styles.createaccText}>Create an account</Text>
          </TouchableOpacity>
          {/*create account btn with function createAccbtn*/}
        </View>
      </KeyboardAvoidingView>
    );
  }
}

{
  /*stylesheet for above containers*/
}

const styles = StyleSheet.create({
  main_Container: {
    flex: 1,
    backgroundColor: "#ffb997",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    alignSelf: "center",
    height: 900,
  },
  img: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },

  bottombtnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginbtnContainer: {
    justifyContent: "center",
  },

  input: {
    alignSelf: "center",
    width: 300,
    height: 40,
    paddingTop: 20,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#621940",
  },
  loginbtnContainer: {
    alignSelf: "center",
    border: "3px solid #0b032d",
    borderRadius: 7,
    width: 300,
    paddingBottom: 7,
    backgroundColor: "#843b62",
  },
  loginbtnText: {
    color: "yellow",
    textAlign: "center",

    color: "#86b4b5",
    fontSize: 30,
  },
  createaccbtnContainer: {
    paddingTop: 50,
    width: 150,
    height: 100,
  },
  createaccText: {
    color: "#843b62",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
