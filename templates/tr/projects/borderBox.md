template: templates/tr/projects/projectTemplate.ptl
title: Border Box
credit: Lisa Yan
translation: Ceren Kocaoğullar

Ders Notları: [Graphikler Referansı]({{pathToRoot}}tr/resources/graphics.html)

Dosya: `border_karel.py` ve `border_box.py`

Bu bir bonus programıdır! Biraz zorlayıcı olması için hazırlandı. Bu programı tamamlamak, final projenizi yazmanıza yardımcı olabilir.

Bu projenin nihai amacı, bir kutuyu canvas'ın çevresinde saat yönünün tersine hareket ettiren bir grafik programı yazmaktır. Ancak size fonksiyonlarla ilgili daha fazla pratik vermek ve Karel'in çalışma şeklinin bir kısmını uygulamanıza izin vermek için, bu bonus bir Karel programıyla başlar ve onu çalışan bir grafik programına dönüştürür.

# Tekrar Hoş Geldin Karel!

Dosya: `border_karel.py`

Python versiyonuna başlamadan önce programın bir Karel versiyonu yazalım. Spesifik olarak, Karel'ın dünya sınırı boyunca saat yönünün tersine hareket etmesini sağlayan `border_karel.py` programını kodlayın. Dikkat edilmesi gereken bir şey, Karel'in bunu sonsuza kadar yapmasını istememizdir, bu nedenle bir `while True` döngüsü doğru yaklaşım gibi görünüyor - ancak Karel'da `while True` kullanamayız! Bu durumda, bunu sağlamak için her zaman doğru olacak bir Karel durumuna ihtiyacımız var. İşte bir tane - bu dünya için, Karel'in çağrı çantasında her zaman beeper'lar olduğunu varsayalım. Bu nedenle, `beepers_in_bag()` her zaman doğru olacak ve `while beepers_in_bag()`, Karel'da sonsuz bir döngü olacaktır!

<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/borderBox/borderKarel.png">	
</center>

# Karel'dan Python'a

Şimdi, Karel'de `move()`, `front_is_clear()` ve `turn_left()` gibi fonksiyonların iç işleyişlerinde ne yapması gerektiğine dair daha iyi bir fikir edineceğiz (ipucu: bu fonksiyonları sizin 1. bölümdeki çözümünüzde kullanmış olmalısınız!). `border_karel.py` programınızı `border_box.py` üzerine kopyalamak için şu adımları izleyin:

1. Karel kodunuzu, kodunuzu nereye koyacağınızı gösteren iki yorum arasında kopyalayın.

2. `beepers_in_bag()` değerini `True` olarak değiştirin - çünkü artık `while True` döngülerini tekrar kullanabiliyoruz.

3. PyCharm, kullandığımız Karel fonksiyonlarının tanımlanmadığından şikayet edecektir. Bu işlevlerin taslaklarını yapalım. Her biri için şuna benzer bir tane ekleyin:

```
def turn_left():
	pass
```

`pass`, fonksiyonun hiçbir şey yapmadığı anlamına gelir - onları daha sonra gerçekten uygulayacağız.

### Kare

Grafik programımızda "Karel" i iki değişkenle temsil edeceğiz - yeşil bir kare ve bir yön. Yön,`NORTH`, `SOUTH`, `EAST` veya `WEST` olabilir - bunların tümü sizin için dosyada tanımlanan sabitlerdir.

Yeşil kutuyu oluşturmak ve yönü `EAST` olarak başlatmak için Karel kodunuzu yapıştırdığınızdan önce `main()` içine yeni kod ekleyin. Kutu, tıpkı Karel gibi, tuvalin sol alt kısmında başlatılmalıdır.

<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/borderBox/boxSetup.png">	
</center>

### Haydi Hareket!

Şimdi kutumuzu ekranın alt kısmında hareket ettirebilecekmiyiz görelim. `front_is_clear()` işlevinizin şimdilik `True` döndürmesini sağlayın. Ardından kutuyu bir adım doğuya taşımak için `move()`u kodlayın (ipucu: bazı parametreler eklemeniz gerekebilir!). Karel için olduğu gibi bir "adım" tanımlamalısınız - kutunun tam boyutunu artı bir boşluk taşıyın. Size yardımcı olması için sabitleri kullanın! Son olarak, `move()` öğesini çağırdıktan sonra `while` döngüsüne `canvas.update()` çağrısı ekleyin - animasyonumuzdaki her kareyi tuvali güncellememiz gerektiğini unutmayın. Ayrıca, animasyonu görebilmemiz için yeterince yavaş hale getirmek için `time.sleep()`i çağırmalısınız.

<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/borderBox/boxMove.png">	
</center>

### Pencereye, Duvara

Kutumuzun duvara çarpmasını istemiyoruz! Şimdi, kutu tuvalin kenarını geçmeden daha fazla hareket edemiyorsa, `False` döndürmek için `front_is_clear()`ı kodlayalım. (ipucu: bazı parametreler eklemeniz gerekebilir!)

### Yol Tarifi Alma

Oraya gidiyoruz! Şimdi kutunun şu anki yönü verildiğinde bakması gereken yeni yönü döndürmek için`turn_left()` uygulayalım. (ipucu: bazı parametreler eklemeniz gerekebilir!)

Son olarak, mevcut yöne bağlı olarak farklı davranmak için `front_is_clear()` ve `move()` öğelerini güncelleyin.
