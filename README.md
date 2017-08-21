
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

### 7. Directives Deep Dive (ag)
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
    <!-- All your code here will only be displayed if *ngIf evals to true -->
  </div>
```

In reality, this block of code is expanded to the following:


```
  <ng-template>
    <div [ngIf]="someBooleanValue">
      <!-- All your code here will only be displayed if *ngIf evals to true -->
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
    <!-- All your code here will only be displayed if *ngIf evals to true -->
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

// Boiler plate code goes here, skipped for brevity...

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'users', component: UsersComponent }
]

// More boiler plate code goes here...

  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],

// Blah, blah, blah, more boiler plate here...
```

#### How to create links in your template:

You do not use the href attribute to define routes in angular. While this may appear to work, it will reload your app on every click. Instead use the `routerLink` attributes in either style (note that this attribute does not necessarily need to be within a set of `<a></a>` tags, however, consideration may need to be given how your CSS framework (like Bootstrap) may use classes to control an active component (more on how to turn CSS classes on and off will appear shortly):

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

Since HomeComponent is an empty path route in the AppComponent, it is considered a match to any route. You only want the Home link to be active when the user visits that route. Adding an additional binding to the HomeComponent routerLink, `[routerLinkActiveOptions]="{ exact: true }"`, marks the ./ link as active when the user navigates to the home URL and not when navigating to any of the child routes. In this example, "active" is the name of the Bootstrap CSS class that controls the appearance of a tab being selected.

### Dependency Injecting Router to programmatically control routes

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
The ActivatedRoute holds key information on the current route your app is on. See the [docs](https://angular.io/api/router/ActivatedRoute) for more information.

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

and created programatically like this (router is dependency injected as a `Router` object from @angular/router):

```
  onLoadServer(index: number) {
    // This is one way to also pass query parameters with your URL, but you have to code it out
    this.router.navigate(['/servers', index, 'edit'], { // index is not hard coded
      queryParams:
        { allowEdit: true },
      fragment: 'loading'
    });

    // This other way will just pass along the query parameter object that it received
    this.router.navigate(['/servers', index, 'edit'], {
      queryParamsHandling: 'preserve' // another option includes 'merge' which allows you to preserve passed query
    });                               // parameters and add to them on the next navigation
  }
```

### ActivatedRoute vs ActivatedRouteSnapshot

Per official documentation, the interface `ActivatedRoute` includes the following properties (list not all-inclusive):

 * snapshot: ActivatedRouteSnapshot
 * url: Observable<UrlSegment[]>
 * params: Observable<Params>
 * queryParams: Observable<Params>
 * fragment: Observable<string>
 * data: Observable<Data>
 
Contrast this to the `ActivatedRouteSnapshot`, which is itself a class already contained as a property in `ActivatedRoute`:

 * url: UrlSegment[]
 * params: Params
 * queryParams: Params
 * fragment: string
 * data: Data
 * outlet: string

The snapshot does not contain observables, that is why subscriptions can only be made to the properties in `ActivatedRoute`

### Child Routes

Child routes are defined in an array next to their parents in AppModule. Note that the child routes do not include their parent's root path:

```
  { path: 'servers', component: ServersComponent,
    children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: ServerEditComponent }
  ]},
```

The parent routes include another `<router-outlet>` tag in their view which will be displayed when the child route is hit in the URL. In this example, the outlet is in a parent component under the main AppComponent:

```
  <div class="col-xs-12 col-md-4">
    <router-outlet></router-outlet>
  </div>
```

### Router Configuration Outsourcing

Routes may be outsourced into a seperate module in order to keep the clutter out of your AppModule. Use the CLI to create a new module, commonly called `app-routing.module.ts`. Routes are defined in a const object as before with the AppRoutingModule importing a RouterModule, modifying if by using the forRoot() method, then exported to the AppModule.

### What are Guards?

A guard is code that is run either before or after a navigation route. Use cases include a guard to determine if a user is allowed to navigate to a specific route, or if a user is allowed to navigate away from a route. A guard can also fetch data before navigating to a route in order for a component to have access to it. The following classes are how guards are instantiated:

 * CanActivate - checks route access
 * CanActivateChild - checks child route access
 * CanDeactivate - ask permission to discard unsaved changes
 * Resolve - pre-fetch route data (passing dynamic data)

### canActivate vs canActivateChild

While it may be possible to achieve the same effects of not allowing a user to view a component through logic placed in the ngOnInit() method, it would become a tedious and bug-prone approach if there were many routes under a common parent. The canActivate() method can be placed on a component which will control access to itself and all its children. Similiarly, the canActivateChild() method can be placed on a parent component, allowing open access to itself, but controlling access to all of its children.

`canActivate` is a property added to your route definintion:

```
  { path: 'servers',
    canActivate: [AuthGuardService],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: ServerEditComponent }
    ]},
