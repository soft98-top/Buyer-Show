    var jiekou1="https://h5.m.taobao.com/ocean/privatenode/shop.html?sellerId=";
    var jiekou2="https://market.m.taobao.com/apps/market/collectactivity/buyer_show.html?wh_weex=true&wx_navbar_transparent=true&sellerId=";
    var jiekou3="https://market.m.taobao.com/app/mtb/item-buyer-show/pages/index?wh_weex=true&itemId="
    var showurl = window.location.href;
    if(showurl.indexOf("shop.html")!=-1){
        console.log("匹配成功");
        var ss = document.getElementsByTagName("script");
        ss[ss.length-1].innerText.replace('console.log(i),g.modal.show({text:"加载失败"})','console.log(i),g.modal.show({text:"加载失败"}),window.open(i.data.url)');
    }
    function getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }
    window.onload=function(){
        var url = window.location.href;
        console.log(url);
        if(url.indexOf("shop.html")!=-1){
            console.log("匹配成功");
            var ss = document.getElementsByTagName("script");
            ss[ss.length-1].innerText.replace('console.log(i),g.modal.show({text:"加载失败"})','console.log(i),g.modal.show({text:"加载失败"}),window.open(i.data.url)');
        }
        if(url.indexOf("item.htm")!=-1){
            var itemId = ""
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    if(pair[0] == "id"){itemId = pair[1];}
            }
            if(itemId == ""){
                return
            }
            if(url.indexOf("taobao.com")!=-1){
                var itemName = document.getElementsByClassName("tb-main-title")[0];
                itemName.innerHTML = "<a href='" + jiekou3 + itemId + "' target='_blank'>" + itemName.innerText + "</a>"
            }else if(url.indexOf("tmall.com")!=-1){
                var itemName = document.getElementsByClassName("tb-detail-hd")[0].getElementsByTagName("h1")[0];
                itemName.innerHTML = "<a href='" + jiekou3 + itemId + "' target='_blank'>" + itemName.innerText + "</a>"
            }
        }
        if(url.indexOf("taobao.com")!=-1){
            var sellstr=document.getElementsByClassName("shop-collect iconfont J_TCollectShop J_TGoldlog")[0].getAttribute("href");
            sellstr = sellstr.match(/sellerid=(\S*)&/)[1];
            var shopname = document.getElementsByClassName("J_TGoldlog")[0];
            var shopnamelink = document.getElementsByClassName("shop-name-link")[0];
            var shopstar = document.getElementsByClassName("rank-icon-v2 J_TGoldlog")[0];
            var link1 = jiekou1+sellstr;
            var link2 = jiekou2+sellstr;
            if(shopname!=null){
                shopname.setAttribute("href",link1);
            }
            if(shopnamelink!=null){
                shopnamelink.setAttribute("href",link1);
            }
            if(shopstar!=null){
                shopstar.setAttribute("href",link2);
            }
            //var lineright = document.getElementsByClassName("line-right")[0];
            //lineright.innerHTML+="<a href='+"' target='_blank'>买家秀</a>";
        }else if(url.indexOf("tmall.com")!=-1){
            var scripts = document.getElementsByTagName("script");
            for(var i=0;i<scripts.length;i++){
                var script_temp = scripts[i];
                var str = script_temp.innerHTML;
                if(str==null){
                    continue;
                }
                var indexstr = 'sellerId: "';
                if(str.indexOf(indexstr)!=-1){
                    str = str.match(/sellerId: "(\S*)"/)[1];
                    var html=document.getElementsByClassName("shopwt-desc")[0];
                    var slogo=document.getElementsByClassName("slogo-shopname")[0];
                    slogo.setAttribute("href",jiekou1+str);
                    slogo.setAttribute("target","_blank");
                    var html_temp = html.innerHTML;
                    html.innerHTML="<a href='"+jiekou2+str+"' target='_blank'>买家秀</a>"+html_temp;
                    break;
                }
            }
        }
    }