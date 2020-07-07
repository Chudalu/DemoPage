import React from 'react';
import './Body.css';
import con1 from '../con1.jpg';
import con2 from '../con2.jpg';
import con3 from '../con3.jpg';
import con4 from '../con4.jpg';
const Body = () => {
    return <div >
        <div style={{ display: 'block'}}>
            <div style={{paddingTop: '40px', display: 'flex'}}>
                    <div style={{paddingLeft: '20px'}} className='w-40'>
                        <h1> Find a technical and non-technical <span className='blue'>co-founder</span> for your startup, idea or existing business</h1>
                        <p className='f4 w-90'> <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Morbi aliquet sodales placerat. Duis nisi arcu, placerat sed tortor at, ultrices commodo purus. 
                            Aenean at ullamcorper leo. Etiam pretium nisi ac tortor pellentesque, nec efficitur libero volutpat. 
                            Suspendisse id felis eget dui rhoncus cursus. Proin ultricies leo nec nisi pellentesque sagittis. 
                            Nulla consectetur libero nec sem bibendum vestibulum. Cras nec tortor dictum, ornare diam sed, ultricies enim. 
                            Mauris aliquet tincidunt aliquam. Morbi fermentum odio id sodales imperdiet.</p>
                            
                            <a class="f5 link dim br3 ph5 pv3 mb2 dib white bg-dark-blue pointer " href="#0">Get Started</a>
                    </div>

                    <div  className='w-20 h-25 pa1'>
                        <img style={{paddingLeft:'30px', borderRadius: '20%'}} alt='conversation' height='100%' width='100%' src={con1}/>
                    </div>

                    <div  className='w-30 h-25 pa1'>
                        <img style={{paddingLeft:'30px', borderRadius: '20%'}} alt='conversation' height='100%' width='100%' src={con3}/>
                    </div>
                    
                </div>
                <div style={{float: 'right'}} className='w-60 h-45 pa1'>
                         <img style={{borderRadius: '20%'}} alt='conversation' height='100%' width='100%' src={con2}/>
                </div>

        </div>
      
            <div style={{display: 'block', paddingTop:'400px'}}>
                    
                
                <div style={{float:'left', paddingTop:'50px', paddingLeft: '50px', display:'block'}} className= 'rotated w-50 h-100'>
                    <div style={{display: 'flex'}}>
                        <div  className='w-50 h-50'>
                            <img style={{paddingLeft:'5px', borderRadius: '15%'}} alt='conversation' height='100%' width='100%' src={con4}/>
                        </div>
                        <div className='w-50 h-50'>
                            <img style={{paddingLeft:'5px', borderRadius: '15%'}} alt='conversation' height='100%' width='100%' src={con2}/>
                        </div>
                    </div>
                    <div className='w-100 h-50'>
                         <img style={{paddingLeft:'5px', borderRadius: '15%'}} alt='conversation' height='100%' width='100%' src={con1}/>
                    </div>
                </div>

                <div style={{float:'right', paddingRight:'40px'}} className='w-40 h-75'>
                    <br></br>
                    <h2 className='blue'> About Us </h2>
                    <h1 className='blue'> The First of its Kind in Africa </h1>
                    <p className='f4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Morbi aliquet sodales placerat. Duis nisi arcu, placerat sed tortor at, ultrices commodo purus. 
                            Aenean at ullamcorper leo. Etiam pretium nisi ac tortor pellentesque, nec efficitur libero volutpat. 
                            Suspendisse id felis eget dui rhoncus cursus. Proin ultricies leo nec nisi pellentesque sagittis. 
                            Nulla consectetur libero nec sem bibendum vestibulum. Cras nec tortor dictum, ornare diam sed, ultricies enim. 
                            Mauris aliquet tincidunt aliquam. Morbi fermentum odio id sodales imperdiet.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Morbi aliquet sodales placerat. Duis nisi arcu, placerat sed tortor at, ultrices commodo purus. 
                            Aenean at ullamcorper leo. Etiam pretium nisi ac tortor pellentesque, nec efficitur libero volutpat. 
                            Suspendisse id felis eget dui rhoncus cursus. Proin ultricies leo nec nisi pellentesque sagittis. 
                            Nulla consectetur libero nec sem bibendum vestibulum. Cras nec tortor dictum, ornare diam sed, ultricies enim. 
                            Mauris aliquet tincidunt aliquam. Morbi fermentum odio id sodales imperdiet.
                    </p>
                    
                </div>
            </div>

           
            





    </div>
}

export default Body;