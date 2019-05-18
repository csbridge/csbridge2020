# CSBridge website master copy

When making a new course, please use this repository as a template.

1. Clone this repository.

    ```git clone git@github.com:csbridge/csbridge.github.io.git```

2. Create a new repository under the ```csbridge``` GitHub, e.g. ```csbridge2019koc```.

3. Change the ```origin``` on your local repo to point to this new GitHub repo. Then push to GitHub.

    ```git remote origin remove```

    ```git remote add origin <ssh or html repo link>```

    ```git push origin master```

4. Enable GitHub pages on your new repo:

    1. Go to setting on the GitHub page for your repo.

    2. Change the 'Source' section of the GitHub pages to point to ```master branch/docs folder```.

    3. Check ```Enforce HTTPS.```

    4. Fill in the 'Custom domain' field with your desired custom domain (e.g., koc.csbridge.org). Note that this automatically populates the CNAME file in ```docs/CNAME```. Do not delete this.

        Note: If you do not have a custom domain, contact the domain manager. We can create this on our Domain manager (If you are a domain manager, here are steps to create the ```koc``` subdomain: (1) go to DNS management, (2) add a CNAME record with domain ```koc``` and value ```csbridge.github.io```)


5. Now you can update the website!

    1. Change any file templates in ```templates/```

    2. ```python compile.py``` creates full html pages underneath the ```docs/``` folder.

    3. Any slides or starter code changed in the top directory are symlinked to change the actual files in ```docs/```.

    4. After pushing to GitHub, it may take a few minutes for the changes to appear on the CSBridge website.
