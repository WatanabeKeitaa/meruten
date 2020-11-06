//localStorageの定義
var storage = localStorage;
//localStorageのキーワード(合言葉：qa01)
var keyword = "qa01";
 //クイズリスト(仮データ)
var kariData = [
  "氏名","学校名","学部・学科","学年","電話番号","メールアドレス"
];
//単語リスト(空の配列)
var qaList = [];
// qaList = kariData;

 //ローカルストレージからデータを取得する
var strData = storage.getItem(keyword);
qaList = JSON.parse(strData);

if(qaList === null){
  qaList = kariData;
}

var name = qaList[0];
var school = qaList[1];
var gakubu = qaList[2];
var nen = qaList[3];
var tel = qaList[4];
var maadd = qaList[5];

//以下テンプレート文
if(slpt === "setjoin1"){
  //会社説明会参加申し込み1
  document.getElementById("title").value = "会社説明会参加申し込み("+school+"・"+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\n\n私は、"+school+gakubu+nen+"年生の"+name+"と申します。\n\n現在就職活動を行っており、\n貴社の説明会に参加させていただきたくメールさせていただきました。\n開催日時と場所、提出物の詳細を教えていただければ幸いです。\n\nお忙しいところ恐れ入りますが、\n何卒よろしくお願い申し上げます。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "setjoin2"){
  //会社説明会参加申し込み2
  document.getElementById("title").value = "会社説明会参加申し込み("+school+"・"+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\n現在就職活動を行っております。\nこのたびは○月○日○○会場にて開催予定の\n会社説明会に参加させていただきたく、メールいたしました。\n\n≪参加希望説明会≫\n○月○日　○時～　○○会場\n\nご多忙中恐れ入りますが、何とぞよろしくお願い申し上げます\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
  //https://shukatsu-mirai.com/archives/76718
}else if(slpt === "setren1"){
  //会社説明会日程連絡のお礼1
  document.getElementById("title").value = "会社説明会日程連絡のお礼("+school+" "+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\n\nお世話になります。\n"+school+gakubu+nen+"年生の"+name+"です。\n\nこの度は会社説明会の日程をご連絡いただき、\nありがとうございました。\nご指定いただいた書類を持参のうえ、\n○月○日（○曜日）○時～　△△へ伺います。\n\n当日はどうぞよろしくお願い申し上げます。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "setren2"){
  //会社説明会日程連絡のお礼2
  document.getElementById("title").value = "会社説明会日程連絡のお礼("+school+" "+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\nお世話になります。\n"+school+gakubu+nen+"年生の"+name+"です。\n\n会社説明会の日程をご連絡いただき、誠にありがとうございました。\n必要書類を持参の上、○月○日（○曜日）○時～　△△へ伺います。\n当日お会いできることを楽しみにしております。\n何卒、よろしくお願いいたします。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "setthan1"){
  //会社説明会のお礼1
  document.getElementById("title").value = "本日の会社説明会のお礼("+school+" "+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\n先日は貴社の会社説明会に参加させていただき、誠にありがとうございました。\n説明会では、具体的な業務内容や社員の方々の仕事に対する想いについて/nお話を伺い、私にとって非常に実りのある時間でした。\n質問にも丁寧に答えていただき、貴社で働きたいという想いが一層強くなりました。\n頂いた資料を熟読し、貴社への理解をさらに深めたいと考えております。 \n\nお忙しい中、貴重な時間を割いていただきまして、改めて御礼申し上げます。\n今後とも何卒よろしくお願い致します。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "setthan2"){
  //会社説明会のお礼2
  document.getElementById("title").value = "本日の会社説明会のお礼("+school+" "+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\n先日、開催された貴社の会社説明会に参加させていただきました、\nこのたびは、○○業界の今後の将来性や貴社の成長戦略について\n今回の会社説明会を通じて学ぶことが出来ました。\n会社説明会の中で、○○様をはじめ、\n社員の方々に丁寧に質問に答えていただいたこと\n大変感謝しております。\n\n是非貴社の一員として\n働かせていただけたらと願っております。\n今後とも何卒よろしくお願い致します。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
  //https://careerintern.jp/library/method/after-briefing-mail-sample/#i//
}else if(slpt === "houreq1"){
  //会社訪問のお願い1
  document.getElementById("title").value = "貴社オフィス訪問のお願い("+school+"・"+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\n\n私は、"+school+gakubu+nen+"年生の"+name+"と申します。\n\nさて、誠に恐縮ですが、この度は貴社を訪問させていただきたく、メールさせていただきました。\n\n貴社の○○に興味を持ち、ぜひ、会社訪問に機会を頂きたいと思っております。\n\nご多忙のところ、大変恐縮ですが検討の程よろしくお願いいたします。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "houreq2"){
  //会社訪問のお願い2
  document.getElementById("title").value = "貴社オフィス訪問のお願い("+school+"・"+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\n\n突然のご連絡失礼いたします。\n私は、"+school+gakubu+nen+"年生の"+name+"と申します。\n\n現在就職活動において企業研究を行っており、\n○○業界でご活躍されている貴社の○○に興味を持ちました。\n是非、直接お話をお伺いする機会をいただきたく存じます。\n\n私は下記日程にて訪問可能です。\nご都合がつく日程でかまいませんので、\nご検討いただければと思います。\n\n１　●月●日（●）●時～\n２　●月●日（●）●時～▲時\n３　●月●日（●）終日\n\n忙しい中恐れ入りますが、ご確認のほどよろしくお願いいたします。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "houthan1"){
  //会社訪問のお礼1
  document.getElementById("title").value = "会社訪問のお礼("+school+"・"+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\n\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\n本日は貴重なお時間をいただき、誠にありがとうございました。\n\nお伺いしたお話は、大変、意義深く、○○は特に印象的でした。\n\n本当にありがとうございました。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "houthan2"){
  //会社訪問のお礼2
  document.getElementById("title").value = "会社訪問のお礼("+school+"・"+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\n本日は会社訪問をさせて頂きまして、誠にありがとうございました。\n貴社の業務内容について丁寧に分かり易く教えいただき、\n特に貴社の目指す「○○」は大変印象に残っています。\n\nお仕事がご多忙の中、勉強の機会を与えていただき感謝しております。\n私の質問にも丁寧に答えていただき、ありがとうございました。\n\n末筆ながら、貴社のさらなるご発展をお祈りしております。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "menreq1"){
  //面接の日程調整のお願い1
  document.getElementById("title").value = "面接の日程調整のお願い("+school+"・"+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\n\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\n書類選考通過のご連絡、誠にありがとうございます。\n面接の希望日程をお送りいたします。\n下記日程であれば、お伺いすることが可能ですので、\nご調整いただけますと幸いです。\n\n【1】 ○月○日（○）○時〜○時\n【2】 ○月○日（○）○時〜○時\n【3】 ○月○日（○）○時〜○時\n\nお忙しい中恐れ入りますが、\n何卒よろしくお願い申し上げます。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "menreq2"){
  //面接の日程調整のお願い2
  document.getElementById("title").value = "面接の日程調整のお願い("+school+"・"+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\n面接日程のご連絡をいただき、誠にありがとうございました。\n希望日程を下記に記載いたします。日程のご調整の程、何卒よろしくお願いいたします。\n\n１　●月●日（●）●時～面接開始希望\n２　●月●日（●）●時～▲時（▲時に面接終了を希望）\n３　●月●日（●）●時以降、いつでも調整可能\n\n上記でのご都合はいかがでしょうか。\nご確認・ご検討いただけますと幸いです。\nご多忙の折、大変恐縮ですが、何卒よろしくお願い申し上げます。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "menrep2"){
  //面接の日程調整返信1
  document.getElementById("title").value = "面接の日程調整について";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\n\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\n面接日程のご連絡、誠にありがとうございます。\n頂きました日程の中から、下記でお伺いさせて頂けますでしょうか。\n\n○月○日（○曜日）○時～○時\n\nお忙しい中恐れ入りますが、\n何卒よろしくお願い申し上げます。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "menrep2"){
  //面接の日程調整返信2
  document.getElementById("title").value = "面接の日程調整について";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\nメールの本文。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "menthan1"){
  //面接のお礼1
  document.getElementById("title").value = "本日の面接のお礼("+school+" "+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\n\nお世話になっております。\n本日○時より面接をして頂きました、"+school+gakubu+nen+"年生の"+name+"です。\n\n本日はお忙しい中、面接の機会を頂きまして\n誠にありがとうございました。\n○○様のお話を伺い、について理解を深めることができ、\n貴社で仕事をしたいという思いが一層強くなりました。\n\nまずは、面接のお礼を申し上げたく、メールいたしました。\n末筆ながら貴社のますますのご発展とご活躍をお祈り申し上げます。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "menthan2"){
  //面接のお礼2
  document.getElementById("title").value = "本日の面接のお礼("+school+" "+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\n本日は面接のお時間いただき、ありがとうございました。\n\n〇〇様のお話をうかがい、あらためて貴社への志望度が高まりました。\n特に、面接中に仰っていた「〇〇」という言葉が\n私のなかで強く印象に残っております。\n\n貴社への入社が叶った際は、つねに変化・成長を追い続けて\n会社の業績に貢献できればと考えております。\n\nご多忙かと存じますので、ご返信には及びません。\n本日は誠にありがとうございました。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "intjoin1"){
  //インターンシップ参加申し込み
  document.getElementById("title").value = "インターンシップ参加申し込み("+school+"・"+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\n\n私は、"+school+gakubu+nen+"年生の"+name+"と申します。\n\nこの度は、御社で行われます夏季インターンシップに応募したく、ご連絡申し上げました。\n御社のホームページを拝見し、◯○に強い関心を持ちました。そこで、学生のうちから御社で多くのことを学びたく、今回のインターンシップ応募に至りました。\n\nぜひインターンシップ採用をご検討いただけますと幸いです。\n\nご多忙のところ恐れ入りますが、何卒よろしくお願いいたします。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "intrep1"){
  //インターンシップ日程調整返信
  document.getElementById("title").value = "インターンシップの日程調整";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\n\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\n インターンシップの日程について、\nご連絡いただきありがとうございます。\n下記の日時で伺えるかと存じます。\n\n【1】○月○日（○）○時～○時\n【2】○月○日（○）終日\n【3】○月○日（○）○時～○時\n【4】○月○日（○）終日\n\nもしいずれもご都合がつかない場合は、\n再度ご提案をさせていただければと存じます。\n\n何卒宜しくお願い申し上げます。\n\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "intthan1"){
  //インターンシップのお礼
  document.getElementById("title").value = "本日のインターンシップ参加のお礼("+school+" "+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\n\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\nこの度は、インターンシップに参加させて頂きまして誠にありがとうございました。◇◇様や社員の皆様には、様々なアドバイスを頂き大変感謝しております。\n\n今回のインターンシップを通じて、御社の業務を身をもって知ることができ、大変貴重な経験となりました。特に●●様が仰っていた○○は大変印象に残りました。\n以前より関心があった御社の社風を肌で感じることでき、御社で働きたいという気持ちが一層強くなりました。\n今後の本選考においても、今回のインターンシップ経験を活かして全力で取り組みたいと考えております。\n改めて、この度はありがとうございました。\n末筆ながら、貴社のなお一層のご繁栄と皆様のご多幸をお祈り申し上げます。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "hen1"){
  //日程調整1
  document.getElementById("title").value = "○○別日時での参加ご相談（"+school+" "+name+"）";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\n\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\n\○月○日（○曜日）○時～の○○のご連絡をいただきましたが、\n\あいにく別の予定と重なってしまい、お伺いすることができません。\nせっかくご連絡いただきましたところ大変申し訳ございません。\n\n別の開催日で予定があれば、ぜひ参加させていただきたいのですが、\nご教示いただくことは可能でしょうか。\n\nお忙しい中、お手数をおかけしますが、\n何卒、よろしくお願い申し上げます。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}else if(slpt === "hen2"){
  //日程調整2
  document.getElementById("title").value = "〇月〇日の面接日程調整のお願い("+school+" "+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。先日は、面接の日程をご連絡いただき、ありがとうございました。\n\n大変申し訳ございませんが、面接日の○月○日は〇〇があり、\nご案内いただいた日時に伺うのが難しい状況です。\n誠に勝手なお願いで恐縮ですが、\n下記の日程で面接の日時をご調整いただくことは可能でしょうか。\n\n○月○日（〇） 〇時～\n○月○日（〇） 〇時～\n○月○日（〇） 終日\n\nお忙しいところお手数をおかけして、申し訳ございません。\n何卒、ご検討のほど、よろしくお願いいたします。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
  }else if(slpt === "dec"){
  //辞退
  document.getElementById("title").value = "○○辞退の連絡("+school+" "+name+")";
  document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\n○月○日でご調整頂いた□□ですが、貴社□□申し込み後にどうしても外せない家族の予定が入ってしまいました。\n\nつきましては、大変恐れ入りますが、今回貴社□□の参加を辞退させて頂きたく存じます。\n\nお忙しい中、ご調整頂いたにも関わらず、ご迷惑をおかけしてしまい申し訳ございません。\nご確認の程宜しくお願い致します。。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";
}

//https://shukatsu-mirai.com/archives/79053
//https://br-campus.jp/articles/report/314
//https://01intern.com/magazine/archives/22347

//以下テンプレート作成用テンプレート
// }else if(slpt === "○○"){
//   document.getElementById("title").value = "メールのタイトル";
//   document.getElementById("naiyou").value = "〇〇株式会社　就活担当者様\nお世話になっております。\n"+school+gakubu+nen+"年生の"+name+"です。\n\nメールの本文。\n\n-------------\n"+school+"\n"+gakubu+"\n"+name+"\nTEL："+tel+"\nMAIL："+maadd+"\n-------------";