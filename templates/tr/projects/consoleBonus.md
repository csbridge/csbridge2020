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

# FizzBuzz
credit: Mehran Sahami, Keith Schwarz, Eric Roberts, Marty Stepp, and others.<br />
file: `fizzbuzz.py`

Fizzbuzz is a classic coding problem.

In the game Fizz Buzz, players take turns counting up from one. If a player’s turn lands on a number that’s divisible by 3, they should say “Fizz” instead of the number, and if it lands on a number that’s divisible by 5, they should say “Buzz” instead of the number. If the number is both a multiple of 3 and of 5, they should say "Fizzbuzz" instead of the number. A spectator sport, it is not. What it is, however, is an interesting problem in control flow.

Write a program that counts up to and including 100, fizzing and buzzing the correct numbers along the way.  Here's part of a sample run of the program:

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
...
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
