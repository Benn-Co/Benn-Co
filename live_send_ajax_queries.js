

function send_ajax_verification_code(){
    
    
    
    // get inputs
	var account = new Object();
	account.verify_code = $('#verify_code').val();
	
        $.ajax({
		url: "accountservlet",
		type: 'POST',
		dataType: 'json',
		data: JSON.stringify(account),
		contentType: 'application/json',
		mimeType: 'application/json',
		
		success: function (data) {
        	$("tr:has(td)").remove();

        	$.each(data, function (index, account) {
            	
                
                $("#span_verify_code").html(account.span_verify_code);
                
                
                }); 
       
                },
                
		error:function(data,status,er) {
			alert("error: "+data+" status: "+status+" er:"+er);
		}
	});
    
    
    
             // document.getElementById("span_verify_code").innerHTML = "successful verification";

    
    
}


function send_ajax_sign_in(){
    
    
    
    
    // get inputs
	var account = new Object();
	account.login_email = $('#login_email').val();
	account.login_password = $('#login_password').val();
	
        $.ajax({
		url: "accountservlet",
		type: 'POST',
		dataType: 'json',
		data: JSON.stringify(account),
		contentType: 'application/json',
		mimeType: 'application/json',
		
		success: function (data) {
        	$("tr:has(td)").remove();

        	$.each(data, function (index, account) {
            	
                
                $("#span_login").html(account.span_login);
                
                
                }); 
       
                },
                
		error:function(data,status,er) {
			alert("error: "+data+" status: "+status+" er:"+er);
		}
	});
    
    
    
   // document.getElementById("span_login").innerHTML = "Login success..";
}


function send_ajax_forgot_password(){
    
    
    
    
    // get inputs
	var account = new Object();
	account.forgot_login_password_email = $('#forgot_login_password_email').val();
	account.login_password_forgot_login_password = $('#login_password_forgot_login_password').val();
	
        $.ajax({
		url: "accountservlet",
		type: 'POST',
		dataType: 'json',
		data: JSON.stringify(account),
		contentType: 'application/json',
		mimeType: 'application/json',
		
		success: function (data) {
        	$("tr:has(td)").remove();

        	$.each(data, function (index, account) {
            	
                
                $("#span_forgot_login_password_sign_in").html(account.span_forgot_login_password_sign_in);
                
                
                }); 
       
                },
                
		error:function(data,status,er) {
			alert("error: "+data+" status: "+status+" er:"+er);
		}
	});
    
    
    
   // document.getElementById("span_forgot_login_password_sign_in").innerHTML = "success..";
    
}


function send_ajax_sign_up(){
   
    // get inputs
	var account = new Object();
	account.register_first_name = $('#register_first_name').val();
	account.register_last_name = $('#register_last_name').val();
	account.register_email = $('#register_email').val();
	account.register_password = $('#register_password').val();
        
        $.ajax({
		url: "accountservlet",
		type: 'POST',
		dataType: 'json',
		data: JSON.stringify(account),
		contentType: 'application/json',
		mimeType: 'application/json',
		
		success: function (data) {
        	$("tr:has(td)").remove();

        	$.each(data, function (index, account) {
            	
                
                $("#span_sign_up").html(account.span_sign_up);
                
                
                }); 
       
                },
                
		error:function(data,status,er) {
			alert("error: "+data+" status: "+status+" er:"+er);
		}
	});
    
   // document.getElementById("span_sign_up").innerHTML = "success..";
    
}