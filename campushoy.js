/*
今日校园去除广告

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/mobile\.campushoy\.com\/v7\/api\/config\/advertise\/showad url script-response-body https://raw.githubusercontent.com/Gmmvc/quanX/main/campushoy.js

[mitm]
hostname = mobile.campushoy.com

***************************/

var obj = JSON.parse($response.body);
obj.data = "";
$done({
    body : JSON.stringify(obj)
});
