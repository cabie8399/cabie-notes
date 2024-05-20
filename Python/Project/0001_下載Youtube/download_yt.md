# 讀取 Youtube 影片資訊


```python
import ssl
from pytube import YouTube # type: ignore

# 原本 pytube 可以正常使用，但因為 Youtube API 更新安全性原則，所以原本程式碼都需要加入下面這段 ssl，不然就會拋出錯誤訊息
ssl._create_default_https_context = ssl._create_stdlib_context

yt = YouTube('https://www.youtube.com/watch?v=R93ce4FZGbc')   # baby shark 的音樂
print(yt.title)           # 影片標題
print(yt.length)          # 影片長度 ( 秒 )
print(yt.author)          # 影片作者
print(yt.channel_url)     # 影片作者頻道網址
print(yt.thumbnail_url)   # 影片縮圖網址
print(yt.views)           # 影片觀看數
```

    Baby Shark
    116
    Pinkfong
    https://www.youtube.com/channel/UCcdwLMPsaU2ezNSJU1nFoBQ
    https://i.ytimg.com/vi/R93ce4FZGbc/hq720.jpg?sqp=-oaymwEXCNUGEOADIAQqCwjVARCqCBh4INgESFo&rs=AOn4CLAhmlP1_7YTZPxmSeoXHyFCYuWfLQ
    755831197
    

# 下載 Youtube 影片為 mp4

- 使用 get_highest_resolution() 方法，下載最高畫質的影片。


```python
import ssl
import os
from pytube import YouTube
ssl._create_default_https_context = ssl._create_stdlib_context

download_path = 'C:/Users/arif1/Downloads'
youtube_url = 'https://www.youtube.com/watch?v=Y8JFxS1HlDo&ab_channel=STARSHIP'

os.chdir(download_path)
yt = YouTube(youtube_url)
print('download...')

# get_highest_resolution : 下載的畫質
# filename : 若沒設定就預設下載最高畫質
# yt.streams.filter().get_highest_resolution('720p').download(filename='love dive.mp4')
yt.streams.filter().get_highest_resolution().download()


print('Finished!')
```

    download...
    Finished!
    

# 影片支援哪些畫質


```python
import ssl
import os
from pytube import YouTube
ssl._create_default_https_context = ssl._create_stdlib_context

download_path = 'C:/Users/arif1/Downloads'
youtube_url = 'https://www.youtube.com/watch?v=Y8JFxS1HlDo&ab_channel=STARSHIP'

yt = YouTube(youtube_url)
print(yt.streams.all())
```

    [<Stream: itag="18" mime_type="video/mp4" res="360p" fps="24fps" vcodec="avc1.42001E" acodec="mp4a.40.2" progressive="True" type="video">, <Stream: itag="313" mime_type="video/webm" res="2160p" fps="24fps" vcodec="vp9" progressive="False" type="video">, <Stream: itag="271" mime_type="video/webm" res="1440p" fps="24fps" vcodec="vp9" progressive="False" type="video">, <Stream: itag="137" mime_type="video/mp4" res="1080p" fps="24fps" vcodec="avc1.640028" progressive="False" type="video">, <Stream: itag="248" mime_type="video/webm" res="1080p" fps="24fps" vcodec="vp9" progressive="False" type="video">, <Stream: itag="136" mime_type="video/mp4" res="720p" fps="24fps" vcodec="avc1.4d401f" progressive="False" type="video">, <Stream: itag="247" mime_type="video/webm" res="720p" fps="24fps" vcodec="vp9" progressive="False" type="video">, <Stream: itag="135" mime_type="video/mp4" res="480p" fps="24fps" vcodec="avc1.4d401e" progressive="False" type="video">, <Stream: itag="244" mime_type="video/webm" res="480p" fps="24fps" vcodec="vp9" progressive="False" type="video">, <Stream: itag="134" mime_type="video/mp4" res="360p" fps="24fps" vcodec="avc1.4d401e" progressive="False" type="video">, <Stream: itag="243" mime_type="video/webm" res="360p" fps="24fps" vcodec="vp9" progressive="False" type="video">, <Stream: itag="133" mime_type="video/mp4" res="240p" fps="24fps" vcodec="avc1.4d4015" progressive="False" type="video">, <Stream: itag="242" mime_type="video/webm" res="240p" fps="24fps" vcodec="vp9" progressive="False" type="video">, <Stream: itag="160" mime_type="video/mp4" res="144p" fps="24fps" vcodec="avc1.4d400c" progressive="False" type="video">, <Stream: itag="278" mime_type="video/webm" res="144p" fps="24fps" vcodec="vp9" progressive="False" type="video">, <Stream: itag="139" mime_type="audio/mp4" abr="48kbps" acodec="mp4a.40.5" progressive="False" type="audio">, <Stream: itag="140" mime_type="audio/mp4" abr="128kbps" acodec="mp4a.40.2" progressive="False" type="audio">, <Stream: itag="249" mime_type="audio/webm" abr="50kbps" acodec="opus" progressive="False" type="audio">, <Stream: itag="250" mime_type="audio/webm" abr="70kbps" acodec="opus" progressive="False" type="audio">, <Stream: itag="251" mime_type="audio/webm" abr="160kbps" acodec="opus" progressive="False" type="audio">]
    

    C:\Users\arif1\AppData\Local\Temp\ipykernel_13496\487119078.py:10: DeprecationWarning: Call to deprecated function all (This object can be treated as a list, all() is useless).
      print(yt.streams.all())
    

# 回傳目前下載影片的進度


```python
import ssl
import os
from pytube import YouTube
ssl._create_default_https_context = ssl._create_stdlib_context

download_path = 'C:/Users/arif1/Downloads'
youtube_url = 'https://www.youtube.com/watch?v=Y8JFxS1HlDo&ab_channel=STARSHIP'

def onProgress(stream, chunk, remains):
    total = stream.filesize                     # 取得完整尺寸
    percent = (total-remains) / total * 100     # 減去剩餘尺寸 ( 剩餘尺寸會抓取存取的檔案大小 )
    print(f'下載中… {percent:05.2f}', end='\r')  # 顯示進度，\r 表示不換行，在同一行更新

os.chdir(download_path)
# on_progress_callback 參數等於 onProgress 函式
yt = YouTube(youtube_url, on_progress_callback=onProgress)

print('download...')
# get_highest_resolution : 下載的畫質
# filename : 若沒設定就預設下載最高畫質
# yt.streams.filter().get_highest_resolution('720p').download(filename='love dive.mp4')
yt.streams.filter().get_highest_resolution().download()
print('Finished!')
```

    download...
    Finished!00
    

# 下載 Youtube 影片為 mp3


```python
import ssl
import os
from pytube import YouTube
ssl._create_default_https_context = ssl._create_stdlib_context

download_path = 'C:/Users/arif1/Downloads'
youtube_url = 'https://www.youtube.com/watch?v=Y8JFxS1HlDo&ab_channel=STARSHIP'

def onProgress(stream, chunk, remains):
    total = stream.filesize                     # 取得完整尺寸
    percent = (total-remains) / total * 100     # 減去剩餘尺寸 ( 剩餘尺寸會抓取存取的檔案大小 )
    print(f'下載中… {percent:05.2f}', end='\r')  # 顯示進度，\r 表示不換行，在同一行更新

os.chdir(download_path)
# on_progress_callback 參數等於 onProgress 函式
yt = YouTube(youtube_url, on_progress_callback=onProgress)

print('download...')
yt.streams.filter().get_audio_only().download(filename='love dive.mp3')
print('Finished!')
```

    download...
    Finished!00
    
