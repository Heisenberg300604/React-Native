import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [randomBackground,setRandomBackground] = useState("ffffff")
  const [btncolor,setBtncolor]= useState("#b0c8e0");
  const [textColor,setTextColor] = useState("#000000");

  const generateRandomColor = ()=>{
    const hexRange = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random()*16)];
    }
    return color;
  }

  const generateColor = ()=>{
    setRandomBackground(generateRandomColor());
    setBtncolor(generateRandomColor());
    setTextColor(generateRandomColor());
  }
  // for generating distinct color always in text,button and Background i will add a do while loop in the generateColor() function that's it ! 

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container,{backgroundColor:randomBackground}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={[styles.actionBtn,{backgroundColor:btncolor}]}>
            <Text style={[styles.actionBtnTxt,{color:textColor}]}> Press Me </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#000000",
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor:"#b0c8e0",
    padding:15,
  },
  actionBtnTxt:{
    fontSize:20,
    textTransform:"uppercase"
  }
});
