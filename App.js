import { createSwitchNavigator, createAppContainer } from "react-navigation";

// import the different screens
import Loading from "./src/Loading/Loading";
import SignUp from "./src/SignUp/SignUp";
import Login from "./src/Login/Login";
import Main from "./src/Main/Main";

// create our app's navigation stack
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading,
      SignUp,
      Login,
      Main
    },
    {
      initialRouteName: "Loading"
    }
  )
);
