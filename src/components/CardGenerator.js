import React from "react";
import { fBase } from "./FBase"
import { getFirestore, collection, doc, getDoc, getDocs, query, limit, where, setDoc, orderBy } from 'firebase/firestore/lite';
import { async } from "@firebase/util";

const fdb = getFirestore(fBase);
const collectionNameSet = ["Classic", "Meme", "Together", "Change"];


export const getRandomCardsTest = async (cardNums) => {

  return [

    ["#사댱해", "https://firebasestorage.googleapis.com/v0/b/picture-that-84402.appspot.com/o/2-heart-small.png?alt=media&token=ee2ba9e7-87d3-4750-964b-21f2f0d660de"], ["#하트꿈치", "https://firebasestorage.googleapis.com/v0/b/picture-that-84402.appspot.com/o/2-heart-elbow.png?alt=media&token=c0e27438-51eb-41ab-93ea-41e470dc54fe"], ["#거꾸로하트", "https://firebasestorage.googleapis.com/v0/b/picture-that-84402.appspot.com/o/2-heart-mid.png?alt=media&token=57e257e6-5f72-4822-9261-cb4d0d0e15fc"], ["#하트하트\n#내마음이야", "https://firebasestorage.googleapis.com/v0/b/picture-that-84402.appspot.com/o/2-heart-bbig.png?alt=media&token=3e184205-7528-46d6-82e0-555abb7f01c3"]]

}

export const getRandomCards = async (cardNums) => {
  //cardNum 개수만큼 RandomCard 생성=

  const randomIndex = await getrandomIndex(cardNums);
  const resultDeck = ["준비중", "준비중"];
  switch (cardNums) {
    case 1:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[0]))),
      ]);
      break;

    case 2:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[1]))),
      ]);
      break;

    case 3:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[2]))),
      ]);
      break;

    case 4:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[2]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[3])))
      ]);
      break;

    case 5:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[2]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[3]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[4]))),
      ]);
      break;
    
    case 6:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[2]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[3]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[4]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[5])))
      ]);
      break;

    case 7:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[2]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[3]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[4]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[5]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[6])))
      ]);
      break;

    case 8:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[2]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[3]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[4]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[5]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[6]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[7]))),
      ]);
      break;

    case 9:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[2]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[3]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[4]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[5]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[6]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[7]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[8])))
      ]);
      break;

    case 10:
      resultDeck = await Promise.all([
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[0]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[1]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[2]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[3]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[4]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[5]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[6]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[7]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[8]))),
        getCardFromdocQuery(query(collection(fdb, "test2"), where("id", "==", randomIndex[9])))
      ]);
      break;
  }

  /*
  const resultDeck = await Promise.all([
    getCardFromdocQuery( query(collection(fdb, "test2") , where("id", "==" , randomIndex[0])) ), 
    getCardFromdocQuery( query(collection(fdb, "test2") , where("id", "==" , randomIndex[1])) ),
    getCardFromdocQuery( query(collection(fdb, "test2") , where("id", "==" , randomIndex[2])) ),
    getCardFromdocQuery( query(collection(fdb, "test2") , where("id", "==" , randomIndex[3])) )
  ]);
  */


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

  const docRef = doc(fdb, "constants", "test2Length");
  const docSnap = await getDoc(docRef);
  let collectionLength = docSnap.data().nums;
  let randomIndex = selectIndex(collectionLength, getrandomIndex);
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




