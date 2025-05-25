$(document).ready(function() {
    // Initialize dropdown
    $('.ui.dropdown').dropdown();
    
    // Initialize checkbox
    $('.ui.radio.checkbox').checkbox();
  
    // İhbarname verildi mi radio butonları için event listener
    $('input[name="ihbarname_verildi"]').change(function() {
        if ($(this).val() === 'evet') {
            $('#ihbarname_detay').show();
            $('#denetim_detay').hide();
        } else {
            $('#ihbarname_detay').hide();
            $('#denetim_detay').show();
        }
    });
  
    // Function to convert BBcode to HTML
    function bbcodeToHtml(bbcode) {
        let html = bbcode;
        
        // Basic BBcode replacements
        html = html.replace(/\[b\](.*?)\[\/b\]/g, '<strong>$1</strong>');
        html = html.replace(/\[i\](.*?)\[\/i\]/g, '<em>$1</em>');
        html = html.replace(/\[u\](.*?)\[\/u\]/g, '<u>$1</u>');
        html = html.replace(/\[size=(\d+)\](.*?)\[\/size\]/g, '<span style="font-size:$1%">$2</span>');
        html = html.replace(/\[color=#([0-9a-fA-F]{6})\](.*?)\[\/color\]/g, '<span style="color:#$1">$2</span>');
        html = html.replace(/\[url=(.*?)\](.*?)\[\/url\]/g, '<a href="$1">$2</a>');
        html = html.replace(/\[img\](.*?)\[\/img\]/g, '<img src="$1" style="max-width:100%;">');
        html = html.replace(/\[center\](.*?)\[\/center\]/g, '<div style="text-align:center;">$1</div>');
        html = html.replace(/\[right\](.*?)\[\/right\]/g, '<div style="text-align:right;">$1</div>');
        html = html.replace(/\[left\](.*?)\[\/left\]/g, '<div style="text-align:left;">$1</div>');
        html = html.replace(/\[justify\](.*?)\[\/justify\]/g, '<div style="text-align:justify;">$1</div>');
        html = html.replace(/\[br\]\/?\[\/br\]/g, '<br>');
        html = html.replace(/\[hr\]\/?\[\/hr\]/g, '<hr>');
        html = html.replace(/\[indent\](.*?)\[\/indent\]/g, '<div style="margin-left:20px;">$1</div>');
        html = html.replace(/\[list\](.*?)\[\/list\]/gs, '<ul>$1</ul>');
        html = html.replace(/\[\*\](.*?)(?=\[\*\]|\[\/list\])/gs, '<li>$1</li>');
        
        return html;
    }
  
    // Function to generate document
    function generateDocument() {
        // Get selected violations
        let selectedViolations = [];
        $('select[name="ihlalTurleri"] option:selected').each(function() {
            selectedViolations.push($(this).text());
        });
        let violationsText = selectedViolations.join(', ');
  
        // İhbarname bilgilerini al
        let ihbarnameBilgisi = '';
        if ($('input[name="ihbarname_verildi"]:checked').val() === 'evet') {
            ihbarnameBilgisi = `\n\nBu işletmeye daha önce ${$('input[name="ihbarname_tarih"]').val()} tarihinde "${$('input[name="ihbarname_isletme_adi"]').val()}" adına uyum ihbarnamesi verilmiştir.`;
        }
        else {ihbarnameBilgisi = `\n\n Bu işletme, ${$('input[name="denetim_tarih"]').val()} ve ${$('input[name="denetim_saat"]').val()} saatinde gerçekleştirilen denetim doğrultusunda aşağıda belirtilen hususlar konusunda işletme tüzüğü standartlarına uygun hizmet sağlayamamıştır:`}
  
        // Generate BBcode
        let bbcode = `[center][img]https://i.imgur.com/fLoBoAF.png[/img][/center][right]
  [hr][/hr]
  [indent][color=#5597D0][u][size=80] CITY OF LOS SANTOS
  DEPARTMENT OF FINANCE
  CARCER WAY 1, ROCKFORD HILLS, LOS SANTOS, SA[/size][/u][/color][/indent][/right]
  
  ${$('input[name="tarih"]').val()}
  
  ${$('input[name="isletmeadi"]').val()}
  ${$('input[name="isletmeadres"]').val()}
  
  [b]CEZAİ İŞLEM UYGULAMASI[/b]
  ${ihbarnameBilgisi}
  [br][/br][justify]Bu mektup, Department of Finance'in yukarıda belirtilen tarihte yukarıda atıfta bulunulan işletmenin [b]${violationsText}[/b] hususlarını ihlal ettiğini tespit ettiği resmi Uyum İhbarnamesi olarak hizmet edecektir.
  
  Department of Finance bu vesileyle size düzeltici önlemler almanızı emretmektedir. Yukarıda açıklanan ihlal, bu bildirimin tarihinden itibaren yedi (7) gün içinde ele alınmalıdır. İhlalin düzeltilmesi üzerine, bundan sonra da uyumu sürdürmeniz gerekmektedir. Bu mektupta belirtilen süre içinde uymamanız durumunda, City, İşletme Tüzüğü uyarınca aşağıdaki yaptırımları uygulayabilir:
  [br][/br][list][*] B.C.06.§4(a) uyarınca mali para cezası uygulayabilir.
  [br][/br][*]B.C.06.§4(b) uyarınca işletme ruhsat(lar)ınızı askıya alabilir.
  [br][/br][*]B.C.06.§4(c) uyarınca işletme ruhsat(lar)ınızı iptal edebilir.
  [br][/br][*]B.C.06.§4(d) uyarınca yürütmeyi durdurma emri çıkartabilir.
  [br][/br][*]B.C.06.§4(e) uyarınca işletmeyi işletme kayıt defterinden kaldırabilir.[/list]
  
  
  Bu bildirimin tarihinden itibaren yedi (7) gün içinde yazılı bir itiraz talebinde bulunarak bu yaptırım(lar)a itiraz etmek için İşletme Uyuşmazlıkları Çözüm Kurulu nezdinde idari duruşma talep edebilirsiniz. Söz konusu talep, adınızı, adresinizi, telefon numaranızı, bu bildirimin referansını ve bu bildirimde atıfta bulunulan işletmenin kişisel bilgilerini içermelidir. 
  
  Departman, *yaptırıma uyumun son tarihine* kadar sizden yukarıda belirtilen yaptırımlara tam olarak uyduğunuza ve gerekli düzeltici önlemleri aldığınıza dair olumlu bir yanıt almazsa, Belediye maddi tazminat, ihtiyati tedbir ve potansiyel olarak cezai suçlamalar da dahil olmak üzere mevcut tüm yasal yollara başvuracaktır.

  Saygılarımla,[/justify]
  
  
  [img]https://i.imgur.com/5P8RCkg.png[/img]
  
  [color=#5597D0][size=105][b]Oliver Calhoun[/b][/size]
  [size=85]Director of Finance
  E-mail: [url=https://gov-tr.gta.world/ucp.php?i=pm&mode=compose&u=4331]o.calhoun@lsgov.us[/url][/size][/color]
  
  [br][/br]
  [hr][/hr]`;
  
        return bbcode;
    }
  
    // Submit button click handler
    $('#submit').click(function() {
        let bbcode = generateDocument();
        $('#output').val(bbcode);
        
        // Also update the hidden document div
        let html = bbcodeToHtml(bbcode);
        $('#document').html(html);
    });
  
    // Copy button click handler
    $('#copy').click(function() {
        var copyText = document.getElementById('output');
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
    });
  
    // Download PNG button click handler
    $('#downloadPng').click(function() {
      // First ensure the document is generated
      if (!$('#output').val()) {
          $('#submit').click();
      }
  
      // Get form values
      const tarih = $('input[name="tarih"]').val();
      const isletmeadi = $('input[name="isletmeadi"]').val();
      const isletmeadres = $('input[name="isletmeadres"]').val();
      
      // Get selected violations
      let selectedViolations = [];
      $('select[name="ihlalTurleri"] option:selected').each(function() {
          selectedViolations.push($(this).text());
      });
      let violationsText = selectedViolations.join(', ');
  
      // Get ihbarname info if exists
      let ihbarnameBilgisi = '';
      if ($('input[name="ihbarname_verildi"]:checked').val() === 'evet') {
          ihbarnameBilgisi = `<br><br>Bu işletmeye daha önce ${$('input[name="ihbarname_tarih"]').val()} tarihinde "${$('input[name="ihbarname_isletme_adi"]').val()}" adına uyum ihbarnamesi verilmiştir.`;
      }
  
      // Update the template
      $('#png-date').text(tarih);
      $('#png-business').html(`${isletmeadi}<br>${isletmeadres}${ihbarnameBilgisi}`);
      
      // Build the content
      let content = `
          Bu mektup, Department of Finance'in yukarıda belirtilen tarihte yukarıda atıfta bulunulan işletmenin <strong>${violationsText}</strong> hususlarını ihlal ettiğini tespit ettiği resmi Uyum İhbarnamesi olarak hizmet edecektir.
          <br><br>
          Department of Finance bu vesileyle size düzeltici önlemler almanızı emretmektedir. Yukarıda açıklanan ihlal, bu bildirimin tarihinden itibaren yedi (7) gün içinde ele alınmalıdır. İhlalin düzeltilmesi üzerine, bundan sonra da uyumu sürdürmeniz gerekmektedir. Bu mektupta belirtilen süre içinde uymamanız durumunda, City, İşletme Tüzüğü uyarınca aşağıdaki yaptırımları uygulayabilir:
          <br><br>
          <ul style="margin-left: 20px; padding-left: 20px;">
              <li style="margin-bottom: 8px;">B.C.06.§4(a) uyarınca mali para cezası uygulayabilir.</li>
              <li style="margin-bottom: 8px;">B.C.06.§4(b) uyarınca işletme ruhsat(lar)ınızı askıya alabilir.</li>
              <li style="margin-bottom: 8px;">B.C.06.§4(c) uyarınca işletme ruhsat(lar)ınızı iptal edebilir.</li>
              <li style="margin-bottom: 8px;">B.C.06.§4(d) uyarınca yürütmeyi durdurma emri çıkartabilir.</li>
              <li style="margin-bottom: 8px;">B.C.06.§4(e) uyarınca işletmeyi işletme kayıt defterinden kaldırabilir.</li>
          </ul>
          <br>
          Bu bildirimin tarihinden itibaren yedi (7) gün içinde yazılı bir itiraz talebinde bulunarak bu yaptırım(lar)a itiraz etmek için İşletme Uyuşmazlıkları Çözüm Kurulu nezdinde idari duruşma talep edebilirsiniz. Söz konusu talep, adınızı, adresinizi, telefon numaranızı, bu bildirimin referansını ve bu bildirimde atıfta bulunulan işletmenin kişisel bilgilerini içermelidir.
          <br><br>
          Departman, *yaptırıma uyumun son tarihine* kadar sizden yukarıda belirtilen yaptırımlara tam olarak uyduğunuza ve gerekli düzeltici önlemleri aldığınıza dair olumlu bir yanıt almazsa, Belediye maddi tazminat, ihtiyati tedbir ve potansiyel olarak cezai suçlamalar da dahil olmak üzere mevcut tüm yasal yollara başvuracaktır.
          <br><br>
          Saygılarımla,
      `;
      
      $('#png-content').html(content);
  
      // Make the template visible temporarily
      const template = $('#png-template').clone();
      template.css({
          position: 'fixed',
          top: '0',
          left: '0',
          display: 'block',
          zIndex: 99999
      }).appendTo('body');
  
      // Capture and download
      html2canvas(template[0], {
          scale: 2,
          logging: false,
          useCORS: true,
          allowTaint: true,
          scrollX: 0,
          scrollY: 0,
          windowWidth: template[0].scrollWidth,
          windowHeight: template[0].scrollHeight
      }).then(canvas => {
          const link = document.createElement('a');
          link.download = 'uyum-ihbarnamesi.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
          template.remove();
      }).catch(err => {
          console.error('Error generating PNG:', err);
          template.remove();
      });
    });
  
    // PNG Preview button click handler
    $('#previewPng').click(function() {
      // First ensure the document is generated
      if (!$('#output').val()) {
          $('#submit').click();
      }
  
      // Get form values
      const tarih = $('input[name="tarih"]').val();
      const isletmeadi = $('input[name="isletmeadi"]').val();
      const isletmeadres = $('input[name="isletmeadres"]').val();
      
      // Get selected violations
      let selectedViolations = [];
      $('select[name="ihlalTurleri"] option:selected').each(function() {
          selectedViolations.push($(this).text());
      });
      let violationsText = selectedViolations.join(', ');
  
      // Get ihbarname info if exists
      let ihbarnameBilgisi = '';
      if ($('input[name="ihbarname_verildi"]:checked').val() === 'evet') {
          ihbarnameBilgisi = `<br><br>Bu işletmeye daha önce ${$('input[name="ihbarname_tarih"]').val()} tarihinde "${$('input[name="ihbarname_isletme_adi"]').val()}" adına uyum ihbarnamesi verilmiştir.`;
      }
  
      // Update the template
      $('#png-date').text(tarih);
      $('#png-business').html(`${isletmeadi}<br>${isletmeadres}${ihbarnameBilgisi}`);
      
      // Build the content
      let content = `
          Bu mektup, Department of Finance'in yukarıda belirtilen tarihte yukarıda atıfta bulunulan işletmenin <strong>${violationsText}</strong> hususlarını ihlal ettiğini tespit ettiği resmi Uyum İhbarnamesi olarak hizmet edecektir.
          <br><br>
          Department of Finance bu vesileyle size düzeltici önlemler almanızı emretmektedir. Yukarıda açıklanan ihlal, bu bildirimin tarihinden itibaren yedi (7) gün içinde ele alınmalıdır. İhlalin düzeltilmesi üzerine, bundan sonra da uyumu sürdürmeniz gerekmektedir. Bu mektupta belirtilen süre içinde uymamanız durumunda, City, İşletme Tüzüğü uyarınca aşağıdaki yaptırımları uygulayabilir:
          <br><br>
          <ul style="margin-left: 20px; padding-left: 20px;">
              <li style="margin-bottom: 8px;">B.C.06.§4(a) uyarınca mali para cezası uygulayabilir.</li>
              <li style="margin-bottom: 8px;">B.C.06.§4(b) uyarınca işletme ruhsat(lar)ınızı askıya alabilir.</li>
              <li style="margin-bottom: 8px;">B.C.06.§4(c) uyarınca işletme ruhsat(lar)ınızı iptal edebilir.</li>
              <li style="margin-bottom: 8px;">B.C.06.§4(d) uyarınca yürütmeyi durdurma emri çıkartabilir.</li>
              <li style="margin-bottom: 8px;">B.C.06.§4(e) uyarınca işletmeyi işletme kayıt defterinden kaldırabilir.</li>
          </ul>
          <br>
          Bu bildirimin tarihinden itibaren yedi (7) gün içinde yazılı bir itiraz talebinde bulunarak bu yaptırım(lar)a itiraz etmek için İşletme Uyuşmazlıkları Çözüm Kurulu nezdinde idari duruşma talep edebilirsiniz. Söz konusu talep, adınızı, adresinizi, telefon numaranızı, bu bildirimin referansını ve bu bildirimde atıfta bulunulan işletmenin kişisel bilgilerini içermelidir.
          <br><br>
          Departman, *yaptırıma uyumun son tarihine* kadar sizden yukarıda belirtilen yaptırımlara tam olarak uyduğunuza ve gerekli düzeltici önlemleri aldığınıza dair olumlu bir yanıt almazsa, Belediye maddi tazminat, ihtiyati tedbir ve potansiyel olarak cezai suçlamalar da dahil olmak üzere mevcut tüm yasal yollara başvuracaktır.
          <br><br>
          Saygılarımla,
      `;
      
      $('#png-content').html(content);
  
      // Make the template visible temporarily
      const template = $('#png-template').clone();
      template.css({
          position: 'fixed',
          top: '0',
          left: '0',
          display: 'block',
          zIndex: 99999
      }).appendTo('body');
  
      // Capture and show preview
      html2canvas(template[0], {
          scale: 1,
          logging: false,
          useCORS: true,
          allowTaint: true,
          scrollX: 0,
          scrollY: 0,
          windowWidth: template[0].scrollWidth,
          windowHeight: template[0].scrollHeight
      }).then(canvas => {
          $('#png-preview').attr('src', canvas.toDataURL('image/png'));
          $('#preview-container').show();
          template.remove();
          
          // Scroll to preview
          $('html, body').animate({
              scrollTop: $('#preview-container').offset().top
          }, 500);
      }).catch(err => {
          console.error('Error generating preview:', err);
          template.remove();
      });
    });
  });