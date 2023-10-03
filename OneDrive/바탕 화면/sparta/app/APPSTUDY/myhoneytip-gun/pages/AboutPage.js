import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

export default function AboutPage() {
    const main="https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png";

  return (
    <View style={styles.container}>
        <Text style={styles.textTitle}>대단히 반갑습니다!! 상당히 고맙습니다!!! 안녕하세요!!!!</Text>

        <View style={styles.innerContainer}>
            <Image
            style={styles.image}
            source={{uri:main}}
            />
            <Text style={styles.innerText}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
            <Text style={styles.innerText1}>꼭!! 여러분 것으로 만들어가시길 바랍니다</Text>
            <TouchableOpacity style={styles.innerButton}>
                <Text style={styles.buttonText}>여러분의 인스타계정</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#1F266A"
    },
    textTitle:{
        flex:1,
        fontSize:30,
        color:"#fff",
        fontWeight:"700",
        paddingLeft:30,
        paddingTop:100,
        paddingRight:30,
        // textAlign:"center",
    },
    innerContainer:{
        flex:5,
        backgroundColor:"#fff",
        width:"90%",
        justifyContent:"center",
        marginLeft:20,
        marginBottom:50,
        borderRadius:20,
    },
    image:{
        width:200,
        height:200,
        alignSelf:"center",
        borderRadius:20,
    },
    innerText:{
        fontSize:25,
        textAlign:"center",
        marginVertical:10,
        fontWeight:"700",
        
    },
    innerText1:{
        fontSize:20,
        textAlign:"center",
        marginVertical:10,
        fontWeight:"700",
    },
    innerButton:{
        padding:20,
        backgroundColor:"orange",
        justifyContent:"center",
        alignSelf:"center",
        borderRadius:15,
        marginTop:20

    },
    buttonText:{
        fontSize:20,
        textAlign:"center",
        color:"#fff"
    }
})