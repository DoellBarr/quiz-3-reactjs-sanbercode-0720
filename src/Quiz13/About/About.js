import React, {Component} from 'react'

class About extends Component {
  render(){
    return (
      <>
      <div className = "card content">
        <h1>
          Data Peserta Sanbercode Bootcamp Reactjs
        </h1>
        <nav>
          <ol>
            <li><b>Nama:</b> M. Shohih Abdul Barr</li>
            <li><b>Email:</b> shohih242@gmail.com</li>
            <li><b>Sistem operasi yang digunakan:</b> Windows</li>
            <li><b>Akun gitlab:</b> <a href="gitlab.com/DoellBarr"> gitlab.com/DoellBarr</a></li>
            <li><b>Akun Telegram:</b><a href="t.me/RiZzzv"> t.me/RiZzv</a></li>
          </ol>
        </nav>
      </div>
      </>
  )
}
}

export default About
