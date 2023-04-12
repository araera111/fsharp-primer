---
title: "値の表示"
description: "fsharpの値の表示について学びます。"
---

## 値の表示

先にTypeScriptの例を見ましょう。

```javascript
const name = "Taro";
console.log(name); // Taro
```

F#では、下記のようになります。

```fsharp
let name = "Taro"
printfn "%s" name // Taro
```

F#では、```printfn```を使います。
```%s```は、文字列を表します。

他にも型に応じて種類があります。

とりあえず、型に応じていい感じに表示したいときは、```%A```を使います。

```fsharp
let name = "Taro"
let age = 20
let address = "Tokyo"
let user = { Name = name; Age = age; Address = address }
printfn "%A" name // "Taro"
printfn "%A" age // 20
printfn "%A" address // "Tokyo"
printfn "%A" user // { Name = "Taro"; Age = 20; Address = "Tokyo" }
```

stringだろうが、intだろうが、オブジェクトだろうが、いい感じに表示してくれます。

[他の書式指定子はこちら](https://learn.microsoft.com/ja-jp/dotnet/fsharp/language-reference/plaintext-formatting)

## まとめ

* F#では、```printfn```を使います。
* ```%s```は、文字列を表します。
* いい感じに表示したいときは```%A```を使います。
