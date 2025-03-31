$('.ui.radio.checkbox')
  .checkbox()
;

$('#submit').click(function () {

    let output = `[center][img]https://i.imgur.com/G9QefZk.png[/img][/center][br][/br][divbox=transparent][center][b][size=250][color=#535a6c]İŞLETME DOSYASI[/color][/size][/b]
[/divbox]
[br][/br][color=#535a6c][size=150][b]I. İŞLETME DETAYLARI[/b][/size][/color][hr][/hr]

[list=none][*][b]1.1 Durum: [/b] [b]${$('input[name="field2"]:checked').val()}[/b][hr][/hr]
[*][b]1.2 İşletme Hesap ID: [/b]${$('input[name="isletmehesapid"]').val()}[hr][/hr]
[b]1.3 Kayıt Tarihi: [/b] ${$('input[name="kayittarihi"]').val()}[hr][/hr]
[b]1.4 Önceki İşletme Adları: [/b] ${$('input[name="exisletmeadi"]').val()}[hr][/hr]
[b]1.5 Önceki İşletme Adresleri: [/b] ${$('input[name="exisletmeadres"]').val()}[hr][/hr]
[b]1.6 Sahiplik Durumu: [/b] ${$('input[name="field3"]:checked').val()}[hr][/hr]
[b]1.7 ((Önceki İşletme Sahibi İsimleri)): [/b] ${$('input[name="exisletmesahibi"]').val()}[hr][/hr]
[b]1.8 İşletme Başvurusu Linki: [/b] [url]${$('input[name="basvurulink"]').val()}[/url][hr][/hr]
[b]1.9 İlgili Finans Memuru: [/b] ${$('input[name="finansmemuru"]').val()}[hr][/hr][/list]

[br][/br][color=#535a6c][size=150][b]II. İŞLETME BİLGİLERİ[/b][/size][/color][hr][/hr]

[list=none][*] [b]2.1 İşletme Adı: [/b] ${$('input[name="isletmeadi"]').val()}[hr][/hr]
[b]2.2 İşletme Takma Adı/Adları: [/b] ${$('input[name="isletmenickname"]').val()}[hr][/hr]
[b]2.3 İşletme Sahibi: [/b] ${$('input[name="isletmesahibi"]').val()}[hr][/hr]
[b]2.4 İşletme Sahibi Tel: [/b] ${$('input[name="telefon"]').val()}[hr][/hr]
[b]2.5 İşletme Adresi: [/b] ${$('input[name="isletmeadres"]').val()}[hr][/hr]
[b]2.6 Faaliyet Alanları: [/b] ${$('input[name="faaliyet"]').val()}[hr][/hr]
[b]2.7 İşletme Özeti: [/b] ${$('textarea[name="isletmeozeti"]').val()}[hr][/hr][/list]

[br][/br][color=#535a6c][size=150][b]III. EK BİLGİLER[/b][/size][/color][hr][/hr][list=none]
[b]3.1 Eklemek istediğiniz ek bir şey bulunuyor mu?[/b]
${$('textarea[name="ekbilgi"]').val()}[hr][/hr][/list]

[br][/br][color=#535a6c][size=150][b]IV. Yaptırımlar[/b][/size][/color][hr][/hr]
 [list=none][table]
[tr]
	[th]Yaptırımın Tipi[/th]
	[th]Yaptırım Tarihi[/th]
	[th]İşletme Tüzüğü İhlalleri[/th]
        [th]Uygulanan Cezalar[/th]
        [th]Yaptırım Kayıt Dosyası Bağlantısı[/th]
[/tr]
[tr]
	[td] [/td]
	[td] [/td]
	[td] [/td]
        [td] [/td]
        [td][url]test[/url][/td]
[/tr]
[tr]
	[td][/td]
	[td][/td]
	[td][/td]
        [td][/td]
        [td][url][/url][/td]
[/tr]
[/table][/list]
[br][/br][color=#535a6c][size=150][b]V. Lisanslar[/b][/size][/color][hr][/hr]
 [list=none][table]
[tr]
	[th]Lisansın Türü[/th]
	[th]Verilme Tarihi[/th]
	[th]Geçerlilik Tarihi[/th]
        [th]Durum[/th]
        [th]Lisans Başvuru Bağlantısı[/th]
[/tr]
[tr]
	[td] [/td]
	[td] [/td]
	[td] [/td]
        [td] [/td]
        [td][url]test[/url][/td]
[/tr]
[tr]
	[td][/td]
	[td][/td]
	[td][/td]
        [td][/td]
        [td][url][/url][/td]
[/tr]
[/table][/list]
[br][/br][color=#535a6c][size=150][b]VI. Ödemeler[/b][/size][/color][hr][/hr]
 [list=none][table]
[tr]
	[th]Ödeme Tarihi[/th]
	[th]Ödeme Tutarı[/th]
	[th]Sonraki Ödeme Tarihi[/th]
        [th]Durum[/th]
        [th]Ödeme Dosyası Bağlantısı[/th]
[/tr]
[tr]
	[td] [/td]
	[td] [/td]
	[td] [/td]
        [td] [/td]
        [td][url]test[/url][/td]
[/tr]
[tr]
	[td][/td]
	[td][/td]
	[td][/td]
        [td][/td]
        [td][url][/url][/td]
[/tr]
[/table][/list]`

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