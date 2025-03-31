$('.ui.radio.checkbox')
  .checkbox()
;


$('#submit').click(function () {

    let output = `[center][img]https://i.imgur.com/fLoBoAF.png[/img][/center][right]
[hr][/hr]
[indent][color=#5597D0][u][size=80] CITY OF LOS SANTOS
DEPARTMENT OF FINANCE
CARCER WAY 1, ROCKFORD HILLS, LOS SANTOS, SA[/size][/u][/color][/indent][/right]

[list=none][*][b]1.1 İşletme Adı: [/b] [b]${$('input[name="isletmeadi"]').val()}[/b][hr][/hr]
[*][b]1.2 İşletme Adresi: [/b]${$('input[name="isletmeadres"]').val()}[hr][/hr]
[b]1.3 İşletme İrtibat Kişisi: [/b] ${$('input[name="irtibat"]').val()}[hr][/hr]
[b]1.4 İşletme İletişim Numarası: [/b] ${$('input[name="isletmenumara"]').val()}[hr][/hr][/list]

[br][/br][color=#535a6c][size=150][b]II. BİLDİRİ DETAYLARI[/b][/size][/color][hr][/hr]

[list=none][*] [b]2.1 İletişim Şekli: [/b] ${$('input[name="isekli"]:checked').val()}[hr][/hr]
[b]2.2 İhlal Tarihi ve Saati: [/b] ${$('input[name="ihlaltarih"]').val()}[hr][/hr]
[b]2.3 Olayın Tanımı: [/b] ${$('input[name="olaytanimi"]').val()}[hr][/hr]
[b]2.4 İlgili Memur: [/b] ${$('input[name="ilgilimemur"]').val()}[hr][/hr][/list]

[br][/br][color=#535a6c][size=150][b]III. EK BİLGİLER[/b][/size][/color][hr][/hr][list=none]
[b]3.1 İşletmeyi bilgilendirdiğinize dair kanıt:[/b] ${$('input[name="kanit"]').val()}[hr][/hr][/list]`

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