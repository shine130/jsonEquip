/**
* @author shine
* @blog http://blog.ipsfan.com/
* @version 0.1
*/ 
$(function(){
	var ctnBox=$("#box"),
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

	$("#armList .opt").bind('mouseover',function(){
		var index=parseInt($(this).attr("data-arm"))-1;
		$.getJSON('data/arminfo.json',function(data){
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


		})
	});
});