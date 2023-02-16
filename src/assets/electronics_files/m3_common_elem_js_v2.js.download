var opendiv=0;
var host='http://mmb.moneycontrol.com/';

jQuery(document).ready(function(){jQuery('#reply1').trigger('click');});

function sendMessage_m3(){
	if($.trim($('form#m3_mc_element #f_message').val()) != '' && $.trim($('form#m3_mc_element #f_message').val()).length > 2){
		$('form#m3_mc_element #f_message').val(escape($.trim($('form#m3_mc_element #f_message').val())));
		$('form#m3_mc_element').submit();
	}else{
		alert('Please input your message');
		jQuery('#m3_txtArea_txt').val('');
		jQuery('#m3_txtArea_txt').focus();
		return false;	
	}
}

function chkuser_photo(dvid,dna)
{
	if(readCookie('nnmc'))
	 {	    
			$.ajax({
            url: host+'india/messageboard/m3_common_functions.php?action=get_pic&callback=?',
            type: 'GET',
            dataType: 'jsonp',         
			success: function(jsonp) { 
				$.each(jsonp,function(i,v){	
				var nic_nm='<span class=bl_12><strong>'+v.nic_nm+'</strong></span>';
				document.getElementById("user_photo_"+dna+"_"+dvid).innerHTML=v.image;
				document.getElementById("user_name_"+dna+"_"+dvid).innerHTML=nic_nm;
				});
            }
        });
	}
}
function getMBload()
{
	if(!$('#mmb_head_msgs').hasClass('act'))
	{
		var topicids=$('#topicids_mmb').val();
		var debate_opinion=$('#debate_opinion_mmb').val();
		var topic_rqd=$('#topic_rqd_mmb').val();
		var sec_head=$('#sec_head_mmb').val();
		var header_text=$('#header_text_mmb').val();
		var f_topic=$('#f_topic_mmb').val();
		var f_categoryid=$('#f_categoryid_mmb').val();
		var f_topicid=$('#f_topicid_mmb').val();
		var poll_opt=$('#poll_opt_mmb').val();
		var f_category=$('#f_category_mmb').val();
		var ref_page_id=$('#ref_page_id_mmb').val();
		var txt_cmt=$('#txt_cmt_mmb').val();
	$('#data_mmb_details').html('<img class="img_loader" src="http://img.moneycontrol.co.in/images/messageboard/mmb_loader.gif">')
	$.post('/mf/mf_info/ajax_comm_elem.php',{topicids:topicids,debate_opinion:debate_opinion,topic_rqd:topic_rqd,sec_head:sec_head,header_text:header_text,f_topic:f_topic,f_categoryid:f_categoryid,f_topicid:f_topicid,poll_opt:poll_opt,f_category:f_category,ref_page_id:ref_page_id,txt_cmt:txt_cmt},function(d){
	$('#data_mmb_details').html(d);
	jQuery('#reply1').trigger('click');
	});
	}
}
function repost_open_ajax(dvid,msgid)
{
   chkuser_photo(dvid,'repost');
   var chk_soc_opt=4;
   var tot=document.getElementById("totdiv").value;
  
    for(i=0;i<tot;i++) {
		document.getElementById("rate_msg_"+i).style.display = "none";
	}
	for(i=0;i<tot;i++) {
		document.getElementById("offens_msg_"+i).style.display = "none";
		document.getElementById("share_msg_"+i).style.display = "none";
		document.getElementById("rep_msg_"+i).style.display = "none";
	}
		/*$.ajax({
            url: host+'india/messageboard/m3_common_functions.php?action=get_repost_txt&msgid='+msgid+'&callback=?',
            type: 'GET',
            dataType: 'jsonp',            
            error: function(xhr, status, error) {          
            },
            success: function(jsonp) { 
				$.each(jsonp,function(i,v){ 
					var ret_txt=decodeURI(v.msg_txt);
					ret_txt=ret_txt.replace(/\+/gi, " ");
				document.getElementById("repost_txt_"+dvid).innerHTML=decodeURIComponent(ret_txt);		
				});
            }
        });*/
	document.getElementById("repost_msg_"+dvid).innerHTML='<div class="arrow" style="margin-left:235px"></div>	<div class="tar FR"><a onClick="closeme('+dvid+');" class="m3_cls" href="javascript:void(0);"></a></div>		<div class="clearfix PB5"><div class="FL PR10"><div id="user_photo_repost_'+dvid+'"></div></div>			<div class="FL PT10 b_15"><div id="user_name_repost_'+dvid+'"></div><strong>Repost this  Message</strong></div>	</div><div class="gD_13" id="repost_txt_'+dvid+'">'+decodeURIComponent($('#msg-'+msgid).text())+'</div><div class="PT10"><a class="m3_repost MR10" onclick="update_repost('+msgid+',1);" href="javascript:void(0);"></a><a style="cursor: hand" class="bl_11" onclick="closeme('+dvid+');" href="javascript:void(0);">Cancel</a></div></div>';

	open_div=dvid;	
	document.getElementById("repost_msg_"+dvid).style.display = "block";
}
function repy_open_ajax(dvid,msgid)
{
	chkuser_photo(dvid,'rep');
	 var chk_soc_opt=1;

   var tot=document.getElementById("totdiv").value;
  
    for(i=0;i<tot;i++) {
		document.getElementById("rate_msg_"+i).style.display = "none";
	}
	for(i=0;i<tot;i++) {
		document.getElementById("offens_msg_"+i).style.display = "none";
		document.getElementById("share_msg_"+i).style.display = "none";
		document.getElementById("repost_msg_"+i).style.display = "none";
	}	
	document.getElementById("rep_msg_"+dvid).innerHTML='<div class="replyBox ML25" id="rep_msg" style="display: block;"><span class="repl_arw"></span><div class="m3_repM"><div class="clearfix PB10"><div class="FL PR10"><div id="user_photo_rep_'+dvid+'"></div></div><div class="FL b_15"><div id="user_name_rep_'+dvid+'"></div>			<div class="PT5 gD_12"  id="rep_alert_'+dvid+'"><strong>Reply to the Message</strong></div></div></div><div>	<textarea class="textarea" name="f_message_'+dvid+'" id="f_message_'+dvid+'" onclick=\'javascript:if(this.value=="Post your reply here"){this.value=""}\'	onfocus=\'javascript:if(this.value=="Post your reply here"){this.value=""}; $(this).css("height", "54px");$(".m3_replyBx").show();\' onblur=\'javascript:if(this.value=="Post your reply here"){this.value=""}\' onKeyDown="textCounter(this.form.f_message_'+dvid+',this.form.remLen,5000);" onKeyUp="textCounter(this.form.f_message_'+dvid+',this.form.remLen,5000);">Post your reply here</textarea>		</div><div class="m3_replyBx"><div id="repybx_'+dvid+'" style="display:none"></div><a class="m3_reply" href="javascript:void(0);" onclick="update_reply_msg('+msgid+','+dvid+',1);"></a></div><input type="hidden" name="exturl_'+dvid+'" id="exturl_'+dvid+'"></div></div>';

	
	open_div=dvid;	
	document.getElementById("rep_msg_"+dvid).style.display = "block";	
}
function closeme(dvid)
{	  
	 document.getElementById("rate_msg_"+dvid).style.display = "none";
	 document.getElementById("rep_msg_"+dvid).style.display = "none";
	 document.getElementById("offens_msg_"+dvid).style.display = "none";
	 document.getElementById("share_msg_"+dvid).style.display = "none";
	 document.getElementById("repost_msg_"+dvid).style.display = "none";
	
}
function offens_optionsM3(dvid,msgid,nick_name)
{
   chkuser_photo(dvid,'off');

	var chk_soc_opt=3;
    var tot=document.getElementById("totdiv").value;
	for(i=0;i<tot;i++) {
		document.getElementById("rep_msg_"+i).style.display = "none";
	}
	for(i=0;i<tot;i++) {
		document.getElementById("rate_msg_"+i).style.display = "none";
	}
	for(i=0;i<tot;i++) {
		document.getElementById("offens_msg_"+i).style.display = "none";
		document.getElementById("share_msg_"+i).style.display = "none";
		document.getElementById("repost_msg_"+i).style.display = "none";
		document.getElementById("rep_msg_"+i).style.display = "none";
	}

	document.getElementById("offens_msg_"+dvid).innerHTML='<div class="arrow" style="margin-left:225px" id="rate"></div><div class="tar FR"><a class="m3_cls" onclick="closeme('+dvid+');" href="javascript:void(0);"></a></div><div class="FL PR10"><div class="gn_12"><div id="user_photo_off_'+dvid+'" class="FL PR10"></div><div id="user_name_off_'+dvid+'"></div>				<B>Thankyou for moderating the messageboard. We appreciate your concern to keep the forum clean. We will notify <span class="bl_12"><B>'+nick_name+'</B></span> that the message has been marked offensive by you.</B></div><div><ul class="offCont"><li><input type="radio" value="1" name="ofc_reason" class="vam MR5">Personal attacks - name calling, insulting, etc - on other boarders</li>	<li><input type="radio" name="ofc_reason" value="2" class="vam MR5">Insensitive references to any race, sex, religion, caste or linguistic community</li><li><input type="radio" name="ofc_reason" value="3" class="vam MR5">Statements that are deliberately made to evoke outrage</li><li><input type="radio" name="ofc_reason" value="4" class="vam MR5">Verbal violence or threats</li><li><input type="radio" name="ofc_reason" value="5" class="vam MR5">Offensive or abusive language</li><li><input type="radio" name="ofc_reason" value="6" class="vam MR5">Blatant and mischievous misrepresentation of facts</li><li>	<input type="radio" name="ofc_reason" value="7" class="vam MR5">Spamming - obsessive repetitiveness</li>	<li><input type="radio" name="ofc_reason" value="8" class="vam MR5">Message with commercial or promotional content</li><li><input type="radio" name="ofc_reason" value="9" class="vam MR5">Malafide insinuations related to the integrity, probity and judgment of the Moneycontrol Team</li></ul><div class="MT10"><a class="m3_submit MR10" onclick="update_offenceM3('+msgid+',1);" href="javascript:void(0);"></a><a class="bl_11" onclick="closeme('+dvid+');" href="javascript:void(0);">Cancel</a></div></div></div>';
		

	open_div=dvid;
	document.getElementById("offens_msg_"+dvid).style.display = "block";	
}

