var test = 0;
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        //console.log(JSON.stringify(details));
        var fb_add_comment_regex = new RegExp(".*taobao\.com\/.*\/\?appKey.*");
        if(fb_add_comment_regex.test(details.url)){
            if(test==0){
                test=1;
                (async () => {
                    const res = await fetch(details.url);
                    const text = await res.text();
                    try{
                        const json = await JSON.parse(text.match(/\((\S*)\)/)[1]);
                        console.log(json);
                        if(json.ret[0]=="FAIL_SYS_USER_VALIDATE"){
                            test=0;
                            window.open(json.data.url);
                    }
                    }catch{
                    }
                    test=0;
                })();
            }
        }
    },
    {
        urls: ["<all_urls>"]
    }//,
    //["blocking"]
);
        