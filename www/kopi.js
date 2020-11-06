
// フォーム要素を得る
var form = document.forms.targetForm.naiyou;
 
// 対象のテキスト入力要素の中身をコピーするメソッド
var target =document.forms.targetForm.naiyou;
    // 要素に含まれる文字列全てを選択状態にする
 
    target.selectionStart = 0;
    target.selectionEnd = naiyou.value.length;
 
    // コピーしたい文字列がある要素をフォーカス
    target.focus(naiyou);
 
    // コピーを実行する。失敗した場合はログにメッセージを表示。
    if (!document.execCommand('copy')) {
        console.log("コピーに失敗しました。");
    }
 
    // フォーカスを外す
    target.blur();