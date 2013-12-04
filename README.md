bizcademy_editor
================

Install Node.js with Homebrew
-----------------------------

1. Install Xcode from the Mac app store
2. Once Xcode installs, open it and go to preferences and choose the download tab.
3. Install the command line tools. This may require you to log in or create a free Apple developer account
4. Visit http://mxcl.github.io/homebrew/ and follow the instructions for installing homebrew
5. If everything works fine install nodejs with:

```brew install node```

Running the App
---------------

1. Install all required node modules first with:

```npm install```

2. Than run the nodeJS Server with:

```node server.js```

3. You should get the following output:
```connect.multipart() will be removed in connect 3.0

visit https://github.com/senchalabs/connect/wiki/Connect-3.0 for alternatives

connect.limit() will be removed in connect 3.0

App listening on port 8080```

4. Now go to your browser and visit:

```http://localhost:8080/```
    
Structure
---------

All frontend files are in public/
