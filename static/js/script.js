$(document).ready(function () {

    $(document).ajaxError(function (event, request) {
        var message = null;
        if (request.responseJSON && request.responseJSON.hasOwnProperty('message')) {
            message = request.responseJSON.message;
        } else if (request.responseText) {
            var IS_JSON = true;
            try {
                var data = JSON.parse(request.responseText);
            }
            catch (err) {
                IS_JSON = false;
            }

            if (IS_JSON && data !== undefined && data.hasOwnProperty('message')) {
                message = JSON.parse(request.responseText).message;
            } else {
                message = default_error_message;
            }
        } else {
            message = default_error_message;
        }
        M.toast({html: message});
    });




    $(document).on('click', '#confirm', function(){
        console.log("在js中点击了确认签到");
	var name=document.getElementById("name").value;
        var state=document.getElementById("state").value;
        var data_back={"name":name,
		            "state":state}
	console.log(data_back);
        $.ajax({
	    type: 'POST',
	    url: "/qiandao",
            data:data_back,
	    success: function (data) {
                    console.log(data);
		    if (data=="suc"){
		      confirm("签到成功，祝你健康！");
		      window.location.href="/qiandao";
		    }
                    else{
		    alert("签到失败，请重新签到或者联系班主任");
		      window.location.href="/qiandao";
		    }}
        });
    });


    $(document).on('click', '#save', function(){
        var data_back={"username":"suibian"}  
	    
	var url="/save";
        $.ajax({
	    type: 'post',
	    url: url,
            data:data_back,
	    success: function (data) {
                     confirm("保存成功");
                     window.location.href=data;
		    }
        });
    });






});