function get_sharemsg_new(msid,msghead,url)
{
	var chk_soc_opt=5;
	var tot=document.getElementById("totdiv").value;
	for(i=0;i<tot;i++) {
	document.getElementById("rep_msg_"+i).style.display = "none";
	}
	for(i=0;i<tot;i++) {
		document.getElementById("rate_msg_"+i).style.display = "none";
	}
	for(i=0;i<tot;i++) {
		document.getElementById("offens_msg_"+i).style.display = "none";
		document.getElementById("share_msg_"+i).style.display = "none";
		document.getElementById("repost_msg_"+i).style.display = "none";
	}
	document.getElementById("share_msg_"+msid).style.display = "block";

	
	var share_msg_txxt='<div class="arrow" style="margin-left:180px"></div><div><div class="tar PB5"><a onClick="closeme('+msid+');" class="m3_cls" href="javascript:void(0);"></a></div>							<div style="padding-right:5px;" class="FL">	<iframe scrolling="no" frameborder="0" allowtransparency="true" style="border:none; overflow:hidden; width:200px; height:80px;" src="http://www.facebook.com/plugins/like.php?href='+escape(url)+'&amp;layout=standard&amp;show_faces=true&amp;width=200&amp;action=recommend&amp;font=arial&amp;colorscheme=light&amp;height=80"></iframe>				</div><div style="padding-left:10px;" class="FL brdrl"><iframe allowtransparency="true" frameborder="0" scrolling="no" src="http://platform.twitter.com/widgets/tweet_button.html?url='+escape(url)+'&amp;source=moneycontrol&amp;style=&count=vertical" style="width:57px; height:70px;"></iframe></div><div style="padding-left:10px;" class="FL brdrl"><script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script><g:plusone size="Tall" href="'+escape(url)+'" count="true"></g:plusone></div><div class="CL"></div></div>'
		
	$('#share_msg_'+msid).html(share_msg_txxt);

}

