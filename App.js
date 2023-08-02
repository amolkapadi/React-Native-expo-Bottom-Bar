import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import Home from './component/Home'
import About from './component/About'
import Profile from './component/Profile'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
          name="Home1"
          component={Home}
          options={{
            tabBarIcon:({color,size})=>(
              <Ionicons name="home" size={size} color={color}  />
            )
          }}
          >

          </Tab.Screen>
          <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon:({color,size})=>(
              <Ionicons name="information-circle" size={size} color={color}  />
            )
          }}
          >

          </Tab.Screen>
          <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon:({color,size})=>(
              <Ionicons name="person" size={size} color={color}  />
            )
          }}
          >

          </Tab.Screen>
        </Tab.Navigator>








        
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Constants.statusBarHeight,
  },
});
