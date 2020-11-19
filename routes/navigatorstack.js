import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import homePage from "../component/homePage.js";
import deleteData from "../component/deleteData.js";
import postData from "../component/postData.js";
import getData from "../component/getData.js";
import login from "../component/login.js";
import addUser from "../component/addUser.js";
import deleteUser from "../component/deleteUser.js";
const screens = {
  login: {
    screen: login,
    navigationOptions: {
      //headerShown: false,
    },
  },
  homePage: {
    screen: homePage,
    navigationOptions: {
      //headerShown: false,
    },
  },
  deleteData: {
    screen: deleteData,
    navigationOptions: {
      //headerShown: false,
    },
  },
  postData: {
    screen: postData,
    navigationOptions: {
      //headerShown: false,
    },
  },
  getData: {
    screen: getData,
    navigationOptions: {
      //headerShown: false,
    },
  },
  addUser: {
    screen: addUser,
    //navigationOptions: {
    //headerShown: false,
    //},
  },
  deleteUser: {
    screen: deleteUser,
    //navigationOptions: {
    //headerShown: false,
    //},
  },
};
const createAccountstack = createStackNavigator(screens);
export default createAppContainer(createAccountstack);
