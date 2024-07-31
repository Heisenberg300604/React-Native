import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

type PlacesProps = {
    title: string;
    label: string;
    description: string;
    time: number;
    image: string;
  };
export default function FancyCard(props:PlacesProps) {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{uri : props.image}}
                    style={styles.cardImage}
                    resizeMode="cover"
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>{props.title}</Text>
                    <Text style={styles.cardLabel}>{props.label} 📍🇮🇳</Text>
                    <Text style={styles.cardDescription}>{props.description}
                    </Text>
                    <Text style={styles.cardFooter}>{props.time} mins away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 12,
    },
    card: {
        height:360,
        margin: 7,
    },
    cardElevated: {
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
        backgroundColor:'white',
        borderBottomRightRadius:8,
        borderBottomLeftRadius:8,
    },
    cardImage: {
        height: 180,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },
    cardTitle: {
        color:'black',
        fontSize:24,
        fontWeight:'bold',
        marginTop:5
    },
    cardLabel: {
        color:'#05489a',
        fontSize:16,
        fontWeight:'500'
    },
    cardDescription: {
        color:'black',
        fontSize: 14,
        flexShrink: 1,
        paddingTop: 3,
    },
    cardFooter: {
        color:'#228702',
        marginTop: 10,

    },
})