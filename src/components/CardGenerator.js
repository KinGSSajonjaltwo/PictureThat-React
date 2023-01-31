import React from "react";
import {fBase} from "./FBase"
import { getFirestore, collection, doc, getDoc , getDocs , query, limit,where , setDoc, orderBy} from 'firebase/firestore/lite';

const fdb = getFirestore(fBase);
const collectionNameSet = ["Classic", "Meme", "Together", "Change"];

export const getRandomCardsTest = async ()  => {
  
  return [

    ["#사댱해","https://firebasestorage.googleapis.com/v0/b/picture-that-84402.appspot.com/o/2-heart-small.png?alt=media&token=ee2ba9e7-87d3-4750-964b-21f2f0d660de"] , ["#하트꿈치","https://firebasestorage.googleapis.com/v0/b/picture-that-84402.appspot.com/o/2-heart-elbow.png?alt=media&token=c0e27438-51eb-41ab-93ea-41e470dc54fe"] , ["#거꾸로하트","https://firebasestorage.googleapis.com/v0/b/picture-that-84402.appspot.com/o/2-heart-mid.png?alt=media&token=57e257e6-5f72-4822-9261-cb4d0d0e15fc"] , ["#하트하트#내마음이야","https://firebasestorage.googleapis.com/v0/b/picture-that-84402.appspot.com/o/2-heart-bbig.png?alt=media&token=3e184205-7528-46d6-82e0-555abb7f01c3"]]

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


