
require('pages/common/logo')
require('pages/common/footer')

require('./index.css')

var _util=require('util')
var api = require('api')

var formError={
	show:function(msg){
		$('.error-item')
        .show()
        .find('.error-msg')
        .text(msg)
	},
	hide:function(){
		$('.error-item')
    	.hide()
    	.find('.error-msg')
    	.text('')
	}
}

// console.log($)
var page={
	init:function(){
		this.bindEvent()
	},
	bindEvent:function(){
		var _this=this
		$('#btn-submit').on('click',function(){
			_this.submit()
		})
		$('input').on('keyup',function(ev){
			if(ev.keyCode == 13){
				_this.submit()
			}
		})
	},
	submit:function(){
		//1.获取数据
		var formData={
			username:$.trim($('[name="username"]').val()),
			password:$.trim($('[name="password"]').val()),
		}
        //2.校验数据
        var validateResult = this.validate(formData)
        //验证成功
        if(validateResult.status){
        	formError.hide()
        	//3.发送请求
        	/*
        	$.ajax({
        		url:'/sessions/users',
        		method:'post',
        		data:formData,
        		dataType:'json',
        		success:function(result){
        			 if(result.code == 0){
                        window.location.href = "/"
                    }else{
                       formError.show(result.message) 
                    }
        		},
        		error:function(error){
        			formError.show('网络错误,请稍后再试')
        		}
        	})
        	*/
        	api.login({
        		data:formData,
        		success:function(data){
        			window.location.href = _util.getParamFormUrl('redirect') || "/"
        		},
        		error:function(msg){
        			formError.show(msg)
        		}
        	})
        }
        //验证失败
        else{
           	formError.show(validateResult.msg)
        }
        
	},
	validate:function(formData){
		var result={
			status:false,
			msg:''
		}
		//校验
        //用户名不能为空
        if(!_util.validate(formData.username,'require')){
        	result.msg='用户名不能为空'
        	return result
        }
        //用户名格式验证
        if(!_util.validate(formData.username,'username')){
        	result.msg='用户名格式不正确'
        	return result
        }
        //密码不能为空
        if(!_util.validate(formData.password,'require')){
            result.msg = "密码不能为空"
            return result
        }
        //密码格式验证
        if(!_util.validate(formData.password,'password')){
            result.msg = "密码格式不正确"
            return result
        }        
        result.status = true
        return result
	}
}
$(function(){
    page.init()
})