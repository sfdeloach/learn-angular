# Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Install Bootstrap

"../node-modules/bootstrap/dist/css/bootstrap.min.css"

## Instructions

1. Create three new components: GameControl, Odd, and Even <-COMPLETE
2. The GameControl component should have buttons to start and stop the game <-COMPLETE
3. When starting the game, an event (holding an incrementing number) should get emitted each second (ref = setInterval()) <-COMPLETE
4. The event should be listenable from outside the component
5. When stopping the game, no more events should get emitted (clearInterval(ref))
6. A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers)
7. Simply output Odd - NUMBER or Even - NUMBER in the two components
8. Style the element (e.g. paragraph) holding your output text differently in both components
