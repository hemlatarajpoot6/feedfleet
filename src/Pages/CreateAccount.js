import React from "react";
import Button from "@mui/material/Button";
import Systems from "../assests/images/Login/bothimg-login.png";
import { makeStyles } from "@material-ui/core/styles";
import { data } from "../Pages/LoginData";
import Grid from "@mui/material/Grid";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";


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
const CreateAccount = () => {


    const classes = useStyles();
    const footerdata = () =>
        data.map((data, i) => (
            <div className="login-footercontent">
                <div className="image-div">
                    <img src={data.icon} alt='img-icon' style={{ width: "20px", height: "auto" }} />
                </div>
                <div className="borders">
                    <p className={`${data.name ? 'footer-name' : ''}`}>{data.name} </p>
                    <p className={`${data.border ? 'border-rights' : ''}`}>{data.border}</p>
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
                                                Create your free account today
                                            </h4>
                                            <p>Verification code has been resend to your email
                                                nidhi.kusumakar@engineermaster.in. If not received please check your junk email.</p>
                                            <form>
                                                <label for="fname" className="label">
                                                    Security Code
                                                </label>
                                                <input type="text" id="fname" name="fname" placeholder="***********" />
                                                <label for="lname" className="label">
                                                    Resend Code in 04:30
                                                </label>
                                                <div className="forgot-div">
                                                    <Button
                                                        variant="contained"
                                                        className={classes.btnLogin}
                                                    >
                                                        <Link to="/formfill" className="signin-btn"> Verify Code</Link>
                                                    </Button>
                                                    <p>Have Already Account ? <Link to="/" className="text-dark">
                                                        SignIn
                                                    </Link></p>
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
                                    <h1 className="reset-text-right">Create Account</h1>
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

export default CreateAccount;
