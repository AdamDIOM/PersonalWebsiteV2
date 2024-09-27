import { Col, Row } from "react-bootstrap";
import './Experience.css';
import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";


function Experience() {

    const [data, setData] = useState([
        {
            "company": "Loading...",
            "title": "",
            "start_month": "",
            "start_year": "",
            "end_month": " ",
            "end_year": "",
            "free_text": "",
            "img_url": "",
            "type": "exp",
            "website_url": ""
          }
    ]);


    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

useEffect(() => {
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=vPja-qmNR9OACB6PINOgnbHkdZ_FXc2tCG3HD8vosGW6itJaiL9E1hOimu1OR0vxikINgfBUQcNK1BnNE9cY2oZ1n_fjUdQ8m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnE7f5NJmJVFUmIIk6m2PTx-W9nYTVJFE3hBoTHmr7u6lFJHijhv_GG5GwAIBhrZb6-Pm32NKPcw5z7zwJfMr1voe-ZBFab95Fw&lib=M0Dm_mTIH57OLRgr4D2knB9oBno9WCgsY') // Replace with your actual endpoint URL
      .then(response => response.json())
      .then(response => response.sort((a, b) => months.indexOf(a.start_month) > months.indexOf(b.start_month)))
      .then(response => response.sort((a, b) => String(b.start_year).localeCompare(String(a.start_year))))
      .then(response => response.sort((a, b) => a.company.localeCompare(b.company)))
      .then(data => setData(data))
      .then(console.log(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [""]);


    return (
        <Col  md={8} className="experience p-3 rounded shadow-sm mt-10 mb-5 dm-sans-500">
            <Row className="align-middle">
                <Col lg={6} sm={12} className="f-xl text-center d-none d-lg-flex justify-content-center align-items-center">
                    <Parallax speed={100} className="d-flex parallax-experience">
                        <h1>Experience</h1>
                    </Parallax>
                </Col>
                <Col sm={12} className="d-block d-lg-none f-xl text-center">
                    <h1>Experience</h1>
                </Col>
                <Col lg={6} sm={12}>

                    {data.filter((item) => (item.type === "exp"))
                    .map((item, index, list) => (
                        <Row key={index}>
                            
                        {((list[index-1] === undefined) || (list[index-1] !== undefined && list[index-1].company !== list[index].company)) && item.img_url !== undefined && item.img_url !== "" ? (
                            <h2>
                                {item.website_url !== null && item.website_url !== "" ? (
                                    <a href={item.website_url} target="_blank" rel="noreferrer"><img src={item.img_url} alt={item.company + "logo"} className="w-100 pe-5" /></a>
                                ) : (
                                    <img src={item.img_url} alt={item.company + "logo"} className="w-100 pe-5" />
                                )}
                            </h2>
                            ) : (list[index-1] === undefined) || (list[index-1] !== undefined && list[index-1].company !== list[index].company) ? (
                                <h2>
                                    {item.website_url !== null && item.website_url !== "" ? (
                                    <a href={item.website_url} target="_blank" rel="noreferrer" className="text-decoration-none text-dark">{item.company}</a>
                                ) : (
                                    <React.Fragment>{item.company}</React.Fragment>
                                )}
                                </h2>
                             ) : ""}
                        <b>{item.title}</b>
                        <p>{(item.start_year !== undefined && item.start_year !== "") ? (<React.Fragment>{item.start_month} {item.start_year} - {item.end_month !== "" ? `${item.end_month} ${item.end_year}` : "Present"}</React.Fragment>) : ""}</p>
                        {(list[index+1] !== undefined && list[index+1].company !== list[index].company) ? <hr />: ""}
                    </Row>
                    ))}
                </Col>
            </Row>
        </Col>
            
    );
  }
  
  export default Experience;