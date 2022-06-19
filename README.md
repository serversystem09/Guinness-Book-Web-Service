# Guinness-Book-Web-Service
이색 기네스북 웹 서비스 : POPETE

서버 시스템 구축 실습 09 팀 : 강수진, 권도연, 서민영, 오승현

[주요기능]
1. 게시글 삭제, 작성, 수정, 입력
2. 신고 기능
3. 회원가입, 로그아웃, 로그인
4. 인기게시글, 인기 종목 보기
5. 댓글 달기
6. 팔로우기능


[실행을 위한 사항들]
1. GCP인스턴스에 mysql 설치
2. 해당 프로젝트 git clone
3. 프로젝트 파일 중 popete.sql파일 실행
4. popeteDB생성 확인
5. Guinness-Back > config > dbConnection.js 에서 환경에 맞게 설정
<img width="505" alt="image" src="https://user-images.githubusercontent.com/64936396/174467950-e3634674-8cba-4b02-8304-2519b9169af1.png">
6. cd Guinness-Back 후 node index.js 명령어 실행, Server running 메시지 콘솔에서 확인
<img width="634" alt="image" src="https://user-images.githubusercontent.com/64936396/174467962-7b74cf94-4148-4a97-a49e-e7d134d96c4b.png">
7. 설정한 http://IP주소:3000 로 접근하여 사이트 확인


