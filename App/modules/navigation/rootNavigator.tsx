import React, { ReactElement } from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import HomeScreen from '../../screens/homeScreen';
import NewPostScreen from '../../screens/newPostScreen';
import Header from '../../components/header';


const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <>
            <StatusBar
                backgroundColor={Platform.OS === 'ios' ? '#FFFFFF' : null}
                translucent={true}
            />
            <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false }} >
                    <Screen
                        name='HomeScreen'
                        component={HomeScreen}
                        />
                    <Screen
                        name='NewPostScreen'
                        component={NewPostScreen}
                        options={{
                            headerShown: true,
                            headerLeft: () => <Header />,
                        }}
                        />
                </Navigator>
            </NavigationContainer>
        </>
    )
}

export default RootNavigator