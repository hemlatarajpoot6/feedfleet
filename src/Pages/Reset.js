import React from "react";
import Button from "@mui/material/Button";
import Systems from "../assests/images/Login/bothimg-login.png";
import { makeStyles } from "@material-ui/core/styles";
import { data } from "../Pages/LoginData";
import Grid from "@mui/material/Grid";
import Logo from "../Components/Logo";


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 25px",
  },
  btnLogin: {
    width: "100%",
    marginTop: "20px !important",
    position: "absolute",
    zIndex: "1",
  },
  arrow: {
    color: "white",
  },
}));
const Reset = () => {
  const classes = useStyles();
  const footerdata = () =>
    data.map((data, i) => (
      <div className="login-footercontent">
        <div className="image-div">
          <img src={data.icon} alt='img-icon' style={{ width: "20px", height: "auto" }} />
        </div>
        <div className="borders">
          <p className={`${data.name ? 'footer-name':''}`}>{data.name} </p>
          <p className={`${data.border ? 'border-rights':''}`}>{data.border}</p>
        </div>
      </div>
    ));

  return (
    <div className="bg-login">
      {/* <div className='circle'>

    </div> */}
      <div className="container login-container">
        <div>
          <Grid container>
            <Grid xs={12} md={9}>
              <div className="login-form-left">
                <div className="logo-img">
                  <Logo />
                </div>
                <div className="loginform-bg">
                  <div className="input-field">
                    <div className="login-form-field">
                    <h4 className="forgot-heading">
                    New password must be different from previously used
password.
                      </h4>
                      <form>
                        <label for="newpassword" className="label">
                        New Password
                        </label>
                        <input type="password" id="newpassword" name="newpassword" placeholder="***********" />
                        <label for="cpassword" className="label">
                        Confirm Password    
                        </label>
                        <input type="password" id="cpassword" name="cpassword" placeholder="***********" />
                    
                        <div className="forgot-div">
                        <Button
                          variant="contained"
                          className={classes.btnLogin}
                        >
                          Signin
                        </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="login-form-right">
                {/* <div className="signup-link">
                  <div>
                    <Link to="/signup" className="signup-linktext">
                      Signup{" "}
                    </Link>
                  </div>
                  <div>
                    <ArrowForwardIcon className={classes.arrow} />
                  </div>
                </div> */}
                <div>
                  <h1 className="reset-text-right">Reset Password</h1>
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

export default Reset;
