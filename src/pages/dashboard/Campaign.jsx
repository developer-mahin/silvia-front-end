import React from "react";
import img from "../../Assets/analytics3.png";
import calendar from '../../Assets/calendar.png'

export const Campaign = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row card">
          <div className="row">
            <div className="col">
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "24px",
                  color: "#5E5873",
                }}
              >
                Ads
              </h3>
            </div>
            <div className="col text-end">
              <button
                type="button"
                class="btn"
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#5E5873",
                  textTransform: "capitalize",
                  background: "white",
                }}
              >
                Campaign <span class="badge ms-2 bg-primary">12</span>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                  <div className="d-flex align-items-center" style={{border:'1px solid #6C757D',borderRadius:'5px'}}>
                    <img
                    className="ps-2"
                      src={img}
                      alt=""
                      style={{ width: "33px", height: "25px" }}
                    />
                    <select
                      style={{ width: "205px", padding: "8px" ,outline:'none'}}
                      label="select One Option"
                    >
                      <option className="option"
                        value=""
                       
                      >
                        2 Account Selected
                      </option>
                      <option value="1">Option 1</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-12 col-12 mt-sm-5 mt-lg-0 mt-md-0 mt-2">
                <div className="d-flex align-items-center" style={{border:'1px solid #6C757D',borderRadius:'5px'}}>
                    <img
                    className="ps-2"
                      src={calendar}
                      alt=""
                      style={{ width: "25px", height: "18px" }}
                    />
                    <select
                      style={{ width: "145px", padding: "8px" ,outline:'none'}}
                      label="select One Option"
                    >
                      <option className="option"
                        value=""
                        data-mdb-icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                      >
                        Last Month
                      </option>
                      <option value="1">Option 1</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 col-12 mt-sm-5 mt-lg-0 mt-md-0 mt-2">
                <div className="d-flex align-items-center" style={{border:'1px solid #6C757D',borderRadius:'5px'}}>
                    <img
                    className="ps-2"
                      src={img}
                      alt=""
                      style={{ width: "33px", height: "25px" }}
                    />
                    <select
                      style={{ width: "110px", padding: "8px" ,outline:'none'}}
                      label="select One Option"
                    >
                      <option className="option"
                        value=""
                       
                      >
                        Active
                      </option>
                      <option value="1">Option 1</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                <button type="button" class="btn shadow-0" style={{color:'#6C757D',textTransform:'capitalize',fontWeight:'600',fontSize:'14px',border:'1px solid #6C757D',letterSpacing:'1px'}}>Export</button>
                </div>
                <div className="col">
                <button type="button" class="btn shadow-0" style={{color:'#6C757D',textTransform:'capitalize',fontWeight:'600',fontSize:'14px',border:'1px solid #6C757D',letterSpacing:'1px'}}>Connect Ad Account</button>

                </div>
                <div className="col">
                <button type="button" class="btn shadow-0" style={{color:'white',textTransform:'capitalize',fontWeight:'600',fontSize:'14px',border:'1px solid #6C757D',letterSpacing:'1px',background:'#7367F0'}}>Connect Ad Account</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
