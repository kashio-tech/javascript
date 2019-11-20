// alert("Hello World!!");　 #javscript 1

// var hello = "Hello World??";
// alert(hello);

// var int1 =1;		#javcript 2
// var float1 =3.14;
// var str1 = "javaScriptを覚えよう";
// alert(int1);
// alert(float1);
// alert(str1);

// var max = 100;
// var num = 1;
// var count = 0;

// while(num < max){
// 	num = num * 2;
// 	count = count + 1;
// }

// alert("2をかけ続けて"+ max + "を超えるのに必要な回数は" + count + "回です");

// var i;
// var num = 0;

// for(i = 1; i < 11; i++){
// 	num = num + i;
// }
// alert("1から１０まで足し算した結果は" + num + "です");

// ##javscript 3

// (1)
// // メイン部分
// var alertString;
// alertString = addString("WebCamp");
 
// // 作成した関数を呼び出す
// alert(alertString);
 
// // 作成した関数
// function addString(strA){
//     var addStr = "Hello" + strA;
//     return addStr;
// }


// (2)
// var promptStr = prompt("何か好きな文字を入力してください");

// alert(promptStr);


// (3)
// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
 
// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();
 
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);
 
// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
 
// ランダムでじゃんけんの手を作成する関数
function getJShand(){
    var js_hand_num = Math.floor( Math.random() * 3 );
    var hand_name;
 
    if(js_hand_num == 0){
        hand_name = "グー";
    }else if(js_hand_num == 1){
        hand_name = "チョキ";
    }else if(js_hand_num == 2){
        hand_name = "パー";
    }
 
    return hand_name;
}
 
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
    var winLoseStr;
 
    if(user == "グー"){
        if(js == "グー"){
            winLoseStr = "あいこ";
        }else if(js == "チョキ"){
            winLoseStr = "勝ち";
        }else if(js == "パー"){
            winLoseStr = "負け";
        }
    }else if(user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        }else if(js == "チョキ"){
            winLoseStr = "あいこ";
        }else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        }else if(js == "チョキ"){
            winLoseStr = "負け";
        }else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }
 
    return winLoseStr;
}