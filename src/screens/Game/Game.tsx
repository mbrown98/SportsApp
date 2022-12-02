import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { ReactElement } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorParams } from '../../config/Navigator';
import Player from './components/Player/Player';
import { TEST_TEAM } from '../../data/testData';

type GameProps = {
    navigation: NativeStackNavigationProp<StackNavigatorParams, 'Home'>;
};

const Row = ({ teamLine }: { teamLine: number[] }): ReactElement => {
    return (
        <View style={styles.teamLine}>
            {teamLine.map((opt, i) => {
                return <Player id={opt} key={i} />;
            })}
        </View>
    );
};

const Game = ({ navigation }: GameProps) => {
    return (
        <ImageBackground
            style={styles.screen}
            source={require('../../../assets/lineup-pitch.jpeg')}
        >
            {TEST_TEAM.getTeam('home').formation.players.map((opt, i) => (
                <Row teamLine={opt} key={i} />
            ))}
        </ImageBackground>
    );
};

export default Game;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        padding: 16,
    },
    teamLine: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
