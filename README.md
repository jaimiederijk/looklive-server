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

![Alt text](/performance/before.master.svg.png)
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
