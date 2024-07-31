import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style = {styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.darkText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.darkText}>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.darkText}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.darkText}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.darkText}>and </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.darkText}>View</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 12,
    },
    card:{
        width:100,
        height:100,
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 4,
        margin:8,
    },
    cardElevated:{
        backgroundColor: '#CAD5E2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor: '#333',
        shadowOpacity:0.4,
        shadowRadius:3,
    },
    darkText:{
        color:'black'
    },
    container:{
        padding:8,
    },
})