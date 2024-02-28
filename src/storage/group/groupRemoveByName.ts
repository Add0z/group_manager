import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/StorageConfig";
import { groupsGetAll } from "./groupGetAll";

export async function groupRemoveByName(groupDeleted: string) {
    try {
        const storage = await groupsGetAll();
        const filteredGroups = storage.filter(group => group !== groupDeleted);
        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroups));
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
    } catch (error) {
        throw error;
    }
}