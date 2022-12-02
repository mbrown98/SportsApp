import * as React from 'react';
import {
    Button,
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorParams } from '../../config/Navigator';

type HomeProps = {
    navigation: NativeStackNavigationProp<StackNavigatorParams, 'Home'>;
};

const Home = ({ navigation }: HomeProps) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.screen}>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text>Profile</Text>
                </View>
                {/* <Image
                source={{
                    uri: 'https://download.logo.wine/logo/Premier_League/Premier_League-Logo.wine.png',
                }}
                style={{ height: 200, width: 300 }}
            /> */}
                {/* <Button
                title="Go to Game"
                onPress={() => navigation.navigate('Game')}
            /> */}
            </View>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    safeArea: { flex: 1, padding: 16 },
    screen: { flex: 1, padding: 16 },
});
