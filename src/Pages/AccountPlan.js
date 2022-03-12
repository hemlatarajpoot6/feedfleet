import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Logoimg from '../assests/images/Login/login-logo.png'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";


const AccoundPlan = () => {


    return (
        <div className="bg-login">
            <div className="container-form login-container">
                <div>
                    <Grid container>
                        <Grid xs={12} md={12}>
                            <div className="login-form-border">
                                <div className='top-logo'>
                                    <img src={Logoimg} alt='' width={200} />
                                    <h4 className="Creates">
                                        Create your free account today
                                    </h4>
                                </div>
                                <Grid container>
                                    <Grid xs={4} md={4}>
                                        <div className="apply-code">
                                            <label for="apply" className="security-code">
                                                Apply Promo Code
                                            </label>
                                        </div>
                                    </Grid>
                                    <Grid xs={4} md={4}>
                                        <div className="">
                                            <form>
                                                <input type="password" id="apply" name="apply" placeholder="Enter" />
                                            </form>
                                        </div>
                                    </Grid>
                                    <Grid xs={4} md={4}>
                                        <div className="">
                                            <Button
                                                variant="contained"
                                                className=' apply-button'
                                            >
                                                Apply
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                                <hr />
                                <Grid container>
                                    <Grid xs={12} md={12}>
                                        <div class="example-button-row top-logo">
                                            <span>
                                                <button mat-raised-button className="monthly-btn">Monthly</button>
                                                <button mat-raised-button className="monthly-btn">Annual</button>
                                            </span>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid xs={12} md={4}>
                                        <div className="plan-background">
                                            <h2>Basic</h2>
                                            <p>Plan</p>
                                            <ul>
                                                <li className="heading-color-li"><span className="dollor-sign">$</span>19</li>
                                                <li className="light-color-li listing">10 campaigns</li>
                                                <li className="listing">40 Videos with watermark</li>
                                                <li className="light-color-li listing">API Support with watermark</li>
                                                <li className="listing">Insights</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Advanced Video Capturing</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Advanced Video Management</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Branded Campaigns</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Advanced Video Publishing</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Advanced Integrations</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video Insights</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Professional Services</li>
                                                <li className="listing red-heading">Remote Video Capturing</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Phone, Tablet, & Desktop Capturing</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Campaign Landing Pages</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Multiple Prompts per Campaign</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Capture User Lead Info</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Star Ratings</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Custom Rights Management</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Require Signature</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Custom Thank You Pages</li>
                                                <li className="light-color-li listing red-heading">Branded Campaigns</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video Management</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Video Transcoding</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video Encryption</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Video Hosting</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video Submission Notifications</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Reply to Submissions</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Video Publishing</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Video Landing Pages</li>
                                                <li className="listing red-heading">Video Carousel Player</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Video Syndication</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video SEO</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Video Testimonial Ads</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Influencer Video Ads</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Integrations</li>
                                                <li className="listing red-heading">Website Integrations</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Campaign Based API Integration</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />eCommerce Integrations</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />PHP Integrations</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Email Integrations</li>
                                                <li className="light-color-li listing red-heading">Video Insights</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video NPS</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Video Carousel Player Analytics</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Views, Plays</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Video Sentiment</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Customer Insights</li>
                                                <li className="light-color-li listing red-heading">Professional Services</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Training</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Account Management</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Full Service</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Influencer Recruiting</li>
                                            </ul>
                                            <div>
                                                <Button
                                                    variant="contained"
                                                    className='basic-Select'
                                                >
                                                    Select
                                                </Button>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid xs={12} md={4}>
                                        <div className="plan-background">
                                            <h2>Standard</h2>
                                            <p>Plan</p>
                                            <ul>
                                                <li className="standard"><span className="standard-dollor-sign">$</span>49</li>
                                                <li className="light-color-li listing">10 campaigns</li>
                                                <li className="listing">40 Videos with watermark</li>
                                                <li className="light-color-li listing">API Support with watermark</li>
                                                <li className="listing">Insights</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Advanced Video Capturing</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Advanced Video Management</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Branded Campaigns</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Advanced Video Publishing</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Advanced Integrations</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video Insights</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Professional Services</li>
                                                <li className="listing red-heading">Remote Video Capturing</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Phone, Tablet, & Desktop Capturing</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Campaign Landing Pages</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Multiple Prompts per Campaign</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Capture User Lead Info</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Star Ratings</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Custom Rights Management</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Require Signature</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Custom Thank You Pages</li>
                                                <li className="light-color-li listing red-heading">Branded Campaigns</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video Management</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Video Transcoding</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video Encryption</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Video Hosting</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video Submission Notifications</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Reply to Submissions</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Video Publishing</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Video Landing Pages</li>
                                                <li className="listing red-heading">Video Carousel Player</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Video Syndication</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video SEO</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Video Testimonial Ads</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Influencer Video Ads</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Integrations</li>
                                                <li className="listing red-heading">Website Integrations</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Campaign Based API Integration</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />eCommerce Integrations</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />PHP Integrations</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Email Integrations</li>
                                                <li className="light-color-li listing red-heading">Video Insights</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video NPS</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Video Carousel Player Analytics</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Views, Plays</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Video Sentiment</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Customer Insights</li>
                                                <li className="light-color-li listing red-heading">Professional Services</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Training</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Account Management</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Full Service</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Influencer Recruiting</li>
                                            </ul>
                                            <div>
                                                <Button
                                                    variant="contained"
                                                    className='standard-Select'
                                                >
                                                    Select
                                                </Button>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid xs={12} md={4}>
                                        <div className="plan-background">
                                            <h2>Enterprise</h2>
                                            <p>Plan</p>
                                            <ul>
                                                <li className="enterprices"><span className="enterprices-dollor-sign">$</span>129</li>
                                                <li className="light-color-li listing">10 campaigns</li>
                                                <li className="listing">40 Videos with watermark</li>
                                                <li className="light-color-li listing">API Support with watermark</li>
                                                <li className="listing">Insights</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Advanced Video Capturing</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Advanced Video Management</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Branded Campaigns</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Advanced Video Publishing</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Advanced Integrations</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video Insights</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Professional Services</li>
                                                <li className="listing red-heading">Remote Video Capturing</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Phone, Tablet, & Desktop Capturing</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Campaign Landing Pages</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Multiple Prompts per Campaign</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Capture User Lead Info</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Star Ratings</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Custom Rights Management</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Require Signature</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Custom Thank You Pages</li>
                                                <li className="light-color-li listing red-heading">Branded Campaigns</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video Management</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Video Transcoding</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video Encryption</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Video Hosting</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video Submission Notifications</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Reply to Submissions</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Video Publishing</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Video Landing Pages</li>
                                                <li className="listing red-heading">Video Carousel Player</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Video Syndication</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video SEO</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Video Testimonial Ads</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Influencer Video Ads</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Integrations</li>
                                                <li className="listing red-heading">Website Integrations</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Campaign Based API Integration</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />eCommerce Integrations</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />PHP Integrations</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Email Integrations</li>
                                                <li className="light-color-li listing red-heading">Video Insights</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Video NPS</li>
                                                <li className="light-color-li listing"><CheckIcon className="tick-icon" />Video Carousel Player Analytics</li>
                                                <li className="listing"><CheckIcon className="tick-icon" />Views, Plays</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Video Sentiment</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Customer Insights</li>
                                                <li className="light-color-li listing red-heading">Professional Services</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Training</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Account Management</li>
                                                <li className="listing"><ClearIcon className="cross-icon" />Full Service</li>
                                                <li className="light-color-li listing"><ClearIcon className="cross-icon" />Influencer Recruiting</li>
                                            </ul>
                                            <div>
                                                <Button
                                                    variant="contained"
                                                    className='enterprices-Select'
                                                >
                                                    Select
                                                </Button>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid xs={12} md={12}>
                                        <div className="top-logo">
                                            <Link to="/formfill" className="link">
                                                <Button
                                                    variant="contained"
                                                    className='Previous-Select'
                                                >
                                                    Previous
                                                </Button>
                                            </Link>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                        </Grid>
                    </Grid>
                </div>
            </div>{" "}
        </div>
    );
};

export default AccoundPlan;
