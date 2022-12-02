import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorParams } from '../../config/Navigator';

type HomeProps = {
    navigation: NativeStackNavigationProp<StackNavigatorParams, 'Home'>;
};

const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={styles.screen}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Game"
                onPress={() => navigation.navigate('Game')}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    screen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
