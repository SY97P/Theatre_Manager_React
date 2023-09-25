function KakaoLogin() {

    const loginUrl = "http://localhost:8080/oauth2/authorization/kakao";

    function handleLogin() {
        window.location.href = loginUrl;
    }

    return (
            <>
                <button onClick={handleLogin}>카카오 로그인</button>
            </>
    );
}

export default KakaoLogin;