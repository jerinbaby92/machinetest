import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { strings } from '../utils/strings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../utils/colors';
import { globalFonts } from '../utils/globalFonts';
import { createStackNavigator } from '@react-navigation/stack';
import DebitCard from './DebitCard';

import ComingSoon from './ComingSoon';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function SurveyStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DebitCard" component={DebitCard} options={{ headerShown: false }} />
         
        </Stack.Navigator>
    );
}

const tabBarListeners = ({ navigation, route }) => ({
    tabPress: () => navigation.navigate(route.name),
});

export default function MyTabs() {



    return (
        <Tab.Navigator
            initialRouteName="DebitCard"
            screenOptions={{
                activeTintColor: Colors.green,
                inactiveTintColor: Colors.grey,
                tabBarStyle: { borderTopWidth: 0 },
                tabBarActiveTintColor: Colors.green,
                tabBarInactiveTintColor: Colors.grey,
                tabBarStyle: {
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,
                    elevation: 24,
                    backgroundColor: '#fff',
                    position: 'absolute',
                    bottom: 0,
                    padding: 10,
                    width: '100%',
                    height: 84,
                    zIndex: 0,
                },
            }}

        >
            <Tab.Screen
                name='Home'
                component={ComingSoon}
                options={{
                    headerShown: false,
                    tabBarLabel: strings.home,
                    tabBarLabelPosition: 'below-icon',
                    tabBarLabelStyle: styles.tabLabelStyle,

                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={[styles.iconStyle, { tintColor: focused ? Colors.green : Colors.grey }]}
                            source={require('../../assets/images/home.png')}
                        />
                    ),


                    unmountOnBlur: true,

                }}
                listeners={tabBarListeners}
            />
            <Tab.Screen
                name='DebitCard'
                component={SurveyStackScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: strings.debitCard,
                    tabBarLabelPosition: 'below-icon',
                    tabBarLabelStyle: styles.tabLabelStyle,
                    tabBarIcon: ({ focused }) => (<Image

                        style={[styles.iconStyle, { height: 19, tintColor: focused ? Colors.green : Colors.grey }]}
                        source={require('../../assets/images/debitcard.png')}
                    />
                    ),
                    unmountOnBlur: true,

                }}
                listeners={tabBarListeners}
            />
            <Tab.Screen
                name='Payments'
                component={ComingSoon}
                options={{
                    headerShown: false,
                    tabBarLabel: strings.payments,
                    tabBarLabelPosition: 'below-icon',
                    tabBarLabelStyle: styles.tabLabelStyle,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={[styles.iconStyle, { tintColor: focused ? Colors.green : Colors.grey }]}
                            source={require('../../assets/images/payments.png')}
                        />
                    ),
                    unmountOnBlur: true,

                }}
                listeners={tabBarListeners}
            />
            <Tab.Screen
                name='Credit'
                component={ComingSoon}
                options={{
                    headerShown: false,
                    tabBarLabel: strings.credit,
                    tabBarLabelPosition: 'below-icon',
                    tabBarLabelStyle: styles.tabLabelStyle,
                    tabBarIcon: ({ focused }) => (
                        <Image

                            style={[styles.iconStyle, { tintColor: focused ? Colors.green : Colors.grey }]}
                            source={require('../../assets/images/credit.png')}
                        />
                    ),
                    unmountOnBlur: true,
                }}
                listeners={tabBarListeners}
            />
            <Tab.Screen
                name='Profile'
                component={ComingSoon}
                options={{
                    headerShown: false,
                    tabBarLabel: strings.profile,
                    tabBarLabelPosition: 'below-icon',
                    tabBarLabelStyle: styles.tabLabelStyle,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={[styles.iconStyle, { tintColor: focused ? Colors.green : Colors.grey }]}
                            source={require('../../assets/images/account.png')}
                        />
                    ),
                    unmountOnBlur: true,
                }}
                listeners={tabBarListeners}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabLabelStyle: {
        fontSize: 9,
        fontFamily: globalFonts.MediumFont
    },
    iconStyle: {
        width: 24,
        height: 24,
    }

});


