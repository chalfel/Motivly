import React, { useContext } from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../configs';
import { AppActionTypes, AppContext } from '../../contexts';
export type PhraseTileProps = {
    id: string;
    title: string;
    author: string;
    done: boolean;
}
export const PhraseTile = ({ id, title, author, done}: PhraseTileProps) => {
    const {dispatch} =  useContext(AppContext);
    if (done) return null
    const handleCompletePhrase = () => {
       dispatch({ type: AppActionTypes.COMPLETE_PHRASE, payload: id });
    }
    return (
        <TouchableOpacity style={styles.container} onLongPress={handleCompletePhrase} >
            <Text style={styles.title} numberOfLines={2}>{title}</Text>
            <Text style={styles.author} numberOfLines={1}>{author}</Text>
        </TouchableOpacity>
    )
}

const screenWidth = Dimensions.get("screen").width;
const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        width: Math.floor(screenWidth * 0.8),
        paddingHorizontal: screenWidth * 0.08,
        paddingVertical: 10,
        backgroundColor: Theme.color.white,
        marginVertical: 10,
        elevation: 6,
        borderRadius: 15,
    },
    title: {
        color: Theme.color.font.black,
        fontSize: 16,
    },
    author: {
        color: Theme.color.font.mutedBlack,
        fontSize: 13,
        alignSelf: 'flex-end',
    }
});