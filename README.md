# Ip range checker

##  Features
* You can add ips to file -> ips.txt
* You can add ranges to file -> ranges.txt
* You get ips match in your ranges
* In ban.txt you will get ips that not matched and matched in the range

## General settings

1. Build project
``` bash
$ npm run build
```
2. Create 4 txt files
``` bash
$ touch ./build/ranges.txt && touch ./build/ips.txt && touch ./build/match.txt && touch ./build/not-match.txt
```
3. ranges.txt
> 192.168.1.1, 193.168.1.1<br>
> 200.167.1.1, 203.145.4.4

4. ips.txt
> 192.169.1.1,<br>
> 192.170.1.1

5.
``` bash
$ cd ./build && node index.js
```

<br />

---

➡️ [more projects...](https://github.com/olegtemek)

---
