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

[231210] STUDY
01. 프로젝트 시 사용할 api들
<!-- bootstrap -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>

<!-- web fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<!-- 3.5.1 jquery.min.js -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

02. todo 리스트에 등록하기 기능
- 등록하기 기능 추가 전, 등록 버튼에 onclick 이벤트 함수명을 먼저 부여한다. 
> onclick="addTodo"
- addTodo 함수 내에서 사용자가 입력하는 인풋 값(value)를 변수로 지정한다. 
> let todo =  $("#input-area").val();
- 등록(버튼 클릭 이벤트)이 발생할 때 마다 추가될 value값이 포함된 li 구조를 변수로 지정한다. 
> let list_item = `<li구조 시작>${인풋 value값 변수명}</li구조 끝>`
- 그 구조를 ul 아래에 추가할 수 있도록 실행문을 작성한다.
> $("#todoList").append(list_item);

03. todo 리스트에 삭제하기 기능
- 삭제하기 기능 추가 전, 삭제 구조에 onclick 이벤트 함수명을 먼저 부여한다.
> onclick="deleteTodo()"
- 삭제하기 버튼과 삭제하는 대상을 연결하기 위해 랜덤 id를 생성하여, li와 span(삭제)에 지정해준다.
> 랜덤 id 생성 >  let id = Math.floor(Math.random() * 100);
> 랜덤 id와 동일한 클래스 생성 > let list_item =  `<li구조 시작>${인풋 value값 변수명} <span class="badge badge-danger badge-pill" onclick="deleteTodo(${id})">삭제</span></li구조 끝`
> 삭제 구조에 아이디 연결 및 해당 li 구조 찾아서 삭제하는 실행문 작성 > function deleteTodo (id){
    $(".list-"+id).remove();
  }

[231217] STUDY
01. 영화 데이터 API 연결
- themoviedb 사이트 로그인 > 설정 > API - https://www.themoviedb.org/settings/api 들어가기
- 영화 데이터 API 발급받기
- 페이지 1에 있는 영화 데이터만 연결 - https://api.themoviedb.org/3/movie/popular?api_key=[발급받은 데이터 API]&page=1
- json 파일 내 results 값 movie-list 로 변수 선언 - let movie_list = json.results;

- 소스 코드//영화 DB - ajax
>  $.ajax({
>    url:"https://api.themoviedb.org/3/movie/popular?api_key=ec561ea0605449a6939bad34280a3696&page=1",
>    data:{"key":"value"},
>    type:"GET",
>    success:function(json){
>      console.log(json);
>      let movie_list = json.results;
>    },
>    error: function(err){
>    }
>  });

02. 불러온 영화 데이터 배열 수 만큼 movie-list 구조 추가
- html 에 영화 리스트 #movie-list 내 카드 구조를 영화 데이터 배열 수 만큼 추가하기
> 반복문 및 구조 추가 소스 코드
>  for(let i=0; i<movie_list.length; i++){
>    let card =`<div class="col mb-4">
>    <div class="card">
>      <img src="..." class="card-img-top" alt="영화 이미지">
>      <div class="card-body">
>        <h5 class="card-title">Movie Title</h5>
>        <button type="button" class="btn btn-success btn-md" id="btn-review" onclick="openModal()">리뷰보기</button>
>      </div>
>      <div class="card-footer">
>        <small class="text-muted">Last updated 3 mins ago</small>
>      </div>
>    </div>
>  </div>`
>  
>  $("#movie-list").append(card);
>  }


03. movie-list 구조에 영화 데이터 연결하기
- 데이터 연결하기 전 배열 중 첫번째 영화 카드 구조는 기존 html 구조라 삭제 해주기
>  $("#movie-list").html('');
- 반복문에 있는 영화 카드 구조 내 영화 이미지, 타이틀 데이터 연결하기
> 소스 코드// 백틱으로 감싸져 있는 html 구조 내에서 데이터 연결 시 ${movie_list[i].데이터 키값}
>  <div class="col mb-4">
>    <div class="card">
>      <img src="${'https://image.tmdb.org/t/p/w500'+movie_list[i].poster_path}" class="card-img-top" alt="영화 이미지">
>      <div class="card-body">
>        <h5 class="card-title">${movie_list[i].original_title}</h5>
>        <button type="button" class="btn btn-success btn-md" id="btn-review" onclick="openModal()">리뷰보기</button>
>      </div>
>      <div class="card-footer">
>        <small class="text-muted">Last updated 3 mins ago</small>
>      </div>
>    </div>
>  </div>
* 이미지는 같은 폴더 내에 있는 이미지가 아니므로 경로를 추가적으로 적어줘야 한다.
  https://developer.themoviedb.org/docs/image-basics 에서 확인 해 보면 이미지 데이터를 불러오기 전
  https://image.tmdb.org/t/p/w500 + 데이터 값 형식으로 사용됨