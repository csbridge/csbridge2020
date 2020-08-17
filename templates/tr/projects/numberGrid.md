template: templates/tr/projects/projectTemplate.ptl
title: Number Grid
credit: Lisa Yan
translation: Ceren Kocaoğullar

Ders Notları: [Graphikler Referansı]({{pathToRoot}}tr/resources/graphics.html)

Alakalı Örnek: [Optik İlüzyon]({{pathToRoot}}tr/projects/illusion.html)

Dosya: `number_grid.py`

Bu bir bonus programıdır! Biraz zorlayıcı olması için hazırlandı.

Ekranda ortalanmış, numaralandırılmış kare bir ızgara çizen bir grafik programı yazın, örneğin:

<center>
	<img style="width:400px;border:2px solid grey" src="{{pathToRoot}}img/projects/numberGrid/grid25.jpg">	
</center>

Programınız bunu, bir boyut alabilen ve bu kadar satır ve o kadar sütunlu bir sayı ızgarası çizebilen bir `draw_numbered_grid` fonksiyonu oluşturarak yapmalıdır. Daha sonra, `main` fonksiyonunuz bu fonksiyonu çağırmalıdır. Bu, programınızın farklı boyutlardaki ızgaralarla başa çıkabilmesi gerektiği anlamına gelir:

<center>
	<img style="width:400px;border:2px solid grey" src="{{pathToRoot}}img/projects/numberGrid/grid36.jpg">	
</center>

## Görevler

1) Önce, doğru konumda tüm sayı ızgarasının boyutunda bir dikdörtgen çizmeye çalışın. Örneğin, 5x5 için şunu çizmeye çalışmalısınız:

<center>
	<img style="width:400px;border:2px solid grey" src="{{pathToRoot}}img/projects/numberGrid/milestone1.png">	
</center>

2) Çözümünüzü, belirli bir konumda tek bir kare çizebilen ve belirli bir sayıyı gösteren başka bir fonksiyona bölün. Sadece kırmızı kareyi çizerek başlayın ve içindeki sayı metni hakkında endişelenmeyin.

<center>
	<img style="width:400px;border:2px solid grey" src="{{pathToRoot}}img/projects/numberGrid/milestone2.png">	
</center>

3) Her karenin içine sayı metnini ekleyin.