function rate_open_ajax_m3(dvid,msgid)
{
	var chk_soc_opt=2;
    chkuser_photo(dvid,'rate');
	var tot=document.getElementById("totdiv").value;
	for(i=0;i<tot;i++) {
		document.getElementById("rep_msg_"+i).style.display = "none";
	 }
	 for(i=0;i<tot;i++) {
		document.getElementById("offens_msg_"+i).style.display = "none";
	 }
	 for(i=0;i<tot;i++) {
		document.getElementById("rate_msg_"+i).style.display = "none";
		document.getElementById("share_msg_"+i).style.display = "none";
		document.getElementById("repost_msg_"+i).style.display = "none";
		document.getElementById("rep_msg_"+i).style.display = "none";
	 }
					
		 document.getElementById("rate_msg_"+dvid).innerHTML='<div class="arrow" style="margin-left:125px" id="rate"></div><div class="tar FR"><a onClick="closeme('+dvid+');" class="m3_cls" href="javascript:void(0);"></a></div><div class="clearfix"><div class="FL PR10">						<div id="user_photo_rate_'+dvid+'"></div></div><div class="FL PT10 b_15">								<div id="user_name_rate_'+dvid+'"></div><strong>Rate this Message</strong></div>						</div><div class="b_15 PT10 PB10"><span onclick="update_rate_m3('+msgid+',1,1);" href="javascript:void(0);" class="ystart"></span><span onclick="update_rate_m3('+msgid+',2,1);" href="javascript:void(0);" class="ystart"></span><span onclick="update_rate_m3('+msgid+',3,1);" href="javascript:void(0);" class="ystart"></span><span onclick="update_rate_m3('+msgid+',4,1);" href="javascript:void(0);" class="ystart"></span><span onclick="update_rate_m3('+msgid+',5,1);" href="javascript:void(0);" class="ystart"></span></div>';
		open_div=dvid;
	    document.getElementById("rate_msg_"+dvid).style.display = "block";
}

