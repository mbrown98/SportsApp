import data from './matchData.json';

export const TEST_TEAM = {
    getTeam: (team: 'home' | 'away') => {
        const val = team === 'home' ? 0 : 1;
        const t = data.teamLists[val];
        console.log(t);
        return {
            formation: data.teamLists[val].formation,
            lineup: data.teamLists[val].lineup,
        };
    },
};
