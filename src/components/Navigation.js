import React from 'react';
import logo from '../logo.png';

const Navigation = () => {
    return <div>
        <nav>
            <ul style={{listStyleType:'none', overflow: 'hidden'}}>
                <li style={{float: 'left', display:'block', textAlign:'center', paddingLeft:'10px'}}><img style={{paddingTop:'8px', paddingRight:'20px'}} height='60px' width='150px' alt='logo' src={logo}/></li>
                <li style={{float: 'left', display:'block', textAlign:'center', paddingLeft:'10px'}}><p className='f4 link dim black pa2 pointer' >About Netflix</p></li>
                <li style={{float: 'left', display:'block', textAlign:'center', paddingLeft:'10px'}}><p className='f4 link dim black pa2 pointer' >How it Works</p></li>
                <li style={{float: 'left', display:'block', textAlign:'center', paddingLeft:'10px'}}><p className='f4 link dim black pa2 pointer' >FAQs</p></li>
                <li style={{float: 'left', display:'block', textAlign:'center', paddingLeft:'10px'}}><p className='f4 link dim black pa2 pointer' >Blog</p></li>

            
                <li style={{float: 'right', display:'block', textAlign:'center', paddingTop:'20px', paddingRight:'50px'}}><a class="f4 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue pointer" href="#0">Sign in</a></li>
                <li style={{float: 'right', display:'block', textAlign:'center', paddingRight:'20px'}}><p className='f4 link dim dark-blue pa2 pointer' >Log in</p></li>
           
            </ul>
            
        </nav>
    </div>
}

export default Navigation;
