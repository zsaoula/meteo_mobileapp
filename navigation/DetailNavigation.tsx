import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DetailScreen } from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();
export default function DetailNavigation() {
    
    return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false}}/>
          <Stack.Screen name="DetailScreen" component={DetailScreen}/>
        </Stack.Navigator>
    )
  }