# Ödeme Formu - React ile Geliştirildi

Bu proje, React kütüphanesi ve Vite geliştirme aracı kullanılarak oluşturulmuş bir ödeme formudur. Amacı, kullanıcıdan kredi kartı bilgilerini alarak temel form işlevselliğini ve React'in `useState` hook'unu uygulamaktır. Tasarım, sağlanan görsel referansa birebir uygun olacak şekilde CSS ile stillendirilmiştir.

## 🛠️ Kullanılan Teknolojiler

- **React:** Kullanıcı arayüzü geliştirmek için kullanılan JavaScript kütüphanesi.
- **Vite:** Hızlı ve modern bir web geliştirme aracı.
- **JSX:** React bileşenlerini yazmak için kullanılan JavaScript uzantısı.
- **CSS:** Formun stilini ve düzenini sağlamak için kullanılan stil dili.

## ✨ Özellikler

- **Kart Üzerindeki İsim:** Kullanıcının adını girdiği metin alanı.
- **Kart Numarası:** Kredi kartı numarasının girildiği metin alanı.
- **Ay:** Kredi kartının son kullanma ayının seçildiği dropdown menü (1-12 arası seçenekler).
- **Yıl:** Kredi kartının son kullanma yılının seçildiği dropdown menü (mevcut yıldan itibaren 10 yıl ileriye kadar seçenekler).
- **Güvenlik Kodu (CVV):** Kredi kartının güvenlik kodunun girildiği metin alanı.
- **Form Yönetimi:** Tüm form girdileri `useState` hook'ları ile yönetilmektedir.
- **Form Gönderimi:** "Şimdi Öde" butonuna tıklandığında, girilen tüm bilgiler bir `alert()` mesajı ile görüntülenir ve sayfa yenilenmez.
- **Görsel Uyum:** Formun tasarımı, sağlanan görsel referansa olabildiğince yakın bir şekilde CSS ile oluşturulmuştur.

## 🚀 Başlatma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu klonlayın:**

    ```bash
    git clone [GitHub depo linkiniz]
    cd odeme-formu
    ```

2.  **Bağımlılıkları yükleyin:**

    ```bash
    npm install
    ```

3.  **Geliştirme sunucusunu başlatın:**

    ```bash
    npm run dev
    ```

    Uygulama genellikle `http://localhost:5173` adresinde çalışacaktır.

## 📄 Teslimat

Bu projenin teslimatı, yukarıdaki adımlarla oluşturulan GitHub repositorisinin linkinin paylaşılmasıyla yapılacaktır.

## ✅ Değerlendirme Kriterleri

- Görseldeki tasarıma birebir uygunluk.
- Formun belirtilen işlevleri doğru şekilde yerine getirmesi.
- `useState` hook'unun doğru ve etkili kullanımı.
- Kodun okunabilirliği ve düzeni.
- GitHub kullanımı ve bilgilendirici bir `README.md` dosyasının bulunması.

İyi çalışmalar!
