
//var dataURL = "https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=BreLKhDeByruiWpSqCRrifsFes0iJ01P397SWoEP0b8WhmiZIh83Pjv3rQcY";
//var dataURL = "https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=Y25jr1qopqpRiw1Pnrh7UbTNHrArsN5w6hMWMjNSPn0kbZArsIztxGe1f7Cc";
var dataURL;// = "https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=kY534ZUOm0ThakHrPi9RYxYQUnNObFyQg12OYoyhhMmzUtYIoU5bPmBYPWoA";
//sendAjax();
var w;

function startWorker() {
 
                    if(typeof(Worker) !== "undefined") {
                        if(typeof(w) === "undefined") {
                            w = new Worker("real_time_data.js");
                        }
                        w.onmessage = function(event) {

                            document.getElementById("result").innerHTML = event.data;

                        };
                    } else {
                        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
                    }                    
                }
function stopWorker() {
                        w.terminate();
                        w = undefined;
                }






function sendAjax() {
 
	// get inputs
	var article = new Object();
	article.title = $('#title').val();
	article.symbol = $('#symbol').val();
	article.name = $('#name').val();
	article.currency = $('#currency').val();
	article.price = $('#price').val();
	article.price_open = $('#price_open').val();
	article.day_high = $('#day_high').val();
	article.day_low = $('#day_low').val();
	article.week_high = $('#week_high').val();
	article.week_low = $('#week_low').val();
	article.day_change = $('#day_change').val();
	article.change_pct = $('#change_pct').val();
	article.close_yesterday = $('#close_yesterday').val();
	article.market_cap = $('#market_cap').val();
	article.volume = $('#volume').val();
	article.volume_avg = $('#volume_avg').val();
	article.shares = $('#shares').val();
	article.stock_exchange_long = $('#stock_exchange_long').val();
	article.stock_exchange_short = $('#stock_exchange_short').val();
	article.timezone = $('#timezone').val();
	article.timezone_name = $('#timezone_name').val();
	article.gmt_offset = $('#gmt_offset').val();
	article.last_trade_time = $('#last_trade_time').val();
	article.pe = $('#pe').val();
	article.eps = $('#eps').val();
	article.options = $('#options').val();
	article.ai_options = $('#ai_options').val();
	article.url = $('#url').val();
	
	$.ajax({
		url: "jsonservlet",
		type: 'POST',
		dataType: 'json',
		data: JSON.stringify(article),
		contentType: 'application/json',
		mimeType: 'application/json',
		
		success: function (data) {
        	$("tr:has(td)").remove();

        	$.each(data, function (index, article) {
            	
                
                
                $("#added-articles").append($('<tr/>')
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.title+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.symbol+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.name+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.currency+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.price+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.price_open+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.day_high+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.day_low+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.week_high+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.week_low+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.day_change+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.change_pct+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.close_yesterday+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.market_cap+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.volume+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.volume_avg+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.shares+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.stock_exchange_long+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.stock_exchange_short+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.timezone+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.timezone_name+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.gmt_offset+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.last_trade_time+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.pe+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.eps+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.given_value+"</a>"))
                		.append($('<td/>').html("<a href='"+article.url+"'>"+article.predicted_value+"</a>"))
                		
                );
            
               $("#span_check_ai_option").html(article.predicted_value);     

                
            }); 
        },
		error:function(data,status,er) {
			alert("error: "+data+" status: "+status+" er:"+er);
		}
	});
}


