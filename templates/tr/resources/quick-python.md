template: templates/tr/resources/faqTemplate.ptl
title: Hızlı Python Referansı

[TOC]

## PyCharm'da Python programları nasıl çalıştırılır
PyCharm'da bir program çalıştırmak için sayfanın altındaki "Terminal" opsiyonuna tıklayın. Herhangi bir programı çalıştırmak için aşağıdaki komutu Terminal'e girip "Enter"'a basmanız yeterli:

* **Mac Kullanıcıları**: `python3 programinizin_adi.py`
* **PC Kullanıcıları**: `programinizin_adi.py`

Yukarıdaki komutu çalıştırdıktan sonra terminal (**konsol** olarak da bilinir) programınızın çıktısını yazdırır ve programınızı nasıl yazdığınıza göre kullanıcıdan yazılı veri girişi alabilir.

## Konsol Çıktısı
Konsola bir şeyler yazdırmak için:

    print("Bu bir mesajdır.")

`print( ... )` fonksiyonu parantezlerin içine bir `string` almalıdır (unutmayın, `string` metin tutan bir veri türü olarak düşünülebilir). Konsola integer (tamsayı) ya da float (rasyonel sayılar) türünde bir değişken içeren bir mesaj yazdırmak istediğinizde bu değişkeni `str(...)` fonksiyonunu kullanarak string'e *çevirmeniz* gerekecek:

```
message = "Bu bir string"
print(message)                        # message zaten string türünde bir değişken
x = 5                                 # int
print("Değişken x'in değeri: " + str(x))
pi = 3.14                             # float
print("Pi'nin yaklaşık değeri: " + str(pi))
```

Yukarıdaki kod çalıştırıldığında aşağıdaki çıktıyı verir:

```
Bu bir string
Değişken x'in değeri: 5
Pi'nin yaklaşık değeri: 3.14
```

## Konsol Girdisi

Kullanıcıdan konsol aracılığıyla girdi alıp değerini bir değişkende tutmak için ```input(..)``` fonksiyonu kullanılır. Kullanıcı girdisini başka türde (integer, float, vb.) veri yapılarında tutmak için girdiyi istediğiniz türe **çevirmeniz** gerekecektir. 

```
what_you_said = input("How are you doing? ")            # Kullanıcıya nasıl olduğu soruluyor
print("You said: " + what_you_said)                     # Kullanıcının cevabı konsola yazdırılıyor

radius = int(input("Enter an integer: "))               # Kullanıcıdan alınan yarı çap değeri int olarak radius değişkeninde tutuluyor
diameter = 2 * radius                                   # Çap
print("diameter = " + str(diameter))
pi = float(input("Enter your best guess at pi: "))      # Kullanıcıdan pi tahmini isteniyor
circumference = pi*diameter     
print("circumference = " + str(circumference))          # Çemberin çevresi konsola yazdırılıyor
```

Yukarıdaki kod çalıştırıldığında aşağıdaki çıktıyı verir (Kullanıcı girdisi mavi ile belirtilmiştir):

<center>
<img
  src="{{pathToRoot}}img/resources/quick-python/input_demo.png"
  class="img-fluid mx-auto d-block"
  style="width: 55%"
  alt="Konsol girişi için örnek sonuç. Kullanıcı girdileri "Fine, thank you", daha sonra "4", sonra da "3.1415926535323846" ve program yarı çapı 4 olan bir çemberin çevresini sizin girdiğiniz pi (\pi) değeri ile hesaplar.
/>
</center>

## Rastgele Sayılar

Rastgele sayılar üretmek için programınızın başına, fonksiyonların dışına `import random` yazın.

```
import random

def main():
    ...
```

Daha sonra aşağıdaki gibi rastgele sayılar elde edebilirsiniz. Rastgele sayıların üretilmesini istediğimiz alt ve üst limiti `lower = 0` ve `upper = 10` olarak tanımladığımızı varsayın.:

```
x = random.randint(lower, upper)  # [lower, upper] aralığında (alt ve üst limit dahil) rastgele bir tamsayı
y = random.random()               # 0 ve 1 arasında rastgele rasyonel sayı
y = random.uniform(lower, upper)  # [lower, upper] aralığında rastgele rasyonel sayı 
```