function update_rate_m3(msgid,rate,data)
{
	if(data=="1")
	{
		call_fun="4";
		call_param=msgid;
		call_param1=rate;
		act_div='2';
		check_login_m3('2');
	}
	else
	{
		$.ajax({
            url: host+'india/messageboard/m3_common_functions.php?action=ajax_update_rating&msg_id='+msgid+'&rating='+rate+'&callback=?',
            type: 'GET',
            dataType: 'jsonp',            
            error: function(xhr, status, error) {          
            },
            success: function(jsonp) { 				
				$.each(jsonp,function(i,v){ 
				close_login_overlay();	
				rateoff_open_ajax_m3(open_div,msgid,v.err_msg_txt);	
				});
            }
        });
	 
	}
}
function update_offenceM3(msgid,data)
{		
	var reason = $('input[name=ofc_reason]:checked').val();	
	if(data=="1")
	{
		call_fun="3";
		call_param=msgid;
		act_div='3';
		check_login_m3('2');
	}
	else
	{
		$.ajax({
            url: host+'india/messageboard/m3_common_functions.php?action=update_offensive&msg_id='+msgid+'&f_reason='+reason+'&callback=?',
            type: 'GET',
            dataType: 'jsonp',            
            success: function(jsonp) { 				
				$.each(jsonp,function(i,v){ 
				close_login_overlay();	
				rateoff_open_ajax_m3(open_div,msgid,v.err_msg_txt);	
				});
            }
        });

	}		
}
function track_add(usr,data){
	if(data=="1"){
		act_div='6';
		call_param=usr;		
		check_login_m3('2');
	}else
	{															
		$.ajax({
            url: host+'india/messageboard/ajax_mmb_tracking.php?action=mmb_tracking&userid='+usr+'&callback=?',
            type: 'GET',
            dataType: 'jsonp',            
            success: function(jsonp) { 				
				$.each(jsonp,function(i,v){ 				
				alert(v.ret_txt);	
				close_login_overlay();					
				});
            }
        });
	}
}
function sendMessagem3()
{
	if(jQuery('#m3_txtArea_txt').val()!='' && jQuery('#m3_txtArea_txt').val()!='Post your stock queries, tips and information on M3 forum')
	{	
		document.m3_mc_element.f_message.value=jQuery('#m3_txtArea_txt').val();
		document.m3_mc_element.submit();		
		jQuery('#m3_txtArea_txt').val('');
		
	}
	else{
	alert('Please input your message');
	jQuery('#m3_txtArea_txt').val('');jQuery('#m3_txtArea_txt').focus();
	return false;	
	}
}
function validate_debate()
{
	if(jQuery.trim(jQuery('#f_popmessage').val())=='' || jQuery('#f_popmessage').val()=='Tell us in few words')
	{
		alert('Please input your Message')
			jQuery('#f_popmessage').val('')
		jQuery('#f_popmessage').focus();
		return false;
	}
	else
	{
		document.m3debatebox.f_message.value=jQuery('#f_popmessage').val();
		document.m3debatebox.submit();
		
	}
	closeover__lay(1);
}

