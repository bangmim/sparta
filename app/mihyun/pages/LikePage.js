import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import LikeCard from '../components/LikeCard';
import Loading from '../components/Loading';
import Card from '../components/Card';
import * as Application from 'expo-application';
import { firebase_db } from "../firebaseConfig"
const isIOS = Platform.OS === 'ios';


export default function LikePage({ navigation, route }) {
  const [tip, setTip] = useState([]);
  const [ready, setReady] = useState(true)

  useEffect(() => {
    navigation.setOptions({
      title: '꿀팁 찜',

    })
    getLike()
  }, [])

  const getLike = async () => {
    let userUniqueId;
    if (isIOS) {
      let iosId = await Application.getIosIdForVendorAsync();
      userUniqueId = iosId
    } else {
      userUniqueId = await Application.androidId
    }

    console.log(userUniqueId)


    firebase_db.ref('/like/' + userUniqueId).once('value').then((snapshot) => {
      console.log("파이어베이스에서 데이터 가져왔습니다!!")
      console.log(snapshot)
      let tip = snapshot.val();
      // console.log(tip)
      // return;
      if (tip && tip.length > 0) {
        setTip(tip)
        setReady(false)
      }
    })

  }

  return ready ? <Loading /> : (

    <ScrollView style={styles.cardContainer}>
      {/* 하나의 카드 영역을 나타내는 View */}
      {
        tip.map((content, i) => {
          return (<LikeCard content={content} key={i} navigation={navigation} />)
        })
      }
    </ScrollView >
  )
}


const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 10,
    paddingLeft: 10,
    backgroundColor: "#fff"
  },
})