import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    // lets first add data of contact list...
    const contacts = [
        {
          id: 1,
          name: "Heisenberg",
          contactNo: 8851558023,
          profession: "Software engineer",
          userAvatar: "https://imgs.search.brave.com/2jsMzKBA2Lm1CwMPIlZ-i2omB67gLOzBMZifDozgDJQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS81LzUy/L1V1V3ZDcy5qcGc"
        },
        {
          id: 2,
          name: "Walter White",
          contactNo: 9876543210,
          profession: "Chemist",
          userAvatar: "https://via.placeholder.com/150/FF0000/FFFFFF?text=W"
        },
        {
          id: 3,
          name: "Jesse Pinkman",
          contactNo: 1234567890,
          profession: "Entrepreneur",
          userAvatar: "https://imgs.search.brave.com/R4DSqJGYtPqHLHPh4HzIv4cf3UNIJ82YIKb-agAUYQg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hlYXRzaGVldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTAvQnJlYWtp/bmctQmFkLUplc3Nl/LVBpbmttYW4uanBn/P3c9MTIwMCZoPTc5/NyZzdHJpcD1hbGwm/cXVhbGl0eT04OQ"
        },
        {
          id: 4,
          name: "Saul Goodman",
          contactNo: 1112223333,
          profession: "Lawyer",
          userAvatar: "https://imgs.search.brave.com/v65-zG-wocsi5PwliHtG-sP3lqZpm2J3WsGkaWD7Pxk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90dmxp/bmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA3L2Jl/dHRlci1jYWxsLXNh/dWwtc2Vhc29uLTYt/ZXBpc29kZS05LWpp/bW15LTEuanBnP3c9/MTI0MCZoPTg0MCZj/cm9wPTE"
        },
      ];
  return (
    <View>
      <Text style= {styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
             {/* Some Important note to be taken care of
             when using .map() notation you can load the element in two ways
             1. map(()=> return {}) (here you have to write the return keyword when you use curly braces)
             2. map(()=>()) (here there is no need to write the return keyword you dont have to write the return keyword.)
             also data in map can be destructured if we have an array. else you can always use item.name etc... */}
             {contacts.map(({id,name,contactNo,profession,userAvatar})=>(
                <View key={id} style= {styles.userCard}>
                    <Image source={{
                        uri: userAvatar
                    }} style={styles.contactImage}/>
                    <View style={styles.userDetails}>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userContact}>{contactNo}</Text>
                    <Text style={styles.userProfession}> Profession : {profession}</Text>
                    </View>
                </View>
             ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 28,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        color:"white",
    },
    container:{
        marginHorizontal:14,
        marginTop:10,
    },
    userCard:{
        backgroundColor:'white',
        flex:1,
        flexDirection:'row',
        marginVertical:10,
        paddingVertical:12,
        borderRadius:10
    },
    contactImage:{
        height:55,
        width:55,
        borderRadius:50,
        marginHorizontal:10
    },
    userName:{
        color:'black',
        fontSize:18,
        fontWeight:'500'
    },
    userContact:{
        color:'black',
    },
    userProfession:{
        color:'black'
    },
    userDetails:{
        
    }
})