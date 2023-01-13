import React from "react";
import {fBase} from "./FBase"
import { getFirestore, collection, doc, getDoc , getDocs , query, limit,where} from 'firebase/firestore/lite';

const fdb = getFirestore(fBase);

export const getRandomCardsTest = async ()  => {
  
  return [
    ["유혹","https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Paiute_Deadfall_Trap.JPG/300px-Paiute_Deadfall_Trap.JPG"],["자리 바꾸기","https://t1.daumcdn.net/cfile/tistory/998E1A365C75BE4E1B"],["별 만들기", "https://mblogthumb-phinf.pstatic.net/MjAxNzA1MTdfMjEx/MDAxNDk1MDA1NDA2MTE2.OYmJdAcXwl6kcc3JHasVQoOq8MlIahIbOGWmW2BEeYEg.YFBSNTB9HqWoOVHY5bbd1T1wKibymJHuy8iTRCH7LXsg.JPEG.thecontest/6.jpg?type=w800"],["기요미", "https://newsimg.sedaily.com/2020/11/15/1ZAF21ND0D_1.jpg"],["아이돌 하트","https://img.insight.co.kr/static/2019/04/04/700/mpa3eu9t40s796720xc7.jpg"],["확마","https://i.ytimg.com/vi/95bgaMPcZXY/maxresdefault.jpg"],["무슨 노래 듣고 있어요?","https://mblogthumb-phinf.pstatic.net/MjAyMDA2MDJfMjk1/MDAxNTkxMDY2ODE5OTY4.IvjQtYqDJ6rxgYDWtkafVACQ2Nh5pmnSWFSgJ_gDID4g.L51bmM8xGSGoiijBhJ5eQo4A2yh_8xBk_766XORlZQ4g.JPEG.hyun5-5/IMG_9470.JPG?type=w800"],["뿌잉 뿌잉", "https://i.ytimg.com/vi/aeSeB6mzMoE/maxresdefault.jpg"]  ]

  }


export const getRandomCards = async () => {
  
  let resultDeck  = [];

  const classicCollection = collection(fdb, 'Classic');
  const testquery =  query(classicCollection , limit(2));
  const classiccards = await getDocs(testquery);
  await classiccards.forEach( (doc) => {
    resultDeck.push( [doc.data().name , doc.data().url[ 10 % (doc.data().url.length ) ] ] )
  });
  

  return resultDeck

}

export const getEventCards = () => {
  return ["BTS", "봉준호", "손흥민", "제이팍"]
}

class Card {
  constructor (name, urls) {
      this.name = name;
      this.url = urls[39%urls.length];
  }
  toArray() {
      return [this.name, this.url ]
  }
}

const cardsConverter = {
  fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new Card(data.name, data.url);
  }
};