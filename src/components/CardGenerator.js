import React from "react";
import {fBase} from "./FBase"
import { getFirestore, collection, doc, getDoc , getDocs , query, limit,where , setDoc, orderBy} from 'firebase/firestore/lite';

const fdb = getFirestore(fBase);
const collectionNameSet = ["Classic", "Meme", "Together", "Change"];

export const getRandomCardsTest = async ()  => {
  
  return [
    ["유혹","https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Paiute_Deadfall_Trap.JPG/300px-Paiute_Deadfall_Trap.JPG"],["자리 바꾸기","https://t1.daumcdn.net/cfile/tistory/998E1A365C75BE4E1B"],["별 만들기", "https://mblogthumb-phinf.pstatic.net/MjAxNzA1MTdfMjEx/MDAxNDk1MDA1NDA2MTE2.OYmJdAcXwl6kcc3JHasVQoOq8MlIahIbOGWmW2BEeYEg.YFBSNTB9HqWoOVHY5bbd1T1wKibymJHuy8iTRCH7LXsg.JPEG.thecontest/6.jpg?type=w800"],["기요미", "https://newsimg.sedaily.com/2020/11/15/1ZAF21ND0D_1.jpg"],["아이돌 하트","https://img.insight.co.kr/static/2019/04/04/700/mpa3eu9t40s796720xc7.jpg"],["확마","https://i.ytimg.com/vi/95bgaMPcZXY/maxresdefault.jpg"],["무슨 노래 듣고 있어요?","https://mblogthumb-phinf.pstatic.net/MjAyMDA2MDJfMjk1/MDAxNTkxMDY2ODE5OTY4.IvjQtYqDJ6rxgYDWtkafVACQ2Nh5pmnSWFSgJ_gDID4g.L51bmM8xGSGoiijBhJ5eQo4A2yh_8xBk_766XORlZQ4g.JPEG.hyun5-5/IMG_9470.JPG?type=w800"],["뿌잉 뿌잉", "https://i.ytimg.com/vi/aeSeB6mzMoE/maxresdefault.jpg"]  ]

  }


export const getRandomCards = async () => {
  //1. 각 collection 별로 random index 생성
  //collection별 number of index : Classic(0) : 3", "Meme(1) : 2", "Together(2) : 2", "Change(3) : 1" 
  //2. read random index document 
  //3. push to resultDeck in order
  //순서 :  Classic - Meme - Together - Change - Classic - Together - Classic - Meme 

  const randomIndex = await selectCollectionIndex();
  
  const resultDeck = await Promise.all([
    getCardFromDoc( query(collection(fdb, collectionNameSet[0]) , where("id", "==" , randomIndex[0][0]))),
    getCardFromDoc( query(collection(fdb, collectionNameSet[1]) , where("id", "==" , randomIndex[1][0]))),
    getCardFromDoc( query(collection(fdb, collectionNameSet[2]) , where("id", "==" , randomIndex[2][0]))),   
    getCardFromDoc( query(collection(fdb, collectionNameSet[3]) , where("id", "==" , randomIndex[3][0]))),
    getCardFromDoc( query(collection(fdb, collectionNameSet[0]) , where("id", "==" , randomIndex[0][1]))), 
    getCardFromDoc( query(collection(fdb, collectionNameSet[2]) , where("id", "==" , randomIndex[2][1]))), 
    getCardFromDoc( query(collection(fdb, collectionNameSet[0]) , where("id", "==" , randomIndex[0][2]))), 
    getCardFromDoc( query(collection(fdb, collectionNameSet[1]) , where("id", "==" , randomIndex[1][1]))) 
  ])


  return resultDeck

}

const getCardFromDoc = async ( docQuery  ) => {
  
  const cardDoc = await getDocs(docQuery);
  let card = [,];
  cardDoc.forEach((doc) => {
    card[0] = doc.data().name;
    card[1] = doc.data().urls[ Math.floor(Math.random() * ( doc.data().urls.length) ) ]
  });

  return card
}

const getCollectionLengths = async () => {
  
  const docRef = doc(fdb, "constants", "CollectionLengths");
  const docSnap = await getDoc(docRef);
  let collectionSetNum = [, , ,];

  collectionSetNum[0] = await docSnap.data().lengths[0];
  collectionSetNum[1] = await docSnap.data().lengths[1];
  collectionSetNum[2] = await docSnap.data().lengths[2];
  collectionSetNum[3] = await docSnap.data().lengths[3];

  return collectionSetNum
  
}

const selectCollectionIndex = async () => {
  //"Classic : 3", "Meme : 2", "Together : 2", "Change : 1" 
  let randomCollectionsIndexArray = [ [], [] , [] ,[] ];
  const collectionSetNum = await getCollectionLengths();

  randomCollectionsIndexArray[0] = selectIndex(collectionSetNum[0], 3);
  randomCollectionsIndexArray[1] = selectIndex(collectionSetNum[1], 2);
  randomCollectionsIndexArray[2] = selectIndex(collectionSetNum[2], 2);
  randomCollectionsIndexArray[3] = selectIndex(collectionSetNum[3], 1);
  
  return randomCollectionsIndexArray;
}


const selectIndex = (totalIndex, selectingNumber) => {
  let randomIndexArray = []
  for (let i=0; i<selectingNumber; i++) { //check if there is any duplicate index
    const randomNum = Math.floor(Math.random() * totalIndex)
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum)
    } else { //if the randomNum is already in the array retry
      i--
    }
  }
  return randomIndexArray
}



export const getEventCards = () => {
  return ["BTS", "봉준호", "손흥민", "제이팍"]
}


