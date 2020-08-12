template: templates/tr/projects/projectTemplate.ptl
title: Yükseliyor
credit: Nick Troccoli
translation: Ceren Kocaoğullar

Kullanıcıdan -1\_ girene kadar sayılar girmesini isteyin, ardından bu sayıları ve bu sayıların artan sırada olup olmadığını yazdırmasını isteyin. İşte bir örnek çıktı:

```
> 1
> 4
> 9
> 16
> -1
1
4
9
16
Yükseliyor!
```

İşte bir tane daha:

```
> 5
> 4
> 3
> 2
> -1
5
4
3
2
Yükselmiyor
```

-1'in sayılar listesine dahil edilmediğine dikkat edin - yalnızca kullanıcının sayı girmeyi bitirdiğini belirtmek için bir gösterge olarak kullanılıyor.

## Görev 1: Sayıları Saklamak ve Ekrana Basmak

Kullanıcının bir listeye girdiği sayıları -1 girene kadar saklayın. Listeye -1 koymamayı unutmayın! -1 girildikten sonra onlardan girdi istemeyi bırakmalısın. Ardından, girdikleri sayıları yazdırın.

## Görev 2: Yükseliyor

Şimdi listenin artan sırada olup olmadığını yazdırmamız gerekiyor. Bize bunu söyleyebilecek bir işlevimiz olsaydı iyi olurdu, şunun gibi:

```
if is_ascending(my_list):
	# ...
else:
	# ...
```

Öyleyse bir tane yazalım! Bir sayılar listesini parametre olarak alan ve listedeki sayıların artan sırada olup olmadığını döndüren bir `is_ascending` fonksiyonu yazın. Fonksiyon şunun gibi görünecektir:

```
def is_ascending(numbers):
	# TODO: Sayılar artan sıradaysa True, aksi halde False döndür
```

Listeyi yinelemeli ve her sayı çiftinin doğru sırada olup olmadığını kontrol etmelidir. Bunlardan herhangi biri yanlış sıradaysa, listenin artan sırada olmadığını biliyoruz, bu nedenle `False` döndürüyoruz. Hiçbirini yanlış sırada göremezsek yükseliyor ve `True` olarak geri dönüyoruz!

## Listeler İçin İpuçları

Numara listesi oluşturmak için şunu kullanın:

```
my_list = []
```

Şunları kullanarak kullanıcıdan bir tamsayı okuyabileceğinizi hatırlayın:

```
number = int(input(prompt))
```

Listeye bir eleman eklemek için:

```
my_list.append(newValue)
```

Listeden bir eleman almak için:

```
my_list[index]
```

Bir listedeki tüm elemanlar üzerinde gezen bir döngü yapmak için:

```
for i in range(len(my_list)):
    # my_list[i] ile bir şeyler yap
}

-- OR --

for elem in my_list:
	# elem ile bir şeyler yap
```

Bir listedeki bazı elemanların üzerinden geçmek için:

```
for i in range(START, END):
	# my_list[i] ile bir şeyler yap

örneğin

# Listedeki son eleman hariç tümünün üzerinde gezen bir döngü
for i in range(0, len(my_list) - 1):
	# my_list[i] ile bir şeyler yap
```
