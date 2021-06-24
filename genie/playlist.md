# 플레이리스트 옮기기

genie 마이페이지에 플레이리스트에 들어가서 플레이리스트를 url에서 mxnm을 기억합니다
- 공개된 플레이리스트가 아니라면 수정하기 눌러서 공개된 플레이리스트로 수정

## 순서

### 1. 지니뮤직에 들어가서 마이뮤직에서 옮기고 싶은 플레이리스트로 이동


<p align="center">
<img src="../assets/screenshot/mymusic.png" />
</p>

### 2. URL에서 mxnm 뒤에 숫자들을 복사해서 어디 붙여넣어두기 
<p align="center">
<img src="https://user-images.githubusercontent.com/27716524/123207427-5223fc00-d4f8-11eb-957c-79565b040387.png">
</p>


### 3. 아래 커멘드 실행
이제 기억해둔 `bgsq`, `mxnm`과 **Spotify Token**으로 아래와 같이 커맨드를 치면 spotify에서 옮겨진 음악 확인가능!
```zsh
g2s playlist --bgsq blablanumber --mxnm blabla --stoken blablatoolong...
```
