template: templates/en/projects/projectTemplate.ptl
title: Kare Boyayan Karel
credit: Lisa Yan
translation: Ceren Kocaoğullar, Serhat Arslan

Ders Notları: [Karel Referansı](https://compedu.stanford.edu/karel-reader/docs/python/en/reference.html)<br/>
Dosya: `square_painter.py`

Bu bir bonus programdır! Biraz zorlayıcı olması için hazırlanmıştır!

Kodunuzun düzenli kalması için **_fonksiyonları_** kullanmayı ihmal etmeyin!

Karel'in biraz sanat yapası gelmiş. Kendisine mavi ve yeşil renkler arasında gidip gelen karelerin olduğu dikdörtgen bir dünya yaratmasında yardım edin.

<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/squarePainter/5x5.png">	
</center>

Herhangi bir koşulun tersini kontrol etmek için `not` kullanın:

```
# checks that the corner you are on is NOT a certain color
if not corner_color_is(color):
    ...
```

Karel her türlü dikdörtgen dünyayı boyayabilmelidir:

<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/squarePainter/8x8.png">	
</center>

Kare olmayan dikdörtgenler bile Karel'in sanatsal yetenek alanındadır:

<center>
	<img style="width:400px" src="{{pathToRoot}}img/projects/squarePainter/16x20.png">	
</center>

Tamamlandığında Karel'in nerede bittiği önemli değil; Karel sadece sanatsal ifadesini en üst düzeye çıkarmak istiyor.
