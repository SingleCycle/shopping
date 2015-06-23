var bd_srv = "http://oms.sh-anze.com:8003/api";//调用的后台接口地址

$(function(){
	bd.ajax = function(url,para,headers,method,fun,type,async,contentType){    
        $.ajax({
            'url':bd_srv+url,
            'data':para,
            'headers':headers,
            'dataType':type,
            'type':method.toUpperCase(),
            'async':async,
            'contentType':contentType,
            beforeSend:function() {

    		},
            complete:function(XHR,textStatus){
                if(XHR.status!=200){
                    if(XHR.readyState!==0){
                        var err = '\nstatus='+XHR.status;
                       err+='\nreadyState='+XHR.readyState;
                       err+='\nresponseText='+XHR.responseText;
                       err+='\nResponseHeaders='+XHR.getAllResponseHeaders();
                       alert('服务调用异常，网络连接失败！'+err);
                       return;   
                    }
                    return;
                }
                var text = XHR.responseText;
                fun(text);
                // if(text!==null){
                //         //调用成功后，回调响应函数
                //     if(this.dataType.toLowerCase()==='json'){
                //         var json = {};
                //         try{
                //          json = jQuery.parseJSON(text);
                     
                //         }catch(e){
                //             json.responseText=text;
                //             json.errMsg = 'json转换失败！错误信息：\n'+e.message;
                //         }
                //     }
                //     if(this.dataType.toLowerCase()==='text'){
                //         var af = ikang.exeAfter(XHR,text);
                //         if(af!=false){
                //              fun(text);
                //         }
                //     }
                // }
            }
        });
    };
})
