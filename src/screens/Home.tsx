import React, { useContext } from 'react';
import {SafeAreaView, TouchableOpacity, Text, StyleSheet, Dimensions, View, StatusBar} from 'react-native';
import { Theme } from '../configs';
import { LinearGradient } from 'expo-linear-gradient';
import {PhrasesContainer } from '../containers/Phrases';
import { AppContext } from '../contexts';
export const HomeScreen = () => {
    const {state} = useContext(AppContext);
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={[Theme.color.gradientColor.first, Theme.color.gradientColor.second]} start={{ x: 0.1, y: 0.2}} end={{ x: 1, y:1}} style={styles.gradient}> 
                <Text style={styles.logo}>motivly</Text>
                <View style={styles.greetingContainer}>
                    <Text style={styles.helloText}>Olá,</Text> 
                    <Text style={styles.userName}> Caio</Text>
                </View>
            </LinearGradient>
            <PhrasesContainer data={state.phrases}/>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.crossIcon}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const screenWidth = Dimensions.get("screen").width;
const statusHeight = StatusBar.currentHeight;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.color.background,
        position: "relative",
    },
    title: {
        fontSize: 40,
        color: Theme.color.font.black,
    },
    logo: {
        fontSize: 28,
        textAlign: "center",
        color: Theme.color.font.white,
        fontWeight: "bold",
    },
    gradient: {
        width: screenWidth,
        height: 250,
        justifyContent: "space-between",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 10,
        paddingTop: statusHeight,
    },
    greetingContainer: {
        flexDirection: 'row',
        marginBottom: 80,
        paddingLeft: 20,
    },
    helloText: {
        fontSize: 32,
        color: Theme.color.font.white,
    },
    userName: {
        fontSize: 32,
        fontWeight: "bold",
        color: Theme.color.font.white,
    },
    addButton: {
        height: 70,
        width: 70,
        elevation: 4,
        position: "absolute",
        bottom: 20,
        right: 20,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: Theme.color.purple,
        borderRadius: 35,
    },
    crossIcon: {
        fontSize: 30,
        color: Theme.color.font.white,
    }
})