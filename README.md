# learn-angular

Collection of work from Udemy's Angular 4 - The complete guide by Maximilian Schwarzmüller

From the [website](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview):

> Master Angular (both Angular 4 and Angular 2) and build awesome, reactive web apps with the successor of Angular.js

## Course Content

1. Getting Started (aa)

 - create and serve a new project

         ng new aa-get-start
         cd aa-get-start
         ng serve --open

 - install bootstrap under apps->styles in '.angular-cli.json' file, path to bootstrap.min.css file is relative to /src/index.html, note that bootstrap must be included in the cli file prior to starting the server, changes to this file are not dynamically updated

         npm install --save bootstrap

2. The Basics (ab)

 - create a new component called server, a new directory under the app folder
 - model the same files found under the app folder using a similar naming convention for ts, html, and css files
 - modules are used to bundle components
 - new server module is added to app.module file under the declarations property
 - include your new components onto the page with custom selectors like 'app-componentname'
 - Review assignment:
    - create a new angular app using the cli
    - load bootstrap via npm and load into the app
    - create a new server component and load onto the page

3. Course Project - The Basics (ac)
4. Debugging (ad)
5. Components & Databinding Deep Dive (ae)
6. Course Project - Components & Databinding (af)
7. Directives Deep Directives (ag)
8. Course Project - Directives (ah)
9. Using Services & Dependency Injection (ai)
10. Course Project - Services & Dependency Injection (aj)
11. Changes Pages with Routing (ak)
12. Course Project - Routing (al)
13. Understanding Observables (am)
14. Course Project - Observables (an)
15. Handling Forms in Angular Apps (ao)
16. Course Project - Forms (ap)
17. Using Pipes to Transform Output (aq)
18. Making HTTP Requests (ar)
19. Course Project - HTTP (as)
20. Authentication & Route Protection in Angular Apps (at)
21. Using Angular Modules & Optimizing Apps (au)
22. Deploying an Angular App (av)
23. Angular Animations (aw)
24. A Basic Introduction to Unit Testing in Angular Apps (ax)
25. Course Roundup (ay)
26. About the Course Update & Angular 4 (az)
27. Custom Project & Workflow Setup (ba)
28. Bonus: TypeScript Introduction (for Angular 2 Usage) (bc)
- install TypeScript module globally to transpile ts files into JavaScript:

        npm install -g typescript
        tsc example-typescript-file.ts

- Topics covered: classes, interfaces, exports, generics, types
