import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PlayerLife = (props) => {
    const [life, setLife] = useState(40);

    return (
        <View style={{ ...styles.playerCounter, borderColor: props.color }}>
            <TouchableOpacity style={styles.lifeButton} onPress={() => setLife((prevLife) => prevLife - 1)}>
                <Text style={{ ...styles.lifeAmount, color: props.color }}>
                    {life}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    playerCounter: {
        borderWidth: 6,
        borderRadius: 20,
        borderColor: "green",
        width: windowWidth * 0.43,
        height: windowHeight * 0.43,
        justifyContent: "center",
        marginHorizontal: windowWidth * 0.01,
        marginVertical: windowHeight * 0.01,
    },
    lifeButton: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    lifeAmount: {
        color: "green",
        fontWeight: "bold",
        fontSize: windowWidth * 0.17,
        textAlign: "center",
    },
});
export default PlayerLife;