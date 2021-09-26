// 設定ファイルを触る

export const Practice4 = () => {
  // tsconfig.jsonのuser: strict設定が効いているとanyでエラーになる
  // "noImplicitAny": falseを加えると回避できる
  const calcTotalFree = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFree(1000);
  return (
    <div>
      <p>練習問題：設定ファイルを触る</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
