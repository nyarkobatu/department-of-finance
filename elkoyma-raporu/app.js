$('.ui.radio.checkbox').checkbox();

$('#submit').click(function () {
    let output = `
<div class="row mb-3">
    <div class="col-12">
        <span><p><br></p><div class="content"><div style="text-align: center;"><b style="font-size: 15px;">LOS SANTOS COUNTY SHERIFF'S DEPARTMENT</b></div>
<span style="font-size:125%;line-height:116%"><div style="text-align: center; font-size: 15px;">EL KOYMA RAPORU</div></span>
<br>
<table style="border:1px solid #d0dade;background:white"><tbody><tr>
<td style="border: 1px solid rgb(208, 218, 222); background: rgb(255, 255, 255); vertical-align: top; text-align: left; width: 3%; padding: 1px;"><font color="#000000"><span style="font-size: 85%; line-height: 116%; font-size: 85%; line-height: 116%;"></span></font><div style="padding-left: 2px;"><span style="line-height: 116%;"><span style="color: black; font-size: 85%;">PERSONEL BİLGİSİ</span><br><font color="#000000"><span style="font-size: 11.05px;">${$('input[name="isimsoyisim"]').val()}</span></font><br></span></div></td>
<td style="border: 1px solid rgb(208, 218, 222); background: rgb(255, 255, 255); vertical-align: top; text-align: left; width: 1%; padding: 1px;"><font color="#000000"><span style="font-size: 85%; line-height: 116%; font-size: 85%; line-height: 116%;"></span></font><div style="padding-left: 2px;"><span style="line-height: 116%;"><span style="color: black; font-size: 85%;">ÇALIŞAN NO.</span><br><font color="#000000"><span style="font-size: 11.05px;">${$('input[name="rozetkodu"]').val()}</font><span style="color: black; font-size: 85%; line-height: 116%;"><br></span></div></td>
<td style="border: 1px solid rgb(208, 218, 222); background: rgb(255, 255, 255); vertical-align: top; text-align: left; width: 1%; padding: 1px;"><font color="#000000"><span style="font-size: 85%; line-height: 116%; font-size: 85%; line-height: 116%;"></span></font><div style="padding-left: 2px;"><span style="color: black; font-size: 85%; line-height: 116%;">FACILITY</span><br><span style="line-height: 116%;"><font color="#000000"><span style="font-size: 11.05px;">DVS</span></font><br>
</span></div></td>
<td style="border: 1px solid rgb(208, 218, 222); background: rgb(255, 255, 255); vertical-align: top; text-align: left; width: 2%; padding: 1px;"><font color="#000000"><span style="font-size: 85%; line-height: 116%; font-size: 85%; line-height: 116%;"></span></font><div style="padding-left: 2px;"><span style="color: black; font-size: 85%; line-height: 116%;">ÇAĞRI KODU</span><br><span style="line-height: 116%;"><font color="#000000"><span style="font-size: 11.05px;">${$('input[name="cagrikodu"]').val()}</span></font><br>
</span></div></td>
<td style="border: 1px solid rgb(208, 218, 222); background: rgb(255, 255, 255); vertical-align: top; text-align: left; width: 1%; padding: 1px;"><font color="#000000"><span style="font-size: 85%; line-height: 116%; font-size: 85%; line-height: 116%;"></span></font><div style="padding-left: 2px;"><span style="color: black; font-size: 85%; line-height: 116%;">TARİH</span><br><span style="line-height: 116%;"><font color="#000000">${$('input[name="tarih"]').val()}</font><br>
</span></div></td></tr>
</tbody></table>
<table style="border:1px solid #d0dade;background:white"><tbody><tr>
<td style="border: 1px solid rgb(208, 218, 222); background: rgb(255, 255, 255); vertical-align: top; text-align: left; width: 1%; padding: 1px;"><font color="#000000"><span style="font-size: 85%; line-height: 116%; font-size: 85%; line-height: 116%;"></span></font><div style="padding-left: 2px;"><span style="color: black; font-size: 85%; line-height: 116%;">İHLAL TARİHİ</span><br><span style="line-height: 116%;"><font color="#000000">${$('input[name="ihlaltarihi"]').val()}</font><br>
</span></div></td>
<td style="border: 1px solid rgb(208, 218, 222); background: rgb(255, 255, 255); vertical-align: top; text-align: left; width: 1%; padding: 1px;"><font color="#000000"><span style="font-size: 85%; line-height: 116%; font-size: 85%; line-height: 116%;"></span></font><div style="padding-left: 2px;"><span style="color: black; font-size: 85%; line-height: 116%;">İHLAL KODLARI</span><br><span style="line-height: 116%;"><font color="#000000">${$('input[name="ihlalkodlari"]').val()}</font><br>
</span></div></td></tr>
</tbody></table>
<table style="border:1px solid #d0dade;background:white"><tbody><tr>
<td style="border: 1px solid rgb(208, 218, 222); background: rgb(255, 255, 255); vertical-align: top; text-align: left; width: 4%; padding: 1px;"><font color="#000000"><span style="font-size: 85%; line-height: 116%; font-size: 85%; line-height: 116%;"></span></font><div style="padding-left: 2px;"><span style="color: black; font-size: 85%; line-height: 116%;"><strong>ARAÇ BİLGİSİ</strong></span><br></div></td></tr></tbody></table>
<table style="border:1px solid #d0dade;background:white"><tbody><tr>
<td style="border: 1px solid rgb(208, 218, 222); background: rgb(255, 255, 255); vertical-align: top; text-align: left; width: 3%; padding: 1px;"><font color="#000000"><span style="font-size: 85%; line-height: 116%; font-size: 85%; line-height: 116%;"></span></font><div style="padding-left: 2px;"><span style="line-height: 116%;"><span style="color: black; font-size: 85%;">MARKA ve MODEL</span><br><font color="#000000">${$('input[name="markamodel"]').val()}</font><br></span></div></td>
<td style="border: 1px solid rgb(208, 218, 222); background: rgb(255, 255, 255); vertical-align: top; text-align: left; width: 1%; padding: 1px;"><font color="#000000"><span style="font-size: 85%; line-height: 116%; font-size: 85%; line-height: 116%;"></span></font><div style="padding-left: 2px;"><span style="color: black; font-size: 85%; line-height: 116%;">RENK</span><br><span style="line-height: 116%;"><font color="#000000">${$('input[name="renk"]').val()}</font><br>
</span></div></td>
<td style="border: 1px solid rgb(208, 218, 222); background: rgb(255, 255, 255); vertical-align: top; text-align: left; width: 1%; padding: 1px;"><font color="#000000"><span style="font-size: 85%; line-height: 116%; font-size: 85%; line-height: 116%;"></span></font><div style="padding-left: 2px;"><span style="color: black; font-size: 85%; line-height: 116%;">PLAKA</span><br><span style="line-height: 116%;"><font color="#000000"><span style="font-size: 11.05px;">${$('input[name="plaka"]').val()}</span></font><br>
</span></div></td></tr></tbody></table>
<table style="border:1px solid #d0dade;background:white"><tbody><tr>
<td style="border: 1px solid rgb(208, 218, 222); background: rgb(255, 255, 255); vertical-align: top; text-align: left; width: 4%; padding: 1px;"><font color="#000000"><span style="font-size: 85%; line-height: 116%; font-size: 85%; line-height: 116%;"></span></font><div style="padding-left: 2px;"><span style="color: black; font-size: 85%; line-height: 116%;"><strong>DETAYLAR</strong></span><br><font color="#000000">${$('input[name="detayliaciklama"]').val()}</font><br></div></td></tr></tbody></table>
</div></span>

    `;

    // Modal veya textarea ile HTML kodunu göster
    let htmlPreview = `
        <textarea style="width: 100%; height: 400px;">${output}</textarea>
        <p>Bu kodu kopyalayıp HTML olarak kullanabilirsiniz.</p>
    `;

    // Modal veya başka bir alanı doldur
    $('#output').html(htmlPreview);
});
