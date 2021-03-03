
<h2 align="center">PremPicks</h2>
<p align="center">
  A season long pick 'em game following the English Premier League.
    <br />
    <a href="https://prempicks-web.vercel.app/"><strong>Log in as a guest to explore »</strong></a>
  </p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#how-to-play">How To Play</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Fantasy sports take many forms, from drafting and maintaining a roster to simply picking teams to win games. When the idea for PremPicks came to me I was thinking about casual picks pools, survival leagues and ways make scoring more interesting. I wanted to create a game where people would be engaged all season, interested in every game and not have to do more than select teams.

### How to Play

The Premier League is played through 38 matchdays between 20 teams, each playing each other home and away.  Users pick teams for each matchday attempting to maximize their points. PremPicks standings are divided into three parts: first half, second half and overall. 

Scoring:

|  | Points | Bonus points are awarded to a Wins for | Additional points are deducted for Losses when |
| --- | --- | --- | --- |
| Win | 2 | Clean Sheets | Picking a Top 6 Team |
| Draw | 1 | Picking a Newly Promoted Team | Losing by 3+ goals |
| Loss | -3 | Beating a Top 6 team | |
| | | Winning by 3+ goals | |

- A Top 6 team is one which finished in the top 6 last season
- Newly Promoted teams are those who won promotion to the Premiership last season

Picking:

For each half, users may only pick each team once, leaving one team out of twenty unpicked. Picks are due by the kick off of the first game of the matchday. Any unmade selections at this point are auto-picked with the team highest in last season's standings still available.

### Features
* Firebase authentication
* Guest login with simulated API interactions through Redux
* Integrated with [API built in Rails](https://github.com/jjh5166/prempicks-api)
* Fully responsive for easy use with mobile

### Built With

* [React](https://reactjs.org/)
* [Next](https://nextjs.org/)
* [Redux](https://redux.js.org/)
* [Firebase](https://firebase.google.com/)
* [Football-data.org](https://www.football-data.org/)


<!-- CONTACT -->
## Contact

[John Hartnett](https://jjhv.me) - jjh5166@gmail.com

Project Link: [https://github.com/jjh5166/prempicks-web](https://github.com/jjh5166/prempicks-web)
Project Link for API: [https://github.com/jjh5166/prempicks-api](https://github.com/jjh5166/prempicks-api)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Formik](https://formik.org/)
* [Redux Thunk](https://github.com/reduxjs/redux-thunk)
* [Styled Components](https://styled-components.com/)
* [Font Awesome](https://fontawesome.com)
* [Bootstrap](https://getbootstrap.com/)
* [React Loader Spinner](https://www.npmjs.com/package/react-loader-spinner)
* [Material-UI](https://material-ui.com/)
* [Yup](https://github.com/jquense/yup)



<!-- MARKDOWN LINKS & IMAGES -->
<!--[product-screenshot]: images/screenshot.png -->
