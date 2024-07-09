<div align="center">
<p>
   <a href="https://nodei.co/npm/@spany/atlas.js/"><img src="https://nodei.co/npm/@spany/atlas.js.png?downloads=true&stars=true" alt="NPM info" /></a>
 </p>
<p>
    <a href="https://www.npmjs.com/package/@spany/atlas.js"><img src="https://img.shields.io/npm/dt/%40spany%2Fatlas.js" alt="Download" /></a>
    <a href="https://www.npmjs.com/package/@spany/atlas.js"><img src="https://img.shields.io/npm/dw/%40spany%2Fatlas.js" alt="Download" /></a>
    <a href="https://www.npmjs.com/package/@spany/atlas.js"><img src="https://img.shields.io/npm/dm/%40spany%2Fatlas.js" alt="Download" /></a>
    <a href="https://www.npmjs.com/package/@spany/atlas.js"><img src="https://img.shields.io/npm/l/%40spany%2Fatlas.js" alt="License" /></a>
 </p>
</div>

## What does this module do?
- You can easily use and benefit from many functions in this module.
- This module provides you with convenience.

## What's new in 0.3.4?
- **1 New functions added.**
- Function: **Depremler**

# 🔧 Installation
- You can download `@spany/atlas.js` in powershell with this code.
```js
npm install @spany/atlas.js
```

# 🧱 Basic Usage
Add the following "checkUpdate" function to your bot to be notified instantly about the innovations in the module.

## 🛠️ Check Update
- Code: 
```js
const { checkUpdate } = require("@spany/atlas.js")

client.on("ready", async() => {
   await checkUpdate()
})
```
- Result if the module is out of date (Automatically logs to the console.):
```shell
@spany/atlas.js is out of date!
Remember to use "npm update @spany/atlas.js" ( version -> latest version )
```

# Features
```js
const Atlas = require('@spany/atlas.js');

// Example: isValidHexColor
Atlas.isValidHexColor("#fbb11b") // True
Atlas.isValidHexColor("123456") // False

// Example: isImageUrl
Atlas.isImageUrl("İmageUrl") // True
Atlas.isImageUrl("Hi!") // False

const imageUrl = Atlas.isImageUrl("İmageUrl")
console.log(imageUrl) // True or False

// Example: Depremler/Erathquake
const depremler = Atlas.sonDepremler(3)
console.log(depremler) 
```
