import React, { Component } from "react";

// from https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow } from "mdbreact";

import AwesomeDebouncePromise from 'awesome-debounce-promise';

import Navigation from "./Navigation";
import Review from "./Review";

import './App.css';

const searchAPI = query => fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=JZxu5NO5PvmA3JtKfcAbNs67KQJOX1Xn&query=' + encodeURIComponent(query));
const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 500);

class App extends Component {
  state = {
    search_query: '',
    reviews: [
      {
        "display_title": "Kalank",
        "mpaa_rating": "Not Rated",
        "critics_pick": 0,
        "byline": "RACHEL SALTZ",
        "headline": "‘Kalank’ Review: A Bollywood Love Story in the Shadow of Partition",
        "summary_short": "Abhishek Varman’s maximalist melodrama delivers spectacle (some of it mind-numbing) but fails to tell a gripping story.",
        "publication_date": "2019-04-19",
        "opening_date": "2019-04-17",
        "date_updated": "2019-04-23 02:44:25",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/19/movies/kalank-review.html",
          "suggested_link_text": "Read the New York Times Review of Kalank"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/20/arts/00kalank-1/merlin_153438399_7f29e029-c5ed-4c59-84dd-91bf61373d59-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Fast Color",
        "mpaa_rating": "PG-13",
        "critics_pick": 1,
        "byline": "JEANNETTE CATSOULIS",
        "headline": "‘Fast Color’ Review: Can a Gifted Family Save a Parched World?",
        "summary_short": "Julia Hart’s wonderfully strange dystopian drama pits three gifted black women against a dried-up world and a hostile government.",
        "publication_date": "2019-04-18",
        "opening_date": "2019-04-19",
        "date_updated": "2019-04-23 02:44:23",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/18/movies/fast-color-review.html",
          "suggested_link_text": "Read the New York Times Review of Fast Color"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/19/arts/fastcolor2/fastcolor2-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Grass",
        "mpaa_rating": "",
        "critics_pick": 1,
        "byline": "GLENN KENNY",
        "headline": "‘Grass’ Review: Eavesdropping in the Coffee Shop With Hong Sang-soo",
        "summary_short": "A sense of dislocation hangs over the South Korean director’s latest feature as a young woman writer observes mostly melancholy people, old and young.",
        "publication_date": "2019-04-18",
        "opening_date": null,
        "date_updated": "2019-04-18 11:04:07",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/18/movies/grass-review.html",
          "suggested_link_text": "Read the New York Times Review of Grass"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/19/arts/18grass1/18grass1-mediumThreeByTwo210-v2.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "The Curse of La Llorona",
        "mpaa_rating": "R",
        "critics_pick": 0,
        "byline": "MANOHLA DARGIS",
        "headline": "‘The Curse of La Llorona’ Review: California Freakin’, With Scares, Laughs and a Murderous Ghost",
        "summary_short": "Linda Cardellini plays a widow with two children and a curse in this amusing, old-fashioned ghost story, the latest addition to the “Conjuring” series.",
        "publication_date": "2019-04-18",
        "opening_date": "2019-04-19",
        "date_updated": "2019-04-23 02:44:24",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/18/movies/the-curse-of-la-llorona-review.html",
          "suggested_link_text": "Read the New York Times Review of The Curse of La Llorona"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/19/arts/00thecurse-1/00thecurse-1-mediumThreeByTwo210-v2.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Someone Great",
        "mpaa_rating": "R",
        "critics_pick": 0,
        "byline": "KAREN HAN",
        "headline": "‘Someone Great’ Review: After a Breakup, One Last Night on the Town",
        "summary_short": "Netflix’s contribution to the “girls’ night out” genre has its clichés, but the cast has ample chemistry to pull it off.",
        "publication_date": "2019-04-18",
        "opening_date": "2019-04-19",
        "date_updated": "2019-04-18 17:48:03",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/18/movies/someone-great-review.html",
          "suggested_link_text": "Read the New York Times Review of Someone Great"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/18/arts/18somethinggreat/18somethinggreat-mediumThreeByTwo210-v2.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "The Man Who Killed Don Quixote",
        "mpaa_rating": "Not Rated",
        "critics_pick": 0,
        "byline": "A.O. SCOTT",
        "headline": "Review: ‘The Man Who Killed Don Quixote’ Brings Him Back to Life",
        "summary_short": "Terry Gilliam’s long-deferred tribute to Cervantes’s knight errant finally arrives, starring Jonathan Pryce and Adam Driver.",
        "publication_date": "2019-04-18",
        "opening_date": null,
        "date_updated": "2019-04-23 02:44:24",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/18/movies/man-who-killed-don-quixote-review.html",
          "suggested_link_text": "Read the New York Times Review of The Man Who Killed Don Quixote"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/19/arts/18manwho1/merlin_153439065_4f784f3f-bef0-44dd-89c0-3c8f7a820f27-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Naples in Veils",
        "mpaa_rating": "",
        "critics_pick": 0,
        "byline": "BEN KENIGSBERG",
        "headline": "‘Naples in Veils’: A Morgue Doctor Is Obsessed. The Movie Is Lifeless.",
        "summary_short": "Ferzan Ozpetek’s thriller tips its hat to the motifs of Hitchcock, only to wind up as a tedious muddle.",
        "publication_date": "2019-04-18",
        "opening_date": "2019-04-19",
        "date_updated": "2019-04-23 02:44:23",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/18/movies/naples-in-veils-review.html",
          "suggested_link_text": "Read the New York Times Review of Naples in Veils"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/18/arts/naples1/naples1-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Little Woods",
        "mpaa_rating": "R",
        "critics_pick": 0,
        "byline": "MANOHLA DARGIS",
        "headline": "‘Little Woods’ Review: Life Is Thicker Than Blood",
        "summary_short": "Tessa Thompson holds the center in this drama about a former drug smuggler on probation who is forced to find a new life for herself and her sister.",
        "publication_date": "2019-04-18",
        "opening_date": "2019-04-19",
        "date_updated": "2019-04-23 02:44:23",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/18/movies/little-woods-review.html",
          "suggested_link_text": "Read the New York Times Review of Little Woods"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/19/arts/00littlewoods-1/00littlewoods-1-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Rafiki",
        "mpaa_rating": "",
        "critics_pick": 0,
        "byline": "BEN KENIGSBERG",
        "headline": "‘Rafiki’ Review: Falling in Love, Illegally",
        "summary_short": "The story of a romance between two Kenyan women was shown at Cannes after being banned in Kenya.",
        "publication_date": "2019-04-18",
        "opening_date": "2019-04-19",
        "date_updated": "2019-04-23 02:44:22",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/18/movies/rafiki-review.html",
          "suggested_link_text": "Read the New York Times Review of Rafiki"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/19/arts/18rafiki/18rafiki-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Stuck",
        "mpaa_rating": "PG-13",
        "critics_pick": 0,
        "byline": "GLENN KENNY",
        "headline": "‘Stuck’ Review: A Movie Musical Set in a Subway Car? Stand Clear.",
        "summary_short": "Michael Berry’s film about characters on a stalled train aims to show how, yes, we’re all connected and yes, we all need one another.",
        "publication_date": "2019-04-18",
        "opening_date": "2019-04-19",
        "date_updated": "2019-04-23 02:44:22",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/18/movies/stuck-review.html",
          "suggested_link_text": "Read the New York Times Review of Stuck"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/16/arts/stuck1/stuck1-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Red Joan",
        "mpaa_rating": "R",
        "critics_pick": 0,
        "byline": "JEANNETTE CATSOULIS",
        "headline": "‘Red Joan’ Review: I Spy, Reluctantly",
        "summary_short": "Trevor Nunn’s listless period drama about an English physicist who leaks atom-bomb secrets, drags when it should zing.",
        "publication_date": "2019-04-18",
        "opening_date": null,
        "date_updated": "2019-04-23 02:44:21",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/18/movies/red-joan-review.html",
          "suggested_link_text": "Read the New York Times Review of Red Joan"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/17/arts/redjoan1/redjoan1-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Family",
        "mpaa_rating": "R",
        "critics_pick": 0,
        "byline": "JEANNETTE CATSOULIS",
        "headline": "‘Family’ Review: Better Living Through Childcare",
        "summary_short": "Taylor Schilling plays a cold workaholic who improves her life by babysitting her unhappy niece.",
        "publication_date": "2019-04-18",
        "opening_date": "2019-04-19",
        "date_updated": "2019-04-23 02:44:21",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/18/movies/family-review.html",
          "suggested_link_text": "Read the New York Times Review of Family"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/16/arts/family1/family1-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Instant Dreams",
        "mpaa_rating": "",
        "critics_pick": 0,
        "byline": "GLENN KENNY",
        "headline": "‘Instant Dreams’ Review: Polaroid’s Too-Secret Ingredient",
        "summary_short": "Willem Baptist’s documentary is an impressionistic study of the end of the Polaroid camera and the “instant film” it used.",
        "publication_date": "2019-04-18",
        "opening_date": null,
        "date_updated": "2019-04-23 02:44:21",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/18/movies/instant-dreams-review.html",
          "suggested_link_text": "Read the New York Times Review of Instant Dreams"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/18/arts/18instantdreams1/merlin_153438948_816b59dc-0ecd-4cd9-8b44-bae1385809cd-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Under the Silver Lake",
        "mpaa_rating": "R",
        "critics_pick": 0,
        "byline": "A.O. SCOTT",
        "headline": "‘Under the Silver Lake’ Review: Andrew Garfield Gets Lost in a Haze of Pop-Culture Allusions",
        "summary_short": "A little Hitchcock, a touch of noir, some ’90s indie rock, a few naked women, and yet not much to see.",
        "publication_date": "2019-04-17",
        "opening_date": "2019-04-19",
        "date_updated": "2019-04-22 16:44:01",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/17/movies/under-the-silver-lake-review.html",
          "suggested_link_text": "Read the New York Times Review of Under the Silver Lake"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/19/arts/18underthesilver/18underthesilver-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Homecoming",
        "mpaa_rating": "",
        "critics_pick": 0,
        "byline": "AISHA HARRIS",
        "headline": "Beyoncé the Creator: ‘Homecoming’ Review",
        "summary_short": "Built around her 2018 Coachella performance, the Netflix documentary is, above all, about Beyoncé, who wrote, directed and executive produced.",
        "publication_date": "2019-04-17",
        "opening_date": null,
        "date_updated": "2019-04-17 14:28:02",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/17/movies/beyonce-homecoming-review.html",
          "suggested_link_text": "Read the New York Times Review of Homecoming"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/18/movies/17homecoming-1/17homecoming-1-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Hail Satan?",
        "mpaa_rating": "R",
        "critics_pick": 1,
        "byline": "BEN KENIGSBERG",
        "headline": "‘Hail Satan?’ Review: Pitchforks, Black Clothes and Good Deeds",
        "summary_short": "Members of the Satanic Temple are not your average devil worshipers.",
        "publication_date": "2019-04-16",
        "opening_date": "2019-04-17",
        "date_updated": "2019-04-23 02:44:20",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/16/movies/hail-satan-review.html",
          "suggested_link_text": "Read the New York Times Review of Hail Satan?"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/16/arts/16hailsatan/16hailsatan-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Penguins",
        "mpaa_rating": "G",
        "critics_pick": 0,
        "byline": "TEO BUGBEE",
        "headline": "‘Penguins’ Review: A Nature Documentary Veers Into Fairy Tale",
        "summary_short": "Ed Helms provides the internal monologue for a 5-year-old Adélie penguin referred to as Steve, who is about to embark on his first mating season.",
        "publication_date": "2019-04-16",
        "opening_date": "2019-04-17",
        "date_updated": "2019-04-23 02:44:19",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/16/movies/penguins-review.html",
          "suggested_link_text": "Read the New York Times Review of Penguins"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/18/arts/16penguins1/merlin_153438432_029bba39-3f4b-4b29-82f3-141c1fca023c-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Breakthrough",
        "mpaa_rating": "PG",
        "critics_pick": 1,
        "byline": "BILGE EBIRI",
        "headline": "‘Breakthrough’ Review: A Remarkable Story of Survival, Told Through a Religious Lens",
        "summary_short": "After a 14-year-old boy falls into freezing water and his pulse stops, prayers and medical workers both seem to play a role in his recovery.",
        "publication_date": "2019-04-15",
        "opening_date": "2019-04-17",
        "date_updated": "2019-04-23 02:44:19",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/15/movies/breakthrough-review.html",
          "suggested_link_text": "Read the New York Times Review of Breakthrough"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/16/arts/16breakthrough/merlin_153438291_78fa1752-8866-407a-9b93-8fae6c8fabe7-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "Guava Island",
        "mpaa_rating": "",
        "critics_pick": 0,
        "byline": "JASON BAILEY",
        "headline": "‘Guava Island’ Review: Donald Glover’s Island Getaway Is a Casual Charmer",
        "summary_short": "The star, along with Rihanna and his “Atlanta” collaborators, crafts a freewheeling paean to the pleasures of taking it easy.",
        "publication_date": "2019-04-13",
        "opening_date": "2019-04-13",
        "date_updated": "2019-04-14 15:52:02",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/13/movies/guava-island-review-donald-glover.html",
          "suggested_link_text": "Read the New York Times Review of Guava Island"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/13/us/13guava-island-review-1/merlin_153476334_9309a9d6-1a6f-47a3-9b17-133a38b3cb26-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      },
      {
        "display_title": "The Silence",
        "mpaa_rating": "PG-13",
        "critics_pick": 0,
        "byline": "SCOTT TOBIAS",
        "headline": "‘The Silence’ Review: Fleeing Winged Peril for a Quieter Place",
        "summary_short": "If “Bird Box” seemed like an ocular companion to the aural deprivation of “A Quiet Place,” this new film feels like a kind of prequel.",
        "publication_date": "2019-04-12",
        "opening_date": "2019-04-10",
        "date_updated": "2019-04-12 16:16:02",
        "link": {
          "type": "article",
          "url": "http://www.nytimes.com/2019/04/12/movies/the-silence-review.html",
          "suggested_link_text": "Read the New York Times Review of The Silence"
        },
        "multimedia": {
          "type": "mediumThreeByTwo210",
          "src": "https://static01.nyt.com/images/2019/04/12/arts/12silence/merlin_153332691_22264b1c-3c45-4c28-b79c-0820d779325f-mediumThreeByTwo210.jpg",
          "width": 210,
          "height": 140
        }
      }
    ]
  };

  handleSearch = value => {
    this.setState({
      search_query: value.trim(),
      reviews: []
    });

    searchAPIDebounced(value)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({
          reviews: json.results || []
        });
        console.log(this.state)
      });
  }

  render() {
  return (
      <React.Fragment>
        <MDBContainer>
          <Navigation onSearch={this.handleSearch} />
          <h2>
            Movie reviews
            {this.state.search_query && (
              <React.Fragment>
                &nbsp;for &quot;{this.state.search_query}&quot;
              </React.Fragment>
            )}
          </h2>
          <MDBRow between>
            {this.state.reviews.map(review => (
              <Review {...review} />
            ))}
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
  );
  }
}

export default App;
