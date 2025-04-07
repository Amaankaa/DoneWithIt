import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen from './app/components/Screen';
import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title='Click'
      onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
    />
  </Screen>
);

const TweetDetails = ({route}) => (
  <Screen>
    <Text>Tweet Details { route.params.id }</Text>
  </Screen>
);

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator 
    screenOptions = {{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen 
      name="TweetDetails" 
      component={TweetDetails} 
      options = {{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }}/>
  </Stack.Navigator>
);

const AccountNavigator = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="Feed" 
      component={FeedNavigator} 
      />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
);


export default function App() {
  return (
    <NavigationContainer theme = {NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
