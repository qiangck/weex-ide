# Weex IDE

## To Use

### Start With Source

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/alibaba/weex_toolchain
# Go into the repository
cd weex_toolchain/IDE
# Install dependencies and run the app
npm install && npm start
```

### Build App/Installer

By default, the project will build an electron app and an installerd for OSX(darwin x64), if you want to build for anthor platform, please see [electron-packager](https://www.npmjs.com/package/electron-packager) for help.

```bash
npm run build
```

Then you'll find `package/Weex IDE.dmg`.

#### License [CC0 (Public Domain)](LICENSE.md)
