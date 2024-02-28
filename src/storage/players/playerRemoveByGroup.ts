import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/StorageConfig";
import { playerGetByGroup } from "./playerGetByGroup";

export async function playerRemoveByGroup(playerName: string, group: string) {
    
    try {
        const storage = await playerGetByGroup(group);

        const filteredPlayers = storage.filter(player => player.name !== playerName);

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, JSON.stringify(filteredPlayers));




    }
    catch (error) {
        throw error
    }
}