function verify_signinM3(choe)
{
	if(choe==2)
	{
		/*
		$('#loginchk2').load($.post('/msgboard/guest_login_ajaxverify.php', '', function(data) 
		{
		*/
		$.ajax({
            url: '/msgboard/guest_login_ajaxverify.php',
			type: 'POST',                      
			async: false,
            success: function(data) {
				
			if(data=='alldone')
			{
			   if(act_div=='1')
				update_reply_msg(call_param,open_div,'2');
				else if(act_div=='2')
					update_rate_m3(call_param,call_param1,'2');
				else if(act_div=='3')
					update_offenceM3(call_param,'2');				
				else if(act_div=='6')
					track_add(call_param,'2');
				else if(act_div=='7')
					update_track_topic(call_param,call_param1,'2');
				else if(act_div=='8')
					del_track_topic(call_param,call_param1,'2');
				else if(act_div=='12')
					update_repost(call_param,'2');
				else if(act_div=='41')
					closebellPost(call_param,open_div,'2');
				else if(act_div=='42')
					validateMessageM3(1,2);
			}
			}
		});
			/*
		}));
		*/
	}
	else
	{
		var f_idval="";
		var f_fwdval="";
		var remembermeval="";
		var keepsigninval="";
		if($('#f_id').val()=='')
		{
			alert("Please enter username");
			$("#f_id").focus();  
			return;
		}
		if($('#f_pwd').val()=='')
		{
			alert("Please enter password");
			$("#f_pwd").focus();  
			return;
		}
		if(document.getElementById('f_id')!=null&&document.getElementById('f_id').value!=''&&document.getElementById('f_id').value!='Username'){
			f_idval=$('#f_id').val();
			if(document.getElementById('rememberme')!=null){
				if(document.getElementById('rememberme').checked==true){
					remembermeval=$('#rememberme:checked').val()
				}
			}
			if(document.getElementById('keepsignin')!=null){
				if(document.getElementById('keepsignin').checked==true){
					keepsigninval=$('#keepsignin:checked').val()
				}
			}
			if(document.getElementById('f_pwd')!=null){
						f_fwdval=$('#f_pwd').val()
			}
		}	

		$.ajax({
            url: '/watchlist1/login_check.php',
			data:{sectionid:"M3",username:f_idval,password:encodeURIComponent(f_fwdval),saveid:remembermeval,keep_signed:keepsigninval},
			type: 'POST',                      
            success: function(jsonp) {			
				if(jsonp=='alldone')
				{
					if(act_div=='1')
					update_reply_msg(call_param,open_div,'2');
					else if(act_div=='2')
					update_rate_m3(call_param,call_param1,'2');
					else if(act_div=='3')
					update_offenceM3(call_param,'2');				
					else if(act_div=='6')
					track_add(call_param,'2');		
					else if(act_div=='7')
					update_track_topic(call_param,call_param1,'2');
					else if(act_div=='8')
					del_track_topic(call_param,call_param1,'2');
					else if(act_div=='12')
					update_repost(call_param,'2');		
					else if(act_div=='41')
					closebellPost(call_param,open_div,'2');
					else if(act_div=='42')
						validateMessageM3(1,2);

				}
				else
				{
					alert("Incorrect Username or Password.");
					$("#f_id").focus();
					return false;
				}
			}		
				});
         
        
	}	
}
function del_track_topic(topicid,catid,data)
{			
	 if(data=="1")
		{
			call_fun="3";
			call_param=topicid;
			call_param1=catid;
			act_div='8';
			check_login_m3('2');
		}
		else
		{
 
			if(readCookie('nnmc'))
				{	    
						$.ajax({
						url: host+'/india/messageboard/home/delete_track_topics.php?f_topicid='+topicid+'&f_categoryid='+catid,
						type: 'GET',
						dataType: 'jsonp',         
						success: function(jsonp) { 
							alert(jsonp);	
						}
					});
				}
         
		}
}
function update_track_topic(topicid,catid,data)
{			
		 if(data=="1")
		{
			call_fun="3";
			call_param=topicid;
			call_param1=catid;
			act_div='7';
			check_login_m3('2');
		}
		else
		{
				if(readCookie('nnmc'))
				{	    
						$.ajax({
						url: host+'/india/messageboard/home/update_track_topics.php?f_topicid='+topicid+'&f_categoryid='+catid,
						type: 'GET',
						cache:true,
						dataType: 'jsonp',         
						success: function(jsonp) { 
							alert(jsonp);	
						}
					});
				}
         
		}
}

