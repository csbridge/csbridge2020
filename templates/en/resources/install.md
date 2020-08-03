template: templates/en/resources/faqTemplate.ptl
title: Installing PyCharm

<p id="osspiel" class="alert alert-warning"></p>


You will be writing your code on your computer using an application called [PyCharm](https://www.jetbrains.com/pycharm/). PyCharm is what is known as an IDE, or _Integrated Development Environment_, which means that it allows us to edit our code, browse our files, run our programs and debug them, all in the same place. It's one of the most popular Python IDEs in the world, and used extremely commonly in industry. This handout is intended to take you through installing PyCharm on your own computer.


## Installing Python
In order to be able to run Python programs on your computer, with or without PyCharm, you first need to install a _Python Interpreter_. An interpreter is a program that is capable of reading a _.py_ file that you have written, and translating the Python code in that file to instructions that your computer can easily execute.  When downloading this on Mac and Windows, this also automatically includes the _Tkinter_ library, which allows us to draw graphics, and which we'll be learning about later in the course.  Begin by downloading Python:

<ul>
    <li class="maconly">
        <a href="https://www.python.org/ftp/python/3.8.1/python-3.8.1-macosx10.9.pkg">
            Mac Installer
        </a>
    </li>
    <li class="winonly">
        <a href="https://www.python.org/ftp/python/3.8.1/python-3.8.1-amd64.exe">
            Windows 64-bit installer
        </a>
        (If you're using a relatively new Windows computer, download this
        file)
    </li>
    <li class="winonly">
        <a href="https://www.python.org/ftp/python/3.8.1/python-3.8.1.exe">
            Windows 32-bit installer
        </a>
        (If you're using an older Windows computer, download this file)
    </li>
</ul>

<h3 class="maconly" data-toc-skip>Installing Python on a Mac</h3>
<p class="note maconly">
    Macs come with a version of Python already installed, but this is an older version of Python. We use the newest version of Python, so make sure to follow these instructions even if you think you already have Python installed.  To install Python, simply open the downloaded installer file 
    and follow the default instructions.
</p>

<h3 class="winonly" data-toc-skip>Installing Python on Windows</h3>
<p class="winonly">
    Open the downloaded file. Before installing, there should be an option that says "Add Python 3.8 in PATH". <b>Make sure to check this box.</b> Then, continue installing normally.
</p>

---

## Installing and Testing PyCharm

### Installation

To get started, download and install the community version of PyCharm:

<ul>
    <li class="maconly">
        <a href="https://download.jetbrains.com/python/pycharm-community-2020.1.4.dmg">
            Mac Download
        </a>
        (Open the downloaded <code>.dmg</code> file and drag PyCharm into
        your Applications folder)
    </li> 
    <li class="winonly">
        <a href="https://download.jetbrains.com/python/pycharm-community-2020.1.4.exe">
            Windows Download
        </a>
        (Open the downloaded <code>.exe</code> file and install PyCharm,
        using all the default options.)
    </li>
</ul>

Once PyCharm finishes installing, go ahead and run the program.  Once the program launches, you will be taken to a welcome screen that looks like this (note: if it first walks you through customizing PyCharm, just click "Skip Remaining and Set Defaults" in the bottom-left corner):

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img 
            src="{{pathToRoot}}img/pycharm/welcomescreen.png" 
            style="width:100%"
            alt="PyCharm Welcome Screen"
        />
    </div>
</div>
<br />

Click 'Configure' and then open PyCharm's settings, like so:
{: #configure_interpreter}

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <div class="maconly">
            <img 
                src="{{pathToRoot}}img/pycharm/welcomescreen-config.png"
                style="width:100%"
                alt="PyCharm Welcome Screen, with 'Configure->Preferences' highlighted"
            />
        </div>
        <div class="winonly">
            <img 
                src="{{pathToRoot}}img/pycharm/welcomescreen-config-win.png"
                style="width:100%"
                alt="PyCharm Welcome Screen, with 'Configure->Preferences' highlighted"
            />
        </div>
    </div>
</div>
<br />

In the Preferences window, click 'Project Interpreter', open the dropdown menu, and click 'Show All':
{: #setinterpreter}

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img 
            src="{{pathToRoot}}img/pycharm/preferences-showinterpreters.png"
            style="width:100%"
            alt="PyCharm Preferences Window, in the 'Project Interpreter' Pane, with 'Show All' highlighted in the dropdown menu" />
    </div>
</div>
<br />

In the following window, click the plus icon:

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <div class="maconly">
            <img src="{{pathToRoot}}img/pycharm/addnewinterpreter.png"
                style="width:100%"
                alt="PyCharm Interpreter List, with the plus button in the bottom left circled" />
        </div>
        <div class="winonly">
            <img src="{{pathToRoot}}img/pycharm/addnewinterpreter-win.png"
            style="width:100%"
            alt="PyCharm Interpreter List, with the plus button in the top right circled" />
        </div>
    </div>
</div>
<br />

Click 'System Interpreter' in the sidebar. Depending on whether you've installed other versions of Python before, Python 3.8 may already be selected in the dropdown menu. If not, select Python 3.8 and then click 'OK' and 'OK' again:

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img src="{{pathToRoot}}img/pycharm/addsysteminterpreter.png"
            style="width:100%"
            alt="Adding the system interpreter in PyCharm" />
    </div>
</div>
<br />

You should now be on a window that looks like this (although the contents of your list might look different):

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img src="{{pathToRoot}}img/pycharm/interpreterafterselection.png"
            style="width:100%"
            alt="Interpreter window after selecting system interpreter" />
    </div>
</div>
<br />


Click 'OK' again to be taken back to the welcome page. You're now ready to test PyCharm!

---

### Testing PyCharm

PyCharm models a program as a 'project', which consists of one or more Python files, as well as any additional resources like images or text files. To get you familiar with working with and running programs in PyCharm, we've provided a sample project, which you can download [here]({{pathToRoot}}starter/pycharm_intro.zip). To test out this project, and to gain familiarity with the PyCharm environment, download the sample project <span style="display: inline-block;" class="winonly">(on Windows, you'll need to manually unzip it by opening it in Windows Explorer and selecting 'Extract All')</span> and open it in PyCharm (using the 'open' option on the first screen). **Whenever you open projects in PyCharm, open the folder directly _containing the files you want to edit_ as opposed to just the files themselves.**  For instance, in this case make sure to select the folder "pycharm_intro" to open in PyCharm.  Upon opening the project, you should be greeted by a window that looks like this:

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img src="{{pathToRoot}}img/pycharm/pycharmblank.png"
            style="width:100%"
            alt="Blank PyCharm Window" />
    </div>
</div>
<br />

Click 'Project' in the top left to open the file explorer, and open `intro.py` to pull up the editor:

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img src="{{pathToRoot}}img/pycharm/pycharmeditor.png"
            style="width:100%"
            alt="PyCharm Editor" />
    </div>
</div>
<br />

You aren't required to read or understand this code (although you will be able to by the end of the course!) but note that this editor is where you'll be writing all your code for the class. Now, to run your program, click 'Terminal' in the bottom left corner, which will pull up a new terminal pane in your PyCharm window:

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <img src="{{pathToRoot}}img/pycharm/pycharmterminal.png" 
             style="width:100%"
             alt="PyCharm Terminal" />
    </div>
</div>
<br />

We'll talk more about the terminal later in the course, but for now, know that the terminal is how you'll be running your Python programs throughout the course. To run your first Python program, type this into the terminal and press enter:

<div class="text-center">
    <code><span class="launcher">python3</span> intro.py</code>
</div>
<br />

You should see output that looks like this:

<div class="maconly">
    <img src="{{pathToRoot}}img/pycharm/firstrun.png"
        style="width:100%"
        alt="First run output" />
</div>
<div class="winonly">
    <img src="{{pathToRoot}}img/pycharm/firstrun-win.png"
        style="width:100%"
        alt="First run output" />
</div>
<br />

Now, type the following command into the terminal:

<div class="text-center">
    <code><span class="launcher">python3</span> intro.py &lt;YOUR NAME HERE&gt; </code>
</div>
<br />

For example, if your name is Nick, you'd type <code><span class="launcher">python3</span> intro.py Nick</code>. You can type your full name if you'd prefer. You should now see output like this:

<div class="maconly">
    <img src="{{pathToRoot}}img/pycharm/secondrun.png"
        style="width:100%"
        alt="Second run output" />
</div>
<div class="winonly">
    <img src="{{pathToRoot}}img/pycharm/secondrun-win.png"
        style="width:100%"
        alt="Second run output" />
</div>
<br />

Congratulations! Your PyCharm installation is working so far!

### Installing Graphics
The graphics library that we will be using for the course should have automatically been installed for you when you installed Python.  However, it relies on one other tool that you'll need to install, called "Pillow", which contains code to manipulate images. In order for be able to work with images, you need to install Pillow on your machine.  To install Pillow, you should first open a "terminal" window: the easiest way to do this is to use the “Terminal” tab within PyCharm on the lower-left (next to the “Run” and “Python Console” tabs). Type the following command below into the Terminal. (Note that "Pillow" starts with an uppercase P.):

<div class="text-center">
    <code><span class="launcher">python3</span> -m pip install Pillow==7.1.1</code>
</div>
<br />

If it prints a bunch of output followed by "Successfully installed Pillow-7.1.1" at the end, your installation should be complete.  You're ready to program!

---

## Frequently Asked Questions

### Can I use another version of Python?
Our strong recommendation is to use Python 3.8, which can be installed in parallel with other versions of Python. This is the only version of Python we'll be supporting in this class.

### Can I use an editor that isn't PyCharm?
If there's another environment that you're more comfortable with, you may use it, but the course staff will only provide support for issues in PyCharm. You must not modify any configuration files provided in assignment starter code. 

<h3 data-toc-text="Can't open file">
    When I try to run my code, I'm getting an error saying <code>can't open file intro.py: No such file or directory</code>! What does this mean?
</h3>

This most often happens when you open the incorrect file or folder in PyCharm. In this case, make sure to open the `pycharm_intro` folder that _directly_ contains `intro.py`, rather than `intro.py` itself or a folder containing `pycharm_intro`. On a Windows computer, you may have a folder called `pycharm_intro` with another folder inside it called `pycharm_intro`. Make sure to open the inner folder.

To correct this error, open the 'File' menu and click 'Open'. Then, navigate to the correct `pycharm_intro` folder and open it. 

To verify that you are in the correct folder, type <span class="maconly"><code>ls</code> (that's a lowercase 'L')</span> <span class="winonly"><code>dir</code></span> into your terminal (the same place you type <code><span class="launcher">python3</span> intro.py &lt; YOUR NAME HERE &gt; </code>).  This will show you a list of all the files in that folder, and <code>intro.py</code> should be in this list.

<h3 data-toc-text="No Python Interpeter Configured">
    I'm getting a 'No Python Interpreter configured for the project' message when I open a file! What should I do?
</h3>

This is likely caused by an issue with how you set up the interpreter.  To fix this, click 'Configure Python Interpreter', and set up the interpreter by following <a href="#setinterpreter">these steps</a> until the 'Testing Pycharm' section.

<h3 data-toc-text="The default interactive shell is now zsh">
    I'm on a Mac and I'm getting a message saying <code>The default interactive shell is now zsh.
    To update your account to use zsh, please run `chsh -s /bin/zsh</code>. What should I do?
</h3>

That's just an innocuous message, don't worry about it!

<h3 data-toc-text="PyCharm won't open on a Mac">
    I'm on a Mac and PyCharm won't open! What should I do?
</h3>

You might be using a slightly older version of MacOS. Try installing [this version](https://download.jetbrains.com/python/pycharm-community-2018.3.7.dmg") of PyCharm instead.

<h3 data-toc-text="JetBrains Runtime 11 & Windows 32-bit">
    I'm getting an error window saying "This installation contains JetBrains Runtime 11
    which does not support Microsoft Windows 32-bit version"! What should I do?
</h3>

Try installing [this version](https://download.jetbrains.com/python/pycharm-community-2018.3.7.exe) of PyCharm instead.

__Course FAQs will be continually updated as we receive questions.__

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
        
        const launchers = document.getElementsByClassName("launcher");
        for (let i = 0; i < launchers.length; i++) {
            launchers[i].innerHTML = 'py';
        }

        const osSpiel = document.getElementById('osspiel');
        osSpiel.innerHTML = "We've detected you're using a Windows computer. &nbsp; &nbsp; <a href='#' onclick='setMacOS()'>I'm using a Mac</a>."
    }

    function setMacOS() {
        toggle("maconly", "inline-block");
        toggle("winonly", "none");

        const launchers = document.getElementsByClassName("launcher");
        for (let i = 0; i < launchers.length; i++) {
            launchers[i].innerHTML = 'python3';
        }

        const osSpiel = document.getElementById('osspiel');
        osSpiel.innerHTML = "We've detected you're using a Mac. &nbsp; &nbsp; <a href='#' onclick='setWindows()'>I'm using a Windows Machine</a>.";   
    }

    function setUnknownOS() {
       const osSpiel = document.getElementById('osspiel'); 
       osSpiel.innerHTML = `
        We weren't able to detect what operating system you're using. Click 
        <a href="#" onclick="setMacOS()"> here </a> if you're using a Mac and 
        <a href="#" onclick="setWindows()"> here </a> if you're using a Windows machine.
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
