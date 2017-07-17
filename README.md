
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
 - `template` or `templateUrl` must be present in the `@Component({})` decorator function, use the inline template property for convenience if the html code is not long
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
    - Built-in structural directives, `*ngIf` by itself or paired with `<ng-template>` for a if-else option, uses * to denote it is a structural binding
      - if - `<p *ngIf="business-logic"></p>` where `business-logic` is code that evals to a boolean
      - if-else - `<p *ngIf="business-logic; else somethingElse"></p>` where somethingElse is marked with # inside a ng-template selector, for example `<ng-template #somethingElse></ng-template>`
      - *IMPORTANT DISTINCTION* - structural directives completely add or remove selectors from the DOM, they are not just simply made invisible
    - Built-in attribute directives, `[ngStyle]`, uses square brackets [ ] similar to property binding notation
      - `[ngStyle]="{'background-color': getColor()}"`, notice the method call getColor() is not wrapped in quotes
      - `[ngClass]="{'class-name': <boolean>}"`, the CSS class-name will be attached to the selector if `<boolean>` code evaluates to true
      - *IMPORTANT DISTINCTION* - attribute directives do not remove selectors from the DOM, only their attributes are changed
    - Built-in structural directive, `*ngFor`, when this directive is used inside of a selector, the selector itself and all its children will be repeated in the DOM, use the reserved word `index` to gain access to the loop index number:  

```
      <div *ngFor="let server of servers"></div>
      <div *ngFor="let server of servers; let i = index"></div>
```

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
<input type="text" class="form-control" #serverContentInput> // local reference defined here
```
```
(ts file - also located in component A)
@Component({...})
export class CockpitComponent {
  @ViewChild('serverContentInput') contentInput: ElementRef; // local reference with ElementRef type
  ...
  console.log(this.contentInput.nativeElement);              // access to the element available via nativeElement
}
```
**ng-content** - `<ng-content></ng-content>` selectors are used in a child template and act as a hook to its parent template. Code that appears between the child selectors in its parent view will appear in place of the `<ng-content></ng-content>` selectors. This allows the child to have direct access to the parent's properties. This is a tool that can be used in lieu of binding parent-child properties.  
```
(child view named even.component.html)
<div class="jumbotron">
  <h2 class="text-center">Even Numbers</h2>
  <ul class="list-group">
    <ng-content></ng-content>
  </ul>
</div>
```
```
(parent view)
<!-- 'evenNumbers' is an array property located in the parent component -->
<!-- the <li> element here will appear in place of the <ng-content> element located in the child -->
<app-even>
  <li class="list-group-item list-group-item-info text-center" *ngFor="let number of evenNumbers">
    {{ number }}
  </li>
</app-even>
```
**Component Lifecyle** - A list of methods, also called 'hooks', available once implemented via an interface in your component class. All interfaces are imported from `@angular/core` and their order of execution generally follow this list after the constructor is complete with its execution:
- `ngOnChanges(changes: SimpleChanges)`, Called after a bound input property changes, only method that receives an argument, available via `OnChanges` interface
- `ngOnInit()`, Called once the component is initialized, available via `OnInit` interface, this was useful in a case where a detailed display was dependent on a user's selection. On initial loading of the page, no item was selected to be displayed resulting in an 'undefined' error.  `ngOnInit()` was used to select the first item in an array to be displayed, avoiding the error.
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
- There are three types of Directives:
 - **Components** - Directives with a view
 - **Attribute Directives** - Looks like a normal HTML attribute (possibly with databinding or event binding) and only affects/changes the element they are added to
 - **Structural Directives** - Looks like a normal HTML attribute but has a leading * (for desugaring) and affects a whole area in the DOM (elements get added/removed)
- While all components are technically directives, in practice, when we refer to a directive, we are only referring to either attribute or structural directives.
- Built-In Directives
 - ngFor, ngIf, ngSwitch - these are built-in **Structural Directives**
 - ngClass, ngStyle - these are built-in **Attribute Directives**

----

##### Custom Directives
###### *Attribute Directives*

- Directive selectors
 - `selector: '[appBasicHighlight]'` selector placed inside square brackets to signify attribute style, brackets are not used in the html document when attaching directive to an element. To understand how Angular uses selectors, you need to first understand *CSS matching rules* to match a component/directive to a HTML element. In CSS to match to a specific element we would just type in the name of the element, so `input {...}` or `p{...}`.  Refer to this [CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp) for more info.
- Custom Attribute Directives - use Renderer2 (better than directly modifying the element ref because it works beyond the browser DOM)

```
// directive file created using ng generate directive better-highlight
import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]' // used in html file <p appBetterHighlight>
})
export class BetterHighlightDirective implements OnInit {
  // creating properties shortcut
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#337ab7');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }
}
```
- Using HostListener - Angular will invoke the decorated method when the host element emits the specified event, refer to the [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events) for a list of all possible events emitted. Common mouse events include: `'click'`, `'mouseenter'`, and `'mouseleave'`.

```
@HostListener('mouseenter') mouseover(eventData: Event) {
  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#337ab7');
  this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
}

