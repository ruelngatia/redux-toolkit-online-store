import './Login.css'

export default function Login(){
    return(
        <div className="login">
            <div className='form'>
                <form>
                    <div className='title'><h2>Login</h2></div>
                    <div className='div-input'>
                        <label>Username</label><br/>
                        <input type={'text'} placeholder={'Username or email'}/>
                    </div>
                    <div className='div-input'>
                        <label>Password</label><br/>
                        <input type={'password'} placeholder={'Password'}/>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}