/* eslint-disable */

// TypeScriptの基本の型

//boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字列
let str: string = "Hoge";

// Arry 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple
// 配列の型と順番を指定
let tuple: [number, string] = [0, "Hoge"];

// any
// どんな型をいれてもエラーにならない
// なるべく使わない
let any1: any = false;

// void
// 関数に紐づく型で、何も返却値がないことを表す型
const funcA = (): void => {
  const test = "Hoge";
};

// null
// null = 空っぽ
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "Hoge" };
