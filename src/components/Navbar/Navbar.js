import React from 'react';
import { Bell, ChevronLeft, Search } from '../../assets/icons';
import { Link } from 'react-router-dom';

import Me from '../../assets/images/me.png';
import Aux from '../../hoc/Aux/Aux';

import './Navbar.css'

function Navbar({home}) {
    return (
        <div className="navbar" style={{backgroundColor: `${!home && '#F1ADAC'}`}}>
            <div className="left">
                {home ? 
                <div className="image">
                        <span>
                            <img alt='' src={Me} height='40' width='40' />
                        </span>
                </div>
                :
                <Link to='/'>
                    <div className="image" style={{backgroundColor: 'white'}}>
                        <span style={{marginLeft: '7px'}}>
                            <ChevronLeft color='black' height='37' />
                        </span>
                    </div>
                </Link>
                }
            </div>
            <div className="right">
                {home ? 
                <Aux>
                    <span className='search'>
                        <Search height={25} color='#FFB4CB' />
                    </span>
                    <span className='bell'>
                        <Bell height={25} color='#FFB4CB' />
                        <div class='dot'></div>
                    </span>
                </Aux>
                :
                ''
                }
            </div>
        </div>
    )
}

export default Navbar;
