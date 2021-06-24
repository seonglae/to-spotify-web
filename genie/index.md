
# 설치


### 1. 지니 아이디 보기

지니뮤직에 들어가서 플레이리스트에 나의 좋아요를 누름
리스트에서 2번째 페이지나 다른 페이지를 클릭

<p align="center">
<img src="../assets/screenshot/nav.png" width="500"/>
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/27716524/123205653-4125bb80-d4f5-11eb-83bc-e6c2f9ebe587.png" width="500"/>
</p>

여기 url 에 bgsq=뭐라뭐라 부분을 기억합니다 (&pg=4이부분 앞까지)



<br/>

## 플레이리스트 옮기기

플레이리스트 genie 페이지에 들어가서 플레이리스트를 공개 url의 mxnm을 기억합니다
- 공개된 플레이리스트가 아니라면 수정하기 눌러서 공개된 플레이리스트로 수정

<p align="center">
<img src="https://user-images.githubusercontent.com/27716524/123207427-5223fc00-d4f8-11eb-957c-79565b040387.png" width="1000"/>
</p>


```bash
g2s playlist --bgsq blablanumber --mxnm blabla --stoken blablatoolong...
```

한글이 포함되어 있는 곡들은 잘 안찾아지는 경향이 있어서 이전 실패 곡들이 리스트들이 곡들이 아래처럼 커맨드창에 뜰텐데
해당 곡들은 직접 넣어야 합니다 ㅠㅠ

<br/>

## 좋아요 리스트 옮기기
bssq와 stoken을 넣어주면 자동으로 좋아요 리스트들을 이전합니다

```bash
g2s liked albums --bgsq blablanumber --stoken blablatoolong...
g2s liked tracks --bgsq blablanumber --stoken blablatoolong...
g2s liked artists --bgsq blablanumber --stoken blablatoolong...
```

<p align="center">
<img src="../assets/screenshot/resolve.png" width="500"/>
</p>

마찬가지로 안옮겨진 친구들은 손으로 옮겨줘야!
