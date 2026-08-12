import inviteImage from './assets/invite.png';
import './app.css'

function App() {

  return (
      <div className="mainInvite">
        <img src={inviteImage} className="inviteImage" />
        <div className="rightColumn">
          <h2>We’re making it official!
          </h2>
          <h3>
            After a lucky 13 years, we are tying the knot and would love for you all to celebrate with us.
          </h3>
          <hr className="line" />
          <ul className="listOfStuff">
            <li>Our home will be open for you all from 11am to 3pm. Brunch starts at 11am, ceremony at 12pm, cake at 1pm, and piñata at 2pm.
            </li>
            <li>
              There will be food and drinks for everyone. We are familiar with people’s dietary needs. Let us know if you have any concerns.
            </li>
            <li>Please do a rapid covid test before coming. If you aren’t feeling well, please stay home. We would love to celebrate with you when you are feeling better

            </li>
            <li>
              We have carefully curated a guest list of our nearest and dearest. To keep this small and intimate, there will be no plus ones. We love you all and are looking forward to sharing food, drinks, and fun times with you!

            </li>
            <li>
              As part of the ceremony, we are asking folks to share a 2-3 minute story or favorite memory as you have witnessed our relationship grow over the past 13 years. Participation is optional.

            </li>
          </ul>
          <hr className="line" />
          <h3>
            In lieu of gifts for us, you can make a gift to any of the following organizations.
          </h3>
          <div className="orgs">

            <a href="https://northwestdogproject.org/donate" target="_blank">Northwest Dog Project</a>
            <a href="https://www.zeffy.com/en-US/donation-form/the-confederated-tribes-of-the-warm-springs-reservation-of-oregon-ctws-wildfire-recovery-fund" target="_blank">Warm Springs Wildfire Recovery</a>
            <a href="https://opencollective.com/the-sameer-project" target="_blank">The Sameer Project Palestinian Mutual Aid</a>
          </div>
        </div>
      </div >

  )
}

export default App
