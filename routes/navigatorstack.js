import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import homePage from "../component/homePage.js";
import deleteData from "../component/deleteData.js";
import postData from "../component/postData.js";
import getData from "../component/getData.js";

import addUser from "../component/addUser.js";
import getUser from "../component/getUser.js";
import findPair from "../component/findPair.js";

const screens = {
  homePage: {
    screen: homePage,
    navigationOptions: {},
  },
  deleteData: {
    screen: deleteData,
    navigationOptions: {},
  },
  postData: {
    screen: postData,
  },
  getData: {
    screen: getData,
  },
  addUser: {
    screen: addUser,
  },
  getUser: {
    screen: getUser,
  },
  findPair: {
    screen: findPair,
  },
};
const createAccountstack = createStackNavigator(screens);
export default createAppContainer(createAccountstack);
