import { Grid } from "@material-ui/core";
import React from "react";
import Logoimg from '../../assests/images/Login/login-logo.png'
import Campaigns from '../../assests/images/navbar/Rectangle_1466-2.png'
import Integration from '../../assests/images/navbar/Vector-22.png'
import reviews from '../../assests/images/navbar/Vector-6.png'
import Sales from '../../assests/images/navbar/Vector-17.png'
import newCampaign from '../../assests/images/navbar/Vector-9.png'
import fleet from '../../assests/images/navbar/Vector-10.png'
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

const Navbar =() =>{

     const videoesdata = [
        {
            icon: Campaigns,
            name: 'Review Campaign',
        },
        {
            icon: Integration,
            name: 'Videos',
        },
        {
            icon: reviews,
            name: 'Insights',
        },
        {
            icon: Sales,
            name: 'Fleets Video',
        }
    ]
    const userdata = [
        {
            icon: newCampaign,
            name: <Link to='/home' className="link">Create New Campaign</Link>,
        },
        {
            icon: fleet,
            name: <Link to='/createfleet' className="link">Create Fleet Video</Link>,
        }
    ]

    return(
        <React.Fragment>
       <Grid container>
           <Grid xs={2} sm={2} md={2} lg={2} xl={2}>
               <div className="left-logo">
               <img src={Logoimg} alt='' width={200} />
               </div>
           </Grid>
           <Grid xs={10} sm={10} md={10} lg={10} xl={10}>
               <div className="navbar-list">
                   {
                       videoesdata.map((data, i)=>(
                           <div className="content-list">
                        <img src={data.icon} alt='img-icon' className="icon-image" />
                          <p className={data.name}>{data.name}</p>
                          </div>
                           ))
                   }
                   {
                       userdata.map((datas, i)=>(
                        <div className="content-list">
                        <img src={datas.icon} alt='img-icon' name="icon" className="icon-image" />
                          <p className={datas.name}>{datas.name}</p>
                          </div>
                           ))
                   }
                   <div className="content-list">
                   <Avatar src="/broken-image.jpg" />
                   <p style={{paddingLeft: "10px"}}>User Name</p>
                   </div>
               </div>
           </Grid>
       </Grid>
       </React.Fragment>
    )
};

export default Navbar;