[231126] STUDY
01. git bash - 명령어
- cd <폴더명> : 검은 화면에서 폴더로 이동하는 명령어
- cd .. : 이동했던 폴더에서 뒤로 빠져나오는 명령어
- mkdir <폴더명> : 폴더를 생성하는 명령어
- rm -rf <폴더명 또는 파일명> : 폴더 또는 파일을 지우는 명령어 (사용할때 조심!)
- touch <파일명> : 빈 파일을 바로 생성하는 명령어

02. github
- 깃허브는 코드 관리 및 협업 툴
- 어디서든지 관리하고 있는 코드를 내려받을 수 있고, 여러사람의 코드를 관리 및 하나로 합칠 수 있음
- 깃허브를 사용하려면 github 사이트에서 가입 후 코드 저장소(repository)를 생성해야함
- 브랜치의 개념으로 여러사람들이 협업 할 수 있는데, 맨 처음 코드 저장소를 만든 본인 = master 브랜치

03. commit
- 프로젝트 폴더 내 터미널에서 명령어를 진행
- git add . : 코드를 업로드 할 준비
- git commit -m '' : 코드를 코드 저장소에 업로드 할 때 보낼 메시지까지 준비
- git push origin master : master 브랜치(본인 계정)에 코드를 업로드
- git clone http://github.com/taekyung124/폴더명.git : 코드 저장소로 부터 코드를 컴퓨터로 내려받을 때의 명령어

04. bootstrap
https://getbootstrap.com/docs/4.6/getting-started/introduction/
git add
- layout, components, utilities 다양한 레퍼런스 참고
- class 이름은 이미 Bootstrap에서 정한 다음 스타일을 제공해주고 있기 때문에, 최대한 class이름은 피해서 id 이름으로 스타일을 지정해줄 것!
- 스타일 작업 시 class 선택자를 사용해야할 경우 !important 를 지정 하여 준다.