function load_URL_data(){
    
    ajax_get(dataURL, function(JSONdata) {
 
    var symbols_requested = "<h2>" + JSONdata["symbols_requested"] + "</h2>";    
    document.getElementById("symbols_requested").innerHTML = symbols_requested;
    
    var symbols_returned = "<h2>" + JSONdata["symbols_returned"] + "</h2>";    
    document.getElementById("symbols_returned").innerHTML = symbols_returned;
    
    
       for (var i=0; i < JSONdata["data"].length; i++) {
           
           var symbol = JSONdata["data"][i]["symbol"];
           document.getElementById("symbol").innerHTML = symbol;
           
           var name = JSONdata["data"][i]["name"];
           document.getElementById("name").innerHTML = name;
           
           var currency = JSONdata["data"][i]["currency"];
           document.getElementById("currency").innerHTML = currency;
           
           var price = JSONdata["data"][i]["price"];
           document.getElementById("price").innerHTML = price;
           
           var price_open = JSONdata["data"][i]["price_open"];
           document.getElementById("price_open").innerHTML = price_open;
           
           var day_high = JSONdata["data"][i]["day_high"];
           document.getElementById("day_high").innerHTML = day_high;
           
           var day_low = JSONdata["data"][i]["day_low"];
           document.getElementById("day_low").innerHTML = day_low;
           
           var week_high = JSONdata["data"][i]["52_week_high"];
           document.getElementById("week_high").innerHTML = week_high;
           
           var week_low = JSONdata["data"][i]["52_week_low"];
           document.getElementById("week_low").innerHTML = week_low;
           
           var day_change = JSONdata["data"][i]["day_change"];
           document.getElementById("day_change").innerHTML = day_change;
           
           var change_pct = JSONdata["data"][i]["change_pct"];
           document.getElementById("change_pct").innerHTML = change_pct;
           
           var close_yesterday = JSONdata["data"][i]["close_yesterday"];
           document.getElementById("close_yesterday").innerHTML = close_yesterday;
           
           var market_cap = JSONdata["data"][i]["market_cap"];
           document.getElementById("market_cap").innerHTML = market_cap;
           
           var volume = JSONdata["data"][i]["volume"];
           document.getElementById("volume").innerHTML = volume;
           
           var volume_avg = JSONdata["data"][i]["volume_avg"];
           document.getElementById("volume_avg").innerHTML = volume_avg;
           
           var shares = JSONdata["data"][i]["shares"];
           document.getElementById("shares").innerHTML = shares;
           
           var stock_exchange_long = JSONdata["data"][i]["stock_exchange_long"];
           document.getElementById("stock_exchange_long").innerHTML = stock_exchange_long;
           
           var stock_exchange_short = JSONdata["data"][i]["stock_exchange_short"];
           document.getElementById("stock_exchange_short").innerHTML = stock_exchange_short;
           
           var timezone = JSONdata["data"][i]["timezone"];
           document.getElementById("timezone").innerHTML = timezone;
           
           var timezone_name = JSONdata["data"][i]["timezone_name"];
           document.getElementById("timezone_name").innerHTML = timezone_name;
           
           var gmt_offset = JSONdata["data"][i]["gmt_offset"];
           document.getElementById("gmt_offset").innerHTML = gmt_offset;
          
           var last_trade_time = JSONdata["data"][i]["last_trade_time"];
           document.getElementById("last_trade_time").innerHTML = last_trade_time;
           
           var pe = JSONdata["data"][i]["pe"];
           document.getElementById("pe").innerHTML = pe;
           
           var eps = JSONdata["data"][i]["eps"];
           document.getElementById("eps").innerHTML = eps;
           
       }
    
});

    
}

var real_time_data;
real_time_data ='{"data": ['+
           '{"symbol": "SNAP"},'+
           '{"name": "Snap Inc."},'+
           '{"currency": "USD"},'+
           '{"price": "19.05"},'+
           '{"price_open": "19.71"},'+
           '{"day_high": "19.76"},'+
           '{"day_low": "18.84"},'+
           '{"week_high": "19.76"},'+
           '{"week_low": "6.20"},'+
           '{"day_change": "-0.20"},'+
           '{"change_pct": "-1.04"},'+
           '{"close_yesterday": "19.25"},'+
           '{"market_cap": "26669428736"},'+
           '{"volume": "32717002"},'+
           '{"volume_avg": "27873528"},'+
           '{"shares": "1138349952"},'+
           '{"stock_exchange_long": "New York Stock Exchange"},'+
           '{"stock_exchange_short": "NYSE"},'+
           '{"timezone": "EST"},'+
           '{"timezone_name": "America/New_York"},'+
           '{"gmt_offset": "-18000"},'+
           '{"last_trade_time": "2020-01-24 16:03:40"},'+
           '{"pe": "N/A"},'+
           '{"eps": "-0.72"},'+
           '{"options": "sell"},'+
           '{"url": "url"},'+
           '{"ai_options": "sell"}]}';

function symbol() {
var symbol = document.getElementById("symbol");
obj = JSON.parse(real_time_data);
symbol.innerHTML = obj.data[0].symbol;
document.getElementById("symbol").value = obj.data[0].symbol;
}

