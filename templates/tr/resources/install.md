template: templates/tr/resources/faqTemplate.ptl
title: PyCharm Kurulumu

[TOC]

<div class="alert alert-warning">
    <p id="osspiel"></p>
</div>

<!--
<div class="alert alert-info">
    <p>
        <b>Running into issues?</b> Post on
        <a href="https://us.edstem.org/join/KPUYZn">ed</a>. Please make your post visible to all so that other students can learn from the answer.
    </p>
</div>
-->

<p>
    CS Bridge boyunca kod yazmak için <a href="https://www.jetbrains.com/pycharm/"> PyCharm</a> 
    adında bir uygulama kullanacaksınız. PyCharm IDE, veya <i>Bütünleşik Geliştirme Ortamı (Integrated Development Environment)</i>, 
    türünde bir uygulamadır. Yani PyCharm kullanarak kod dosyalarınızı inceleyebilir, değiştirebilir, programlarınızı çalıştırabilir ve hata ayıklama (debugging) arayüzünü kullanarak programlarınız nasıl çalıştığını kolaylıkla inceleyebilirsiniz. PyCharm Python için geliştirilmiş en popüler IDElerden biridir ve endüstride yaygın olarak kullanılır. Bu dökümanı PyCharm kurulumunda size yol göstermek için oluşturduk. 
</p>

<h2>Python Kurulumu</h2>
<p>
    Bilgisayarınızda Python programları çalıştırabilmek için öncelikle 
    <i>Python Yorumlayıcısı (Interpreter)</i> yüklemeniz gerekiyor. Python 
    Yorumlayıcısı <code>.py</code> türündeki Python kod dosyalarını okuyup 
    onları bilgisayarınızın uygulayabileceği komutlara dönüştürmekten sorumlu
    bir programdır. Python'u aşağıda işletim sisteminize uygun linkten indirebilirsiniz:
</p>
<ul>
    <li class="maconly">
        <a href="https://www.python.org/ftp/python/3.8.1/python-3.8.1-macosx10.9.pkg">
            MacOS
        </a>
    </li>
    <li class="winonly">
        <a href="https://www.python.org/ftp/python/3.8.1/python-3.8.1-amd64.exe">
            Windows 64-bit
        </a>
        (Windows'unuzun 32-bit mi yoksa 64-bit mi olduğunu bilmiyorsanız 
        <a href="https://support.microsoft.com/tr-tr/help/15056/windows-32-64-bit-faq">bu sayfayı</a> ziyaret edebilirsiniz.)
    </li>
    <li class="winonly">
        <a href="https://www.python.org/ftp/python/3.8.1/python-3.8.1.exe">
            Windows 32-bit
        </a>
        (Windows'unuzun 32-bit mi yoksa 64-bit mi olduğunu bilmiyorsanız 
        <a href="https://support.microsoft.com/tr-tr/help/15056/windows-32-64-bit-faq">bu sayfayı</a> ziyaret edebilirsiniz.)
    </li>
</ul>
<h3 class="maconly" data-toc-skip>Mac için Python Kurulumu</h3>
<p class="note maconly">
    Tüm mac bilgisayarlar Python'un eski bir versiyonunu içerirler. Fakat CS Bridge'de 
    Python'un en yeni versiyonunu kullanacağız. Bu yüzden zaten bilgisayarınızda Python 
    olduğunu düşünüyorsanız bile bu talimatları uygulayın.
    Python'u Mac'inize kurmak için basitçe indirdiğiniz kurulum dosyasını çalıştırın ve 
    talimatları uygulayın. Kurulum boyunca varsayılan ayarları kullanabilirsiniz. 
</p>
<h3 class="winonly" data-toc-skip>Windows İçin Python Kurulumu</h3>
<p class="winonly">
    İndirdiğiniz kurulum dosyasını açın. Kuruluma başlamadan önce "Add Python 3.8 to PATH" 
    yazan seçeneği işaretleyin. Bu seçeneği işaretlemeniz Python'u kolaylıkla çalıştırmanız 
    için önemlidir ve seçmediğiniz durumda sorunlara neden olacaktır. <b>Bu seçeneğin işaretli 
    olduğundan emin olduktan sonra</b> kuruluma normal şekilde devam edebilirsiniz.
</p>

<hr />

<h2> PyCharm Kurulumu ve Kontrolü </h2>

<h3> Kurulum </h3>

