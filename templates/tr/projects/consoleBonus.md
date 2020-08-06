template: templates/tr/projects/projectTemplate.ptl
title: Bonus Konsol Programları

Handout: [Python Okuyucu](https://codeinplace2020.github.io/pythonreader/en/intro/)<br/>
Handout: [Python Referansı]({{pathToRoot}}tr/resources/quick-python.html)<br/>

This is a collection of bonus programs! They are meant to be challenging.  They are not listed in order of difficulty, so choose whichever programs sound interesting!

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
FizzBuzz
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

## Checking Multiples
In order to solve the hailstone problem, we are going to need as way to determine if an integer is a multiple of another integer. In addition to the regular operators that you know and love (like +, -, \*, and /) programming languages provide a remainder operator: %.  

```
a % b
```

returns the value remaining when you divide a by b. For example, 10 % 3 is 1 because when you divide 10 by 3 you get 3 with 1 left over.  And when you divide any number by 2, the remainder is 0 if the number is even and 1 if the number is odd.  How can we use this to check if one number is a multiple of another?

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