```

In this example `AuthGuardService` is a user-defined service class that implements `CanActivate` from `@angular/router`. Because it implements `CanActivate`, it must define a `canActivate()` method:

```
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | Promise<boolean> | Observable<boolean> {
      return this.authService.isAuthenticated().then(
        (isAuthenticated: boolean) => {
          if (isAuthenticated) {
            console.log("user is authenticated");
            return true;
          } else {
            console.log("user is NOT authenticated");
            this.router.navigate(['/']);
            return false;
          }
        }
      );
    }
```

`canActivateChild` is a property added to your route definintion, and the guard service assigned to this property will only be applied to the children:

```
  { path: 'servers',
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: ServerEditComponent }
    ]},
```

The guard service must implement the `CanActivateChild` interface which will require a method of similar name to be defined. In this example, we can just reuse our code used to define the `canActivate()` method as follows:

```
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state);
    }
```

### canDeactivate

As discussed earlier, the canDeactivate() method allows code to be run before a route is navigated away from, the most common use case being a warning to the user that they may not have saved data before their exit. There is a bit of code that must be first setup in your service, but once completed, it does allow the code in your component to be somewhat simplified. In this example, we not only define a CanDeactivate service, but also an interface that is used to build our class:

```
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
      return component.canDeactivate();
  }
}
```

Now, in our component, we add logic that will be executed before we depart from it:

```
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    else if (!this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
```

Of course, the property `canDeactivate` must be set in the routes definition:

```
  { path: 'servers',
    component: ServersComponent,
    children: [
      { path: ':id', 
        component: ServerComponent },
      { path: ':id/edit',
        component: ServerEditComponent,
        canDeactivate: [CanDeactivateGuard] } // canDeactivate set here!
    ]},
```

### Passing static data to a route

Static data is easily passed to a route by adding the `data` property in the routes definition:

```
  { path: 'error-page', component: ErrorPageComponent, data: 
    {
      error: {
        number: 404,
        message: 'Page not found.'
      }
    }
  }
```

### Resolving dynamic data with the resolve guard

A resolver is a service that implements the Resolve<T> interface, where <T> represents the class that your service will ultimately resolve to. Typical use case includes having to fetch data from another server in order to load your page. This is an example of a resolver that fetches data from a another service defined in our app. It basically is code which runs synchronously, and is of little value here other than for demonstration purposes. The real power for using resolvers is in fetching data asynchronously. Note the injector decorator is used here since this service is depending on another service in our app.

```
@Injectable()
export class ServerResolverService implements Resolve<Server> {

  constructor(private serversService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServerByID(route.params.id);
  }
}
```

The resolver service must be listed in the `providers` array in the AppModule and is listed as an object in the Routes array under the `resolve` property. The name `server` here will be the property name you will need to refer to in your component later:

```
  { path: 'servers',
    component: ServersComponent,
    children: [
      { path: ':id',
        component: ServerComponent,
        resolve: {server: ServerResolverService} }, // 'server' could be called anything, but it will be refered to under the same name in your component
      { path: ':id/edit',
        component: ServerEditComponent }
    ]}
```

Now in the component, under the ngOnInit method, the resolver can be used to set a property. Again, the real takeaway here is this technique is paving the way to set component properties from an outside server:

```
  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (data: Data) => { this.server = data.server; }
    );
  }
```

### Location strategies

Servers hosting Angular apps should automatically provide the index.html file on requests it cannot find. The Angular app will then take over, parse the URL, and display your routes as configured. Some older servers, however, do not default to this behavior, and upon reaching a condition where it cannot find the requested URL, default to a 404 'Not Found' page, thus never giving your app the chance to parse the URL. In such cases, the `useHash` property must be set to true:

```
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {useHash: true}), // rare case, used for servers which do not default to index.html or older browsers
  ],
  exports: [
    RouterModule
  ]
})
```

### Lesson learned!

So when defining my routes in my app, I notice that I create a `const` with type `Routes`. Furthermore, I proceed to define an array of objects, all of which contain a `path` and `component` property. Some objects in this array contained addtional properties such as `canActivateChild` and `children`. I began to wonder how many possible properties are available and if I could possibly dig around in the Angular source code published on GitHub. See this example of some how routes have certain properties:

```
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers',
    //canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit',
        component: ServerEditComponent,
        canDeactivate: [CanDeactivateGuard] }
    ]},
  { path: 'users', component: UsersComponent,
    children: [
      { path: ':id/:name', component: UserComponent }
    ]},
  // { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'error-page',
    component: ErrorPageComponent,
    data: {
      error: {
        number: 404,
        message: 'Page not found.'
      }
    }
  },
  { path: '**', redirectTo: 'error-page' }
]
```

I started first by observing the class `Routes` was imported with this line of code at the top of the file:

```
  import { Routes, RouterModule } from '@angular/router'
