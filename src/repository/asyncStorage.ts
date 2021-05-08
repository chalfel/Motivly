import AsyncStorage from "@react-native-async-storage/async-storage";
import { Phrase } from "../models/Phrase";
const PHRASE_KEY = 'phrase';

export const savePhrase = async (phrases: Phrase[]): Promise<void> => {
    try {
        await AsyncStorage.setItem(PHRASE_KEY, JSON.stringify(phrases));
    } catch(err) {
        console.log(err.message)
    }
}

export const getPhrases = async (): Promise<Phrase[]> => {
    try {
        const rawPhrases = await AsyncStorage.getItem(PHRASE_KEY);
        if(!rawPhrases) return [];
        return JSON.parse(rawPhrases);
    } catch(err) {
        console.log(err.message);
        return [];
    }
}