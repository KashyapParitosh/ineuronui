import React from 'react'
import './search.scss'
import SearchImg from "../../gallery/search.png";

import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import SelectBox from "./select";

function SearchBar () {
    return (
        <div className="search-bar-box">
        <div className="seacrh-title-box">
          <div><h1>The Most Exciting jobs</h1></div>
          <div>
            <img src={SearchImg} alt="search-jobs"></img>
          </div>
          <div className="search-box">
            <div className="input-box">
              <span>
                <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              </span>
              <span>
                <TextField
                  id="input-with-sx"
                  label="Job title or Keyword"
                  variant="outlined"
                />
              </span>
            </div>
  
            <div className="Location-box">
              <span>
                {" "}
                <LocationOnIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              </span>
              <span>
                {" "}
                <SelectBox
                  placeHolder="Location"
                  labelName="Location"
                  menu1="India"
                  menu2="Australia"
                />{" "}
              </span>
            </div>
  
            <div className="remote-box">
              <CircleOutlinedIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <span>
                {" "}
                <SelectBox
                  placeHolder="Remote"
                  labelName="Remote"
                  menu1="India"
                  menu2="Australia"
                />{" "}
              </span>
            </div>
  
            <Button variant="contained" size="large">
              Search
            </Button>
          </div>
        </div>
      </div>
    )
}

export default SearchBar;