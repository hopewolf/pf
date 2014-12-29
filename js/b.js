var BDBridgeConfig = (function(){
    var self;
    var CONFIG = {
        BD_BRIDGE_OPEN: 1,
        BD_BRIDGE_ROOT: "http://qiao.baidu.com/v3/",
        VERSION: "3.0.0"
    };
    if (BDBridgeConfig && BDBridgeConfig.VERSION >= CONFIG.VERSION) {
        return BDBridgeConfig;
    }
    if (CONFIG.BD_BRIDGE_OPEN == 1) {
        var script = document.createElement("script");
        script.type="text/javascript";
        script.charset = "UTF-8";
        script.src = CONFIG.BD_BRIDGE_ROOT + "asset/front/bsl.js?t=" + (+ new Date());
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    var timeStart = new Date().getTime();
    return self = {
        TIME_START: timeStart,
        VERSION: CONFIG.VERSION,
        OPEN: CONFIG.BD_BRIDGE_OPEN,
        ROOT: CONFIG.BD_BRIDGE_ROOT,
        RCV_ROOT: "http://r.qiao.baidu.com/",
        BD_BRIDGE_DATA: { mainid: "120525869", SITE_ID: "1721335aac66ac675512eca6a745e1a5", siteid: "5150292", userName: '襄汾昌祥建材'},
        OPEN_MODULES: "00000",
        JS_LOADER_URL: CONFIG.BD_BRIDGE_ROOT + 'asset/front/entry/',
        CSS_DEFAULT_URL: 'http://s.qiao.baidu.com/asset/front/css/default/',
        CSS_LOADER_URL: "http://s.qiao.baidu.com/style/869/120525869/",
                BD_BRIDGE_SPECIAL:  [] ,
                BD_BRIDGE_STYLE_ITEM :         [        {
            pageid: "0",
            styleid: "1" - 0,
                        BD_BRIDGE_GROUP:  [] ,
            BD_BRIDGE_ICON : {
                iconlevel: "1" - 0,
                icontype: "2" - 0,
                iconposition: {
                    postype: "1" - 0,
                    position: "1" - 0
                },
                iconskin: {
                    useOfflineimg: "0" - 0
                },
                iconmode: "0" - 0
            },
                        BD_BRIDGE_INVITE: {
                text: "<p style=\"font-family:宋体;font-size:12px;font-color:#000000\"><span style=\"font-size:18px\">襄汾昌祥建材欢迎您！咨询电话：15103473030<\/span><\/p>",
                type: '0',
                way:  ("1" * Math.pow(2, 0)) + ("1" * Math.pow(2, 1)) ,
                page: '1' - 0,
                                interval: '30' - 0,
                                                time: '10' - 0
            },
            BD_BRIDGE_WEBIM: {
                webimtype: '0' - 0,
                webimchat: {
                    showtype: '2' - 0,
                    name: ''
                },
                webimposition: '2' - 0,
                webimlitebgcolor: '#d5d5d5'
            },
                        BD_BRIDGE_MESS : {
                messItem: {
                    messItemName: '0' - 0,
                    messItemPhone: '0' - 0,
                    messItemAddress: '0' - 0,
                    messItemEmail: '0' - 0,
                    messItemText: '1' - 0,
                    language: '0' - 0
                },
                messType: {
                    disableMess: '0' - 0
                },
                messShow: { 
                    messFloatType: '1' - 0
                },
                extraMessItems  :  [] 
            }
        }        ]
        
    }
})();
