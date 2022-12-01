import { Link } from 'react-router-dom'
function Landing() {

  return (
    <div className="landing">
      <div className="nav">
        <div className="square"></div>
        <Link to="/login" className="login"> Check out noted</Link>
      </div>
      <div className="wrapper">
        <div className="hero">
          <h4><b>Welcome</b> to</h4>
          <h1>Notes for blogs<span>:</span></h1>
          <p id="meet">It's nice to meet you</p>
          <p id="capt">A note taking app for journalist, readers and curious person</p>
          <div>What is noted ?</div>
        </div>
        <div className="history">
          <p>As information is being spreaded across the data its vital that information is stored and <span>stored and organized</span> properly specific to each user</p>
          <hr />
          <p id="imp">Take notes and save it for the <span>FUTURE</span> </p>
        </div>
        <div className="hero-section">
          <p>With the above things its time to introduce you to </p>
          <h1>Noted<span>:</span></h1>
        </div>
        <div className="step">
          <p><span id="circle">3</span> easy steps for you to start and <span><b>finish</b></span> </p>
        </div>
        <div className="step-1">
          <span id="circle">1</span> select a blog you wish to take notes on
        </div>
        <div className="step-2">
          <span id="circle">2</span> Take note on the <span>BLOG!!</span>
        </div>
        <div className="step-3">
          <span id="circle">3</span> Save the blog and start again :)
        </div>
        <div className="begin">
          <div>
            Ready to start our journey ?
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
