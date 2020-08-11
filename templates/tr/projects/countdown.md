template: templates/tr/projects/projectTemplate.ptl
title: Countdown
credit: Lisa Yan
translation: Ceren Kocaoğullar

Ders Notları: [Grafikler Referansı]({{pathToRoot}}tr/resources/graphics.html)

Dosya: `countdown.py`

Bu bir bonus programıdır! Biraz zorlayıcı olması için hazırlandı. Bu programı tamamlamak, final projenizi yazmanıza yardımcı olabilir.

Saniyede bir ondan geriye doğru sayan bir zamanlayıcı gösteren ve zamanlayıcı sıfıra ulaştığında bir mesaj görüntüleyen bir grafik programı yazın.

# Görevler

## Kurulum

Bu zamanlayıcıyı programlamak için, hem grafiksel metni canvas'ta (metin objesi) depolamak için bir değişkene hem de kalan saniye sayısını depolayan bir sayaç değişkenine ihtiyacımız olacak (bunu azaltabilir ve grafik metnimizi güncellemek için kullanabiliriz).

Başlangıç canvas'ınız şunun gibi görünmelidir:

<center>
    <img style="width:500px" src="{{pathToRoot}}img/projects/countdown/countdown10.png">    
</center>

## Geri Sayımı Kodla

Her saniye hem mantıksal hem de görsel geri sayım temsillerini güncelleyen bir animasyon döngüsü yazın. Her seferinde aynı etiketin metnini `set_text()` fonksiyonunu kullanarak güncellemelisiniz.

## Sola Sıfır Ekle

Bu bir zamanlayıcı olduğundan, sayılarımızı sola sıfır ekleyerek aynı uzunluğa getirmek istiyoruz. Aşağıdakileri görüntülemek için geri sayım sayacınızın görsel sunumunu nasıl güncellersiniz?

<center>
    <img style="width:500px" src="{{pathToRoot}}img/projects/countdown/countdown03.png">    
</center>
            
## Bitiriş Mesajı

Zamanlayıcı sıfıra geldiğinde bir mesaj görüntüleyin. Herhangi bir şey olabilir!

<center>
    <img style="width:500px" src="{{pathToRoot}}img/projects/countdown/timesUp.png">    
</center>

## Bonus: Dakikaları Ekle

Şimdi geri sayım ekranınıza dakika ekleyin, böylece zamanlayıcı 1:00, 0:59, 0:58 vb. göstersin. Kalan sürenizi saniye olarak kaydeden _bir tek değişken_ tutmaya çalışın. Dakikaları ve saniyeleri ayrı ayrı takip etmekten kaçının. Ancak sayacı görüntülerken değişkeninizi dakikalara ve saniyelere ayırın. Mantığınızı açık ve anlaşılır hale getirmek için fonksiyonlar tanımlamayı düşünün. Hızlı bir şekilde hata ayıklamak için duraklatma süresini kısaltarak zamanlayıcınızı hızlandırın. Ve "mod" işlevini unutmayın! Örnek: `5 % 2`.
