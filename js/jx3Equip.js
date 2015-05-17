/**
* @author shine
* @blog http://blog.ipsfan.com/
* @version 0.1
*/ 
$(function(){
	var total_vercome=$("#total_vercome");

	//hover预览装备
	$("#armList .opt").bind('mouseover',function(){
		var index=parseInt($(this).attr("data-arm"))-1;
		$.getJSON('data/arminfo.json',function(data){
			updateEquipView("box",data,index);

		})
	});
	//hover预览装备end
	//装备武器
	$("#armList .opt").bind("click",function(){
		var p_id=$(this).attr("data-arm");
		var index=parseInt(p_id)-1;
		var oriVal=parseInt(total_vercome.html());
		$(this).addClass("opton").siblings().removeClass("opton");
		$("#armbox").addClass("infoon").attr("data-arm",p_id);
		$.getJSON('data/arminfo.json',function(data){
			console.log(oriVal);
			updateEquipView("armboxon",data,index);
			equipObj=getEquip("armboxon");
			console.log(equipObj.overcome);

		});

	});

	//装备武器end
	//获取属性
	function getEquip(box){
		var box=$("#"+box),
			equipObj={};
		equipObj.overcome=parseInt(box.find(".overcome .val").html());
			return equipObj;

	};
	//获取属性end
	/*
	 *更新装备预览
	 *e=装备盒子id, data=返回的json对象,index=装备id
	 */
	function updateEquipView(e,data,index){
		var ctnBox=$("#"+e),
		pName=ctnBox.find(".pName"),
		pInfo=ctnBox.find(".pInfo"),
		pBody=ctnBox.find(".pBody"),
		spirit=ctnBox.find(".spirit"),
		attack=ctnBox.find(".attack"),
		overcome=ctnBox.find(".overcome"),
		huajing=ctnBox.find(".huajing"),
		hole=ctnBox.find(".hole"),
		quality=ctnBox.find(".quality"),
		score=ctnBox.find(".score"),
		menpai=ctnBox.find(".menpai");

		var holeval=(data[index].hole).join('');
			pName.html(data[index].pName);
			pInfo.html(data[index].pInfo);
			pBody.html(data[index].pBody);
			spirit.html(data[index].spirit);
			attack.html(data[index].attack);
			overcome.html(data[index].overcome);
			huajing.html(data[index].huajing);
			hole.html(holeval);
			quality.html(data[index].quality);
			score.html(data[index].score);
			menpai.html(data[index].menpai);
	};
	//更新装备预览end
	

});