template: templates/tr/projects/projectTemplate.ptl
title: İndeksleri Yazdır
credit: Lisa Yan, Nick Troccoli
translation: Ceren Kocaoğullar

File: `print_indices.py`

5x5'lik bir ızgaranın (grid'in) koordinatlarını yazdırın.

```
5x5'lik bir ızgaranın koordinatlarını satır satır yazdırın.
(0,0), (1,0), (2,0), (3,0), (4,0)
(0,1), (1,1), (2,1), (3,1), (4,1)
(0,2), (1,2), (2,2), (3,2), (4,2)
(0,3), (1,3), (2,3), (3,3), (4,3)
(0,4), (1,4), (2,4), (3,4), (4,4)
```

İpucu: aşağıdaki kod yapısını deneyin:

```
for i in range(5):
    for j in range(5):
        # kodunuzu buraya yazın ...
```

## Görev 1

Try adding just one print statement to print out the values of `i` and `j` in the body of the inner `for` loop. What do you observe?

İçteki `for` döngüsünün içine `i` ve `j` değerlerini yazdırmak için yalnızca bir print ifadesi eklemeyi deneyin. Ne gözlemliyorsunuz?

## Görev 2

Koordinatları, her biri kendi satırında olacak şekilde, aşağıdaki gibi satır sırasına göre yazdırın:

```
(0,0)
(1,0)
(2,0)
(3,0)
(4,0)
(0,1)
(1,1)
...
```

## Görev 3

Şimdi, her ızgara satırını aynı satıra yazdırmayı deneyin. `print()` kullanmanın, yazdırılandan sonra otomatik olarak bir satır sonu/yeni satır eklediğini unutmayın. Bunu yapmamasını söylemek için, kapanış parantezlerinin hemen önüne `end=''` ekleyin. Örneğin, `print ("bazı metin veya değişkenler")` bir satır sonu/yeni satır ekler, oysa `print("some text or variables", end='')` bunu yapmaz.
