import {
    ImageBackground,
    ImageBackgroundProps,
    StyleSheet,
} from 'react-native';
import React, { ReactElement } from 'react';
import { TEST_TEAM } from '../../../../data/testData';

type PlayerProps = {
    id: number;
} & ImageBackgroundProps;

const Player = ({ id, ...props }: PlayerProps): ReactElement => {
    const playerData = TEST_TEAM.getTeam('home').lineup.find(
        (player) => player.id === id
    );

    console.log(playerData);
    return (
        <ImageBackground
            source={{
                uri: `https://flagpedia.net/data/flags/w580/${playerData?.nationalTeam.isoCode.toLowerCase()}.png`,
            }}
            resizeMode="cover"
            {...props}
            style={styles.playerCircle}
            imageStyle={{ borderRadius: 35, opacity: 0.9 }}
        >
            {/* <Text style={{ fontWeight: '800', textAlign: 'center' }}>
                    {playerData?.nationalTeam.country}
                </Text> */}
        </ImageBackground>
    );
};

export default Player;

const styles = StyleSheet.create({
    playerCircle: {
        backgroundColor: 'white',
        height: 70,
        width: 70,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