@HostListener('mouseleave') mouseleave(eventData: Event) {
  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  this.renderer.setStyle(this.elRef.nativeElement, 'color', '#333');
}
```
- Host Binding, using Renderer not necessary when using this technique, pay attention to the camel case

```
import { Directive, HostBinding, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = "transparent"; // camelCase backgroundColor
  @HostBinding('style.color') color: string = "#333";

  constructor(private elRef: ElementRef) {}

  // Angular will invoke the decorated method when the host element emits the specified event
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = '#337ab7';
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
    this.color = '#333';
  }
}
```

- Custom property binding, setting a Directives property in the html file

```
(html file)
<p appBetterHighlight [defaultColor]="'#337ab7'" [highlightColor]="'darkblue'">
```

```
(directive file)
import { Directive, HostBinding, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultBackgroundColor: string = 'transparent';
  @Input() highlightBackgroundColor: string = '#337ab7';
  @Input() defaultColor: string; // set in the html via property binding
  @Input() highlightColor: string = 'white';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultBackgroundColor;
  @HostBinding('style.color') color: string = this.defaultColor;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    this.color = this.defaultColor;
  }

  // Angular will invoke the decorated method when the host element emits the specified event
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightBackgroundColor;
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }
}
```

###### *Custom Structural Directives*

**ng-template and its relationship to built-in structural directives explained**
The star added to built-in structural directives like `*ngIf` and `*ngFor` is closely tied to the selector `<ng-template>`. `<ng-template>` is by default not displayed in the DOM, and we have seen previous examples of its use in if-else DOM manipulation. For an example to illustrate this, consider the following:


```
  <div *ngIf="someBooleanValue">
    ...
  </div>
```

In reality, this block of code is expanded to the following:


```
  <ng-template>
    <div [ngIf]="someBooleanValue">
      ...
    </div>
  </ng-template>
```

The `*ngIf` is transformed to the familiar property binding syntax and reveals what is truly happening behind the scenes. The star syntax can also be used for custom structural directives as well, which will be illustrated here shortly.

**Building your own custom structural directive**
A custom structural directive is similar to a custom attribute directive with some key differences in defining its properties. The property uses the keyword `set` and looks like a method, however, it is important to keep in mind that it is still a property. In this example, we create a new kind of a conditional similar to Ruby's `unless` statement, where a block of code is only executed if its condition evaluates to false. Also, it is important to provide the same name in the selector and the set property as seen below with `appUnless`:

```
TypeScript file:

import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
}

@Directive({
  selector: '[appUnless]' // notice this selector is the same name as the @Input() property below
})                        // ...and follows the convention of appending 'app' at the front of the name
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {};
}
```

```
HTML file:

  <div *appUnless="someBooleanValue">
    ...
  </div>
```

**Switch structural Directive**
An example of using a built-in switch directive:

```
  <div [ngSwitch]="value"> <!-- where value is a component property -->
    <p *ngSwitchCase="5">Value is 5</p>
    <p *ngSwitchCase="10">Value is 10</p>
    <p *ngSwitchCase="15">Value is 15</p>
    <p *ngSwitchDefault>Value is default</p>
  </div>
```

### 8. Course Project - Directives

### 9. Using Services & Dependency Injection (ai)

#### What is a service?

A service is a class defined in its own file that can provide properties and methods to components. This is an example of a service class:

```
import { Injectable } from '@angular/core';

