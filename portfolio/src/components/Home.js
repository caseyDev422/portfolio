import { Component } from 'react';

export default class About extends Component {
    render() {
        return(
            <div className='homeContainer'>
              <h3>
                Hi! Thanks for stopping by. If you would like to see my projects, click <a href='/projects'>here</a>
              </h3>
              <h4>
                  If you want to know more about me, check out the about section or click <a href='/about'>me</a>
              </h4>
              <h4>Clicking on the resume in the nav bar will download my current resume if you want to see where I'm currently at in my journey and other technical details</h4>

              <h4>If you have already gone through my website and would like to contact me, you can click the LinkedIn or shoot me an email through the <a href='/contact'>contact</a> page</h4>
            </div>
            
        )
    }
}