function update_repost(msgid,data)
{	
	if(data=="1")
	{
			call_fun="4";
			call_param=msgid;
			act_div='12';
			check_login_m3('2');
	}else
	{
		$.ajax({
            url: host+'india/messageboard/m3_common_functions.php?action=update_repost&msg_id='+msgid+'&callback=?',
            type: 'GET',
            dataType: 'jsonp',            
            success: function(jsonp) { 				
				$.each(jsonp,function(i,v){ 
				close_login_overlay();
				closeme(open_div);
				rateoff_open_ajax_m3(open_div,msgid,v.ret_txt);	
				});
            }
        });


	}
}
function update_reply_msg(msgid,dvid,data)
{
	m3_msg_rply_call_param = msgid;
	m3_msg_rply_open_div = dvid;
	m3_msg_rply_data = data;
	var reply_msg=$('#f_message_'+dvid).val();
	if(reply_msg=="" || reply_msg=='Post your reply here' || reply_msg=='Reply to this message')
	{
		alert("Please input your message");
		$("#f_message_"+dvid).focus();  
		return;
	}
	else if(reply_msg.length < 2)
	{
		alert ("Message needs to be more than 1 characters");
		$("#f_message_"+dvid).focus();  
		return false;
	}
	else if(reply_msg.length > 5000)
	{
		alert("Max 5000 characters allowed");
		$("#f_message_"+dvid).focus();  
		return false;
	}
	else
	{		
		var char1h=new Array('<','>','fuck','aswhole','co.uk','madarchod','bhenchod','gandu','chutiya','chutyie','bahenchod','randi','rascal','bastard','basturd','bastered','assole','asshole','fuck','sucker','fucker','chodu','lavde','makichut','makachut','mchod',' m chod','m.chod','raandi','raand','raandii',' randii',' laude','b.a.s.t.a.r.d.',' b a s t a r d',' chuteyas',' chuteya',' chut',' c h u t',' harame',' harami',' madar chod','bhen chod','benched','bhosdivaale','fodrichya',' bosrichya','ayzavadya','badwa',' bedwa','bedve','gaandu',' gandki','gaand',' chudu','chodu','Raand','Rand','chutiye','madar','chod','bhosda','choot','lode','haramzade','arsehole','chtye','gand','randi','madarjat','chut','MADARCHOD','BHADVE','chudane','chu-??-t','maderchod','fuc*ur','chudwa','Bhenchod','Haramkhoro','Madarchodo','teri ma ki chot','gand marvao','chhutttiya','bhossssaaadaa...','bhossssaaadaa','lunddd','matherfuker','bhen daaa pioo','madarchod','bhenchod','gandu','chutiya','chutyie','bahenchod','randi','rascal','bastard','basturd','bastered','assole','asshole','fuck','sucker','fucker','chodu','lavde','makichut','makachut','basterd','choot','moth er chod','mother`s cunt','madarchodo','madar chod','bastards','Chootwa','Burwa','Bur');

		var str=reply_msg;
		str=str.toLowerCase();
		
		for(i=0;i<=char1h.length;++i)
		{
			if(str.indexOf(char1h[i],0)!=-1)
			{
			alert("Word "+char1h[i]+" not allowed");
			return false;
			}					
		}
	}  
	
	var extr_lnk=$('#exturl_'+dvid).val();
	if(extr_lnk!="")
	{
		var extrchr=new Array('<','>','&lt;','&gt;');
		
			for(i=0;i<=extrchr.length;++i)
			{
				if(extr_lnk.indexOf(extrchr[i],0)!=-1)
				{
				alert("Word "+extrchr[i]+" not allowed");
				return false;
				}					
			}
	}

	if(data=="1")
	{
		window.location = 'http://mmb.moneycontrol.com/india/messageboard/msgpost_before.php?r_message='+escape(reply_msg)+'&r_rply_id='+msgid+'&extr_url='+extr_lnk;
		return false;
		/*
		call_fun="2";
		call_param=msgid;
		open_div=dvid;
		act_div='1';
		$.ajax({
            url: host+'india/messageboard/m3_common_functions.php?action=update_action&callback=?',
            type: 'GET',
            dataType: 'jsonp',     
			success: function(jsonp) { 	
				
				$.each(jsonp,function(i,v){ 
				if(v.lgn_flg==0)
					{
					document.getElementById("repybx_"+dvid).innerHTML="<img src='http://img.moneycontrol.co.in/images/markets_new_loader.gif' valing=center align=center>";
						$.ajax({
						url: host+'india/messageboard/msgpost_before.php?action=update_action_json&msg='+escape(reply_msg)+'&r_rply_id='+msgid+'&extr_url='+extr_lnk+'&callback=?',
						type: 'GET',
						dataType: 'jsonp',     
						success: function(jsonp) { 	
						$.each(jsonp,function(i,v){ 
						
							document.replyfrm.rmsgid.value = v.ret_txt;
							
							check_login_m3('2');
							return false;
						});
						}
						});
					}
					else
					{
						check_login_m3('2');
						return false;
					}
					
				});
			 }
			});

		

	*/}else{
		var mtype = '';
		document.replyfrm.r_rply_id.value=msgid;
		document.replyfrm.r_message.value=reply_msg;
		document.replyfrm.m_type.value=mtype;
		document.replyfrm.url_link.value=extr_lnk;
		close_login_overlay();
		$('#f_message_'+dvid).val('');
		document.replyfrm.submit();
		
		
		return true;
		
	}
	return false;
}
function textCounter(field, countfield, maxlimit) 
{
	if(field.value.length>200)
		document.getElementById("msg_alert").style.display='block';
    else
       document.getElementById("msg_alert").style.display='none';
	
}
function check_login_m3(btn)
{
	/*console.log('m3');
	console.log('act_div = '+act_div);
	console.log('call_param = '+call_param);
	console.log('open_div = '+open_div);*/
	$.ajax({
            url: host+'india/messageboard/m3_common_functions.php?action=update_action&callback=?',
            type: 'GET',
            dataType: 'jsonp',     
			success: function(jsonp) { 				
				$.each(jsonp,function(i,v){ 
				
					if(v.lgn_flg==0)
					{
						jQuery("form#signinfrm input#isMmbChatBox").val(3);
						showLoginPop('login');
						$('html, body').animate({ scrollTop: 0 });
					}
					else
					{
						if(act_div=='1')
						update_reply_msg(call_param,open_div,'2');
						else if(act_div=='2')
						update_rate_m3(call_param,call_param1,'2');
						else if(act_div=='3')
						update_offenceM3(call_param,'2');			
						else if(act_div=='6')
						track_add(call_param,'2');		
						else if(act_div=='7')
						update_track_topic(call_param,call_param1,'2');
						else if(act_div=='8')
						del_track_topic(call_param,call_param1,'2');
						else if(act_div=='12')
						update_repost(call_param,'2');
						
					}
				});
            }
        });
}
function rateoff_open_ajax_m3(dvid,msgid,qstr)
{	
	chkuser_photo(dvid,'rep');
	var chk_soc_opt=1;
	var tot=document.getElementById("totdiv").value; 
   
	for(i=0;i<tot;i++) {
		document.getElementById("rep_msg_"+i).style.display = "none";
		document.getElementById("rate_msg_"+i).style.display = "none";
		document.getElementById("offens_msg_"+i).style.display = "none";
		document.getElementById("share_msg_"+i).style.display = "none";
		document.getElementById("repost_msg_"+i).style.display = "none";
	}
	document.getElementById("rep_msg_"+dvid).innerHTML='<div class="replyBox ML25" id="rep_msg" style="display: block;"><span class="repl_arw"></span><div class="m3_repM"><div class="clearfix PB10"><div class="FL PR10"><div id="user_photo_rep_'+dvid+'"></div></div><div class="FL b_15"><div id="user_name_rep_'+dvid+'"></div>			<div class="PT5 gD_12"  id="rep_alert_'+dvid+'"><strong>'+qstr+'</strong></div></div></div><div>	<textarea class="textarea" name="f_message_'+dvid+'" id="f_message_'+dvid+'" onclick=\'javascript:if(this.value=="Post your reply here"){this.value=""}\'	onfocus=\'javascript:if(this.value=="Post your reply here"){this.value=""}; $(this).css("height", "54px");$(".m3_replyBx").show();\' onblur=\'javascript:if(this.value=="Post your reply here"){this.value=""}\' onKeyDown="textCounter(this.form.f_message_'+dvid+',this.form.remLen,5000);" onKeyUp="textCounter(this.form.f_message_'+dvid+',this.form.remLen,5000);">Post your reply here</textarea>		</div><div class="m3_replyBx"><div id="repybx_'+dvid+'" style="display:none"></div><a class="m3_reply" href="javascript:void(0);" onclick="update_reply_msg('+msgid+','+dvid+',1);"></a></div><input type="hidden" name="exturl_'+dvid+'" id="exturl_'+dvid+'"></div></div>';
	
	open_div=dvid;
	document.getElementById("rep_msg_"+dvid).style.display = "block";	
}
 function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return false;
}

