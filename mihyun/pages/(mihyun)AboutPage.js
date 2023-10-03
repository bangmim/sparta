import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const image = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png'

export default function AboutPage() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Hi! 스파르타코딩 앱개발반에 오신것을 환영합니다</Text>
            </View>
            <View style={styles.contentItem}>
                <Image style={styles.itemImage} source={{ uri: image }} />
                <Text style={styles.itemText}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style={styles.itemTextDesc}>꼭 완주 하셔서 꼭 여러분 것으로 만들어가시길 바랍니다</Text>

                <TouchableOpacity style={styles.itemButton}>
                    <Text style={styles.buttonText}>여러분의 인스타계정</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "blue",
        justifyContent: "center",
        flex: 1,
        padding:30
    },
    textContainer: {
        alignSelf: "center",
        justifyContent: "center",
        marginTop:60,
        marginBottom:30,
        width:"100%"
    },
    text: {
        fontSize: 35,
        color: "white",
        fontWeight: '700',
        textAlign: "auto",
        // backgroundColor:"green",
    },
    contentItem: {
        backgroundColor: "white",
        flex: 4,
        // width: 250,
        // hegith: 100,
        marginBottom: 60,
        justifyContent: "center",
        // alignSelf: "center",
        borderRadius:30,
        padding:30,
    },
    itemImage: {
        width: 150,
        height: 150,
        borderRadius: 50,
        alignSelf: "center",
        marginBottom: 20
    },
    itemText: {
        fontSize: 20,
        fontWeight: '700',
        alignSelf: "center",
        textAlign: "center"

    },
    itemTextDesc: {
        marginTop:20,
        marginBottom:10,
        fontSize: 15,
        fontWeight: '400',
        alignSelf: "center",
        textAlign: "center"
    },
    itemButton: {
        width:150,
        height:50,
        padding:10,
        backgroundColor:"#fdc453",
        borderRadius:15,
        margin:7,
        alignSelf: "center",
        justifyContent: "center",

      },
      buttonText:{
        color:"white",
        fontSize: 15,
        alignSelf: "center",
      }
});