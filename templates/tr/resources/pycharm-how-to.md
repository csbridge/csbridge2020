template: templates/tr/resources/faqTemplate.ptl
title: Nasıl PyCharm Kullanırım?
credit: Chris Piech, Mehran Sahami, Brahm Capoor, and Lisa Yan

[TOC]

Bu dökümanın amacı, program web sitesinde “PyCharm'ı Kurmak” dökümanında açıklandığı gibi PyCharm'ın bir kopyasını indirdikten sonra, bir sonraki göreviniz Karel programlarını PyCharm kullanarak nasıl yazacağınızı ve çalıştıracağınızı anlatmaktır.

## Bir Başlangıç ​​Projesi İndirin

1. CS Bridge web sitesinin ana sayfasına gidin ve indirmek istediğiniz sabah veya akşam projesine tıklayın. Birinci Gün için başlangıç ​​kodunu indirdiğinizi varsayalım ("Sabah projesi [burada]").
1. Artık `Day1PM.zip` adlı bir klasörünüz olacak. Çift tıklayarak açın.
   - Bazı durumlarda, bir ZIP arşivinden dosyaları genişletmek için uygun bir yazılımınız varsa tarayıcı, indirdiğinizde klasörü otomatik olarak açacaktır / dosya genişletme yazılımı genellikle Windows 7, 8 ve 10 veya macOS'ta yerleşiktir).
   - ZIP dosyasının genişletilmiş içeriği, projeyi içeren Day1PM adlı bir klasör olacaktır.
   - **Not** Bir Windows bilgisayarındaysanız, dış Day1PM klasörünün dışında ikinci bir Day1PM klasörünüz olabilir. **En iç Day1PM klasörünü kullandığınızdan mutlaka emin olun**.
1. Bu klasörü bilgisayarınızda, projeyi yüklemek istediğinizde takip edebileceğiniz bir yere taşıyın.

## Bir Projeyi İçe Aktarma

1. PyCharm'ı açın (aşağıdaki Şekil 1, sol taraf). Üzerinde çalışmak istediğiniz projeyi seçin veya "Open"a tıklayın.
1. Farklı bir projeyle zaten açık PyCharm'ınız varsa, ekranın üst kısmına gidin ve "File" -> "Open"a tıklayın.
1. Day1PM klasörüne gidin ve onu açın. Düzenlemek istediğiniz belirli bir dosyayı değil, <i> **klasörü** </i> açmaya dikkat edin.

   - Zaten başka bir projeniz varsa, PyCharm sizden projeyi mevcut pencerenizde veya yeni bir pencerede açmanızı ister. İkisinden birini seçebilirsiniz.

1. Sağ tarafta, aşağıdaki Şekil 1'de gösterilen bir görünüm görmelisiniz.

<center>
  <img style="width:100%" src="{{pathToRoot}}img/resources/pycharm-how-to/import.png">
  <p style="text-align:center"><b>Şekil 1</b>: PyCharm'ı başlattığınızda açılan ilk pencerede (solda) bir proje seçmeniz için bir Open seçeneği bulunmalıdır. Bir proje açtıktan sonra, varsayılan PyCharm açılış görünümünü (sağda) görmelisiniz..</p>
</center>

## Kodu Düzenleme

Soldaki **Proje araç çubuğu** (Şekil 1, sağ taraf) üzerinde çalıştığımız mevcut projeyi (Day1PM) ve tüm içeriğini gösterir: klasörler, Python dosyaları, vb. Karel programları için **karel** veya **worlds** klasörlerindeki dosyaları incelemenize veya düzenlemenize gerek yoktur.

Bir programa çift tıkladığınızda (diyelim ki, `newspaper_karel.py`) PyCharm'ın ana penceresinde bir metin düzenleyici görünümü açılacaktır. Ve kodlama zamanı!

## Programları Çalıştırma

### Pycharm'da Python Programları Nasıl Çalıştırılır?

<center>
  <img style="width:50%" src="{{pathToRoot}}img/resources/pycharm-how-to/terminal.png">
  <p style="text-align:center"> <b>Şekil 2</b>: Python programlarını çalıştırmak için kullanılan PyCharm terminali.</p>
</center>

PyCharm'da bir program çalıştırmak için ekranın altındaki "Terminal" seçeneğini tıklayın. Herhangi bir programı çalıştırmak için tek yapmanız gereken Terminal'e aşağıdaki komutu (dosya ismini gerekli şekilde değiştirerek) yazmak ve "Enter" tuşuna basmaktır:

- ** Mac Kullanıcıları **: `python3 dosya_ismi.py`
- ** PC Kullanıcıları **: `py dosya_ismi.py`

Terminal, (**konsol** olarak da bilinir) programınızı nasıl yazdığınıza bağlı olarak çıktıyı yazdırır ve kullanıcıdan metin girişi kabul eder.

Yan not olarak, birçok proje ve ödevde Mac kurallarını takip ederek programları çalıştırmak için <b> `python3 <program adı>`</b> komutunu kullanmış olabiliriz. PC kullanıcısıysanız, bunun yerine <b> `py <program adı>` </b> komutunu kullanmalısınız. Sadece PC'deki kurallara göre, Python yorumlayıcısını (Mac'teki <b> `python3` </b>ün aksine) <b>`py` </b> komutunu kullanarak çalıştırırsınız.

### Pycharm'da Karel Programları Nasıl Çalıştırılır?

Karel programları da Python programlarıdır!

1. Karel programını çalıştırmak için yukarıdaki adımları izleyin. Daha sonra şöyle bir şey görmelisiniz:

<center>
  <img style="width:60%" src="{{pathToRoot}}img/resources/pycharm-how-to/newspaper_karel.png">
  <p style="text-align:center"><b>Şekil 3</b>: `newspaper_karel.py` programını çalıştırınca açılan Karel penceresi, Karel’ın dünyasını (world), bir Run Program (Programı Çalıştır) butonu, ve bir de Load World (Dünya Yükle) butonu içerir</p>
</center>

2. Daha sonra <b> Run Program </b> butonuna basarsanız, Karel yazdığınız <b> `main()` </b> fonksiyonundaki adımları uygular.

3. Karel'i hızlandırmak için bu ekrandaki kaydırma çubuğunu kullanabilirsiniF.

4. <b> İşiniz bittiğinde pencereden çıkın </b>. PyCharm Terminalinden bir sonraki Karel programını çalıştırdığınızda (aynı program olsa bile), yeni bir Karel penceresi oluşturacaktır.

#### Karel'ı Farklı Dünyalarda Çalıştırmak

Diyelim ki Karel Hastanesi projesi üzerinde çalışıyoruz ve kodumuzu varsayılan dünyada çalıştırmayı başardık. <b> Load World </b> düğmesine basarak ve Karel'ı çalıştırmak istediğiniz başka bir dünyayı (world) seçebilirsiniz. Daha sonra, <b> Run Program </b> düğmesini tıklayarak Karel'ı bu yeni dünyada test edebilirsiniz.
