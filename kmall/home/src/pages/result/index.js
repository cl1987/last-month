require('pages/common/logo')
require('pages/common/footer')
var _util=require('util')
require('./index.css')



$(function(){
	var type = _util.getParamFormUrl('type') || 'default'
	if(type == 'payment'){
        var orderNo = _util.getParamFormUrl('orderNo')
        var $btn = $('.order-detail')
        var url = $btn.attr('href')+orderNo
        $btn.attr('href',url)
    }
	$('.'+type).show()
})