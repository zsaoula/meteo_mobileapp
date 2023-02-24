import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FavoriteScreen } from "../screens/FavoriteScreen";
import HomeScreen from "../screens/HomeScreen";
import { TabBarIcon } from "../compenent/tabIconBar";
import {cityName, iconFocused, iconUnfocused} from "../styles/style"
import DetailNavigation from "./DetailNavigation";
import { SearchScreen } from "../screens/SearchScreen";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={DetailNavigation}
                                           options={{
                                               title: 'Home',
                                               tabBarIcon: ({color, focused}) => <TabBarIcon name="home" color={focused?iconFocused:iconUnfocused} size={30}/>,
                                           }}/>
                <BottomTabNavigator.Screen name="Favorite" component={FavoriteScreen}
                                           options={{
                                               title: 'Favorite',
                                               tabBarIcon: ({color, focused}) => <TabBarIcon name='heart' color={focused?iconFocused:iconUnfocused} size={30}/>,
                                           }}/>
                <BottomTabNavigator.Screen name="Search" component={SearchScreen}
                                           options={{
                                               title: 'Search',
                                               tabBarIcon: ({color, focused}) => <TabBarIcon name='search' color={focused?iconFocused:iconUnfocused} size={30}/>,
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
};