document.getElementById('certificateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const dateInput = document.getElementById('date').value;
    const hID = document.getElementById('hID').value;

    // Tarihi "12 Ocak 2025" formatına dönüştür
    const date = formatDate(dateInput);

    const canvas = document.getElementById('certificateCanvas');
    const ctx = canvas.getContext('2d');

    // Sertifika görselini yükle
    const image = new Image();
    image.src = 'sertifika.png'; // Sertifika görselinin yolu
    image.onload = function() {
        // Görseli canvas'a çiz (1000x814 boyutunda)
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Ad Soyad (Calibri Regular)
        ctx.font = '78px "Calibri", sans-serif'; // Font boyutunu ayarlayın
        ctx.fillStyle = '#231f20'; // Metin rengi
        ctx.fillText(name, 920, 770); // x, y koordinatlarını ayarlayın

        // Tarih (Calibri Light)
        ctx.font = '30px "Calibri", sans-serif'; // Font boyutunu artırın
        ctx.fillStyle = '#231f20'; // Metin rengi
        ctx.fillText(date, 1045, 1059); // x, y koordinatlarını ayarlayın


        // Hesap ID (Calibri Light)
        ctx.font = '30px "Calibri", sans-serif'; // Font boyutunu artırın
        ctx.fillStyle = '#231f20'; // Metin rengi
        ctx.fillText(hID, 1425, 997); // x, y koordinatlarını ayarlayın

        // Sertifika konteynerini ve indirme butonunu göster
        document.querySelector('.certificate-container').style.display = 'block';

        // İndirme butonuna tıklanınca dosya adını özelleştir
        document.getElementById('downloadButton').onclick = function() {
            // Boşlukları ve özel karakterleri temizle
            const cleanName = name
                .replace(/\s+/g, '-') // Boşlukları tire ile değiştir
                .replace(/[^a-zA-Z0-9-]/g, ''); // Özel karakterleri kaldır

            const fileName = `${cleanName}-Sertifika.png`; // Dosya adını oluştur
            const link = document.createElement('a');
            link.download = fileName; // Dosya adını özelleştir
            link.href = canvas.toDataURL('image/png');
            link.click();
        };
    };
});

// Tarihi "12 Ocak 2025" formatına dönüştürme fonksiyonu
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('tr-TR', options); // Türkçe format
}