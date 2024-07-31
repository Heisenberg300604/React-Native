import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View style={styles.mainBody}>
            <Text style={styles.headingText}>Explore More ?</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>Visit more places in India ! </Text>
                </View>
                <View style={styles.mainCard}>
                    <Image
                        source={{ uri: 'https://imgs.search.brave.com/5hhZbtXmf_JE1xSG1y2uc_EiChAcxLEpbNpJd_t09I8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTEy/NDU3MTc0L3Bob3Rv/L2NvbGxhZ2Utb2Yt/cGhvdG9zLXdpdGgt/ZmFtb3VzLXRyYXZl/bC1kZXN0aW5hdGlv/bnMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVVWdXk0QWF5/dHktUEZvT05YSnpm/aXVxZktwNkp2WkZ3/R0RhVTMzbzZIZG89' }}
                        style={styles.cardImage} />
                    <View style={styles.bodyContainer}>
                        <Text numberOfLines={3} style={{ fontSize: 16 , color: 'black'}}>
                            For Exploring Any Other place of Your choice in India...
                            Click on the Below BUTTON to explore more new places of Your choice.
                            Get to know more about India.
                        </Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            onPress={() => openWebsite('https://www.google.com/')}
                        >
                            <Text style={{color:'white'}}>Search for Different Places</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 12,
    },
    headingContainer: {},
    card: {},
    mainCard:{
        backgroundColor:'white',
        borderRadius:10
    },
    elevatedCard: {},
    headerText: {
        marginLeft: 10,
        fontSize: 17,
        paddingVertical: 5,
    },
    cardImage: {
        height: 200,
        borderRadius: 8,
        margin: 8
    },
    bodyContainer: {
        paddingHorizontal: 10,
        paddingBottom: 7,
    },
    footerContainer: {
        backgroundColor: '#000066',
        marginHorizontal:100,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:8,
        marginBottom:15,
        marginTop:5,
        borderRadius:12
    },
    mainBody: {
        margin: 8,
    },
})