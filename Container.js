import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/screens/Login'
import Content from './src/screens/Content'

let Stack = createStackNavigator()

export default function Container() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login}
                    options={{
                        headerMode: "none"
                    }} />
                <Stack.Screen name="Content" component={Content}
                    options={{
                        headerMode: "none"
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}