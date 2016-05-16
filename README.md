<<<<<<< HEAD
# LookLive server

The project you're looking at is an [express.js](http://expressjs.com) project. You'll use it to get set up a development environment where you're
going to optimize the way this project works. In it's current state, the css is messy, the rendering isn't modern and
overall the product is boring and not efficient. It's up to you to fix this and improve it.

## Getting started

### Step 1 - clone the repo
Github provides some instructions for this and we're assuming that you know how to clone this repo. If you're not sure,
don't hesitate to raise your hand now and ask.

### Step 2 - install dependencies
In order to run the server you'll need to install express.js and it's dependencies. In order to do this, open up a 
terminal and navigate to your project folder (for example `cd ~/Projects/looklive-server`). When you've done this, type
this command to run the instal:

```
npm install
```

That should get you setup.

### Step 3 - running the server
To run the server, stay at the 'root' of your project folder and type:

```
npm start
```

That will get the server to run on port 3000. If you go to [http://localhost:3000](http://localhost:3000) in your browser
you should see an overview page.

## The api

This project comes with a simple API. All you need to know for now is that there's three endpoints:

* `/api/feed/` <- returns a feed of appearances
* `/api/appearance/:uuid` <- returns a single appearance, more detailed than in the feed. Replace `:uuid` with the 
appearance id.
* `/api/product/:uuid` <- returns a single product, including similar and bargain products. Replace `:uuid` with the 
product id.

The API returns JSON (for now).
=======
## Progressive Web App
Progressive Web Apps zijn web apps die gebruik maken van een aantal nieuwe web features die er voor zorgen dat de web app zich meer gedraagd als een native app. 
Eigenschappen van een progressive app zijn:
- Responsive
- Werkt offline dankzij service workers
- Interactie zoals op een native app
- Up to date. geen updates downloaden maar gewoon nieuwe versie binnen halen zoals websites.
- Ontdekbaar als applicatie zijnde dankzij [manifest](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android)  
- Veilig via https
- Kan gebruik maken van het os. bv. push notificaties
- Installeerbaar
- Linkbaar

een groot voordeel is dat de performance van dit soort apps verbeterd kan worden door progressive enhancement.

bron:[https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/)


## Performance
testresults
### settings
- browser:chrome
- voor elke test: cache wissen en geforceerd herladen

### icons naar inline svg 
####before

![Alt text](/performance/before.master.png)
####after

![Alt text](/performance/after.svg.png)

#### difference
- loading: 52.3ms       52.8ms
- rendering: 171.3ms    146.5ms
- painting: 7.9ms       7.3ms

Changes:
- improved html and css
- removed jquery
- responsive images and smaller
- single page app

###total
####before

![Alt text](/performance/before.master.png)
####after

![Alt text](/performance/total.after.png)

#### difference
- loading: 49.1ms       59.5ms
- scripting: 292.9ms    266.4ms
- rendering: 226.6ms    154.0ms
- painting: 19.2ms       6.1ms
>>>>>>> refs/remotes/origin/student/jaimie
