import "./login.css"

export default function Login() {
  return (
    <div className="login">
    <form className="loginForm">
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter the email pls" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter the password" />
        <button className="loginButton">Login</button>
        
    </form>
    <button className="LoginRegisterButton">New users can register over here</button>
      
    </div>
  )
}
