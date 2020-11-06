// // メールに記載したい情報をhiddenタグから取得
var subject = document.getElementById('title').value;
var body = document.getElementById('naiyou').value;
body = body.replace(/\n/g,'%0D%0A');
// alert(body);

//メールに記載する情報を格納する変数
var address = '【送信先メールアドレス】';

// // //メールアプリにデータを転送
//  location.href = 'mailto:' + address + '?subject=' + subject + '&body=' + body;

window.plugins.webintent.startActivity (
                    {
                        action: window.plugins.webintent.ACTION_VIEW,
                        url: 'mailto:='+address+"?subject="+subject+"&body="+body
                    },
                    function () {},
                    function () {alert ('Failed to open URL via Android Intent');}
                );