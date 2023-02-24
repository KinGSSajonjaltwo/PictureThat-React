import React from "react";
import { fBase } from "./FBase"
import { getFirestore, collection, doc, getDoc, getDocs, query, limit, where, setDoc, orderBy } from 'firebase/firestore/lite';
import { async } from "@firebase/util";

import { analytics } from "./FBase";
import { logEvent } from "firebase/analytics";

const fdb = getFirestore(fBase);
const collectionNameSet = ["Classic", "Meme", "Together", "Change"];
const fdbCollectionName = "ver1";

export const getRandomCardsTest = async (cardNums) => {
  
  logEvent(analytics, 'getRandomCardsTest');
  let resultDeck;
  resultDeck = await Promise.all([
    getCardFromdocQuery(query(collection(fdb, "test3"), where("id", "==", 3))),
    getCardFromdocQuery(query(collection(fdb, "test3"), where("id", "==", 2))),
    getCardFromdocQuery(query(collection(fdb, "test3"), where("id", "==", 1))),
    getCardFromdocQuery(query(collection(fdb, "test3"), where("id", "==", 0)))
  ]); 
  return resultDeck;

}

export const getRandomCards = async (cardNums) => {
  //cardNum 개수만큼 RandomCard 생성
  logEvent(analytics, 'getRandomCards');
  const randomIndex = await getrandomIndex(cardNums);
  // console.log(randomIndex)
  let resultDeck;
  switch (cardNums) {
    case 1:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[0]))),
      ]);
      break;

    case 2:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[1]))),
      ]);
      break;

    case 3:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[2]))),
      ]);
      return resultDeck;
      break;

    case 4:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[2]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[3])))
      ]);
      return resultDeck;
      break;

    case 5:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[2]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[3]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[4]))),
      ]);
      break;
    
    case 6:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[2]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[3]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[4]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[5])))
      ]);
      break;

    case 7:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[2]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[3]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[4]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[5]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[6])))
      ]);
      break;

    case 8:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[2]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[3]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[4]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[5]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[6]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[7]))),
      ]);
      break;

    case 9:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[2]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[3]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[4]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[5]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[6]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[7]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[8])))
      ]);
      break;

    case 10:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[2]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[3]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[4]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[5]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[6]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[7]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[8]))),
        getCardFromdocQuery(query(collection(fdb, "ver1"), where("id", "==", randomIndex[9])))
      ]);
      break;
    default:
      break;
  }

  // console.log(resultDeck);


  return resultDeck

}

const getCardFromdocQuery = async (docQuery) => {

  const cardDoc = await getDocs(docQuery);
  let card = [,];
  cardDoc.forEach((doc) => {
    card[0] = doc.data().name.replace(/\\n/gi, '\n');
    card[1] = doc.data().url;
  });

  return card
}

const getrandomIndex = async (getrandomIndex) => {

  const docRef = doc(fdb, "constants", "ver1Length");
  const docSnap = await getDoc(docRef);
  
  let collectionLength = docSnap.data().nums;
  
  // localStorage.clear('indexChecker')
  // if ( localStorage.getItem("indexChecker") == null  ){ 
  //   // to do 남아있는 자리 수 확인 
  //   let indexCheckerArray = ["a"];
  //   localStorage.setItem("indexChecker", "asd")
  // }
  let randomIndex = selectIndexwithHistory(collectionLength, getrandomIndex);
  return randomIndex

}

const selectIndex = (totalIndex, selectingNumber) => {
  let randomIndexArray = []
  for (let i = 0; i < selectingNumber; i++) { //check if there is any duplicate index
    const randomNum = Math.floor(Math.random() * totalIndex)
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum)
    } else { //if the randomNum is already in the array retry
      i--
    }
  }
  return randomIndexArray
}

const selectIndexwithHistory = (totalIndex, selectingNumber) => {

  let cardhistory = JSON.parse(localStorage.getItem("cardhistory"));
  let randomIndexArray = [];

  if (cardhistory == null ){
    logEvent(analytics, 'cardhistory == null');
    cardhistory = [] ;

  }


  for (let i = 0; i < selectingNumber; i++) { //check if there is any duplicate index
    const randomNum = Math.floor(Math.random() * totalIndex)
    if (  cardhistory.indexOf(randomNum) === -1 && (randomIndexArray.indexOf(randomNum) === -1)  ) {
      randomIndexArray.push(randomNum)
      cardhistory.push(randomNum)
    } else { //if the randomNum is already in the array retry
      i--
    }
  }

  if (cardhistory.length >= 21){
    cardhistory = [];
    logEvent(analytics, 'cardhistory clear');
  }

  localStorage.setItem("cardhistory",JSON.stringify(cardhistory))

  return randomIndexArray


}



// getRandom Cards - MZ테스트 ver.
export const getEventCards = async (cardNums) => {
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




