import { Grid, Card, Button, Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import Navbar from "../Navbar/Index";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import VideoRecorder from "react-video-recorder";

const CreateFleet = () => {
    const [cameraVisible, setCameraVisible] = useState(false);
    const [videoVisible, setVideoVisible] = useState(false);

    const onStartRecording = () => {
        setCameraVisible(true);
        setVideoVisible(false)
    };

    const onUploadVideo = () =>{
        setVideoVisible(true)
        setCameraVisible(false)
    }

    const styles = {
        hidden: {
            display: "none",
        },
        importLabel: {
            color: "black",
        },
    };

    const onInputChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <React.Fragment>
            <Navbar />
            <div className="home-bg">
                <Card>
                    <Grid container>
                        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div className="Customize">
                                <h4 className="Customize">Welcome to Intro Video</h4>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div className="Campaign-fleet">
                                <p>
                                    Welcome to Feedfleet, where you'll be able to create & manage
                                    all your Intro Video videos, and generate your Video Widget
                                    code.
                                </p>
                            </div>
                        </Grid>
                        <Grid xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
                        <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="Prompt start-record">
                                <div className="opload-logo">
                                    <Button
                                        onClick={onStartRecording}
                                        className="start-record-btn"
                                    >
                                        <VideocamOutlinedIcon className="cloud-icon" />
                                    </Button>
                                    <p>Start Recording</p>
                                </div>
                                <div className="opload-logo">
                                    <Button className="upolad-record-btn">
                                        <InputLabel htmlFor="import-button" style={styles.importLabel}>
                                            <Input
                                                id="import-button"
                                                inputProps={{
                                                    accept:
                                                        "video/*",
                                                }}
                                                onChange={onInputChange}
                                                style={styles.hidden}
                                                type="file"
                                                onClick={onUploadVideo}
                                            />
                                           <CloudUploadIcon className="cloud-icon" />
                                        </InputLabel>
                                    </Button>
                                    <p>Upload Video</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
                        {
                        cameraVisible ? (
                            <Grid container className="video-content">
                                <Grid xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <div >
                                        <VideoRecorder
                                            onRecordingComplete={(videoBlob) => {
                                                // Do something with the video...
                                                console.log("videoBlob", videoBlob);
                                            }}
                                        />
                                        <div className="top-logo">
                                            <Button
                                                variant="contained"
                                                className='save-btn'
                                            >
                                                Start Recording
                                            </Button>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        ) : null}
                        {
                            videoVisible ? (
                                <>
                            <Grid container className="video-content">
                            <Grid xs={8} sm={8} md={8} lg={8} xl={8}>
                                <div >
                                <video width="750" height="500" controls >
                            <source src="./Videos/video1.mp4" type="video/mp4"/>
                      </video>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container className="video-content">
                            <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div className="top-logo">
                                            <Button
                                                variant="contained"
                                                className='Reload-btn'
                                            >
                                               Reload
                                            </Button>
                                            <Button
                                                variant="contained"
                                                className='Upload-btn'
                                            >
                                               Upload
                                            </Button>
                                        </div>
                            </Grid>
                            </Grid>
                        </>
                      ) : null
                      }
                       
                    </Grid>
                </Card>
            </div>
        </React.Fragment>
    );
};

export default CreateFleet;
