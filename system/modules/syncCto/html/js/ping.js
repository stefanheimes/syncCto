/* Copyright (c) MEN AT WORK 2012 :: LGPL license */
function sendNextRequest(d,c,a){item=c[a];var e=item.getSiblings("span").getChildren("span.client-id")[0].getProperty("text").toString();var b;if(typeof(REQUEST_TOKEN)!=="undefined"){b={isAjax:1,action:"syncCtoPing",clientID:e,REQUEST_TOKEN:d}}else{b={isAjax:1,action:"syncCtoPing",clientID:e}}new Request.JSON({method:"post",url:window.location.href,data:b,evalScripts:false,evalResponse:false,onSuccess:function(f){if(f.error==true||f.value==0){item.setProperty("src","system/modules/syncCto/html/js/images/offline.png")}else{if(f.value=="1"){item.setProperty("src","system/modules/syncCto/html/js/images/missing.png")}else{if(f.value==2||f.value==3){item.setProperty("src","system/modules/syncCto/html/js/images/online.png")}}}if((c.length-1)>a){sendNextRequest(f.token,c,(a+1))}}.bind(c).bind(a),onFailure:function(i,g,f,h){item.setProperty("src","system/modules/syncCto/html/js/images/offline.png")}.bind(c).bind(a)}).send()}window.addEvent("domready",function(){if(typeof Contao!=="undefined"&&typeof Contao.request_token!=="undefined"){REQUEST_TOKEN=Contao.request_token}if(typeof(REQUEST_TOKEN)=="undefined"){REQUEST_TOKEN=0}if($$("img.ping").length!=0){sendNextRequest(REQUEST_TOKEN,$$("img.ping"),0)}});