import styles from "../css/Login.module.css";

const Login = () => {
  return (
    <div>
      <div>로그인</div>
      <div>
        <div>회원 로그인</div>
        <span>가입하신 아이디와 비밀번호를 입력해주세요.</span>
        <span>비밀번호는 대소문자를 구분합니다.</span>
        <input type="text" />
        <input type="text" />
        <button>로그인</button>
      </div>
      <div>
        <div>
          <div>회원가입</div>
          <span>아직 회원이 아니신가요?</span>
          <span>회원가입을 하시면 편리하게 이용하실 수 있습니다.</span>
          <button>회원가입</button>
        </div>
        <div>
          <span>비회원 구매를 원하세요?</span>
          <span>아래버튼으로 비회원 구매가 가능합니다.</span>
          <button>비회원 구매</button>
        </div>
      </div>
    </div>
  );
};

export default Login;