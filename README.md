# Film Finder

Film Finder is a movie recommendation app I built for Codecademy's Full-Stack Engineer path. You pick a genre, hit Let's Play!, and it shows you a random movie from that genre with its poster, title, and overview. Like or dislike it and you get another one.

Live site: https://ktforge.github.io/film-finder/

## What it does

The genre dropdown fills itself with TMDB's genre list when the page loads.
Clicking Let's Play! grabs a page of movies in the genre you picked.
It chooses one at random and requests that movie's full details.
The movie shows up on the page with like and dislike buttons, and either one loads a new pick.

All of the data comes from The Movie Database (TMDB) API using fetch with async/await.

## How to run it

1. Get a free API key from themoviedb.org (Settings, then API).
2. Open public/script.js and replace YOUR_API_KEY_HERE with your key.
3. Open index.html in your browser, or serve the folder locally.

Example: I picked Action, clicked Let's Play!, and got Spider-Man: Brand New Day with its poster and summary.

## What I learned

My dropdown stayed empty at first and I couldn't figure out why. I had named a variable requestParam but used requestParams on the next line, and I had also left the ? off the front of the query string. Fixing both got the genres to show up.

I forgot to make getMovies async before using await inside it. That one taught me that await only works inside an async function.

At one point I had the genres lines and the movies lines mixed together in the same if block. Anything after a return never runs, so I separated them back into their own functions.

fetch does not throw on a 401 or 404, so checking response.ok is how you catch a bad key or a wrong endpoint.

The Codecademy workspace has no console of its own, so I used Chrome DevTools, switched the console to the preview's frame, and filtered out all the ad blocker noise to find my own logs.

Built by DeVante Bush
