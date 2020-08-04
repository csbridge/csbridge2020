template: templates/tr/projects/projectTemplate.ptl
title: Orta Nokta
credit: Geçmişte Mehran Sahami, Keith Schwarz, Eric Roberts ve diğerlerinin hazırladıkları egzersizden esinlenilmiştir.
translation: Serhat Arslan, Ceren Kocaoğullar

Handouts: [Karel Referansı](https://compedu.stanford.edu/karel-reader/docs/python/en/reference.html)<br/>
File: `midpoint.py`

Bu bir bonus programdır! Biraz zorlayıcı olması için hazırlanmıştır.

Karel'i ilk "street" (satır) üzerinde ortalanmış bir beeper yerleştirmesi için programlayın. Karel'in aşağıdaki gibi dünyada başladığını varsayabilirsiniz:

<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/midpointKarel/midpointKarelStart.png">	
</center>
			
Karel ortaya beeper'ı yerleştirdikten sonra aşağıdaki çalışmayı gibi bitirmelidir.

<center>
	<img style="width:300px" src="{{pathToRoot}}img/projects/midpointKarel/midpointKarelFinish.png">	
</center>

Karel sadece ilk satırın ortasına tek bir beeper yerleştirmiş olmalıdır. Program sırasında birden çok beeper yerleştirse de Karel çalışmayı bitirmeden önce bunları toplamalıdır.

Aşağıdaki bilgileri her zaman doğru kabul edebilirsiniz:

- Karel sol alt köşede doğu yönüne bakarak başlar ve çantasında sonsuz sayıda beeper bulunur.
- Başlangıçta, dünyanın hiçbir yerinde duvar ve beeper bulunmamaktadır.
- Dünya kare olmak zorunda değildir ancak en az genişliği kadar yüksek olduğunu varsayabilirsiniz.
- Dünyanın genişliği tek ise Karel beeper'ı tam ortadaki kareye koymalıdır. Aksi durumda ise Karel beeper'ı ortanın herhangi bir yanındaki kareye bırakabilir.
- Programın sonunda Karel'in ne yöne baktığı önemli değildir.

Dikkat: Sadece Karel metotlarını kullanabilirsiniz. Python değişkenleri kullanmayınız. Bu problem Karel'in sayı sayamaması nedeni ile zordur. Problemi çözmek için birçok yöntem mevcuttur. Dolayısıyla kendi yaratıcı yönteminizi geliştirmekten çekinmeyin!
