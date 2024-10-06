import { Col, Row } from "react-bootstrap";
import './Experience.css';
import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";


function Experience(props) {

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
            "type": "loading...",
            "website_url": "",
            "individual_img_url": "",
            "individual_url": ""    
          }
    ]);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



useEffect(() => {

    function sortList(received){
        received.sort((a, b) => b.start_month.toString().padStart(2, '0').localeCompare(a.start_month.toString().padStart(2, '0')));
        received.sort((a, b) => b.start_year.toString().localeCompare(a.start_year.toString()));
        console.log(received[0]);
        var newList = [];
        console.log(newList);
        for(var i = 0; i < received.length; i++){
            if(newList.includes(received[i])) continue;
            newList.push(received[i]);
            for(var j = i+1; j < received.length; j++){
                if(received[i].company === received[j].company) newList.push(received[j]);
            }
        }
        return newList;
    }

    function fetchData() {
        fetch('https://script.googleusercontent.com/macros/echo?user_content_key=vPja-qmNR9OACB6PINOgnbHkdZ_FXc2tCG3HD8vosGW6itJaiL9E1hOimu1OR0vxikINgfBUQcNK1BnNE9cY2oZ1n_fjUdQ8m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnE7f5NJmJVFUmIIk6m2PTx-W9nYTVJFE3hBoTHmr7u6lFJHijhv_GG5GwAIBhrZb6-Pm32NKPcw5z7zwJfMr1voe-ZBFab95Fw&lib=M0Dm_mTIH57OLRgr4D2knB9oBno9WCgsY') 
        .then(response => response.json())
        .then(response => sortList(response))
        .then(response => setData(response))
        .catch(error => console.error('Error fetching data:', error));

        

        //setData(newList);
    }
    fetchData()
  }, []);

  function getMonth(number){
    return (
        Number.isInteger(number) && number > 0 && number < 13 ? (
            <React.Fragment>{months[number-1]}</React.Fragment> 
        ) : (
            <React.Fragment>{number}</React.Fragment>
        )
    )
  }

    function itemDetails(item, width = 12){
        return (
            <Col xs={width}>
                <b>{item.individual_url !== undefined && item.individual_url !== "" ? (
                            <a href={item.individual_url} target="_blank" rel="noreferrer" className="text-dark">{item.title}</a>
                            ) : (
                            <React.Fragment>{item.title}</React.Fragment>
                        )}</b>
                        <p>{(item.start_year !== undefined && item.start_year !== "" && item.end_year !== undefined) ? (
                            item.start_year === item.end_year && item.start_month === item.end_month ? (
                                <React.Fragment>{getMonth(item.start_month)} {item.start_year}</React.Fragment>
                            ) : (
                            <React.Fragment>{getMonth(item.start_month)} {item.start_year} - {item.end_month !== "" ? (
                                <React.Fragment>{getMonth(item.end_month)} {item.end_year}</React.Fragment>
                             ) : "Present"}</React.Fragment>)
                            ) : ""}</p>
                        {item.free_text !== undefined && item.free_text !== "" ? (
                            <p className="freetext">{item.free_text}</p>
                        ) : ""}
            </Col>
        )
    }


    return (
        <Col  md={{span: props.md_span ?? 8, offset: props.md_offset ?? 0}} className="experience-col p-3 rounded shadow-sm mt-10 mb-5 dm-sans-500" style={{background: props.background}}>
            <Row className="align-middle">
                <Col lg={6} sm={12} className="f-xl text-center d-none d-lg-flex justify-content-center align-items-center">
                    <Parallax speed={100} className="d-flex parallax-experience">
                        <h1>{props.title}</h1>
                    </Parallax>
                </Col>
                <Col sm={12} className="d-block d-lg-none f-xl text-center">
                    <h1>{props.title}</h1>
                </Col>
                <Col lg={6} sm={12}>

                    {data.filter((item) => (item.type === props.filter || item.type === "loading..."))
                    .map((item, index, list) => (
                        <Row key={index}>
                            
                        {((list[index-1] === undefined) || (list[index-1] !== undefined && list[index-1].company !== list[index].company)) && item.img_url !== undefined && item.img_url !== "" ? (
                            <h2>
                                {item.website_url !== null && item.website_url !== "" ? (
                                    <a href={item.website_url} target="_blank" rel="noreferrer"><img src={item.img_url} alt={item.company + "logo"} className="w-100 pe-lg-5" /></a>
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
                             <Row className="experience-item-details">
                                {item.individual_img_url !== null && item.individual_img_url !== "" ? (
                                    
                                    <React.Fragment>
                                        <Col xs={3}>
                                            <img src={item.individual_img_url} alt={item.title + "logo/graphic"} className="w-100 image-fluid"/>
                                        </Col>
                                        {itemDetails(item, 9)}
                                        </React.Fragment>
                                ) : (
                                    <React.Fragment>{itemDetails(item)}</React.Fragment>
                                )}
                             
                        </Row>
                        {(list[index+1] !== undefined && list[index+1].company !== list[index].company) ? <hr /> : ""}
                    </Row>
                    ))}
                </Col>
            </Row>
        </Col>
            
    );
  }
  
  export default Experience;