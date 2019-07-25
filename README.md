# MovieAppAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9. Angular version is 7.2.15. This application is lazy loaded and the application is split into layout,shared module and feature module. The application uses [TMDB](https://developers.themoviedb.org/3/getting-started/introduction) (The Movie Data Base) apis for the data. Currently has home page with list of all movies playing now and has got search field to search for movies based on title. Another page will list all the upcoming movies and by click on any movie will be re-directed to its detail page where a brief description of the movie and few details related to the movie will be displayed. Below you can also find cast and crew, the trailers related to the movie, reviews and similar movies.

DEMO : https://movie-guide-angular.netlify.com/home

# Features which can be implemented in future.
* Show recommended movies based on search
* Rate the movie as a guest user
* Authentication 
* Display TV shows, add fav shows, latest episodes etc.,
* implement pagination for reviews and similar movies in movie detail page
* Can display 6-7 lines of reviews and then can have a read more button which can be re-directed to another page with complete review. There another service call can be made based on review-id

After authentication
* Add movie to favourite,
* Show the favourite movies
* Rate the movie or Link the rated movie as guest user to the authenticated user

Unit testing for newly added services

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
