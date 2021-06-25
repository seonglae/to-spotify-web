# 플레이리스트 옮기기

genie 마이페이지에 플레이리스트에 들어가서 플레이리스트를 url에서 mxnm을 기억합니다
- 공개된 플레이리스트가 아니라면 수정하기 눌러서 공개된 플레이리스트로 수정

## 순서

### 1. 마이뮤직에서 옮기고 싶은 플레이리스트 클릭

<br/>

<img src="../assets/screenshot/mymusic.png" width="400" />

### 2. URL에서 mxnm 뒤에 숫자들을 복사해두기

- mxnm뒤의 숫자

<img src="https://user-images.githubusercontent.com/27716524/123207427-5223fc00-d4f8-11eb-957c-79565b040387.png">



### 3. 플레이리스트 이전!
- 이제 기억해둔 genie 유저 `bgsq`, 플레이리스트 `mxnm`와 발급받은 **Spotify Token**를 사용함
- 아래와 같이 커맨드를 치면 spotify에서 옮겨진 음악이 확인가능

```zsh
g2s playlist --bgsq blablanumber --mxnm blabla --stoken blablatoolong...
```
