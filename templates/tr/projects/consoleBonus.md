template: templates/tr/projects/projectTemplate.ptl
title: Bonus Konsol Programları

Handout: [Python Okuyucu](https://codeinplace2020.github.io/pythonreader/en/intro/)<br/>
Handout: [Python Referansı]({{pathToRoot}}tr/resources/quick-python.html)<br/>

Bu bonus programlarından oluşan bir koleksiyon! Zorlayıcı olmaları gerekiyor. Bu problemler zorluk sırasına göre listelenmediler, bu nedenle hangi programlar kulağa ilginç geliyorsa onu seçin!

# Birim Çevirme

credit: Mehran Sahami, Keith Schwarz, Eric Roberts, Marty Stepp ve diğerleri.<br />
translation: Serhat Arslan, Demet Tümkaya<br />
Dosya: `conversion.py`

Amerika, uzunluk birimleri için inç, feet, yard ve mil olan karışık bir ölçü sistemi kullanıyor. Bir foot 12 inç iken, 3 feet 1 yard'a eşit. Fakat, bilimsel ölçümler yaparken dünya genelinde ölçü birimleri olarak kullanılan santimetre, metre ve kilometreyi tercih etmek önemlidir. 2.54 santimetrenin 1 inç olduğunu bilerek, santimetreden inç'e birim çevrimi yapabilen bir program yazın. Aşağıda, programdan örnek bir çıktı görebilirsiniz. Program kullanıcı santimetre için alınan sayıyı -1 olarak girdiğinde durmalıdır.

```
Bu program santimetreyi inç'e çevirebilir.
Cm girin: 2.54
2.54 santimetre 1.0 inç'e eşittir.
Cm girin: 68
68.0 santimetre 26.771653543307085 inç'e eşittir.
Cm girin: 100
100.0 santimetre 39.37007874015748 inç'e eşittir.
Cm girin: -1
```

Şimdi, istediğin türde birimleri birbirine çeviren bir program yazabilirsin!

# CızBız

credit: Mehran Sahami, Keith Schwarz, Eric Roberts, Marty Stepp, and others.
translation: Ceren Kocaoğullar
file: `fizzbuzz.py`

CızBız oyununda oyuncular sırayla birden yukarıya doğru sayarlar. Bir oyuncunun sırası 3 ile bölünebilen bir sayıya inerse, sayı yerine “Cız” ve 5 ile bölünebilen bir sayıya inerse sayı yerine “Bız” demelidir. Sayı hem 3 hem de 5'in katlarıysa, sayı yerine "CızBız" demelidir. Bu belki bir seyirci sporu değil. Ancak, kontrol akışı ve parametre kullanımı için ilginç bir problem.

n olarak adlandırılan bir integer'ı (tamsayı) parametre olarak kabul eden CızBız adlı bir fonksiyon yazın. Fonksiyon n'ye kadar ve n dahil olmak üzere yol boyunca doğru sayıları cızırtadarak ve bızırdatarak saymalıdır. Saymayı bitirdiği zaman, fonksiyon yol boyunca toplamda kaç kere cızırdadığını veya bızırdadığını dönmelidir.

Ardından, kullanıcıdan tamsayı olarak okunan ve sayı sayılana kadar CızBız oynayan bir main fonsiyonu yazarak programınızı tamamlayın. İşte programın örnek bir çıktısı (kullanıcı girişinin "17" olduğu bir durumda):

```
Kaça kadar saymalıyım: 17
1
2
Cız
4
Bız
Cız
7
8
Cız
Bız
11
Cız
13
14
CızBız
16
17
7 sayı cızırdatıldı veya bızırdatıldı
```

## Katları Kontrol Et

Dolu Tanesi problemini çözmek için, bir tamsayının başka bir tamsayının katı olup olmadığını belirlemenin bir yolu olarak ihtiyacımız olacak. Bildiğiniz ve sevdiğiniz normal operatörlere ek olarak (+, -, \ \* ve / gibi) programlama dilleri bir de kalan operatörü sağlar: %.

```
a % b
```

a'yı b'ye böldüğünüzde kalan değeri döndürür. Örneğin, 10 % 3, 1'dir, çünkü 10'u 3'e böldüğünüzde, kalan 1 ile 3 elde edersiniz. Ve herhangi bir sayıyı 2'ye böldüğünüzde, sayı çift ise geri kalan 0, tek sayı ise 1'dir. Bunu, bir sayının diğerinin katı olup olmadığını kontrol etmek için nasıl kullanabiliriz?

# Piglet

credit: Mehran Sahami, Keith Schwarz, Eric Roberts, Marty Stepp ve diğerleri.<br />
translation: Serhat Arslan, Demet Tümkaya<br />
Dosya: `piglet.py`

"Pig" oyununu temel alan, tek kişilik bir zar oyunu "Piglet" için bir konsol programı yazın. Oyuncunun hedefi, zar attığında 1 gelene kadar alabileceği en yüksek puanı kazanmaktır. Her turda öğrenci zar atar; eğer 1 gelirse, oyun biter ve oyuncu 0 puan alır. Eğer oyuncu 1'den farklı bir sayı elde ederse, bu sayı puanına eklenir. Sonrasında oyuncu tekrar zar atmayı veya oyunu güncel puanıyla bitirmeyi tercih edebilir. 2 örnek çıktı aşağıda gösterilmektedir.

```
Piglet'e hoş geldin!
4 attın!
Tekrar zar at? evet
5 attın!
Tekrar zar at? evet
5 attın!
Tekrar zar at? evet
4 attın!
Tekrar zar at? evet
3 attın!
Tekrar zar at? hayır
21 puan kazandın.
```

```
Piglet'e hoş geldin!
5 attın!
Tekrar zar at? evet
2 attın!
Tekrar zar at? evet
4 attın!
Tekrar zar at? evet
1 attın!
0 puan kazandın.
```
