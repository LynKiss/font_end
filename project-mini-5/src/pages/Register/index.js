function Register() {
  return (
    <form className="auth-form">
      <h2>Register</h2>
      <div>
        <input type="text" placeholder="Nhap ho ten" />
      </div>
      <div>
        <input type="email" placeholder="Nhap email" />
      </div>
      <div>
        <input type="password" placeholder="Nhap mat khau" />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
