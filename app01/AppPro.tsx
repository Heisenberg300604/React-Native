import React from "react";
// use rnfe for quick code snippet setup of react-native
import { ScrollView,
    View,
    Text,
    StyleSheet,
    useColorScheme
 } from 'react-native'

function AppPro(): JSX.Element{ // typescript feature - says that the function should always return a jsx element ! || Makes your code less bugy..

    const isDarkMode = useColorScheme() === 'dark' // A react hook for changing color scheme

    return(
        <View style={styles.container}>
            <Text style = {isDarkMode ? styles.whitetext : styles.darkText}>Hello App testing</Text>
        </View>
    )
}


// Stylesheet just work like key:value pairs
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whitetext:{
        color: '#FFFFFF'
    },
    darkText:{
        color: '#000000'
    }
})

export default AppPro;