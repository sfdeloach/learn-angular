
# learn-angular

Collection of work from Udemy's Angular 4 - The complete guide by Maximilian Schwarzmüller

From the [website](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview):

> Master Angular (both Angular 4 and Angular 2) and build awesome, reactive web apps with the successor of Angular.js

---
## Course Content

### 1. Getting Started (aa)
 - create and serve a new project:

         ng new aa-get-start
         cd aa-get-start
         ng serve --open

 - install bootstrap under apps->styles in '.angular-cli.json' file, path to bootstrap.min.css file is relative to /src/index.html, note that bootstrap must be included in the cli file prior to starting the server, changes to this file are not dynamically updated

         npm install --save bootstrap
         npm install --save font-awesome // (optional)

### 2. The Basics (ab)
 - create a new component called server, a new directory under the app folder (not using cli tool)
 - model the same files found under the app folder using a similar naming convention for ts, html, and css files
 - modules are used to bundle components
 - new server module is added to `app.module` file under the declarations property
 - include your new components onto the page with custom selectors that follow the naming convention similar to `app-<component name>`
 - self-review assignment:
    - create a new angular app using the cli
    - load Bootstrap CSS framework via npm and load into the app
    - create a new server component and load onto the page
 - use the ng cli tool to create components automatically:

         ng generate component <name of component>

 - components can be nested and combined in any combination
 - `template` or `templateUrl` must be present in the `@Component({})` decorator object, use the inline template property for convenience if the html code is not long
 - `styles` or `styleUrl` is optional and only affects the specific component, use the inline styles template for convenience if the css code is not long
 - there are three options when creating component selectors in the html code, *element selectors* are most common:

         selector: 'app-servers'   // by element   <app-servers>             </app-servers>
         selector: '[app-servers]' // by attribute <div app-servers>         </div>
         selector: '.app-servers'  // by class     <div class='app-servers'> </div>

 - What is databinding? Databinding = Communication between your business logic and the html template
 - Four types of **Databinding**
    - Output Data (one-way data binding)
      - Interpolation `{{ data }}`
      - Property Binding `[property]="data"`
      - `data` is a property or method() in the app.component.ts namespace
      - In most cases, either technique can be used to achieve the same result, it would be wise to develop a convention on when one technique should be used over the other for consistency
      - When using property binding, keep in mind you are able to assign data to any property that belongs to the selector it is assigned to. In the case of standard html selectors, a reference should be consulted to discover the possible properties available to you. **However**, in the case of a custom selector such as `<app-server>`, the properties available include the custom designed properties located in its corresponding TypeScript file. For an example of this, refer to lesson 5.61 "Binding custom properties".
    - Input Data - react to user events (one-way data binding)
      - Event Binding `(event)="method()"`
      - Event Binding `(event)="method($event)"`
      - `(event)` refers to a specific event defined by the html specification. `input`, `click`, and `keypress` are common events, see the [MDN event reference for more info](https://developer.mozilla.org/en-US/docs/Web/Events)
      - `$event` is an object that contains information about the html element associated with the `(event)`
    - Two-way-binding `[(ngModel)]="data"`
      - `FormsModule` must be added to the `imports[]` array in the AppModule
      - `FormsModule` is imported from `@angular/forms`
      - This technique is referred to 'two-way-binding' because it essentially combines property and event binding, the data model is automatically updated based on user-driven events like typing text into an input field
  - Introduction to **Directives** - "directives give instructions to the DOM"
    - Built-in structural directives, `*ngIf` and `<ng-template>` (if-else template), uses * to denote it is a structural binding
      - if - `<p *ngIf="business-logic"></p>` where `business-logic` is code that evals to a boolean
      - if-else - `<p *ngIf="business-logic; else somethingElse"></p>` where somethingElse is marked with # inside a ng-template selector, for example `<ng-template #somethingElse></ng-template>`
      - *IMPORTANT DISTINCTION* - structural directives completely add or remove selectors from the DOM, they are not just simply made invisible
    - Built-in attribute directives, `[ngStyle]`, uses square brackets [ ] similar to property binding notation
      - `[ngStyle]="{'background-color': getColor()}"`, notice the method call getColor() is not wrapped in quotes
      - `[ngClass]="{'class-name': <boolean>}"`, the CSS class-name will be attached to the selector if `<boolean>` code evaluates to true
      - *IMPORTANT DISTINCTION* - attribute directives do not remove selectors from the DOM, only their attributes are changed
    - Built-in structural directive, `*ngFor`, when this directive is used inside of a selector, the selector itself and all its children will be repeated in the DOM, use the reserved word `index` to gain access to the loop index number:  

      `<div *ngFor="let server of servers"></div>`  
      `<div *ngFor="let server of servers; let i = index"></div>`  

### 3. Course Project - The Basics
  - The course project is revisited several times during this course, therefore, only one project directory will be used with sections identified through version control
  - A new TypeScript feature introduced wherein a shortcut can be used to define a class.  In the traditional sense, a class is defined as follows:

         export class MyClass {
             public name: string;
             public quantity: number;

             constructor(name: string, quantity: number) {
                 this.name = name;
                 this.quantity = quantity;
             }
         }

  - The same class can be succinctly defined as:

         export class MyClass{
             constructor(public name: string, public quantity: number) {}
         }

  - An important topic that will be addressed in future versions of the class project include learning how components can exchange data with each other.

### 4. Debugging (ad)
  - Using the 'Sources' tab in Chrome Dev Tools, breakpoints can be set allowing you to  step through your code
  - In the dev stage, Sourcemaps are provided under the webpack section, your TypeScript code can be found in its original form under the '.' folder

### 5. Components & Databinding Deep Dive (ae)
**Custom property binding** - A component's properties are only visible in its own html and ts files by default. Properties of children components can be passed back and forth to their parents by using the decorator `@Input()` or `@Output()` in their class definitions:
```
import { Component, OnInit, Input } from '@angular/core'; // import Input from core
...
selector: 'app-server-element',
...
export class ServerElementComponent implements OnInit {
@Input() element: { type: string, name: string, content: string };
constructor() { }
...
}
```
In this example, `[element]` is now a visible property inside the selector tags `<app-server-element>`:
```
<app-server-element  
  *ngFor="let serverElement of serverElements"   
  [element]="serverElement"  
></app-server-element>
```
**Lesson learned** - not using an up-to-date Angluar CLI may not automatically update changes in your project, make sure the CLI is current and save yourself the headache!

**Custom Property Aliases** - The property name can be given an alias if needed. Here, the alias `srvElement` is passed as an argument to the `@Input` decorator:
```
...
export class ServerElementComponent implements OnInit {
@Input('srvElement') element: { type: string, name: string, content: string };
...
```
Now the alias can be used in the template:
```
<app-server-element  
  *ngFor="let serverElement of serverElements"   
  [srvElement]="serverElement"
></app-server-element>
```
When a child component outputs properties to a parent component, it is typically initiated by an event, such as the click of a button.  A method in the child component model should emit this event via a property setup with the special decorator function `@Output()`:
```
// This happens second, sending the object 'T' to parent view as an $event object
@Output() serverCreated = new EventEmitter<{T}>();
...
// This happens first when the user clicks a button
onClick() {
  this.serverCreated.emit({T});
}
```
**View encapsulation** - by default, each component's CSS style is encapsulated. This is the preferred behavior for most projects. If for some reason you wish to override this default, it can be changed in the `@Component({})` decorator with the following line:
```
encapsulation: ViewEncapsulation.None // Native and Emulated are also options (Emulated is the default)
```  
**Local reference** is a feature to gain access to elements in the template for use in another location in the template or for use in the TypeScript file. This can be used in lieu of two-way databinding since it may only be necessary to read a value when a particular event occurs. Local references were seen briefly before in the course during the discusson on structural directives (if-else templates) and are defined with a hash mark. After defining a local reference, the hash mark is no longer used. In this example, the model gains access to this HTMLInputElement object when it is passed in the `onAddServer()` method call:
```
<input type="text" class="form-control" #serverNameInput>
...
<button (click)="onAddServer(serverNameInput)">Add Server</button>
```
**@ViewChild()** - this is another technique to gain access to html elements besides local references. It also has the advantage of not depending on being first passed via a method argument as illustrated above. This technique only works on a model and view in the same component:
```
(html file - located in component A)
<input type="text" class="form-control" #serverContentInput>
```
```
(ts file - also located in component A)
@Component({...})
export class CockpitComponent {
  @ViewChild('serverContentInput') contentInput: ElementRef;
  ...
  console.log(this.contentInput.nativeElement); // full access to the original DOM element is available via nativeElement (TODO: double check this comment)
}
```
**ng-content** - used as a hook in a child template if code in the parent template needs access to properties only accessible in the child model. This tool can be used in lieu of binding parent-child properties.  


**Component Lifecyle** - A list of methods, also called 'hooks', available once implemented via an interface in your component class. All interfaces are imported from `@angular/core` and their order of execution generally follow this list after the constructor is complete with its execution:
- `ngOnChanges(changes: SimpleChanges)`, Called after a bound input property changes, only method that receives an argument, available via `OnChanges` interface
- `ngOnInit()`, Called once the component is initialized, available via `OnInit` interface
- `ngDoCheck()`, Called during every change detection run, available via `DoCheck` interface
- `ngAfterContentInit()`, Called after content (ng-content) has been projected into ViewChild, available via `AfterContentInit` interface
- `ngAfterContentChecked()`, Called every time the projected content has been checked, available via `AfterContentChecked` interface
- `ngAfterViewInit()`, Called after the component's view (and child views) has been initialized, available via `AfterViewInit` interface
- `ngAfterViewChecked()`, Called every time the view (and child views) have been checked, available via `AfterViewChecked` interface
- `ngOnDestroy`, Called once the component is about to be destroyed, available via `OnDestroy` interface

**@ContentChild()** - similar to `@ViewChild()`, however, this decorator function allows a child model to gain access to a DOM element located in a parent component:
```
(html file - parent component)
<p #contentParagraph>
...
</p>
```
```
(ts file - child component)
@Component({...})
export class ServerElementComponent {
  @ContentChild('contentParagraph') paragraph: ElementRef;
  ...
}
```

### 6. Course Project - Components & Databinding (af)

### 7. Directives Deep Directives (ag)

### 8. Course Project - Directives

### 9. Using Services & Dependency Injection (ai)

### 10. Course Project - Services & Dependency Injection

### 11. Changes Pages with Routing (ak)

### 12. Course Project - Routing

### 13. Understanding Observables (am)

### 14. Course Project - Observables

### 15. Handling Forms in Angular Apps (ao)

### 16. Course Project - Forms

### 17. Using Pipes to Transform Output (aq)

### 18. Making HTTP Requests (ar)

### 19. Course Project - HTTP

### 20. Authentication & Route Protection in Angular Apps (at)

### 21. Using Angular Modules & Optimizing Apps (au)

### 22. Deploying an Angular App (av)

### 23. Angular Animations (aw)

### 24. A Basic Introduction to Unit Testing in Angular Apps (ax)

### 25. Course Roundup (ay)

### 26. About the Course Update & Angular 4 (az)

### 27. Custom Project & Workflow Setup (ba)

### 28. Bonus: TypeScript Introduction (bc)
 - install TypeScript module globally to transpile ts files into JavaScript:
        npm install -g typescript
        tsc example-typescript-file.ts
 - Topics covered: classes, interfaces, exports, generics, type
