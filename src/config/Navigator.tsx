import React, { ReactElement, useState, useRef } from 'react';
import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Game from '../screens/Game/Game';

export type StackNavigatorParams = {
    Home: undefined;
    Game: undefined;
    // Settings: undefined;
    // Login: { redirect: keyof StackNavigatorParams } | undefined;
    // SignUp: { username: string } | undefined;
    // MultiplayerGame:
    //     | { gameID: string; invitee?: undefined }
    //     | { invitee: string; gameID?: undefined };
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();

const navigatorOptions: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: 'white',
    },
    headerTintColor: 'green',
    headerTitleStyle: {
        // fontFamily: 'DeliusUnicase_700Bold',
        fontSize: 20,
    },
    headerBackTitleStyle: {
        // fontFamily: 'DeliusUnicase_400Regular',
        fontSize: 14,
    },
};

export default function Navigator(): ReactElement {
    const navigatorRef = useRef<NavigationContainerRef | null>(null);
    const [isNavigatorReady, setIsNavigatorReady] = useState(false);

    return (
        <NavigationContainer
            ref={navigatorRef}
            onReady={() => {
                setIsNavigatorReady(true);
            }}
        >
            <Stack.Navigator screenOptions={navigatorOptions}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Game" component={Game} />
                {/* <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                    name="ForgotPassword"
                    options={{ title: 'Forgot Password' }}
                    component={ForgotPassword}
                />
                <Stack.Screen
                    name="MultiplayerHome"
                    component={MultiplayerHome}
                    options={{ title: 'Multiplayer' }}
                />
                <Stack.Screen
                    name="MultiplayerGame"
                    component={MultiplayerGame}
                    options={{ headerShown: false }}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
