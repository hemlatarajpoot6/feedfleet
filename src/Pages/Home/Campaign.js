import { Card, Grid, Button, Select, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import Navbar from "../Navbar/Index";
import Avatar from '@mui/material/Avatar';
import banner from '../../assests/images/home/Rectangle 4016.png';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AddCircleIcon from '@mui/icons-material/AddCircle';


const Campaign = () => {

    const [selected, setSelected] = useState([]);

    const handleValueChange = event => {
        setSelected(event.target.value);
    }

    return (
        <React.Fragment>
            <Navbar />
            <div className="home-bg">
                <Card>
                    <Grid container>
                        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div className="Customize">
                                <h4 className="Customize">Customize Your Page</h4>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div className="Campaign-input">
                                <p className="">Campaign </p>
                                <input type="text" placeholder="Enter Title Here" className="Campaign-text" />
                                <Grid container>
                                    <Grid xs={2} sm={2} md={2} lg={2} xl={2}>
                                        <p className="opload-logo">Company Logo</p>
                                        <div className="avtar-banner">

                                            <Avatar src="/broken-image.jpg" sx={{ width: 150, height: 150 }} className="upload-company-logo" />
                                            <label htmlFor="upload-company-logo">
                                                <div className="company-icon">
                                                    <input accept="image/*" id="upload-company-logo" type='file' hidden />
                                                    <AddPhotoAlternateOutlinedIcon className="logo-icon" />
                                                </div>
                                            </label>
                                        </div>
                                    </Grid>
                                    <Grid xs={10} sm={10} md={10} lg={10} xl={10}>
                                        <p>Banner</p>

                                        <img src={banner} alt='' className="upload-company-logo" height={150} width={1050} />
                                        <label htmlFor="upload-company-banner" className="banner-logo">
                                            <div className="">
                                                <input accept="image/*" id="upload-company-banner" type='file' hidden />
                                                <AddPhotoAlternateOutlinedIcon className="logo-icon" />
                                            </div>
                                        </label>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="top-margin">
                        <Grid container>
                            <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                                <div className="border-right">
                                    <Grid container>
                                        <Grid xs={4} sm={4} md={4} lg={4} xl={4}>
                                            <div className="avtar-banner-profile">
                                                <Avatar src="/broken-image.jpg" sx={{ width: 150, height: 150 }} className="upload-company-logo" />
                                                <label htmlFor="upload-company-profile" className="profile-icon">
                                                    <div>
                                                        <input accept="image/*" id="upload-company-profile" type='file' hidden />
                                                        <AddPhotoAlternateOutlinedIcon className="logo-icon" />
                                                    </div>
                                                </label>
                                            </div>
                                        </Grid>

                                        <Grid xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <div className="field-value">
                                                <p className="">Full Name </p>
                                                <input type="text" placeholder="Enter Your Full Name" className="Campaign-text" />
                                                <p className="">Designation </p>
                                                <input type="text" placeholder="Enter Your Designation" className="Campaign-text" />
                                                <p className="">Message </p>
                                                <textarea placeholder="Enter Your Message" className="Campaign-text" rows="7" cols="50" />
                                                <span className="Prompt">
                                                    Prompt<hr className="hr-line"></hr><AddCircleIcon />
                                                </span>
                                                <input type="text" placeholder="Enter Field value" className="Campaign-text" />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                                <h4>Lead Management</h4>
                                <p>Extra Fields for Lead</p>
                                <Select
                                className="multiple-select"
                                    multiple={true}
                                    value={selected}
                                    placeholder="Enter"
                                    onChange= {handleValueChange}
                                        >
                                    <MenuItem value={1}>Val - 1</MenuItem>
                                    <MenuItem value={2}>Val - 2</MenuItem>
                                    <MenuItem value={3}>Val - 3</MenuItem>
                                    <MenuItem value={4}>Val - 4</MenuItem>
                                </Select>



                                {/* <input type="text" placeholder="Enter Title Here" className="Campaign-text" /> */}
                                <p className="">Thank You Message </p>
                                <textarea className="Campaign-text" placeholder="Enter Your Message Here" rows="7" cols="50" />
                                <p>After Thank You Link</p>
                                <input type="text" placeholder="After thank you link" className="Campaign-text" />
                                <FormControlLabel
                                    label="Do you want to give rating ?"
                                    control={<Checkbox />}
                                    labelPlacement='start'
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="top-logo">
                        <Button
                            variant="contained"
                            className='save-btn'
                        >
                            Save
                        </Button>
                    </div>
                </Card>
            </div>
        </React.Fragment>
    )
};

export default Campaign;