function over__lay(msgid){	
var popMargTop = ($('#opini_bx').height()) / 2;
var popMargLeft = ($('#opini_bx').width()) / 2;
$('#opini_bx').css({ 'margin-top' : -popMargTop, 'margin-left' : -popMargLeft });
jQuery('#pop_txt').html(jQuery('#st_'+msgid).html());
jQuery('#f_popmessage').val('Tell us in few words');
document.m3debatebox.f_topicid.value=jQuery('#msg_id'+msgid).attr('topicid');
document.m3debatebox.f_topic.value=jQuery('#msg_id'+msgid).attr('topic');	
document.m3debatebox.f_topicname.value=jQuery('#msg_id'+msgid).attr('topic');
document.m3debatebox.f_rply_id.value=msgid;
document.m3debatebox.f_categoryid.value=jQuery('#msg_id'+msgid).attr('category');
document.m3debatebox.f_heading.value=jQuery('#msg_id'+msgid).attr('topic');
document.m3debatebox.f_thread_id.value=jQuery('#msg_id'+msgid).attr('thread_id');
$("#lightbox_cb, #opini_bx").fadeIn(300);
$('#lightbox_cb').remove();
$('body').append('<div id="lightbox_cb"></div>'); 
$('#lightbox_cb').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); 
}
function closeover__lay(){ 
$("#lightbox_cb, #opini_bx").fadeOut(300);
}
function login_overlay(){
var popMargTop = ($('#back__Inner2').height()) / 2;
var popMargLeft = ($('#back__Inner2').width()) / 2;
$('#back__Inner2').css({ 'margin-top' : -popMargTop, 'margin-left' : -popMargLeft });
$("#lightbox_cb, #back__Inner2").fadeIn(300);
$('#lightbox_cb').remove();
$('body').append('<div id="lightbox_cb"></div>'); 
$('#lightbox_cb').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); 
}
function close_login_overlay()
{		
	$("#lightbox_cb,#back__Inner2").fadeOut(300);

}

