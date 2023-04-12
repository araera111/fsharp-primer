---
title: "変数"
description: "fsharpの変数について学びます。"
---

まず、TypeScriptでは下記の3つの変数があります。

## TypeScriptの場合

```javascript
var name = "Taro";
let age = 20;
const address = "Tokyo";
```

varは再代入可、巻き上げあり。  
letは再代入可、巻き上げなし。  
constは再代入不可、巻き上げなし。  
※ただし、constはオブジェクトの場合は再代入不可ではない。

## F#の場合

```fsharp
let name = "Taro"
let age = 20
let address = "Tokyo"
```

F#では、letを使います。
再代入できません。

もし再代入したいときは、下記のようにします。

```fsharp
let mutable name = "Taro"
name <- "Jiro"
```

基本的にはimmutableで、再代入したい場合は、mutableを使います。
immutableにしておいたほうが、バグが発生しにくいです。

## まとめ

* TypeScriptの場合は、var, let, constがあります。
* F#の場合は、letを使います。
* F#で再代入したいときは```mutable```を使います。