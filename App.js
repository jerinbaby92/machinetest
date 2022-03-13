  import React, { Component } from 'react';
 import { Text, View, SafeAreaView } from 'react-native';
 import Dashboard from './app/pages/Dashboard';
 import { createStackNavigator } from '@react-navigation/stack';
 import { NavigationContainer } from '@react-navigation/native';
 import { LogBox } from 'react-native';
 import { Provider } from 'react-redux';
 import store from './app/redux/store';
 import SpendingLimit from './app/pages/SpendingLimit';
 const Stack = createStackNavigator();
 
 function MyStack(props) {
   return (
     <Stack.Navigator initialRouteName="Dashboard" >
       <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
       <Stack.Screen name="SpendingLimit" component={SpendingLimit} options={{ headerShown: false }} />
     </Stack.Navigator>
   );
 }
 
    
 class App extends Component {
 
   constructor(props)
   {
     super(props)
     this.state={
       
     }
   }
 
   componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
   }

   componentWillUnmount(){

   }
 
   render() {
 
     return (
       <View style={{width: '100%',height: '100%',}}>
         <Provider store={store}>
         <NavigationContainer>
           <MyStack />
         </NavigationContainer>
         </Provider>
       </View>
     );
   }
 }
 
 export default App;