<p>
    Öncelikle PyCharm Community versiyonunun en son versiyonunu indirin ve kurun.
</p>
<ul>
    <li class="maconly">
        <a href="https://download.jetbrains.com/python/pycharm-community-2019.3.4.dmg">
            MacOs
        </a>
        (İndirdiğiniz <code>.dmg</code> dosyasını açın ve PyCharm programını Uygulamalar klasörüne sürekleyin)
    </li> <!-- TODO old mac download -->
    <li class="winonly">
        <a href="https://download.jetbrains.com/python/pycharm-community-2019.3.4.exe">
            Windows
        </a>
        (İndirdiğiniz <code>.exe</code> dosyasını çalıştırın ve PyCharm kurulumunu varsayılan seçenekleri kullanarak tamamlayın.)
    </li>
</ul>

<p>
    Pycharm kurulumunu tamamladıktan sonra aşağıdaki gibi gözüken bir ekranla karşılaşacaksınız:
</p>
<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img 
            src="http://web.stanford.edu/class/cs106a/img/handouts/installingpycharm/macos/welcomescreen.png" 
            style="width:100%"
            alt="PyCharm Welcome Screen"
        />
    </div>
</div>
<br />

<p id="configure_interpreter">'Configure' butonuna tıklayın ve PyCharm'ın ayarlarını açın, buna benzer bir pencere görmelisiniz: </p>

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img 
            src="http://web.stanford.edu/class/cs106a/img/handouts/installingpycharm/macos/welcomescreen-config.png"
            style="width:100%"
            alt="PyCharm Welcome Screen, with 'Configure->Preferences' highlighted"
        />
    </div>
</div>
<br />

<p id="setinterpreter">
    'Preferences' penceresinde, 'Project Interpreter' bölümünü seçin, seçeneklerin bulunduğu aşağıya doğru açılan menüye tıklayın, 
    'Show All' yazan seçeneği seçin:
</p>

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img 
            src="http://web.stanford.edu/class/cs106a/img/handouts/installingpycharm/macos/preferences-showinterpreters.png"
            style="width:100%"
            alt="PyCharm Preferences Window, in the 'Project Interpreter' Pane, with 'Show All' highlighted in the dropdown menu" />
    </div>
</div>
<br />

<p>
    Açılan pencerede sağ üst köşede bulunan artı ikonuna tıklayın:
</p>

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img src="http://web.stanford.edu/class/cs106a/img/handouts/installingpycharm/macos/addnewinterpreter.png"
            style="width:100%"
            alt="PyCharm Interpreter List, with the plus button in the bottom left highlighted" />
    </div>
</div>
<br />

<p>
    Açılan 'Add Python Interpreter' penceresinde sağdaki seçeneklerden 'System Interpreter' yazanı seçin. Bilgisayarınızda Python'un
    başka versiyonları yüklü değilse Python 3.8 zaten seçili olabilir. Eğer seçili değilse veya başka bir Python versiyonu seçiliyse 
    menüden Python 3.8'i seçin ve 'OK' butonuna tıklayın. Daha sonra tekrar 'OK' butonuna tıklayın.
</p>

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img src="http://web.stanford.edu/class/cs106a/img/handouts/installingpycharm/macos/addsysteminterpreter.png"
            style="width:100%"
            alt="Adding the system interpreter in PyCharm" />
    </div>
</div>
<br />

<p>
    Bu şekilde görünen bir pencerede olmalısınız (listenin içerikleri değişiklik gösterebilir):
</p>

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img src="http://web.stanford.edu/class/cs106a/img/handouts/installingpycharm/macos/interpreterafterselection.png"
            style="width:100%"
            alt="Interpreter window after selecting system interpreter" />
    </div>
</div>
<br />

<p>
    Tekrar 'OK' butonuna tıklayın. Yeniden ilk karşılaştığınız ekranda olmasınız. Artık PyCharm kurulumunu test etmeye hazırsınız!
</p>

<hr />

<h3> PyCharm Kurulumunu Test Etmek </h3>

