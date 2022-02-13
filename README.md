# FindDominantColor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

# To Run Angular Application locally
1. Replace Google Custom API accessKey and Google searchEngineId in the environment.ts file.
2. Run `npm install` to add all node packages.
3. Run `ng serve`. Navigate to `http://localhost:4200/`. 

# Dependencies used
- bootstrap, quantize 
- Tried to install dependency for getting the dominant color but none worked for me, so took the part of functionalties from `color-thief` node package and installed the `quantize` and tried to get the dominant color from image.

# Deployment
- Deployed on Heroku by using express,
- express is a framework for building web applications on node, so because on the back end we are using express so installed express dependencies as well.
- Here is the url https://find-dominant-color.herokuapp.com/

# Screenshots
 ## Landing Page
![alt text](https://github.com/iamrashree/find-dominant-color-of-an-image-in-angular/blob/master/src/assets/landing.png?raw=true)

## Result Page
![alt text](https://github.com/iamrashree/find-dominant-color-of-an-image-in-angular/blob/master/src/assets/result.png?raw=true)

## Error-handling Page
![alt text](https://github.com/iamrashree/find-dominant-color-of-an-image-in-angular/blob/master/src/assets/error.png?raw=true)


