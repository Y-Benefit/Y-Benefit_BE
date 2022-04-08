# 청바지_BE

# [청바지 (청년혜택, 바로 지금!)](https://y-benefit.com/) [Backend]

## 안녕하세요. [청바지](https://github.com/Y-Benefit/Y-Benefit_BE) 백엔드 입니다.

<img src="https://user-images.githubusercontent.com/91252981/161980408-e2406bd8-cb49-4415-be26-9df3e7a2d027.png">

---

## 📣 Project
### 📆 Project Timeline

- 총 기간: 2022/02/25 ~ 2022/04/08
- 배포: 2022/04/04

---

## Team Notion

https://www.notion.so/3-95e793c2c7e745178dd80a27c802dbc1

---

## 서비스 소개

청바지는 <b>흩어져 있는 청년 정책들을 모아 사용자가 한눈에 볼 수 있게 제공해주는 서비스</b>입니다.

---

## 👨‍👩‍👧‍👧팀원소개

- 프론트엔드
  - 명석환 (https://github.com/seokhwanmyeong)
- 백엔드
  - 김현지 (https://github.com/hyunjikeem)
  - 우재현 (https://github.com/Ausdauer1)
- 디자이너
  - 김선화
  - 정지현

---

## Project Architecture

<img src="https://user-images.githubusercontent.com/91252981/162168694-6ea5fd4b-f9c9-4c70-9ff6-8c55398b5dcc.png">

---

## 🛠 Tech Stack & Platform
### **Tech**
<p>
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img alt="Express.js" src ="https://img.shields.io/badge/express-000000.svg?&style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/passport-33D875?style=for-the-badge&logo=passport&logoColor=white">
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
 <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white">
</br>
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=Json Web Tokens&logoColor=white">
<!-- <img src="https://img.shields.io/badge/AWS Lambda-FF9900?style=for-the-badge&logo=AWS Lambda&logoColor=white"> -->
<img src="https://img.shields.io/badge/AWS Ec2-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"> 
<img src="https://img.shields.io/badge/route53-F7A81B?style=for-the-badge&logo=route53&logoColor=white">
<img src="https://img.shields.io/badge/Load Balancer-FF9E0F?style=for-the-badge&logo=Load Balancer&logoColor=white">
<img src="https://img.shields.io/badge/AWS CloudWatch-EC3750?style=for-the-badge&logo=amazonaws&logoColor=white"> 
<img src="https://img.shields.io/badge/PM2-2B037A?style=for-the-badge&logo=PM2&logoColor=white">
<img src="https://img.shields.io/badge/Crontab-232F3E?style=for-the-badge&logo=crontab&logoColor=white">
<br>
</p>

### **Tools**
<p>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
<br>
</p>


---

## 라이브러리 | Library

| Library    | Description                       | Version   |
| ------------- | -------------------------- | ------ |
| express       | Node.js 웹 프레임워크                 | 4.17.3 |
| MySQL         | Database | 8.0.28 |
| sequelize      | MySQL ORM                      |6.17.0 |
| cors          | 교차 리소스 공유      | 2.8.5  |
| dotenv        | 환경변수 설정              | 16.0.0 |
| jsonwebtoken | 서명 암호화 | 8.5.1|
| passport | Node.js authentication | 0.5.2|
| passport-kakao | 카카오 로그인 모듈 | 1.0.1 |

---

## 기능소개

<details>
<summary</summary>
<div markdown="1">

  준비중입니다

</div>
</details>


---

## 🔥이슈 및 트러블슈팅
[상세보기] (https://www.notion.so/3-95e793c2c7e745178dd80a27c802dbc1)
<details>
<summary>Trouble Shooting</summary>
<div markdown="1">

  준비중입니다

</div>
</details>
---

## more info
<details>
<summary>API 명세서</summary>
<div markdown="1">
  
  준비중입니다
  
</div>
</details>

<details>
<summary>ERD</summary>
<div markdown="1">

  <img src="https://user-images.githubusercontent.com/91252981/161984970-225d27f9-3d71-4701-825a-e5dacaa5ba75.png">

</div>
</details>

---
## Installation

1. fork
```console
fork
```

2. clone
```console
$ git clone https://github.com/Y-Benefit/Y-Benefit_BE.git
```

3. 패키지 설치
```console
$ cd Y-Benefit_BE
$ npm install
```

4. 환경변수 설정
```text
// Y-Benefit_BE 폴더 안에 .env 파일 생성 후 아래의 내용을 기입 후 저장해주세요!
KAKAO_ID = '카카오에서 받은 REST API Key'
KAKAO_URL = '설정한 Redirect URI'
TOKENKEY = '사용할 토큰키'
```

5. MySQL DB 생성
```console
npx sequelize init
npx sequelize db:create
```

