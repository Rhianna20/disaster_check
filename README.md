# disaster_check

An application that has live updates of natural disasters throughout the globe.
Working towards my mvp which is to:
- Get api data
- Display list of data

Steps:

- created a repo and cloned it from my github.
- npm init to create package.json
- npm install express --save
- npm install react react-dom : This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.
- npm i sucrase : allows super-fast development builds. Instead of compiling a large range of JS features to be able to work in Internet Explorer, Sucrase assumes that you're developing with a recent browser or recent Node.js version, so it focuses on compiling non-standard language extensions: JSX, TypeScript, and Flow.
- npm install axios : to fetch api.
apis:

1. https://help.opendatasoft.com/apis/ods-search-v1/#errors-handling
2. https://documenter.getpostman.com/view/5841816/S17wM6DE#5f1579ef-aacc-4805-837f-e23adceed3f8
3. earthquake api https://www.npmjs.com/package/usgs-earthquake-api
4. https://stackoverflow.com/questions/12879223/disaster-apis-for-disaster-response-application/27040696
5. https://www.programmableweb.com/news/6-apis-earthquakes/brief/2020/04/19
6. https://apidoc.rwlabs.org/field-tables
7. https://www.openhazards.com/data
Initally thought i had found an api that distrubes data on live volcano eruptions, going to use an earthquake api in the meantime.

exported component must be named the same as variable names.

Can i collected or listen out for news outlets on hazard updates.
call twitter api for commonwords. wordscarper.

I completed my mvp as planned by wednesday. I was able grab data from the earthquake api, i am still going to add data on volcanic eruptions but in the meantime I am going to attempt to get the realtime data I've captured and get into to interact with a visual of a map using mapbox. 
I've been reading tutorials, documentations and github readmes as well as watching youtube tutorial. 

As I'd dug deep Ive realised i need to create an enviroment variable. I worked on env vars in my previous ticket but I believe that is important to how I can access the mapbox data.
downloaded geoviewer into my chrome exstentions and has made json data so much easier to read and presentable

hoping its possible to do a word scape on https://volcano.si.edu/reports_weekly.cfm which is probably the only global data on current volcano eruptions.

After a chat wit my buddy I've decided it would be a good idea to play around with postman to make calls to the api and see what data i can retrieve.

What is postman? 
What is Postman? Postman is a popular API client that makes it easy for developers to create, share, test and document APIs. This is done by allowing users to create and save simple and complex HTTP/s requests, as well as read their responses. The result - more efficient and less tedious work.


api: https://eonet.sci.gsfc.nasa.gov/api/v3/events/geojson

mapbox tutorial https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/

Initially I would of liked to be able to approach my project and know exactly whats needed without any assistance, but I've realized I learn way more from asking question even on things I truly believe I get, beside I love a good chat, small talks long talks, I just love socializing. I've found myself asking the same question multiple times not knowing it was identical untill I seen what discovered 

I have to somehow move the data collected from the api from the server side to the client side... explaination slightly blurred out from Amiyah's screams.. the usual.  


I've been blocked for sometime, but I spent time working on other tickets and took a couple days off on this project. HOWEVERR, i finally managed to connect my livetime api calls with my map markers! So when an earthquake goes off in hawaii a icon with appear in the exact place. Which is fricking awesome. 
Now thats out of the way, the next step I would like to add a pop up box to each marker with further information on the earthquake. The magnitude, time etc. Was thinking to add a links to organisations that help people/ animals when facing a natural hazard.


Jest axios GET test dependency: 
https://www.npmjs.com/package/axios-mock-adapter
