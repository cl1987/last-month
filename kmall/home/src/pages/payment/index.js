require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')

var api = require('api')
var _util = require('util')

var tpl = require('./index.tpl')
require('./index.css')

var page = {
    paymentsPrarms:{
        orderNo:_util.getParamFormUrl('orderNo')
    },    
    init:function(){
    	this.timer=0
        this.$elem = $('.payment-box')
        this.loadPayments()
    },
    loadPayments:function(){
    	var _this=this
    	if(this.paymentsPrarms.orderNo){
    		api.getPayments({
    			data:{
    				orderNo:_this.paymentsPrarms.orderNo
    			},
    			success:function(payment){
    				var html = _util.render(tpl,payment)
    				_this.$elem.html(html)
    				 //监听订单的状态
                    _this.listenPaymentsStatus()
    			},
    			error:function(){
    				_this.$elem.html('<p class="empty-message">获取支付信息失败,请稍后再试</p>')
    			}
    		})
    	}else{
    		this.$elem.html('<p class="empty-message">没有订单,请重新跳转页面</p>')
    	}
    },
    listenPaymentsStatus:function(){
		var _this = this
		this.timer = setInterval(function(){
			api.getPaymentsStatus({
                data:{
                    orderNo:_this.paymentsPrarms.orderNo
                },
                success:function(result){
                    // console.log(_this.data.orderNo)
                    if(result){
                        clearInterval(_this.timer)
                        window.location.href = './result.html?type=payment&orderNo='+_this.paymentsPrarms.orderNo
                    }
                }
            })
		},1000)
    }
}

$(function() {
    page.init()
}) 