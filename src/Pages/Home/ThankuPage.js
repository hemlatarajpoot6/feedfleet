import { Card, Grid } from "@material-ui/core";
import React from "react";
import profile from "../../assests/images/home/20201001121412 1.png";

const ThankYouPage = () => {

    return (
        <React.Fragment>
            <div className="thanku-background">

                <Grid container>
                    <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className="thanku-card">
                            <div className="banner-image">
                                {/* <img src={banner} alt='banner' className="banner-image" /> */}
                            </div>
                            <Grid container>
                                <Grid xs={4} sm={4} md={4} lg={4} xl={4}>
                                   
                                    <div className="verticle-circle">
                                        <img src={profile} alt='profile' className="profile-image" />
                                        <h3 className="user-name">Kapil Karda</h3>
                                        <p>Co-Founder</p>
                                        <hr></hr>
                                        <h5 className="user-about">About </h5>
                                        <p className="user-about">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </Grid>
                                <Grid xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <p>Hello</p>
                                    <p> Thanks for choosing us between multiple options you have. If you like our services & have a few minutes today, we would love to get your feedback on your experience. Feel free to share anything that comes to mind about our services. :)</p>
                                    <p>
                                        In the meantime, please reach out if you have any questions.</p>
                                    <p>Thanks</p>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>

            </div>
        </React.Fragment>
    )
};

export default ThankYouPage;