import { Account } from './account';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
  accounts: Account[] = [
    new Account('Master Account', 'active', 0),
    new Account('Test Account', 'inactive', 1),
    new Account('Hidden Account', 'unknown', 2)
  ]

  constructor(private logger: LoggingService) {}

  pushAccount(account: Account) {
    this.accounts.push(account);
    this.logger.logStatusChange(account.status);
  }

  changeStatus(account: Account) {
    this.accounts[account.id].status = account.status;
    this.logger.logStatusChange(account.status);
  }
}
```

#### How are hierarchy and service instances related?

An instance of a service is accessible when defined in the `providers` property in either the `@Component` or `@NgModule` decorator. Once defined there, the service instance is accessible in its defined parent and all of its children. Instances, if defined in children, are not propagated upwards and therefore are not accessible by its parent. If a child redefines a service that was already defined by a parent, it will overwrite the parent's instance with its own and they will not share the same properties. A service defined in the AppModule will be available application-wide, unless overwritten by a child.

Here is an example of a service defined in the AppModule:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

// Services imported here!!!
import { AccountsService } from './shared/accounts.service';
import { LoggingService } from './shared/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountsService, LoggingService], // Services now available application-wide!!!
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Here is an example of a service being used in the same application by a child component:

```
import {
  Component,
  Input
} from '@angular/core';

import { Account } from '../shared/account';
import { AccountsService } from '../shared/accounts.service'; // Service is imported here!!!

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'] // Notice the 'providers' property is left undefined
})
export class AccountComponent {
  @Input() acct: Account;

  constructor(private accounter: AccountsService) {} // Dependeny injection used here in the constructor...
                                                     // in order to gain access to the service instance
  setStatus(newStatus) {
    this.acct.status = newStatus;
    this.accounter.changeStatus(this.acct); // This component now has access to any service property or method!!!
  }
}
```

#### When should you use the @Injectable() decorator?

The `@Injectable` decorator is only necessary on services that depend on other services. In the example above (see `AccountsService`), this service is dependent on another service called `LoggingService`, so the `@Injectable` is used. Incidentally, the `LoggingService` (not shown) did not rely on any other services and does not use the `@Injectable` decorator.

#### How can you use a service for cross-component communication?

An event emitter property may be defined in a service. Components may then emit events by using the `.emit()` method when necessary. If another component subscribes to the event emitter in the service, it can receive the information that was originated in the emitting component, thus achieving cross-component communication.

Event emitter defined in the service class as a property:

```
newAccountCreated: EventEmitter<string> = new EventEmitter<string>();
```

Event is emitted in a child class called `NewAccountComponent` when a new account is created:

```
// 'accounter' was defined in this component's constructor
createAccount() {
  this.accounter.newAccountCreated.emit(this.name.nativeElement.value);
}
```

The emitted event sets off an anonymous "fat arrow" function by setting up a subscription in another component called `AccountComponent`:

```
ngOnInit() {
  this.accounter.newAccountCreated.subscribe(
    name => { console.log(`${name} was just created!`); }
  );
}
```

### 10. Course Project - Services & Dependency Injection

I deviated from the code provided by the cource when it came to designing my Shopping List service. In the course, Max creates a method called `addIngredients()` which accepts as its single argument an array of `Ingredients`. A new ES6 feature called the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) is used with this new method:

```
  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
  }
```

Recall that the Array.prototype.push() method accepts one or more arguments that are "pushed" onto the array. In this case, the spread operator effectively takes the suppplied array argument, and spreads each individual element of that array into seperate arguments. The code above effectively becomes the following, where n equals the total number of elements in the provided array argument `ingredients`:

```
  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(ingredients[0], ingredients[1], ingredients[2], ..., ingredients[n]);
  }
```

My original approach, in an attempt to by DRY, did not design a new method, instead using a previously designed method to push ingredients one at a time on to the array. Max warned that while this was an approach that got the job done, the original `addIngredient()` method would emit on every element pushed onto the array. For a small array, performance would not be greatly affected, however, for larger arrays, the number of emitted events could cause a bottleneck in your code. His approach using the spread operator is more effective since all elements are added to the array first, and once complete, a single event is emitted at the end. My code was tring to be clever by using an existing method called `addIngredient()`:

```
  onToShoppingList() {
    this.recipe.ingredients.forEach(
      (ingredient: Ingredient) => {
        this.shoppingListService.addIngredient(ingredient); // ha! I am able to use an already defined method in my service
      }
    );
  }
```

But, unfortunately in this case, `addIngredient()` looks like this, which emits after each and every push:

```
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(ingredient); // this line of code could be costly if the array of ingredients was very large
  }