```

The `@angular/router` signifies that `Routes` can be found in the angular package called router. On github, I observed the following path:

```
  angular/packages/router/src
```

There is an `index.ts` file that shows that `Route` and `Routes` is exported from `'./config'`. This is the file I was looking for! In it (and it is long) is the actual source code that provided the class definitions (hint: use word search). As suspected, `Routes` was simply defined as a type consisting of an array of `Route` objects:

```
  export type Routes = Route[];
```

And the `Route` class was defined as follows, which contained all of the properties that I was familar with thus far, plus a great deal more that I have no idea as to what they do:

```
/**
 * See {@link Routes} for more details.
 * @stable
 */
export interface Route {
  path?: string;
  pathMatch?: string;
  matcher?: UrlMatcher;
  component?: Type<any>;
  redirectTo?: string;
  outlet?: string;
  canActivate?: any[];
  canActivateChild?: any[];
  canDeactivate?: any[];
  canLoad?: any[];
  data?: Data;
  resolve?: ResolveData;
  children?: Routes;
  loadChildren?: LoadChildren;
  runGuardsAndResolvers?: RunGuardsAndResolvers;
  /**
   * Filled for routes with `loadChildren` once the module has been loaded
   * @internal
   */
  _loadedConfig?: LoadedRouterConfig;
}
```

I learned that the `?` at the end of each property name defined that the property was optional. I believe the code at the top of this snippet, `See {@link Routes} for more details`, refers to the documentation that is located above the `export type Routes = Route[];` that starts with the line `@whatItDoes Represents router configuration`. Here there is extensive documentation on how `Routes` are configured and used in your code.

As another exercise in exploration, I looked for the source code for `Component` located in `@angular/core`. I was able to eventually find it and extensive documentation but the path locations were a little different. I found `Component` under a metadata directives folder, which just provided more support to the idea that components are a type of directives. In fact, `Component` is an interface that extends `Directive`!

### 12. Course Project - Routing

Once again, I have forgotten to use the index property when displaying ngFor loops! When I went about designing how to retrieve recipes from my routes, for a moment I thought about redesigning the recipe model to include an id property, since certainly when we start to retrieve our data from a http request, we will be identifying unique records by id. I did not feel this was right, so I designed my service to return a recipe based on a name. Once I viewed Max's solution, I saw that once again, I forgot about the index value that is automatically created in ngFor loops and how this number could be property binded to my business logic. I decided to leave my solution as is and did not alter it to match Max's solution.

An interesting approach in Max's solution is how he is using one component, the `RecipeEditComponent`, to accomplish both new and edit recipe views. There is one boolean property used in the business logic that will determine its behavior. I had originally created two seperate components, but refactored to follow his example since it appears to be DRY!

### 13. Understanding Observables (am)

An **observable** is something the Angular team borrowed from the team at [ReactiveX](http://reactivex.io/). ReactiveX is not just limited to TypeScript or JavaScript, their observable streams are available for many programming languages. Observables are a preferred way of handling asynchronous programming, as opposed to callback function hell or promises. The platform used in Angular is called **RxJS**. The webpage dedicated to RxJS [is found here](http://reactivex.io/rxjs/).

According to their website on why you should use observables:

> The ReactiveX Observable model allows you to treat streams of asynchronous events with the same sort of simple, composable operations that you use for collections of data items like arrays. It frees you from tangled webs of callbacks, and thereby makes your code more readable and less prone to bugs.

#### Simple Observable

```
  ngOnInit() {
    // Simple creation of an Observable
    const myNumbers = Observable.interval(1000);

    // Subscriptions have three arguments:
    this.myNumberSubscription = myNumbers.subscribe(
      // A function that handles data when emitted by an event
      (num: number) => {
        console.log(num);
      },
      // A function that handles an error if it one occurs
      err => {

      },
      // A function to run when the Observable is complete, if it completes
      () => {

      }
    );
  }

  ngOnDestroy() {
    // Subscription must be canceled, otherwise it will continue after component is destroyed
    this.myNumberSubscription.unsubscribe();
  }
