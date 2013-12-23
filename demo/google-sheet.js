$(document).ready(function(){
		$("#submit").click(function(){
				if($("#link").val() == '')
				{
					alert("Please Enter A Link");
				}
				else 
				{
						var str = $("#link").val();
						var n = str.search("key=");
						var key = str.slice(n+4,n+48);
			
						var newstr = "https://spreadsheets.google.com/feeds/list/"+key+"/od6/public/values?alt=json";
					
						$.getJSON("https://spreadsheets.google.com/feeds/list/0AvUcQZ_hmVSPdDhsc0I3b2JTR0NnV1BmcjJVS2VmUWc/od6/public/values?alt=json",function(data){
							alert("hi");
						});
				}
		});
});
//https://spreadsheets.google.com/feeds/list/0AvUcQZ_hmVSPdDhsc0I3b2JTR0NnV1BmcjJVS2VmUWc/od6/public/values?alt=json
//https://spreadsheets.google.com/feeds/list/