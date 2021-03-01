import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // dev生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // botton(完了) 生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押下したボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstChild.innerText;
    // div 以下を初期化
    addTarget.textContent = null;
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // 戻すボタンを有効に
      createIncompleteList(backButton.parentNode.firstChild.innerText);
    });

    // divタグに子要素を追加設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了したTODOに追加設定
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // botton(削除) 生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押下したボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // <div><li>
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // <ul><div>
  document.getElementById("incomplete-list").appendChild(div);
};

// 追加ボタン実行
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
