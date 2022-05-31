import 'react-native-gesture-handler'
import React from 'react'
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {StateProvider} from './src/contexts/StateContext'

import AuthStack from './src/stacks/AuthStack'

const App = () => {
  return (
    <StateProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
          <AuthStack/>
      </NavigationContainer>
    </StateProvider>
  )
}

export default App