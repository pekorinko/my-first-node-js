'use strict';

//undefinedの時は0を使う（undefinedは数値では無いため計算出来ないから）
const number = process.argv[2]||0;

//変数 sum は 0
let sum = 0;

//変数　i　最初は１
//i の値が　numberの値（コマンドライン引数）以下の時
//sum = sum+i
//sumの始まりは０、　始まりは　０＋１→コマンドライン引数の値を超えるまでiに１を足し続ける
for(let i =1; i <= number; i++){
    sum = sum +i;
}

console.log(sum);