```

I ultimately followed the example provided by Max and created a new method that uses the new spread syntax.

Another deviation from the code provided in the course, Max does not directly inject the Shopping List service into his recipe detail. He first injects the Recipe service into the recipe detail, then injects the Shopping List service into his Recipe service. I believe that was largely for demonstration purposes to show how to inject services into services. I directly inject the service I needed to skip the extra step and did not alter my code in the end to reflect the approach provided by Max.

### 11. Changes Pages with Routing (ak)

#### How to define your routes in the app.module.ts file

Routes are defined by importing the following classes, defining routes in an object, and including an additional element in the imports array:

```
import { Routes, RouterModule } from '@angular/router';

...

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'users', component: UsersComponent }
]

...

  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],

...
```

#### How to create links in your template:

You do not use the href attribute to define routes in angular. While this may appear to work, it will reload your app on every click. Instead use the `routerLink` attributes in either style (note that this attribute does not necessarily need to be within a set of `<a></a>` tags, however, consideration may need to be given how your CSS framework (like Bootstrap) may use classes to control an active component (more on this shortly):

```
    <a routerLink="/servers">Servers</a>    // shortcut way to define routerLink
    <a [routerLink]="['/users']">Users</a>  // more verbose, but is the way to go for dynamically defined routes
```

### How to turn on/off CSS classes with the active route

```
    <ul class="nav nav-tabs">
      <li role="presentation" routerLinkActive="active" [routerLinkActiveOptions]="{'exact': true}">
        <a routerLink="/">Home</a></li>
      <li role="presentation" routerLinkActive="active">
        <a routerLink="/servers">Servers</a></li>
      <li role="presentation" routerLinkActive="active">
        <a [routerLink]="['/users']">Users</a></li>
    </ul>
```

Since HomeComponent is an empty path route in the AppComponent, it is considered a match to any route. You only want the Home link to be active when the user visits that route. Adding an additional binding to the HomeComponent routerLink, `[routerLinkActiveOptions]="{ exact: true }"`, marks the ./ link as active when the user navigates to the home URL and not when navigating to any of the child routes.

### Injecting Router to programattically control routes

```
  constructor(private router: Router) { }

  someFn() {
    this.router.navigate(['/servers']);
  }
```

### Intro to ActivatedRoute 

```
  constructor(private router: Router, private route: ActivatedRoute) { }

  someFn() {
    this.router.navigate(['/servers'], { relativeTo: this.route });
  }
```

### Route Parameters, Query Parameters, and Fragments

Define route parameters in the AppModule by prefixing the variable with `:`:

```
  const appRoutes: Routes = [
    { path: 'users/:name/:id', component: UserComponent }
  ]
```

Fetch the parameters (both route and query) and fragments in your business logic by using the ActivatedRoute object with either a snapshot (will not update) or params observable (will update template when data changes):

```
  constructor(private router: Router, private route: ActivatedRoute) { }

  someFn() {
    // if view is same and params changes, view will not auto update
    console.log(this.route.snapshot.params);
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    
    // setup a subscription to update your view, this is a safer approach
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
      }
    );

    this.route.queryParams.subscribe(
      (queryParams: QueryParams) => {
        console.log(queryParams);
      }
    );

    this.route.fragment.subscribe(
      (fragment: Fragment) => {
        console.log(fragment);
      }
    );
  }
```

Note that Angular will handle this unsubscription for you, but in the future, when dealing with your own Observables, it will be necessary to unsubscribe your observables by using the ngOnDestroy() lifecycle hook. You will need to set up a property of type `Subscription` (from `rxjs/Subscription`), assigning the subscription during ngOnInit() and unsubscribing during ngOnDestroy().

Query parameters and fragments are created in the view as follows:

```
   <li
     [routerLink]="['/servers', 'someID', 'edit']"
     [queryParams]="{allowEdit: true}"
     [fragment]="'loading'"
     class="list-group-item">
     {{ server.name }}
   </li>

   <!--
     will produce a url: http://localhost:4200/servers/someID/edit?allowEdit=true#loading
   -->
```

and created programatically like this (router is dependency injected as a Router object from @angular/router):

```
  onLoadServer(index: number) {
    this.router.navigate(['/servers', index, 'edit'], { // index is not hard coded
      queryParams:
        { allowEdit: true },
      fragment: 'loading'
    });
  }
```

### Child Routes

Child routes are defined in an array next to their parents in AppModule. Note that the child routes do not include their parent's root path:

```
  { path: 'servers', component: ServersComponent,
    children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: ServerEditComponent }
  ]},
```

The parent routes include another `<router-outlet>` tag in their view which will be displayed when the child route is hit in the URL:

```
  <div class="col-xs-12 col-md-4">
    <router-outlet></router-outlet>
  </div>
```

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