<p>
    PyCharm Python programlarını projeler olarak modeller. Her proje bir veya birden fazla Python (<code>.py</code>) 
    dosyası ve programınızda kullanmak istediğiniz resim, metin dosyası gibi ekstra dosyaları içerir. PyCharm proje yapısına 
    alışmanıza yardımcı olmak ve Python projelerinizi nasıl çalıştırabileceğinizi göstermek için örnek bir proje hazırladık. 
    Bu projeyi <a href="{{pathToRoot}}starter/pycharm_intro.zip">buradan</a> indirebilirsiniz.
    PyCharm çalışmaya başlamak için bu projeyi indirin <span style="display: inline-block;" class="winonly">(Windows 
    kullanıyorsanız önce indirdiğiniz sıkıştırılmış projeyi açmanız gerekiyor. Bunun için dosya gezgininden indirdiğiniz projeyi bulun ve sağ tıklayıp 'Tümünü Ayıkla' seçeneğini seçin)</span> ve indirdiğiniz projeyi PyCharm ile açın. Projeyi açmak için 
    gördüğünüz ilk ekranda 'Open' seçeneğini seçin ve indirdiğiniz dosya konumunu <span style="display: inline-block;" class="winonly">(Windows kullanıyorsanız projeyi ayıkladığınız konumu)</span> seçin. <b>PyCharm ile proje açarken sadece 
    değişiklik yapmak istediğiniz dosyayı açmak yerine her zaman <i>değişiklik yapmak istediğiniz dosyaları içen klasörü</i> 
    açın.</b> Projeyi açtıktan sonra aşağıda gördüğünüz gibi bir pencereyle karşılaşacaksınız:
</p>

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img src="http://web.stanford.edu/class/cs106a/img/handouts/installingpycharm/macos/pycharmblank.png"
            style="width:100%"
            alt="Blank PyCharm Window" />
    </div>
</div>
<br />

<p>
    Sol üstten 'Project' menüsünü açın veya 
    <span style="display: inline-block;" class="winonly"><code><span id="modifier">Alt</span> + 1</code></span>
    <span style="display: inline-block;" class="maconly"><code><span id="modifier">Command</span> + 1</code></span>
    kısayolunu kullanın. Açılan dosya gezginini kullanarak <code>intro.py</code> dosyasını açın:
</p>

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img src="http://web.stanford.edu/class/cs106a/img/handouts/installingpycharm/macos/pycharmeditor.png"
            style="width:100%"
            alt="PyCharm Editor" />
    </div>
</div>
<br />

<p>
    Editörde gördüğünüz kodu henüz okumak veya anlamak zorunda değilsiniz (CS Bridge'den sonra bunu kolaylıkla yapabileceksiniz!).
    Program boyunca kod yazmak için bu editörü kullanacaksınız. Programı çalıştırmak için sol alt köşedeki 
    'Terminal' butonuna tıklayın. Bu butona tıkladığınızda editörünüzün altında bir terminal penceresi açılacak:
</p>

<div class="row">
<div class="col-md-2"></div>
<div class="col-md-8">
    <img src="http://web.stanford.edu/class/cs106a/img/handouts/installingpycharm/macos/pycharmterminal.png" 
            style="width:100%"
        alt="PyCharm Terminal" />
</div>
</div>
<br />

<p>
    Terminallerin ne olduğundan program boyunca daha detaylı bahsedeceğiz, şimdilik Python programlarını 
    terminal kullanarak çalıştırabileceğinizi bilmeniz yeterli. İlk Python programınızı çalıştırmak için 
    aşağıda gördüğünüz komutu terminalize yazın ve enter'a basın:
</p>

<div class="text-center">
    <code><span class="launcher">python3</span> intro.py</code>
</div>
<br />

<p>
    Aşağıdakine benzer bir çıktı görmelisiniz:
</p>

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img src="http://web.stanford.edu/class/cs106a/img/handouts/installingpycharm/macos/firstrun.png"
            style="width:100%"
            alt="First run output" />
    </div>
</div>
<br />

<p>
    Şimdi terminale aşağıda gördüğün komutu yaz ve çalıştır:
</p>

<div class="text-center">
    <code><span class="launcher">python3</span> intro.py &lt;SENIN ADIN&gt; </code>
</div>
<br />

<p>
    Örneğin adın Papatya ise terminale <code><span class="launcher">python3</span> intro.py Papatya</code> yazmalısın.
    Eğer istersen tam adını da yazabilirsin. Aşağıdakine benzer bir çıktı görmelisin:
</p>

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img src="http://web.stanford.edu/class/cs106a/img/handouts/installingpycharm/macos/secondrun.png"
            style="width:100%"
            alt="Second run output" />
    </div>
</div>
<br />

<p>
    Tebrikler! Başarıyla Python ve PyCharm kurulumunu tamamladın.
</p>

### Graphics Paketini Yüklemek
CS Bridge'de kullanacağımız grafik kütüphanesi Python'u yüklediğinizde otomatik olarak yüklenmiş olmalı.
Fakat bu kütüphane çalışmak için `Pillow` adında resimleri modifiye etmek ve ekran üzerinde çizmek için kullanılan bir pakete ihtiyaç duyuyor. `Pillow`'u indirmek için bir terminal penceresi açın (PyCharm'ın içindeki Terminal sekmesini kullanabilirsiniz) ve aşağıdaki komutu girin:

