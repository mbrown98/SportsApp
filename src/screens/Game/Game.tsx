import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorParams } from '../../config/Navigator';

type GameProps = {
    navigation: NativeStackNavigationProp<StackNavigatorParams, 'Home'>;
};

const Game = ({ navigation }: GameProps) => {
    return (
        <View style={styles.screen}>
            <Text>Game Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default Game;

const styles = StyleSheet.create({
    screen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
