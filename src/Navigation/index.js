import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ExampleScreen, Home, Abc, Angka, Buah, Hewan } from '../Screen'

const Main = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        InitialRouteName="Home">
        <Main.Screen
          name="Home"
          component={ Home }
          options={ {
            headerShown: false,
          } }
        />
        <Main.Screen
          name="Abc"
          component={ Abc }
          options={ {
            headerShown: false,
          } }
        />
        <Main.Screen
          name="Angka"
          component={ Angka }
          options={ {
            headerShown: false,
          } }
        />
        <Main.Screen
          name="Hewan"
          component={ Hewan }
          options={ {
            headerShown: false,
          } }
        />
        <Main.Screen
          name="Buah"
          component={ Buah }
          options={ {
            headerShown: false,
          } }
        />

        <Main.Screen
          name="ExampleScreen"
          component={ ExampleScreen }
          options={ {
            headerShown: false,
          } }
        />

      </Main.Navigator>
    </NavigationContainer>

    // <View>
    //   <Home />
    // </View>

  )
}

export default index
