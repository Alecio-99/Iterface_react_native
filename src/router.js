import react from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import Home from './pages/Home'
import Detail from './pages/Detail'

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }

const Stack =  createNativeStackNavigator();

function Routes(){

    return(
         <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home"
                component={Home}
                options={{headerShown: false }}
                />
                <Stack.Screen 
                name="Detail"
                component={Detail}
                options={{
                  headerRight: () => (
                    <TouchableOpacity>
                      <Feather 
                      name="shopping-cart"
                      size={24}
                      color="black"
                      />
                    </TouchableOpacity>
                  )
                }}
                />
            </Stack.Navigator>
         </NavigationContainer>
    )
}
export default Routes;