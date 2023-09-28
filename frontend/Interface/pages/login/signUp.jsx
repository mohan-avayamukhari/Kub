import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import "./login.css"


const USER_REGEX = /^[a-zA-Z0-9_-]{4,}$/;
const PSW_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const SignUp = () => {
  const userRef = useRef()
  const errorRef = useRef()
  const [userName, setUserName] = useState("")
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [psw, setPsw] = useState("")
  const [validPsw, setValidPsw] = useState(false);
  const [pswFocus, setPswFocus] = useState(false);

  const [matchPsw, setMatchPsw] = useState("")
  const [validMatchPsw, setValidMatchPsw] = useState(false);
  const [matchPswFocus, setMatchPswFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(userName))
  }, [userName])

  useEffect(() => {
    setValidPsw(PSW_REGEX.test(psw))
    setValidMatchPsw(psw === matchPsw)
  }, [psw, matchPsw])

  useEffect(() => {
    setErrMsg("")
  }, [psw, userName, matchPsw])

  return (
    <div>
      <p ref={errorRef}>{errMsg}</p>
      <h1>Sign up</h1>
      <form>
        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          type="text"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUserName(e.target.value)}
          required
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p className={userFocus && userName && !validName ? "instructions" : "offscreen"}>
          4 to 24 characters. <br />
          Must begin with a letter. <br />
          Letters, numbers, underscores, hyphens allowed.
        </p>

        <label htmlFor="psw">Password</label>
        <input
          id="psw"
          type="password"
          onChange={(e) => setPsw(e.target.value)}
          required
          onFocus={() => setPswFocus(true)}
          onBlur={() => setPswFocus(false)}
        />
        <p className={pswFocus && !validPsw ? "instructions" : "offscreen"}>
          8 to 24 characters. <br />
          Must include uppercase and lowercase letters, a number and a special character. <br />
        </p>

        <label htmlFor="ConfirmPsw">Confirm Password</label>
        <input
          id="ConfirmPsw"
          type="password"
          onChange={(e) => setMatchPsw(e.target.value)}
          required
          onFocus={() => setMatchPswFocus(true)}
          onBlur={() => setMatchPswFocus(false)}
        />
        <p className={matchPswFocus && !validMatchPsw ? "instructions" : "offscreen"}>
          Password does not match
        </p>

        <button disabled={!validName || !validPsw || !validMatchPsw ? true : false}> Sign Up</button>
      </form>
      <Link to="/login">Hello</Link>
    </div >
  )
}

export default SignUp