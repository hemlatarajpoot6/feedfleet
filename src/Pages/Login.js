import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Systems from "../assests/images/Login/bothimg-login.png";
import { makeStyles } from "@material-ui/core/styles";
import { data } from "../Pages/LoginData";
// import { ThemeProvider, makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";
import Logo from "../Components/Logo";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 25px",
  },
  btnLogin: {
    width: "100%",
    marginTop: "39px !important",
    position: "absolute",
    zIndex: "1",
  },
  arrow: {
    color: "white",
  },
}));
const Login = () => {


  const classes = useStyles();


  const footerdata = () =>
    data.map((data, i) => (
      <div className="login-footercontent">
        <div className="image-div">
          <img src={data.icon} alt='img-icon' style={{ width: "20px", height: "auto" }} />
        </div>
        <span className="borders">
          <p className={`${data.name ? 'footer-name':''}`}>{data.name}</p>
          <p className={`${data.border ? 'border-rights':''}`}>{data.border}</p>
        </span>
      </div>
    ));

  return (
    <div className="bg-login">
      <div className='circle'>

    </div>
      <div className="container login-container">
        <div>
          <Grid container>
            <Grid xs={12} sm={6} md={9} lg={9}>
              <div className="login-form-left">
                <div className="logo-img">
                  <Logo />
                </div>
                <div className="loginform-bg">
                  <div className="input-field">
                    <div className="login-form-field">
                      <form>
                        <label for="email" className="label">
                         Email
                        </label>
                        <input type="text" id="email" name="email" placeholder="Enter Your Email" />
                        <label for="password" className="label">
                       Password
                        </label>
                        <input type="password" id="password" name="password" placeholder="Enter Your Password" />
                        <FormControlLabel
                          className={classes.root}
                          control={<Checkbox defaultChecked />}
                          label="Remember me"
                        />
                        <br />
                        <Link to="/createaccount" className="signin-btn">
                        <Button variant="contained" className={classes.btnLogin}>Signin</Button>
                        </Link>
                        <div className="forgot-div">
                          <Link to="/forgot" className="forgotpassword">
                            Forgot Password
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="login-form-right">
                <div className="signup-link">
                  <div>
                    <Link to="/signup" className="signup-linktext">
                      Signup
                    </Link>
                  </div>
                  <div>
                    <ArrowForwardIcon className={classes.arrow} />
                  </div>
                </div>
                <div>
                  <h1 className="text-right">Login</h1>
                </div>
                <div className="systemdiv-img">
                  <img src={Systems} alt="" className="system-img" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="login-footer">
                {/* {data && data.map((data,i)=>{ */}

                {footerdata()}

                {/* //    })} */}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>{" "}
    </div>
  );
};

export default Login;
