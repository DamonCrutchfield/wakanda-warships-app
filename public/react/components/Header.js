import React, {useRef} from "react";
import SimpleMenu from './DropdownMenu'



export const Header = (props) => {
const inputEl = useRef("")
    /**
     * Create search component that displays the search results to the UI
     * Create event handler on search button of header
     * Create onChange event on text input field
     * Create a search filter function
     */

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    function close() {
        setAnchorEl(null)
    }
    
   function getSearchValue () {
     props.searchKeyWord(inputEl.current.value)
   }

   function searchClick(){
       props.searchHandler()
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
                        <input 
                        ref={inputEl}
                        type="text" placeholder="Search.." 
                        value={props.term} 
                        onChange ={getSearchValue}
                        />
                        <button  type="submit"  onClick={searchClick}>Search</button>
                    </div>
                </header>
                <SimpleMenu anchorEl={anchorEl} close={close} />
            </div>

        </div>

    )

}

