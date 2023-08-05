import { useNavigate } from 'react-router-dom'
import './index.css'

function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate(`/select-region`)
  }

  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-6 login">
              <div className="login-wrap">
                <h2>Selamat Datang</h2>
                <h5>Silahkan Login</h5>
                <form>
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                  <input type="email" className="form-control email-login" id="exampleFormControlInput1" placeholder="name@example.com" />
                  <label htmlFor="inputPassword5" className="form-label">Password</label>
                  <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                  <button type="button" className="btn btn-primary" onClick={handleLogin} style={{marginTop: "16px"}}>Masuk</button>
                </form>
              </div>
            </div>
            <div className="col-6" style={{backgroundColor: "rgb(0, 27, 85)"}}>
            </div>
        </div>
    </div>
  )
}

export default Login