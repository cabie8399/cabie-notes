# **六角 - 認識 Webpack 一點都不難**

[https://www.youtube.com/watch?v=fDWwaY3QMKk&ab_channel=%E5%85%AD%E8%A7%92%E5%AD%B8%E9%99%A2](https://www.youtube.com/watch?v=fDWwaY3QMKk&ab_channel=%E5%85%AD%E8%A7%92%E5%AD%B8%E9%99%A2)

- [Webpack 與 Gulp](https://www.dropbox.com/scl/fi/d2o1pojf6x2c13h9cr00m/Webpack-Gulp.paper?rlkey=5erz3thbq2i6h3e2pdi06zm9n&dl=0)



# **Webpack 介紹**

![image.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image.png)



![image 1.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%201.png)



- 所有用到的檔案都會跟main.js有關聯，然後再透過webpack編譯

![image 2.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%202.png)





# 安裝

```html
npm init
```

![image 3.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%203.png)





# 進入點

![image 4.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%204.png)







# 簡單範例

![image 5.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%205.png)

![image 6.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%206.png)



- 新增webpack.config.js

- entry: 進入點，設定是main.js

- filename : 輸出的檔名

![image 7.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%207.png)



- 8L 

![image 8.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%208.png)



- npm run build

![image 9.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%209.png)



- 可以看到檔案輸出到./dist下面

![image 10.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2010.png)





- 在dist下面新增index.html

- 10L : 且將main.bundle.js加進來

![image 11.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2011.png)







![image 12.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2012.png)

- 會直接起一個web server，並且可以看到有打印

![image 13.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2013.png)





# 將CSS也加入專案

- 使用[css-loader](https://github.com/webpack-contrib/css-loader)，因為nodejs並不認識.css .sass這些檔案，只認得.js

![image 14.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2014.png)



```bash
npm install --save css-loader
```



![image 15.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2015.png)

![image 16.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2016.png)



- npm install style-loader

![image 17.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2017.png)





- 在src下面

![image 18.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2018.png)

- 2L

![image 19.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2019.png)



```bash
npm run build
```



![image 20.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2020.png)





# sass引入

- [sass](https://github.com/webpack-contrib/sass-loader)

![image 21.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2021.png)



![image 22.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2022.png)



- 新增rules

![image 23.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2023.png)



![image 24.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2024.png)



![image 25.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2025.png)



![image 26.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2026.png)









# dev vs prod

![image 27.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2027.png)









# Webpack的web server

- 修改code就可以自動編譯



![image 28.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2028.png)



- 安裝

![image 29.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2029.png)



![image 30.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2030.png)



- 做設定

![image 31.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2031.png)

- 8L

![image 32.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2032.png)



![image 33.png](./六角%20-%20認識%20Webpack%20一點都不難-assets/image%2033.png)












