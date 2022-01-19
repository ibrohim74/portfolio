import React from 'react';
import {BiSearchAlt,} from "@react-icons/all-files/bi/BiSearchAlt";
import {BiBell} from "@react-icons/all-files/bi/BiBell";
import './main.css'
import {CDropdown, CDropdownDivider, CDropdownItem, CDropdownMenu, CDropdownToggle} from "@coreui/react";
const TheHeaderDropdown = () => {
    return (
        <div>
            <div className="header">

                        <a className='search-header'><BiSearchAlt size={'30'}/></a>

                        <a className='search-header'><BiBell size={'30'}/></a>



                <div className="avatarsB " >
                </div>


            </div>  <CDropdown  style={{position:'absolute', right: 25, top:0, }}>
            <CDropdownToggle>
                Khasanov Ibroxim
            </CDropdownToggle>
            <CDropdownMenu>
                <CDropdownItem header>+998 99 304 54 75</CDropdownItem>
                <CDropdownItem >email archive</CDropdownItem>
                <CDropdownItem>salary</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>exit</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
        </div>
    );
};

export default TheHeaderDropdown;