```

#### My first Observable

```
  ngOnInit() {
    const myObservable: Observable<string> = Observable.create(
      (observer: Observer<string>) => {
        // a list of asynch operations...
        setTimeout(() => {
          observer.next("#1 Hello from myObservable!");
        }, 2000);
        setTimeout(() => {
          observer.next("#2 Hello from myObservable!");
        }, 4000);
        setTimeout(() => {
          observer.error("Failure!");
          // observer.complete();
        }, 5000);
        setTimeout(() => {
          observer.next("This message will NOT be seen!");
        }, 6000);
      }
    );

    this.mySubscription = myObservable.subscribe(
      (data: string) => {console.log(data);},
      (err: string) => {console.log(err);},
      () => {console.log("All done!");}
    );
  }
  
  // remember to unsubscribe!
```

#### Subject - Observable and Observer in one!

A RxJS Subject is both Observable and Observer and uses similar methods. Max advises near the end of lecture 163 that is using a Subject is preferred over the built-in EventEmitter object for cross component communication. In this lesson we setup a user service with a single property that tracks when a user is activated:

```
  userActivated: Subject<number> = new Subject();
```

In this example, the Subject is setup to emit a number. A button in a child component controls the activation of the user with the following method located in the business logic side:

```
  onActivate() {
    this.userService.userActivated.next(this.id);
  }
```

On a button press, the next() method essentially emits the data application wide. In order to receive this emitted data, a subscription is setup on initialization in another component as follows:

```
  ngOnInit() {
    this.userService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) this.isUser1Activated = !this.isUser1Activated;
        if (id === 2) this.isUser2Activated = !this.isUser2Activated;
      }
    );
  }
```

...where the function receives as an argument the data passed as an argument in the preceeding next() method.

#### Operators worth taking a look at it

Operators can be used on any Observable or Subject, [click here](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html) and scroll down to the public methods (not the public static methods) to see a complete list. One notable operator is `map`:

```
const myNumbers = Observable.interval(1000).map((data: number) => { return data * 2 });
```

Operators will return new instances of Observables, so these operators can be chained together.

### 14. Course Project - Observables

The EventEmitter used to update the shopping list was converted to a RxJS Subject. Additionally, there was some project cleanup where another EventEmitter used to update the RecipeDetail when a recipe was clicked on the RecipeList was removed completely. The view changes are now controlled by a Router.

### 15. Handling Forms in Angular Apps (ao)

#### Two approaches to handling forms in Angular:

**Template-Driven**

 - Faster to setup initially, becomes more complex as form grows
 - Form is only designed in the html view
 - Angular infers data through your html setup
 - Validators a little tricky, they must be wrapped in directives
 - Similar approach used in the original AngularJS
 - Difficult to unit test
 
**Reactive Approach**

 - More complex to setup initially, easier to handle large complex forms
 - Form is designed in business logic end
 - Data is manually setup
 - Validators are simple functions provided for immediate use in the business logic
 - New technique introduced with the release of Angular 2
 - Easier unit testing
 
## Template-Driven

 - import FormsModule (@angular/forms) into your NgModule imports array (hint: insert next to BrowserModule)
 - when you import FormsModule, Angular will auto detect any forms in your html by looking for the `<form>` selector
 - it will NOT, however, detect inputs, these must be manually selected
 - `ngModel` without parens or brackets is placed inside the selector to identify a control for your form, a name also must be provided
 
```
  <input type="text" id="username" class="form-control" ngModel name="username">
```

 - In order to override default html behavior, the `(ngSubmit)` attribute must be placed inside the form selector:
 
```
  <form (ngSubmit)="onSubmit(form)" #form="ngForm">
```
 - The corresponding method can be placed in your business logic to gain access to all your named inputs:
 
```
  onSubmit(form: NgForm) {
    console.log(form);
  }
```

 - As an alternative to gain access to your form before submission, the `@ViewChild` decorator can be used. This will be useful for form validation. Note that there are no arguments provided to `onSubmit()`:
 
*HTML View:*
```
  <form (ngSubmit)="onSubmit()" #form="ngForm">
```

*Business Logic:*
```
  @ViewChild('form') signupForm: NgForm;

  onSubmit() {
    console.log(this.signupForm);
  }
