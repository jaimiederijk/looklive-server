# Week 3

## Taskmanager
Grunt, Gulp


Gulp is gebasseerd op node.js en is dus makkelijker te leren. Gulp is sneller in het uitvoeren. 
Gulp is een stuk vrijer dan Grunt. Grunt is gebouwd rond een aantal kerntaken. Grunt heeft een grotere community dus meer extensies en info. Bij gulp is geen configuratie nodig.

Grunt is mischien handiger voor dit project omdat de meeste taken die waarschijnlijk nodig zijn al ingebouwd zijn. Toch kies ik ervoor om gulp te gebruiken omdat ik denk dat ik dit bij andere projecten eerder zal gebruiken en gulp mij meer interesseert. Ik maak dus liever een start met het leren van gulp.  

[https://medium.com/@preslavrachev/gulp-vs-grunt-why-one-why-the-other-f5d3b398edc4#.wui1d7o3i](medium gulp vs grunt)

[http://jaysoo.ca/2014/01/27/gruntjs-vs-gulpjs](jaysoo grunt vs gulpjs)

## http

166 request - voornamelijk de plaatjes

####before without throttle

![Alt text](/performance/before%20without%20throttle%202016-05-16%2014.29.25.png)

#### before with good 3g

![Alt text](/performance/before%203g%202016-05-16%2015.04.24.png)

### minify javascript and css

Gulp uglify en concat de javascript.
Gulp uglify verkleint het js bestand door alle loze ruimte weg te halen. 1.72kb + 2.54kb ==> 912 bytes na uglify.
Concat voegt de bestanden bij elkaar om er een request van te maken. Dit heeft bij dit project niet vreselijk veel zin omdat er niet veel bestanden zijn die bijelkaar gevoegd kunnen worden.

####after minify with good 3g

![Alt text](/performance/after%20mincss%203g%202016-05-16%2016.18.24.png)

### Smaller images
Gulp imagemin heeft tot een verkleining geleid van 20.5%. Dit is ongeveer 500kb. Hiernaast gebruik ik ook al inline svg icons om het aantal request te verminderen en grote te verkleinen.
#### after smaller images with 3g

![Alt text](/performance/after%20minimage%20andjs%203g%202016-05-16.png)

### font
Dit heb ik geprobeerd op te lossen met de google webfontloader. Dit zorgt ervoor dat het font request niet blocking is en kan het font async inladen. Daarintegen is er wel 1 request bijgekomen om de fontloader binnen te halen. 

#### After fontloader with 3g

![Alt text](/performance/after%20font%202016-05-17%2008.42.46.png)

#### After fontloader without throttle

![Alt text](/performance/after%20font%20nothrottle%202016-05-17%2008.46.06.png)

### Conclusie

De dingen die ik gedaan heb zijn kleine verbeteringen voor de laadtijd maar zijn niet heel effectief door de kleine schaal van het project. Bij een groter project zouden ze effectiever moeten zijn. Het grootste probleem bij dit project zijn de grote hoeveelheid plaatjes van de feed. Door deze hoeveelheid te beperken en pagination toe te passen zou er een grote winst geboekt kunnen worden.
