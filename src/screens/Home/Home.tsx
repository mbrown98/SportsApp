import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorParams } from '../../config/Navigator';

type HomeProps = {
    navigation: NativeStackNavigationProp<StackNavigatorParams, 'Home'>;
};

const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={styles.screen}>
            <Image
                source={{
                    uri: 'https://download.logo.wine/logo/Premier_League/Premier_League-Logo.wine.png',
                }}
                style={{ height: 200, width: 300 }}
            />
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
