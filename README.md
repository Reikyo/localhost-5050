# localhost-5050

This micro-server application allows for files on your machine to be viewed in a web browser.

## Run from pre-compiled executable
Download the appropriate executable file for your system here (alternative instructions for building executables from scratch are shown below):

- [Windows](https://www.dropbox.com/scl/fi/goscfk0d3hwu6dj84bhc4/localhost-5050-win.exe?rlkey=zp9bdbv5ykfjdd34257yjxgza&dl=0)
- [macOS](https://www.dropbox.com/scl/fi/4m1wojzl4ovruscsk1jy6/localhost-5050-macos?rlkey=fybeyxcoqweqg3v5r90o228kv&dl=0)
- [Linux](https://www.dropbox.com/scl/fi/pwsgednn4bk8azjo2h9w3/localhost-5050-linux?rlkey=dq3qxn6nytlsrmjjg1f4guwtl&dl=0)

(*Note that, despite being compiled and available, only the macOS executable has been tested.*)

Simply place the executable in the directory you want access to, then double-click it to launch a terminal application. You can then see `my-directory/my-file` at `http://localhost:5050/my-file`. Press `Ctrl-C` or close the terminal to quit.

If the default port number 5050 is in use by some other application, then you will get an error message when you try to run. Quit the application, then try another 4-digit number by modifying the executable name itself and running again.

## Run from downloaded code
If you would like to download and run the raw code itself via Node.js in your terminal, then clone this repo to a location of your choice, and do the following in the terminal at that location to install:

```
$ npm install
```

Then run as follows, where you may change the number in the file name to run on an alternative port to the default 5050:
```
$ node localhost-5050.js
```

## Create executable
To create the executable files yourself after cloning this repo, first install [pkg](https://www.npmjs.com/package/pkg) (either local to the localhost-5050 directory or globally if you wish to use again for other things), then do the following:

```
$ pkg .
```

This will create three executable files (Windows, macOS, Linux) in the `build` directory, which will be created if it doesn't already exist. You can adjust which executables are made and where they are stored by modifying the `pkg` field in `package.json`.
