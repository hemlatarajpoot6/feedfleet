import React from "react";
import Button from "@mui/material/Button";
import Systems from "../assests/images/Login/2.png";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import Grid from "@mui/material/Grid";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";
// import AccountCircle from '@mui/icons-material/AccountCircle';


const FormFill = () => {


    return (
        <div className="bg-login">
            <div className='circle'>

            </div>
            <div className="container-form login-container">
                <div>
                    <Grid container>
                        <Grid xs={12} md={9}>
                            <div className="signup-form-left">
                                <div className="logo-img">
                                    <Logo />
                                </div>

                                <div className="loginform-bg">
                                    <div className="input-field">
                                        <div className="login-form-field">
                                            <h4 className="forgot-heading">
                                                Fill the form for next step
                                            </h4>
                                            <form>
                                                <Stack direction="row" spacing={2} className="top-image">
                                                    <div className="top-image-avtar">
                                                        <label htmlFor="upload-company-logo">
                                                            <Avatar src="/broken-image.jpg" sx={{ width: 150, height: 150 }} className="image-inner" />
                                                            <div className="edit-image-circle">
                                                                <input accept="image/*" id="upload-company-logo" placeholder="dfvkljk" type='file' hidden />
                                                                <AddPhotoAlternateOutlinedIcon className="edit-image" />
                                                            </div>
                                                        </label>
                                                    </div>
                                                </Stack>
                                                <Grid container>
                                                    <Grid xs={6} md={6}>
                                                        <div className="right-margin">
                                                            <label for="date" className="label">
                                                                Date Of Birth
                                                            </label>
                                                            <input type="text" id="date" name="dateofbirth" className="" placeholder="Enter" />
                                                        </div>
                                                    </Grid>
                                                    <Grid xs={6} md={6}>
                                                        <div className="select-field">
                                                            <label for="select" className="label">
                                                                Select Gender
                                                            </label>
                                                            <select className="select-field" id="select">
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                                <option>Other</option>
                                                            </select>
                                                        </div>
                                                    </Grid>
                                                    <Grid xs={6} md={6}>
                                                        <div className="right-margin">
                                                            <label for="country" className="label">
                                                                Country
                                                            </label>
                                                            <select className="right-margin" id="country" placeholder="Select name">
                                                                <option>Select name</option>
                                                                <option>India</option>
                                                                <option>Usa</option>
                                                            </select>
                                                        </div>
                                                    </Grid>
                                                    <Grid xs={6} md={6}>
                                                        <div className="select-field">
                                                            <label for="state" className="label">
                                                                State
                                                            </label>
                                                            <select className="select-field" id="state" placeholder="Select name">
                                                                <option>Select name</option>
                                                                <option>Mp</option>
                                                                <option>Up</option>
                                                            </select>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                                <label for="city" className="label">
                                                    City
                                                </label>
                                                <select className="" id="city">
                                                    <option>Indore</option>
                                                    <option>Bhopal</option>
                                                    <option>Delhi</option>
                                                </select>
                                                <label for="address" className="label">
                                                    Address
                                                </label>
                                                <input type="text" id="address" name="address" placeholder="Enter" />
                                                <label for="companyemail" className="label">
                                                    Company Email Address
                                                </label>
                                                <input type="text" id="companyemail" name="companyemail" placeholder="Enter" />
                                                <label for="companyaddress" className="label">
                                                    Company Address
                                                </label>
                                                <input type="text" id="companyaddress" name="companyaddress" placeholder="Enter" />
                                                <label for="contactno" className="label">
                                                    Contact no.
                                                </label>
                                            {/* <div className="style">
                                                    <AccountCircle />
                                                    </div> */}
                                                <input type="text" id="contactno" name="contactno"
                                                 />
                                            
                                                <div className='textCenter'>
                                                    <Grid container>
                                                        <Grid xs={6} md={6}>
                                                            <Button
                                                                variant="contained"
                                                                className='btnLogin logout'
                                                            >
                                                                Logout
                                                            </Button>
                                                        </Grid>
                                                        <Grid xs={6} md={6}>
                                                            <Link to="/accountplan" className="signin-btn">
                                                                <Button
                                                                    variant="contained"
                                                                    className='btnLogin next'
                                                                >
                                                                    Next
                                                                </Button>
                                                            </Link>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className="signup-form-right">
                                <div>
                                    <h1 className="text-right-form">Fill The Form</h1>
                                </div>
                                <div className="formfill-right-img">
                                    <img src={Systems} alt="" className="form-system-img" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>{" "}
        </div>
    );
};

export default FormFill;
