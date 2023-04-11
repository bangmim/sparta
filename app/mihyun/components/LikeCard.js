import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity,Platform, Alert } from 'react-native'
import { firebase_db } from "../firebaseConfig"
const isIOS = Platform.OS === 'ios';
import * as Application from 'expo-application';

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function LikeCard({ content, navigation, tip, setTip }) {

  const deleteLike = async () => {
    let userUniqueId;
    if (isIOS) {
      let iosId = await Application.getIosIdForVendorAsync();
      userUniqueId = iosId
    } else {
      userUniqueId = await Application.androidId
    }
    firebase_db.ref('/like/' + userUniqueId+'/'+content.idx).remove()
      .then(
        function () {
        // console.log("Remove succeeded.")
        Alert.alert("삭제완료!")

        let result = tip.filter((data,i)=>{
          return data.idx !== content.idx
        })
        // console.log(result)
        setTip(result)  
      })
      
  }
 
  return (
    //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
    <View style={styles.card}>
      <View style={styles.item}>
        <Image style={styles.cardImage} source={{ uri: content.image }} />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
          <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
          <Text style={styles.cardDate}>{content.date}</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.aboutButton} onPress={() => {
          navigation.navigate("DetailPage", { idx: content.idx });
        }}>
          <Text style={styles.aboutButtonText}>자세히보기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.aboutButton} onPress={()=>deleteLike(content.idx)}>
          <Text style={styles.aboutButtonText}>찜해제</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
    paddingBottom: 10,
    margin: 10,
  },
  item: {
    flex: 1,
    flexDirection: "row"
  },
  cardImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700"
  },
  cardDesc: {
    fontSize: 15
  },
  cardDate: {
    fontSize: 10,
    color: "#A6A6A6",
  },
  btn: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  aboutButton: {
    backgroundColor: "#fff",
    width: 90,
    height: 40,
    // borderColor적용하기 위해서는 borderWidth값이 있어야한다.
    borderWidth: 1,
    borderColor: 'deeppink',
    borderRadius: 10,
    marginRight: 20,
  },
  aboutButtonText: {
    color: "deeppink",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "700"
  }
});