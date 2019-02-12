- Use angular-cli utility
- To Create an angular app from scratch
  - package.json
    - Angular packages
      - @angular/core
        - Repository for all Standard Angular classes
      - @angular/common
        - Angular Module Loader
        - Http Module Manager from NG 4+
      - @angular/compiler
        - Ahead-of-Time compiler (AoT)
        - JIT
      - @angular/platform-browser
        - Detects the Browser Instance and Load App
      - @angular/platform-browser-dynamic
        - Manages Rendering Static and Dynamic
        - Error Handling
      - @angular/animation
        - Animated Object Behavior
      - @angular/forms
        - HTML Forms with Validation
      - @angular/http
        - AJAX
      - @angular/router
        - SPA
    - Angular Dependency Packages
      - core-js
        - ES6 and ES7 bridge for TypeScript code
      - zone.js
        - Used by @angular/platform-browser-dynamic for StackTrace
      - rxjs
        - JavaScript Reactive Extension
    - Server-Packages
      - webpack
    - Other Extarnal Packages
      - jquery/boostrap
      - loaders
  - tsconfig.json
  - webpack.config.js
  - index.html
  - Angular "apps" folder

#==============================================================================
WebPack

- webpack.config.js
- Import all required modules for creating server environment
- The "entry" object
  - Provide input file paths, files which are used for application execution
- The "output" object
  - The ouput files generated
- module.export = {
- // loads all required loaders to compile Entry--> Output
- }
- Module-Loaders
  - awsome-typescript-loader
    - reads all .ts files in application folder
    - loads tsconfig.json to read all transpilation options
  - css-loader/scss-loader/html-loader/url-loader
- plugins:[
- // configure all required plugins
- ]

#+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

component name
app.<component-name>.component.ts
service
app.<service-name>.service.ts
directive
app.<directive-name>.directive.ts

#=============================================================================
Decorators

- objects those are used to define execution behavior of
  - class
  - property
  - method
  - event

# Syntax is @<DecoratorName>

@NgModule

- Provided by @angular/core
- applied on class to make the class as Angular Module
- Properties of NgModule
  - The 'imports', of the type array, this imports all standard Angular modules to run application
    - The "BrowserModule", from @angular/platform-browser
  - The 'exports', of the type array, this is used to export components/services/pipes/directives of the current module so that other module can import it and use it, non mandatory property
  - The 'declarations', of the type array, this is used to define "lazy loading" to all components/pipes/directives in the current application
  - The 'providers', of the type array, this is used to register all angular services and they are ready for DI
  - The "bootstrap" of the type array, this is used to deine components to be executed when app is loaded in browser

@Component

- Provided by @angular/core
- applied on class to make the class as Angular component
- Properties of Component '
  - The 'selector' --> custom defined name for component when it will be used in index.html or used as HTML element in other component
    - syntax --> app-<component-name>-component
  - The 'template' --> an inline HTML template aka HTML code for the component
  - The 'templateUrl' --> URL of external html file
  - The 'style/styleUrls' --> inline or external css files respectively

@Directive

- Provided by @angular/core
- applied on class to make the class as Angular Directive

@Pipe

- Provided by @angular/core
- applied on class to make the class as Angular Custom Pipe

@Injectable

- Provided by @angular/core
- applied on class to make the class as Angular Service

@Input --> Applied on Data member of Component/Directive to accept the input data from its parnent component/directive

- Provided by @angular/core

@Output --> Applied on an Event of Component/Directive to emit event

- Provided by @angular/core

@HostListener

- Provided by @angular/core
- Applied on method of Directive (generally) to define for which event the method will be executed

Use platformBrowserDynamic() object from @angular/platform-browser-dynamic to provide NgModule to Browser Module
platformBrowserDynamic().bootstrapmodule(AppModule)
============================================================================================================================================================
Angular for LOB Apps

