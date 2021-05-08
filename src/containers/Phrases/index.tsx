import React from 'react';
import { Dimensions, Text, FlatList, StyleSheet } from 'react-native';
import { PhraseTile } from '../../components/PhraseTitle';
import { Theme } from '../../configs';
import { Phrase } from '../../models/Phrase';
export type PhrasesContainerProps = {
    data: Phrase[],
}

const renderPhraseTile = ({item: info}: any) => (<PhraseTile id={info.id} author={info.author} title={info.title} done={info.done}/>);
export const PhrasesContainer = ({ data }: PhrasesContainerProps) => {
    return (
        <>
        <Text style={styles.title}>Frases</Text>
        <FlatList style={styles.container} data={data} renderItem={renderPhraseTile} keyExtractor={(_, index) => String(index)}/>
        </>
    )
}
const screenWidth = Dimensions.get("screen").width;
const styles = StyleSheet.create({
    container: {
        width: screenWidth,
    },
    title:{
        color: Theme.color.font.black,
        fontSize: 28,
        marginTop: 20,
        paddingLeft: 20,
    }
})