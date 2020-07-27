#!/usr/bin/env python

'''
FILE: compile.py
----------------
Template compiler that compiles all .html and .mdown template files in the 
TEMPLATE_DIR directory below (excluding .ptl files, which are partial templates), 
and outputs with the same filenames to the OUTPUT_DIR directory, but ending in
.html.

Example usage:

> python3 compile.py --output_dir docs

Compiles all template files using local paths, and outputs the compiled files to
the docs directory.  The compiled files in docs/ have the same directory structure
as in the TEMPLATE_DIR directory.

> python3 compile.py

Compiles all template files and outputs the compiled files to
the OUTPUT_DIR below.
----------------
'''

from util.bottle.bottle import SimpleTemplate
import json
import os.path
import sys
import markdown


TEMPLATE_DIR = 'templates'

# Use the --output_dir flag to optionally specify where compiled files go
if '--output_dir' in sys.argv:
    OUTPUT_DIR = sys.argv[sys.argv.index('--output_dir') + 1]
else:
    OUTPUT_DIR = 'docs'

# Verbose mode
VERBOSE = '--verbose' in sys.argv

'''
FUNCTION: compile
-----------------
Parameters: NA
Returns: NA

This function compiles all the html files (recursively)
from the templates dir into the output folder. Folder
hierarchy is preserved.
-----------------
''' 
def compile():
    # Compile all templates
    templateFilePaths = getTemplateFilePaths('')
    print("\nCompiling:\n----------")
    for templateFilePath in templateFilePaths:
        if VERBOSE:
            print("Compiling " + templateFilePath + "...")
        outputPath = compileTemplate(templateFilePath)
        if VERBOSE:
            print(templateFilePath + " -> " + outputPath)

    print("\nDONE.\n")

'''
FUNCTION: getTemplateFilePaths
------------------------------
Parameters:
    templateRoot - the folder within TEMPLATE_DIR to get file paths for

Returns: a list of .html and .mdown template file paths from within the given 
directory within TEMPLATE_DIR.  Ignores .ptl files, which are partial templates.
------------------------------
'''
def getTemplateFilePaths(templateRoot):
    paths = []
    templateDirPath = os.path.join(TEMPLATE_DIR, templateRoot)
    for fileName in os.listdir(templateDirPath):
        filePath = os.path.join(templateRoot, fileName)
        templateFilePath = os.path.join(TEMPLATE_DIR, filePath)

        # Recurse if it's a directory, add if it's a template file
        if os.path.isdir(templateFilePath):
            childPaths = getTemplateFilePaths(filePath)
            for childPath in childPaths:
                paths.append(childPath)
        elif isTemplateFile(fileName):
            paths.append(filePath)

    return paths

'''
FUNCTION: isTemplateFile
------------------------
Parameters:
    fileName - the fileName to check is a template file

Returns: whether or not the given filename is a template file (ends with .html
or .mdown)
------------------------
'''
def isTemplateFile(fileName):
    extension = os.path.splitext(fileName)[1]
    return extension == '.html' or extension == '.mdown' or extension == '.md'

'''
FUNCTION: compileTemplate
-------------------------
Parameters:
    relativePath - the path within TEMPLATE_DIR of the template file to compile

Returns: the path of the saved, compiled template file.

Compiles the given template file.  Saves the compiled template to relativePath 
in the OUTPUT_DIR directory.  Can compile both HTML and Markdown template files.
If a Markdown file is provided, it is converted to HTML and then rendered within
the template specified in the markdown's rebase field, if any, or otherwise
just rendered on its own.
-------------------------
'''
def compileTemplate(relativePath):
    pathToRoot = getPathToRootFrom(relativePath)
    filePath = os.path.join(TEMPLATE_DIR, relativePath)
    fileContents = open(filePath, encoding='utf8').read()

    compiledHtml = ''

    if relativePath.endswith('html'):
        # HTML

        # Just render the HTML template
        compiledHtml = SimpleTemplate(fileContents).render(pathToRoot=pathToRoot)
        compiledHtml = compiledHtml.encode('utf8')
    elif relativePath.endswith('mdown') or relativePath.endswith('md'):
        suffix = relativePath.split('.')[-1]
        # Markdown

        # Convert Markdown -> HTML
        fileContents = fileContents.replace("{{pathToRoot}}", pathToRoot)
        md = markdown.Markdown(extensions=['fenced_code', 'meta', 'attr_list', 'toc'])
        html = md.convert(fileContents)

        # If the markdown file specifies a template to be rendered within,
        # use that.  Otherwise just use the compiled markdown file itself
        if 'template' in md.Meta:
            templateText = open(md.Meta['template'][0], encoding='utf8').read()
            attributes = {key:"\n".join(md.Meta[key]) for key in md.Meta}
            compiledHtml = SimpleTemplate(templateText).render(pathToRoot=pathToRoot,
            base=html, filePath=filePath, **attributes)
        else:
            compiledHtml = html

        # Encode the HTML and make its rendered path .html instead of .mdown
        compiledHtml = compiledHtml.encode('utf8')
        relativePath = relativePath[:len(relativePath) - len(suffix)] + "html"
        if VERBOSE:
            print(relativePath)

    # Save HTML to file
    relativePath = os.path.join(OUTPUT_DIR, relativePath)
    makePath(relativePath)
    open(relativePath, 'wb').write(compiledHtml)
    return relativePath

'''
FUNCTION: getPathToRootFrom
---------------------------
Parameters:
    relativePath - the path to start at when calculating the path to the root

Returns: the relative path to the root directory from the given relativePath.
    Concatenates "../" for each level down from the root.
------------------------------
'''
def getPathToRootFrom(relativePath):
    depth = depthFromRoot(relativePath)
    pathToRoot = ''.join(['../' for i in range(depth)])
    return pathToRoot

'''
FUNCTION: depthFromRoot
-----------------------
Parameters:
    filePath - the path for which to calculate the depth

Returns: the number of levels filePath is from the root level.
    E.g. 'index.html' -> 0
         'stuff/index.html' -> 1
         'stuff/moreStuff/index.html' -> 2
-----------------------
'''
def depthFromRoot(filePath):
    rootPath = os.path.dirname(filePath)
    if len(rootPath) == 0: return 0
    return depthFromRoot(rootPath) + 1
    
'''
FUNCTION: makePath
------------------
Parameters:
    path - the path to make directories for

Returns: NA

Creates all needed directories in this path for the directory path to exist.
E.g. if path = 'stuff/moreStuff/index.html' then the stuff and moreStuff
directories would be created if they did not already exist.
------------------
'''
def makePath(path):
    dirPath = os.path.dirname(path)
    if dirPath != '' and not os.path.exists(dirPath):
        os.makedirs(dirPath)


if __name__ == '__main__':
    compile()
