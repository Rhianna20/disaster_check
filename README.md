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

Initally thought i had found an api that distrubes data on live volcano eruptions, going to use an earthquake api in the meantime.

exported component must be named the same as variable names.