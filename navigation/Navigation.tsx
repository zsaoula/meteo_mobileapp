import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FavoriteScreen } from "../screens/FavoriteScreen";
import { HomeScreen } from "../screens/HomeScreen";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                           options={{
                                               title: 'Home',
                                           }}/>
                <BottomTabNavigator.Screen name="Favorite" component={FavoriteScreen}
                                           options={{
                                               title: 'Favorite',
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
};