function name() {
var name = document.getElementById("name");
obj = JSON.parse(real_time_data);
name.innerHTML = obj.data[1].name;
document.getElementById("name").value = obj.data[1].name;
}
function currency() {
var currency = document.getElementById("currency");
obj = JSON.parse(real_time_data);
currency.innerHTML = obj.data[2].currency;
document.getElementById("currency").value = obj.data[2].currency;
}
function price() {
var price = document.getElementById("price");
obj = JSON.parse(real_time_data);
price.innerHTML = obj.data[3].price;
document.getElementById("price").value = obj.data[3].price;
}
function price_open() {
var price_open = document.getElementById("price_open");
obj = JSON.parse(real_time_data);
price_open.innerHTML = obj.data[4].price_open;
document.getElementById("price_open").value = obj.data[4].price_open;
}
function day_high() {
var day_high = document.getElementById("day_high");
obj = JSON.parse(real_time_data);
day_high.innerHTML = obj.data[5].day_high;
document.getElementById("day_high").value = obj.data[5].day_high;
}
function day_low() {
var day_low = document.getElementById("day_low");
obj = JSON.parse(real_time_data);
day_low.innerHTML = obj.data[6].day_low;
document.getElementById("day_low").value = obj.data[6].day_low;
}
function week_high() {
var week_high = document.getElementById("week_high");
obj = JSON.parse(real_time_data);
week_high.innerHTML = obj.data[7].week_high;
document.getElementById("week_high").value = obj.data[7].week_high;
}
function week_low() {
var week_low = document.getElementById("week_low");
obj = JSON.parse(real_time_data);
week_low.innerHTML = obj.data[8].week_low;
document.getElementById("week_low").value = obj.data[8].week_low;
}
function day_change() {
var day_change = document.getElementById("day_change");
obj = JSON.parse(real_time_data);
day_change.innerHTML = obj.data[9].day_change;
document.getElementById("day_change").value = obj.data[9].day_change;
}
function change_pct() {
var change_pct = document.getElementById("change_pct");
obj = JSON.parse(real_time_data);
change_pct.innerHTML = obj.data[10].change_pct;
document.getElementById("change_pct").value = obj.data[10].change_pct;
}
function close_yesterday() {
var close_yesterday = document.getElementById("close_yesterday");
obj = JSON.parse(real_time_data);
close_yesterday.innerHTML = obj.data[11].close_yesterday;
document.getElementById("close_yesterday").value = obj.data[11].close_yesterday;
}
function market_cap() {
var market_cap = document.getElementById("market_cap");
obj = JSON.parse(real_time_data);
market_cap.innerHTML = obj.data[12].market_cap;
document.getElementById("market_cap").value = obj.data[12].market_cap;
}
function volume() {
var volume = document.getElementById("volume");
obj = JSON.parse(real_time_data);
volume.innerHTML = obj.data[13].volume;
document.getElementById("volume").value = obj.data[13].volume;
}
function volume_avg() {
var volume_avg = document.getElementById("volume_avg");
obj = JSON.parse(real_time_data);
volume_avg.innerHTML = obj.data[14].volume_avg;
document.getElementById("volume_avg").value = obj.data[14].volume_avg;
}
function shares() {
var shares = document.getElementById("shares");
obj = JSON.parse(real_time_data);
shares.innerHTML = obj.data[15].shares;
document.getElementById("shares").value = obj.data[15].shares;
}
function stock_exchange_long() {
var stock_exchange_long = document.getElementById("stock_exchange_long");
obj = JSON.parse(real_time_data);
stock_exchange_long.innerHTML = obj.data[16].stock_exchange_long;
document.getElementById("stock_exchange_long").value = obj.data[16].stock_exchange_long;
}
function stock_exchange_short() {
var stock_exchange_short = document.getElementById("stock_exchange_short");
obj = JSON.parse(real_time_data);
stock_exchange_short.innerHTML = obj.data[17].stock_exchange_short;
document.getElementById("stock_exchange_short").value = obj.data[17].stock_exchange_short;
}
function timezone() {
var timezone = document.getElementById("timezone");
obj = JSON.parse(real_time_data);
timezone.innerHTML = obj.data[18].timezone;
document.getElementById("timezone").value = obj.data[18].timezone;
}
function timezone_name() {
var timezone_name = document.getElementById("timezone_name");
obj = JSON.parse(real_time_data);
timezone_name.innerHTML = obj.data[19].timezone_name;
document.getElementById("timezone_name").value = obj.data[19].timezone_name;
}
function gmt_offset() {
var gmt_offset = document.getElementById("gmt_offset");
obj = JSON.parse(real_time_data);
gmt_offset.innerHTML = obj.data[20].gmt_offset;
document.getElementById("gmt_offset").value = obj.data[20].gmt_offset;
}
function last_trade_time() {
var last_trade_time = document.getElementById("last_trade_time");
obj = JSON.parse(real_time_data);
last_trade_time.innerHTML = obj.data[21].last_trade_time;
document.getElementById("last_trade_time").value = obj.data[21].last_trade_time;
}
function pe() {
var pe = document.getElementById("pe");
obj = JSON.parse(real_time_data);
pe.innerHTML = obj.data[22].pe;
document.getElementById("pe").value = obj.data[22].pe;
}
function eps() {
var eps = document.getElementById("eps");
obj = JSON.parse(real_time_data);
eps.innerHTML = obj.data[23].eps;
document.getElementById("eps").value = obj.data[23].eps;
}


function options() {
var options = document.getElementById("options");
obj = JSON.parse(real_time_data);
options.innerHTML = obj.data[24].options;
document.getElementById("options").value = obj.data[24].options;
}


function url() {
var url = document.getElementById("url");
obj = JSON.parse(real_time_data);
url.innerHTML = obj.data[25].url;
document.getElementById("url").value = obj.data[25].url;
}


function ai_options() {
var ai_options = document.getElementById("ai_options");
obj = JSON.parse(real_time_data);
ai_options.innerHTML = obj.data[26].ai_options;
document.getElementById("ai_options").value = obj.data[26].ai_options;
}






function load_real_time_data(){
    symbol();
    name();
    currency();
    price();
    price_open();
    day_high();
    day_low();
    week_high();
    week_low();
    day_change();
    change_pct();
    close_yesterday();
    market_cap();
    volume();
    volume_avg();
    shares();
    stock_exchange_long();
    stock_exchange_short();
    timezone();
    timezone_name();
    gmt_offset();
    last_trade_time();
    pe();
    eps();
    options();
    url();
    ai_options();
       
    
    
    
}
      
