import React from "react";
import { Text, StyleSheet } from "react-native";

const AppText = ({text, weight}) => {
    return(
        <>
        <Text style={styles.font}>{text}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    font: {
        fontFamily: "RalewayRegular"
    }
})

module.exports = AppText;