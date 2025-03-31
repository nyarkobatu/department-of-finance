$('.ui.radio.checkbox')

  .checkbox()

;



$('#submit').click(function () {



    let output = `[center][size=125]LOS SANTOS COUNTY SHERIFF'S DEPARTMENT

[b]İFADE RAPORU [/b][/size][/center]

[color=#FFFFFF]___[/color]

[transtable=Arial][tr]

[tdwidth=1,#d0dade,#ffffff,top,left,3,1][size=85]İFADEYİ ALAN 

${$('input[name="isimsoyisim"]').val()}[/size][/tdwidth]

[tdwidth=1,#d0dade,#ffffff,top,left,1,1][size=85]ÇALIŞAN NO.

${$('input[name="rozetnumarasi"]').val()}[/size][/tdwidth]

[tdwidth=1,#d0dade,#ffffff,top,left,1,1][size=85]FACILITY

DVS[/size][/tdwidth]

[tdwidth=1,#d0dade,#ffffff,top,left,2,1][size=85]ÇAĞRI KODU

${$('input[name="cagrikodu"]').val()}[/size][/tdwidth]

[tdwidth=1,#d0dade,#ffffff,top,left,1,1][size=85]TARİH

${$('input[name="tarih"]').val()}[/size][/tdwidth]

[tdwidth=1,#d0dade,#ffffff,top,left,1,1][size=85]RAPOR NO.

${$('input[name="raporno"]').val()}[/size][/tdwidth][/transtable]

[transtable=Arial][tr]

[tdwidth=1,#d0dade,#ffffff,top,left,10,1][size=85]OLAY TÜRÜ[/size]

${$('input[name="field1"]:checked').val()}[/transtable]

[transtable=Arial][tr]

[tdwidth=1,#d0dade,#ffffff,top,left,3,1][size=85]İFADEYİ VERENİN ADI VE SOYADI

${$('input[name="ifadeisimsoyisim"]').val()}[/size][/tdwidth]

[tdwidth=1,#d0dade,#ffffff,top,left,2,1][size=85]İFADEYİ VERENİN CİNSİYETİ[/size]

[size=85]${$('input[name="field2"]:checked').val()}[/tdwidth]

[tdwidth=1,#d0dade,#ffffff,top,left,2,1][size=85]İFADE ALINAN KONUM

${$('input[name="ifadekonum"]').val()}[/size][/tdwidth]

[tdwidth=1,#d0dade,#ffffff,top,left,1,1][size=85]İFADE TARİHİ

${$('input[name="ifadetarih"]').val()}[/size][/tdwidth][/transtable]

[transtable=Arial][tr]

[tdwidth=1,#d0dade,#ffffff,top,left,2,1][size=85]İLETİŞİM BİLGİSİ

${$('input[name="ifadeiletisim"]').val()}[/size][/tdwidth]

[tdwidth=1,#d0dade,#ffffff,top,left,2,1][size=85]İKAMETGAH ADRESİ

${$('input[name="ifadeikametgah"]').val()}[/size][/tdwidth][/transtable]

[transtable=Arial][tr]

[tdwidth=1,#d0dade,#ffffff,top,left,2,1][size=85]DETAYLAR

${$('textarea[name="ifadedetaylari"]').val()}[/size][/tdwidth][/transtable]`



    $('#output').val(output);

});



$('#copy').click(function() {

    

  var copyText = document.getElementById('output');



  /* Select the text field */

  copyText.select();

  copyText.setSelectionRange(0, 99999); /* For mobile devices */



   /* Copy the text inside the text field */

  navigator.clipboard.writeText(copyText.value);



});