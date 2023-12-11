function register() {
  // input의 내용의 value를 받는다
  const id = document.querySelector("#id").value;
  const name = document.querySelector("#name").value;
  const gender = document.querySelector("#gender").value;
  const job = document.querySelector("#job").value;
  const address = document.querySelector("#address").value;
  // 객체를 생성한다

  const content = {};
  content.id = id;
  content.name = name;
  content.gender = gender;
  content.job = job;
  content.address = address;
  // 객체의 유효성검증 (유저의 input내용을 검증)
  if (isValidInput(content)) {
    // 로컬스토리지에 저장한다.
    saveInfo(content);
    // input창을 클리어 한다.
    clearInput();
  }
}

function isValidInput(content) {
  if (content.id.length === 0) {
    alert("ID를 입력해주세요");
    return false;
  } else if (content.name.length === 0) {
    alert("이름을 입력해주세요");
    return false;
  } else if (content.gender.length === 0) {
    alert("성별을 입력해주세요");
    return false;
  } else {
    return true;
  }
}

function saveInfo(content) {
  localStorage.setItem(content.id, JSON.stringify(content));
}

function loadInfo(id) {
  const newInfo = JSON.parse(localStorage.getItem(id));
  return newInfo;
  console.log(newInfo);
}
function clearInput() {
  document.querySelector("#id").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#gender").value = "";
  document.querySelector("#job").value = "";
  document.querySelector("#address").value = "";
}

function searchID() {
  // 검색창에 입력된 id를 가져온다.
  const searchInput = document.querySelector(".search-input").value;
  // 아이디를 이용하여 로컬스토리지를 검색한다.
  const newObject = loadInfo(searchInput);
  // 검색되면, 인풋창에 값을 표시한다.
  if (newObject) {
    document.querySelector("#id").value = newObject.id;
    document.querySelector("#name").value = newObject.name;
    document.querySelector("#gender").value = newObject.job;
    document.querySelector("#job").value = newObject.gender;
    document.querySelector("#address").value = newObject.address;
  } else {
    // 검색되지 않으면, 에러표시한다.
    alert("존재하지 않는 아이디 입니다.");
  }
}