```

 - Form validation can only be placed in the html for template driven validation. Use `required` and `email` inside the selectors. Angular will add/remove CSS classes dynamically such as ng-dirty and ng-valid. Refer to the Official Angular Docs on [Validators](https://angular.io/api/forms/Validators) and [Directives](https://angular.io/api?type=directive) for more info.
 - There are a number of useful controls available to you in form validation when you define a [Template reference variable](https://angular.io/guide/template-syntax#ref-vars). Recall that a template reference variable will be default will return a reference to a [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components). It can also be designed to return an Angular component or directive. For example, contrast the following code:
 
```
  <!-- 'form' will return a reference to a ngForm Directive -->
  <form (ngSubmit)="onSubmit()" #form="ngForm">
  
  <!-- 'form' will return a reference to a web component -->
  <form (ngSubmit)="onSubmit()" #form>
```

 - Building on the above referenced code, a simple way to disable a submit button can be implemented because of the properties made available to us on the ngForm directive:
 
```
  <!-- 'invalid' is a property available on 'form' -->
  <button class="btn btn-primary" type="submit" [disabled]="form.invalid">Submit</button>
  <!-- Alternatively -->
  <button class="btn btn-primary" type="submit" [disabled]="!form.valid">Submit</button>
```

 - Regular CSS classes can be used to add features to your form. In this example, the CSS selectors in combination to give the user a chance to enter correct data before changing the borders colors:
 
```
  input.ng-invalid.ng-touched {
    border: 3px solid yellow;
  }
```

 - Template reference variables (TRV) can also be used to conditionally display helpful messages to the user when associated with `ngModel`. This example will only display the message after the user incorrectly enters an email address after an attempt (notice the && operator to test for both conditions, also notice that we are using `ngModel` here with the TRV, not `ngForm`):
 
```
        <div class="form-group">
          <label>Mail</label>
          <input
            type="email"
            id="email"
            class="form-control"
            ngModel
            name="email"
            required
            email
            #emailRefVar="ngModel">
            <span
              *ngIf="emailRefVar.invalid && emailRefVar.touched"
              class="help-message">Please enter a vaild email address.
            </span>
        </div>
```

 - Property binding to `ngModel` can be used to set a default value for an input field. For example:

```
	  <select
            id="secret"
            class="form-control"
            [ngModel]="secretValue" <!-- or alternatively [ngModel]="'pet'" -->
            name="secret">
            <option value="pet">Your first pet?</option>
            <option value="teacher">Your first teacher?</option>
          </select>
```

 - Two-way property binding to `ngModel` is available if it is necessary to update on every keystroke:

```
          <label>Secret Answer</label>
          <textarea
            rows="3"
            class="form-control"
            [(ngModel)]="questionAnswer"
            name="questionAnswer"></textarea>
            <p>Your reply: {{questionAnswer}}</p>
```

 - Inputs using the ngModel directive may be grouped together using `ngModelGroup`. Using this directive will alter the value object by placing your data into seperate objects and allows validation of the group in very similar to the technique shown earlier in this section using template reference variables:


```
        <!-- data from the form will be grouped into an object inside the value object: NgForm.value.userData -->
        <div class="user-data" ngModelGroup="userData" #groupData="ngModelGroup">
          <div class="form-group">
            <label>Username</label>
            <input
              type="text"
              id="username"
              class="form-control"
              ngModel
              name="username"
              required>
          </div>
          <div class="form-group">
            <label>Mail</label>
            <input
              type="email"
              id="email"
              class="form-control"
              ngModel
              name="email"
              required
              email>

              <!-- the template ref variable 'groupData' is used for conditional message -->
              <span
                *ngIf="userData.invalid && userData.touched"
                class="help-message">Username and/or email field is not valid.
              </span>
          </div>
        </div>
```

 - Example radio button input:

```
        <div *ngFor="let gender of genders" class="radio">
          <label>
            <input type="radio" name="gender" [value]="gender" ngModel>
            {{gender}}
          </label>
        </div>
```

 - Setting vs patching form values...the setting method will replace all form inputs, patch method allows target change of only one input:

```
  suggestUsername() {
    // property this.signupForm refers to @ViewChild('form') signupForm: NgForm;
    // setValue method takes the entire form object for replacement
    this.signupForm.setValue({
      userData: {
        username: 'SuperUser SetValue',
        email: "superuser@yahoo.com"
      },
      gender: 'female',
      number: 12,
      questionAnswer: "This form's data was placed here by a click of suggestion!!!",
      secret: "teacher"
    });

    // patchValue method is a targeted approach to set values
    this.signupForm.form.patchValue({
      userData: {
        username: 'SuperUser PatchValue'
      }
    });
  }
```

 - To clear the form, all of its values, and reset the classes used by angular, use the simple reset method:

```
  this.form.reset();
```

## Reactive Approach

 - Import the appropriate module in AppModule:

```
  import: [ ReactiveFormsModule ]
```

 - 

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
