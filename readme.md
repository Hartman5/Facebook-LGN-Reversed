# Facebook LGN Params Reversed

All Facebook parameters based around LGN, such as lgnjs, lgndim, lgnrnd, etc. published here. This was stupid easy, hardly security, took me longer to write thi readme than to reverse it.

[Telegram](https://t.me/reversewasm)

## Want to Learn Reverse Engineering?

I've created a coursec alongside [@xTekky](https://github.com/xtekky)! [Reverser's Academy](https://whop.com/reverser-academy), join us and learn the ins and outs of `reverse engineering`. We offer a zero to hero education style, teaching you the basics, all the way up to WASM, JS reversal, Android reversal, etc. Even reversing **Hcaptcha** and **FunCaptcha**!

### LGNJS

Simply a timestamp of when the page was loaded, divided by `1e3` (1000). Very straightforward, no obfuscation or anything.

![image](https://github.com/Hartman5/Facebook-LGN-Reversed/blob/main/media/Screenshot%202024-12-08%20at%203.11.57%E2%80%AFPM.png?raw=true)

^^ One of Facebook's JS bundles, with the `lgnjs` parameter's algorithm highlighted.

### LGNDIM

This one was a bit more interesting. It encodes the window dimensions with `base64` (atob), I wrote an algorithm to spoof these values and encode it.

![image](https://github.com/Hartman5/Facebook-LGN-Reversed/blob/main/media/Screenshot%202024-12-08%20at%203.26.15%E2%80%AFPM.png?raw=true)

^^ Using an online base64 decoder, we can see the payload for `lgndim`, it's window dimensions.

![image](https://github.com/Hartman5/Facebook-LGN-Reversed/blob/main/media/Screenshot%202024-12-08%20at%203.14.45%E2%80%AFPM.png?raw=true)

^^ Facebook's JS algorithm for `lgndim` is just a simple `base64` encoder and fetching window dimensions.

![image](https://github.com/Hartman5/Facebook-LGN-Reversed/blob/main/media/Screenshot%202024-12-08%20at%203.17.11%E2%80%AFPM.png?raw=true)

^^ Identical response from Facebook's client, and my local JS.

### LGNRND

This one was the least complex, took no JS reversal at all. It makes a request to `login.php` and parses the `lgnrnd` parameter from the response using a simple regex.

![image](https://github.com/Hartman5/Facebook-LGN-Reversed/blob/main/media/Screenshot%202024-12-08%20at%203.15.12%E2%80%AFPM.png?raw=true)

^^ Facebook's homepage HTML response, with the `lgnrnd` parameter highlighted.