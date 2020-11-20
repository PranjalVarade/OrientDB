import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import homePage from "../component/homePage.js";
import deleteData from "../component/deleteData.js";
import postData from "../component/postData.js";
import getData from "../component/getData.js";

import addUser from "../component/addUser.js";

const screens = {
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
};
const createAccountstack = createStackNavigator(screens);
export default createAppContainer(createAccountstack);
