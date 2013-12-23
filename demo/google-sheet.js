$(document).ready(function(){
		$("#submit").click(function(event){
			event.preventDefault();
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
					
						$.getJSON(newstr,function(data){
							var c =0;
						for(var i=0; i<data.feed.entry.length; i++)
						{ 			c=0;
								$("tr:eq("+(i+1)+") td:eq("+(c++)+")").text(data.feed.entry[i].gsx$store.$t);
								$("tr:eq("+(i+1)+") td:eq("+(c++)+")").text(data.feed.entry[i].gsx$product.$t);
								$("tr:eq("+(i+1)+") td:eq("+(c++)+")").text(data.feed.entry[i].gsx$season.$t);
								$("tr:eq("+(i+1)+") td:eq("+(c++)+")").text(data.feed.entry[i].gsx$sales.$t);

									
						}
							
						});
				}
		});
});
//https://spreadsheets.google.com/feeds/list/0AvUcQZ_hmVSPdDhsc0I3b2JTR0NnV1BmcjJVS2VmUWc/od6/public/values?alt=json
//https://spreadsheets.google.com/feeds/list/