import inviteImage from './assets/invite.png';
import './app.css'

function App() {

  return (
    <div className="mainInvite">
      <img src={inviteImage} className="inviteImage" />
      {/* <hr className="line" /> */}
      <div className="rightColumn">
        <h2>A few things:</h2>
        <ul className="listOfStuff">
          <li>Our home will be open and ready for you all from 11am to 3pm. We imagine we will have our sweet ceremony around noon, but come when you can!
          </li>
          <li>We will have food and drinks for everyone. I think we are pretty familiar with most people’s food needs, but let us know if you think otherwise
          </li>
          <li>Please do a rapid covid test before coming and if you aren’t feeling well, please stay home. We would love to celebrate with you when you are feeling better.
          </li>
        </ul>
        <hr className="line" />
        <h2>
          In lieu of gifts for us, you can make a gift to any of the following organizations.
        </h2>
        <div className="orgs">

        <a href="">Org 1</a>
        <a href="">Org 2</a>
        </div>
      </div>
    </div>
  )
}

export default App
