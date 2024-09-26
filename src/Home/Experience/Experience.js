import { Col, Container, Row } from "react-bootstrap";
import './Experience.css';
import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";


function Experience() {

    const [data, setData] = useState([
        {
            "company": "Loading...",
            "title": "",
            "start_date": "",
            "end_date": " ",
            "free_text": "",
            "img_url": "",
            "type": "exp"
          }
    ]);

useEffect(() => {
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=vPja-qmNR9OACB6PINOgnbHkdZ_FXc2tCG3HD8vosGW6itJaiL9E1hOimu1OR0vxikINgfBUQcNK1BnNE9cY2oZ1n_fjUdQ8m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnE7f5NJmJVFUmIIk6m2PTx-W9nYTVJFE3hBoTHmr7u6lFJHijhv_GG5GwAIBhrZb6-Pm32NKPcw5z7zwJfMr1voe-ZBFab95Fw&lib=M0Dm_mTIH57OLRgr4D2knB9oBno9WCgsY') // Replace with your actual endpoint URL
      .then(response => response.json())
      .then(response => response.sort((a, b) => a.company.localeCompare(b.company)))
      .then(data => setData(data))
      .then(console.log(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  var dateFormat = require('dateformat');


    return (
        <Col  md={8} className="experience p-3 rounded shadow-sm mt-10 mb-5 dm-sans-500">
            <Row className="align-middle">
                <Col lg={6} sm={12} className="f-xl text-center d-none d-lg-flex justify-content-center">
                    <Parallax speed={100} className="d-flex parallax-experience">
                        <h1>Experience</h1>
                    </Parallax>
                </Col>
                <Col sm={12} className="d-block d-lg-none f-xl text-center">
                    <h1>Experience</h1>
                </Col>
                <Col lg={6} sm={12}>
                    {data.map((item, index, list) => (
                        item != undefined && item.type != undefined && item.type != "exp" ? <React.Fragment /> : 
                        list[index-1] == undefined ? (
                            <React.Fragment>
                                <h2>{item.company}</h2>
                                <b>{item.title}</b>
                                <p>{item.start_date} - {item.end_date != "" ? item.end_date : "Present"}</p>
                            </React.Fragment>
                        ) :
                        list[index-1] != undefined && list[index-1].company != list[index].company ? (
                            <React.Fragment>
                                <h2>{item.company}</h2>
                                <b>{item.title}</b>
                                <p>{item.start_date} - {item.end_date != "" ? item.end_date : "Present"}</p>
                            </React.Fragment>
                        )
                        :
                        <React.Fragment>
                            <b>{item.title}</b>
                            <p>{item.start_date} - {item.end_date != "" ? item.end_date : "Present"}</p>
                        </React.Fragment>
                    ))}
                </Col>
            </Row>
        </Col>
            
    );
  }
  
  export default Experience;