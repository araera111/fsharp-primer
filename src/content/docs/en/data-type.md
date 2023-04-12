---
title: "データ型"
description: "fsharpのデータ型について学びます。"
---

## データ型

FsharpとJavaScriptで同じデータ型は以下

* 真偽値

Fsharpの場合

```fsharp:sample.fs
let isTrue = true
let isFalse = false
```

JavaScriptの場合

```javascript:sample.js
const isTrue = true;
const isFalse = false;
```

一緒ですね。

※ javascriptでは!trueとできますが、fsharpでは!trueなどで反転できません。
fsharpの場合は、not trueと書きます。


## string

Fsharpの場合

```fsharp:sample.fs
let name = "Taro"
```

JavaScriptの場合

```javascript:sample.js
const name = "Taro";
```

一緒ですね。

## int

Fsharpの場合

```fsharp:sample.fs
let age = 20
```

JavaScriptの場合

```javascript:sample.js
const age = 20;
```

表記は一緒ですが、fsharpでは、intというデータ型があります。
TypeScriptでは、numberというデータ型があります。

* int
* int8
* int16
* int32
* int64
* uint8
* uint16
* uint32
* uint64
* nativeint
* unativeint
* float32
* float64