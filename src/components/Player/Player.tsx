import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    ViewProps,
} from 'react-native';
import React, { ReactElement } from 'react';
import { TEST_TEAM } from '../../data/testData';

type PlayerProps = {
    id: number;
} & ViewProps;

const Player = ({ id, ...props }: PlayerProps): ReactElement => {
    const playerData = TEST_TEAM.getTeam('home').lineup.find(
        (player) => player.id === id
    );

    console.log(playerData);
    return (
        <View
            {...props}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ImageBackground
                source={{
                    uri: `https://flagpedia.net/data/flags/w580/${playerData?.nationalTeam.isoCode.toLowerCase()}.png`,
                }}
                resizeMode="cover"
                style={styles.playerCircle}
                imageStyle={{ borderRadius: 40, opacity: 0.4 }}
            >
                {/* <Text style={{ fontWeight: '800', textAlign: 'center' }}>
                    {playerData?.nationalTeam.country}
                </Text> */}
            </ImageBackground>

            <Image style={{ height: 80, width: 80 }} />
        </View>
    );
};

export default Player;

const styles = StyleSheet.create({
    playerCircle: {
        backgroundColor: 'white',
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