- Frequently used Bootsrap class
- Div --> container and form-group
- input type text, select element --> form-control
- button --> btn btn-default btn-success btn-warning
- table --> table table-striped table-bordered table-condensed

* Binding
  - Expression aka Interpolation
    - Mechanism to bind member of Component to HTML element in "read-only" mode
      - Syntax --> {{<PROPERTY>}}
  - Property Binding --> []
    - Binding members of Component to an attribute of HTML element
    - One-Way from Component to UI
    - Syntax
      - <tag-name [<attaribute>]="<MEMBER-FROM-Component>">
        - [value],[disabled],[hidden],[href], [checked]
  - Event Binding -->()
    - The Event raised on UI and it executes a method from component
    - always from UI to component
    - Syntax
      - <tag-name (<EVENT>)="methodfromcomponent()">
        - (click),(keyup),(change),(mouseenter),(mouseleave), etc.
  - Two-Way Binding
    - Two-Way Binding = Property Binding + Event Binding
      - [(ngModel)]
        - ngModel, is a directive of angular that is used for two-way binding
        - ngModule must import "FormsModule" from @angular/forms to execute ngModel.
* Forms
  - @angular/forms
    - FormsModule
    - ReactiveFormsModule
      - Used for Building Data-Drive-Forms aka Reactive Forms(?)
        - Reactive Forms
          - Model Validated Forms
          - FormGroup
            - Groups all FormControls -->(Elements in Form), used as a single Object Post
              - The "value" property of FormGroup provides "values" of each FormControl
            - FormControl --> The "value" property of FormControl represents value entered in Element bind to Model-property
              - A single editable element inside FormGroup
                - input type
                - select
                - textarea
          - FormBuilder
            - Builds the form and evaluate all validations on Model object
  - <form> --> tag maps with "ngForm" directive by default
  - (onSubmit) event maps with ngSubmit by default
  - Validations for NG Forms
    - Define FromGroup and link it with <form>
    - FormGroup, has ctor that accepts "AbstractControl"
      - AbstractControl is an editable element in <form> that is linked with FormGroup. IMP: Each editable element must be mapped with "FormControl" object using "formControlName" attribute of @angular/forms
      - Import FormControl from @angular/forms
        - FormControl can map with property of Model class
    - Link all FormControls to [formControlName] attribute of editable elements
    - To execute [formGroup] and [formControlName] import "ReactiveFormsModule" in NgModule

- Angular Form Validations
  - HTML 5 based Element Validations
    - HTML 5 attributes
      - required
      - pattern
      - minlength
      - maxlength
  - Angular Model Validations
    - Validators class under @angular/forms
      - Static methods for validations
        - required(AbstractControl)
        - pattern("<Regular Expression as string>")
        - minlength(number)
        - maxlength(number)
        - requiredTrue(AbstractControl)
          - The control must be true
        - compose(Validators as input parameter as array)
    - Validation State Change by FormGroup
      - <formGroup>.controls --> FormControlCollection
      - <formGroup>.controls.<formcontrolname> --> specific element
      - <formGroup>.controls.<formcontrolname>.dirty --> state changes.
      - <formGroup>.controls.<formcontrolname>.valid/.invalid
    - Validation Rule check
      - <formGroup>.controls.<formcontrolname>.errors.<validation-error>
        - e.g.
          - <formGroup>.controls.<formcontrolname>.errors.required/.pattern/.minlength
    - To write custom validator
      - Method must be static
      - can accept either primptive types / AbstractControl
      - return "null" if data is valid
      - else return {invalid:true} for invalid data

* Services
* Directives
  - UI and Behavioral Objects
  - 3 Types of Directives
    - Component Directive
    - Structural Directive
      - Used to add/remove DOM dynamically based on DataBinding
        - \*ngFor
        - \*ngIf
        - \*ngSwitch ngSwitchCase
    - Attribute Directive
      - Attribues of HTML DOM Elements
        - ngModel
        - ngClass
* Pipes
* Routes