**Not:** Windows kullanıyorsanız `python3` yerine `py` komutunu kullanın. <br/>
**Not2:** Python'da paket adları büyük/küçük harfe duyarlıdır. `Pillow`'u yazarken ilk harfin büyük olmasına dikkat edin.

```
> python3 -m pip install Pillow==7.1.1
... konsole'a yazılan kurulumla ilgili bilgiler ...
Successfully installed Pillow-7.1.1
```

Eğer buna benzer bir çıktıyla karşılaştıysanız `Pillow`'u başarıyla yüklediniz ve kodlamaya başlamaya hazırsınız!

<hr />

<h2>
    Sıkça Sorulan Sorular
</h2>

<h3>
    Başka bir Python versiyonu kullanabilir miyim?
</h3>
<p>
    Python 3.8 kullanmanızı ısrarla öneriyoruz. Eğer zaten başka bir Python versiyonuna sahipsen Python 3.8'i de paralel olarak bilgisayarına yükleyebilirsin. Program boyunca kullancağımız örnek ve çözümler Python 3.8 kullandığınızı varsayarak hazırlandı. Örnekleri çalıştırabilmek için en azından Python 3.6 ve sonrası versiyonlarından birini yüklemen gerekiyor.
</p>

<h3>
    PyCharm harici başka bir editör kullanabilir miyim?
</h3>
<p>
    Eğer hali hazırda zaten kullandığın ve hakim olduğun bir editör varsa onu tercih edebilirsin. 
    Fakat ekibimiz sadece PyCharm konusunda karşılaştığınız sorunlarda sizlere destek olacak. 
    Hangi editörü kullanırsan kullan projelerde bulundan konfigürasyon dosyalarında değişiklik yapmamalısın. 
</p>

<h3 data-toc-text="Can't open file">
    Kodumu çalıştırmaya çalıştığımda <code>can't open file intro.py: No such file or directory</code> hatası alıyorum. Bu ne anlama geliyor?
</h3>
<p>
    Bu hatanın nedeni genellikle PyCharm ile yanlış dosya veya klasörü açmak. 
    Öncelikle <code>intro.py</code> dosyasını içinde bulunduran <code>pycharm_intro</code> klasörünü açtığından emin ol.
    Direkt olarak <code>intro.py</code> dosyasını veya <code>pycharm_intro</code> klasörünü içeren başka bir klasör açmadığını 
    kontrol et. 
</p>
<p>
    Bu hatayı düzeltmek için PyCharm'da sol üst köşedeki 'File' menüsünü aç ve 'Open' seçeğine tıkla. 
    Sonra açılan dosya gezgini üstünden doğru <code>pycharm_intro</code> klasörünü bul ve aç.
</p>
<p>
    Doğru klasörü açtığını kontrol etmek için terminale 
    <span class="maconly"><code>ls</code> (ilk harf küçük 'L' harfi)</span>
    <span class="winonly"><code>dir</code></span> 
    komutunu yaz ve çalıştır. Bu komut sana bulunduğun klasörde bulunan tüm dosya ve klasörleri listeyelecek.
    <code>intro.py</code> dosyasının komutun çıktıları içinde bulunduğunu kontrol et.
</p>

<h3 data-toc-text="No Python Interpeter Configured">
    Editörü açtığımda 'No Python Interpreter configured for the project' mesajı alıyorum. Ne yapmalıyım?
</h3>
<p>
    Bu muhtemelen PyCharm'da Python Yorumlayıcısı (Interpreter) seçerken bir sorun yaşadığın anlamına geliyor. 
    Bunu düzeltmek için çıkan mesajdaki 'Configure Python Interpreter' seçeneğine tıkla ve <a href="#setinterpreter">burada anlatılan</a> adımları izle. 'PyCharm Kurulumunu Test Etmek' bölümüne gelene kadar tüm adımları gerçekleştirmelisin.
