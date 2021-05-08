import React, { useContext, useState } from 'react';
import {v4 as uuidV4} from 'uuid';
import { AppContext } from '../contexts';
import { SafeAreaView, Text, TouchableOpacity, View, TextInput, StyleSheet } from 'react-native';
import { Phrase } from '../models/Phrase';
import { savePhrase } from '../repository/asyncStorage';
import { Theme } from '../configs';


export const NewPhraseScreen = () => {
    const {state, dispatch} = useContext(AppContext);
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const { phrases } = state;
    const handleOnAddNewPhrase = async () => {
        const phrase: Phrase = {
            author,
            title,
            done: false,
            id: uuidV4(),
        }
        await savePhrase([...phrases, phrase])
    }
    return (
        <SafeAreaView>
            <Text>motivly</Text>
            <Text>Vamos criar uma nova frase...</Text>
            <View>
                <TextInput placeholder="Digite seu conteúdo"/>
                <TextInput placeholder="Informe o autor(a)"/>
            </View>
            <View>
                <TouchableOpacity><Text>salvar</Text></TouchableOpacity>
                <TouchableOpacity><Text>voltar</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.color.background,
        position: "relative",
    },
    logo: { 
        position: 'absolute',
        top: 20,
        fontSize: 28,
        textAlign: "center",
        color: Theme.color.font.black,
        fontWeight: "bold"
    },
    title: {
        fontSize: 32,
        color: Theme.color.font.black,
    }
})