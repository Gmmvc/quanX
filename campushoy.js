/*
今日校园去除广告

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/mobile\.campushoy\.com\/v7\/api\/config\/advertise\/showad url script-response-body https://raw.githubusercontent.com/Gmmvc/quanX/main/campushoy.js

[mitm]
hostname = mobile.campushoy.com

***************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

if (url != -1) {
	obj.data = [];
	body = JSON.stringify(obj);
	console.log(body);
}else{
	console.log("失败！")
}

$done({body});
