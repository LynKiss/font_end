function Login() {
  return (
    <form className="auth-form">
      <h2>Login</h2>
      <div>
        <input type="email" placeholder="Nhap email" defaultValue="nguyenthi@gmail.com" />
      </div>
      <div>
        <input type="password" placeholder="Nhap mat khau" defaultValue="12345678" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