</p>

<h3 data-toc-text="The default interactive shell is now zsh">
    Mac kullanıyorum ve terminali açtığımda <code>The default interactive shell is now zsh.
    To update your account to use zsh, please run `chsh -s /bin/zsh</code> mesajıyla karşılaşıyorum.
    Ne yapmalıyım? 
</h3>
<p>
    Bu zararsız bir bilgilendirme mesajı. Herhangi bir şey yapmana gerek yok, bu mesajı görmezden gelebilirsin.
</p>

<h3 data-toc-text="PyCharm won't open on a Mac">
    Mac kullanıyorum ve PyCharm'ı çalıştıramıyorum. Ne yapmalıyım?
</h3>
<p>
    MacOS'un eski bir versiyonunu kullanıyor olabilirsin. PyCharm'ın <a href="https://download.jetbrains.com/python/pycharm-community-2018.3.7.dmg?_ga=2.154013245.444478522.1586284244-1193515711.1586109339">bu versiyonunu</a> indirmeyi dene.
</p>

<h3 data-toc-text="JetBrains Runtime 11 & Windows 32-bit">
    "This installation contains JetBrains Runtime 11 which does not support Microsoft Windows 32-bit version" hatası alıyorum. 
    Ne yapmalıyım?
</h3>
<p>
    <p>
        PyCharm'ın 
        <a href="https://download.jetbrains.com/python/pycharm-community-2018.3.7.exe?_ga=2.144731825.444478522.1586284244-1193515711.1586109339">bu versiyonunu</a> indirmeyi dene.
    </p>
</p>

<p>
    <i>
        Sıkça sorulan sorular sizden gelen sorular doğrultusunda güncellenecektir.
    </i>
</p>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-74362126-1', 'auto');
  ga('send', 'pageview');

</script>

<script>
    function setWindows() {
        toggle("maconly", "none");
        toggle("winonly", "inline-block");
        const images = document.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            images[i].src = images[i].src.replace("macos/", "win/")
        }
        
        const launchers = document.getElementsByClassName("launcher");
        for (let i = 0; i < launchers.length; i++) {
            launchers[i].innerHTML = 'py';
        }

        const osSpiel = document.getElementById('osspiel');
        osSpiel.innerHTML = "Windows işletim sistemi kullandığınızı tespit ettik. &nbsp; &nbsp; <a href='#' onclick='setMacOS()'> Mac kullanıyorum </a>."

        const modifier = document.getElementById('modifier');
        modifier.innerHTML = "Alt";  
    }

    function setMacOS() {
        toggle("maconly", "inline-block");
        toggle("winonly", "none");
        const images = document.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            images[i].src = images[i].src.replace("win/", "macos/")
        }

        const launchers = document.getElementsByClassName("launcher");
        for (let i = 0; i < launchers.length; i++) {
            launchers[i].innerHTML = 'python3';
        }

        const osSpiel = document.getElementById('osspiel');
        osSpiel.innerHTML = "Mac kullandığınızı tespit ettik. &nbsp; &nbsp; <a href='#' onclick='setWindows()'> Windows işletim sistemi kullanıyorum </a>.";  

        const modifier = document.getElementById('modifier');
        modifier.innerHTML = "Command";       
    }

    function setUnknownOS() {
       const osSpiel = document.getElementById('osspiel'); 
       osSpiel.innerHTML = `
        Hangi işletim sistemini kullandığınızı tespit edemedik.
        Eğer MacOS kullanıyorsanız <a href="#" onclick="setMacOS()"> buraya tıklayın </a>, 
        eğer Windows kullanıyorsanız <a href="#" onclick="setWindows()">  buraya tıklayın </a>.
       `
    }

    function getOS() {
        if (navigator.appVersion.indexOf("Win") != -1) return "Windows"
        if (navigator.appVersion.indexOf("Mac") != -1) return "MacOS";
        return "Unknown";
    }

    function setOS() {
        const os = getOS();
        if (os === "MacOS") setMacOS();
        else if (os === "Windows") setWindows();
        else setUnkownOS();
    }

    function toggle(className, displayState) {
        var elements = document.getElementsByClassName(className)

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = displayState;
        }
    }


    window.onload = setOS;

</script>

</body>
