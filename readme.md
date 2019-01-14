# jQuery Simple Slide

シンプルなjQueryを利用したスライド

自動スライドも追加

レスポンシブル対応してます。

[サンプル](https://gp-standard.com/%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%AAjquery%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%9F%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89/)


## 使用方法

slide.css , jquery(3.*) , slide.jsを読み込む

```
   <link rel="stylesheet" href="asset/css/slide.css">

    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
    <script src="asset/js/slide.js"></script>
```

slide.runで開始
```
<script>
slide.run({
    tempo : 2000, // スライド切り替えのタイミング、tempo 0で自動スライド中止
});
</script>
```
