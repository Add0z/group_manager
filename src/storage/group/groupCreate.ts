import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/StorageConfig";
import { groupsGetAll } from "./groupGetAll";
import { AppError } from "@utils/appError";



export async function groupCreate(newGroup: string) {
    try {
        const storage = await groupsGetAll(); 
        const groupCheck = storage.includes(newGroup);

        if(groupCheck){
            throw new AppError('Turma ja existe');
        }
        const StringStorage = JSON.stringify([...storage, newGroup]);
        await AsyncStorage.setItem(GROUP_COLLECTION,StringStorage);





    } catch (error) {
        throw error;
    }
}