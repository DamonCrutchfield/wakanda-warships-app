import React from "react";
import SimpleMenu from './DropdownMenu'
import { Search } from "./Search";


export const Header = (props) => {
console.log("what is props here in header", props)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    function close() {
        setAnchorEl(null)
    }

    return (
        <div>
            <div className="header-content">
                <header className="header">
                    <div className="topnav">
                        <i className="fa fa-bars" style={{ fontSize: "2em" }} onClick={handleClick}></i>
                    </div>
                    <div className="header-info">
                        <a href="#">
                            <h1>Vibranium Warships</h1>
                            <h2>Click to see list of aircrafts</h2>
                        </a>
                    </div>
                    <div className="header-nav">
                        <input type="text" placeholder="Search.." />
                        <button type="submit"><i className="fa fa-search"></i>Search</button>
                    </div>
                </header>
                <SimpleMenu anchorEl={anchorEl} close={close} />
                {/* {props.aircrafts.map((aircraft) =>
                <Search aircraft={aircraft} />)} */}
            </div>

        </div>

    )

}

