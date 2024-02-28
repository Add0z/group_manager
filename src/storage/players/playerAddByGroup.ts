import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION, GROUP_COLLECTION } from "@storage/StorageConfig";
import { AppError } from "@utils/appError";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playerGetByGroup } from "./playerGetByGroup";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {

    try {
        const storedPlayers = await playerGetByGroup( group);
        
        const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name);

        if (playerAlreadyExists.length > 0) {
            throw new AppError('Jogador ja ta na turma!');
        }
        
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, JSON.stringify([...storedPlayers, newPlayer]));
    }
    catch (error) {
        throw error
    }
}