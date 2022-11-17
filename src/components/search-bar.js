import React from "react";
import { StyleSheet } from "react-native";
import AppText from './AppText';

const SearchBar = ({ text }) => {
    return(
        <>
        <AppText text={text} />
        </>
    )
} 

const styles = StyleSheet.create({

}) 

module.exports = SearchBar;