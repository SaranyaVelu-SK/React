# 1️⃣ document Object (Created by JavaScript Engine):

    The JavaScript engine creates the document object when the webpage loads.

    It acts as a bridge between JavaScript and the DOM.

    It provides many APIs (methods like getElementById(), querySelector(), createElement(), etc.) to interact with the DOM.

2️⃣ DOM (Tree Structure of the Webpage):

    The DOM (Document Object Model) is the tree-like structure that represents the entire HTML document.

    The browser parses the HTML and builds the DOM automatically.

    Every HTML element (like <html>, <body>, <p>, etc.) becomes a node in the DOM tree.

    JavaScript can use the document object to read and modify the DOM.

3️⃣ Display Hello World only using script

    <script>
        const division = document.createElement("div")
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World from javaScript !";
        division.appendChild(heading);
        document.body.appendChild(division);
    </script>

4️⃣ What is CDN?

    A CDN (Content Delivery Network) is a network of distributed servers strategically placed across the world. These servers store and deliver web content quickly, efficiently, and securely to users based on their geographic location. CDN serves the content from the nearest server to the user, reducing latency and load times.
        🔹 How Does a CDN Work?
                Step 1: Website Owner Uploads Content
                    When a website owner uploads files (HTML, CSS, JS, images, videos) to a server, they can integrate a CDN to distribute these files across multiple edge servers around the world.
                Step 2: A User Requests a Website
                    When a user visits a website:
                    Their browser requests files (HTML, CSS, JS, images, etc.).
                    The CDN detects the user’s location.
                    The requested files are served from the nearest CDN server instead of the main origin server.
                    If the file isn't available in the nearest CDN server, it fetches it from the origin server, stores a copy (caches it), and then serves it to the user.
                Step 3: Faster Loading Times
                    Since content is loaded from a closer server, websites load much faster, improving performance and user experience.
        🔹 Common Uses: Hosting JavaScript libraries (React, jQuery, Bootstrap), images, videos, APIs, and fonts.
        🔹 Example: Using React, Bootstrap, or jQuery CDNs instead of downloading files manually.
        CDN Link for ReaCt and ReactDOM:
            FOR DEVELOPMENT
                <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
                <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
            FOR PRODUCTION
                <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
                <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
        🔹cdn link for react is javascript file(.js format) which has code for all the packages/functionalities of react , since react is a js library

5️⃣ Display Hello World using React:

    <script>
        const heading = React.createElement("h1",{},"Hello world from React !");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading)
    </script>

6️⃣ Difference between React and ReactDOM

    🔹 1. React (Core Library)

            The core React library that provides the functions required to create UI components.
            Defines React elements, hooks (useState, useEffect), and utilities like React.createElement().
            Does not handle rendering to the DOM (or other environments).

            🔸 Where is it used?

            Used everywhere React is used, including React Native, React for Web, and Server-side Rendering (SSR).
            Can be used in Node.js, React Native (mobile), and React 3D (Three.js), etc.
            ✅ This creates a React element, but does NOT render it to the webpage.

    🔹 2. ReactDOM (For Web Rendering)

            Responsible for rendering React components to the actual HTML DOM in a web browser.
            Provides methods like ReactDOM.createRoot() and ReactDOM.render().
            Specifically designed for web applications, unlike React, which can work in different environments.

            🔸 Where is it used?

            Used only for web development (React Native does NOT use ReactDOM).
            Provides functions that connect React with the browser DOM.

7️⃣ React.createElement ---> doesnot creates a html element, but creates a react elemnt which is an object.  The render function of root accepts a react element (an object)  and renders out the html element.

    🔹 Parameters of React.createElement() ----> React.createElement(type, props, ...children)
            type ----> which can be a string or React Component ----> Ex: The HTML tag ("div", "h1", etc.) or a React component.
            props ----> which is an object ----> Attributes like id, className, onClick, etc. (null if no props).
            ...children ----> those can be React elements, strings, or arrays ----> Ex: The child elements inside the created element.
                            if needed to pass multiple elements as 3rd argument, pass them in array
                            const heading = React.createElement("div",{id:"div1"},[
                            React.createElement("h1",{},"This is h1 tag"),React.createElement("h2",{},"This is h2 tag")]);

8️⃣ What happens in root.render() ?
    In HTML,
    
            <body>
                <h1>Hello</h1>
                <div id = "root">
                    <h2>..................</h2>
                </div>
            </body>
            
    In App.js
        const heading = React.createElement("p",{id:"para"},"This is paragraph")
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading)
    In the above scenario, root.render() will replaces the <h2> tag with the output from root.render(heading). i.e element inside root is replaced and not appended

9️⃣ Library vs framework
    React can even work in small places like within header, or in footer, or within nav, or within menu etc.,  -- work even on small portion of project unlike framework
    A key difference between the two is Inversion of control. When using a library, the control remains with the developer who tells the application when to call library functions. When using a framework, the control is reversed, which means that the framework tells the developer where code needs to be provided and calls it as it requires.

# 1️⃣0️⃣ NPM:
  - npm is a package manager for the JavaScript programming language maintained by npm, Inc., a subsidiary of GitHub.
  - npm is the default package manager for the JavaScript runtime environment Node.js and is included as a recommended feature in the Node.js installer.
  - It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.
  - The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. 
  - The package manager and the registry are managed by npm, Inc.

# 1️⃣1️⃣ npm init <initializer> vs npm init:
  - **npm init <initializer>** ---> uses create-<initializer> package to create a new project; npm init <initializer> runs as **npx create-<initailzer> name_of_the_project**
  - This will automatically setup the basic structure(necessary project files) of project so that developers won't need to create it from scratch.

    Ex: npm init react-app my-app ➡️ npx create-react-app my-app ➡️ creates a basic react project structure
        my-app/
            ├── node_modules/
            ├── public/
            ├── src/
            ├── package.json
            ├── .gitignore
            ├── README.md
    npm init  ---> The command npm init is used to create a new package.json file for your project, which is essential for managing dependencies and scripts.
    Its like creating a project structure but with no packages to install( or like initializing create-  nothing)

# 1️⃣2️⃣ Package.json

    package.json is a configuration file in a Node.js project that stores important project information such as:

  1. Project metadata (name, version, description, author, etc.).
  2. Dependencies (packages needed for the project).
  3. Scripts (commands to run tasks like starting a server).

  USES:

        ✅ Manages dependencies → Keeps track of installed packages.
        ✅ Automates scripts → Simplifies commands like npm start or npm test.
        ✅ Project metadata → Documents project details.
        ✅ Version control → Helps maintain package versions.

    
  -  No package.json	➡️ npm does nothing and shows a warning.
  - Empty package.json	➡️ npm does nothing but creates node_modules/ and package-lock.json.
  - package.json with dependencies	➡️ npm installs dependencies into node_modules/.

# 1️⃣3️⃣ Tilde (~) vs. Caret (^) in package.json

    These symbols tell npm how to handle updates to those packages.

    A version number has three parts: MAJOR.MINOR.PATCH

        MAJOR: Breaking changes.

        MINOR: New features, backward compatible.

        PATCH: Bug fixes, backward compatible.

    Tilde (~)

        The tilde (~) matches the most recent PATCH version.

        It allows npm to update to the latest patch release but not to a new minor release.

        For example, if you have ~1.2.3, npm can update to 1.2.4, 1.2.5, etc., but not to 1.3.0.

    Caret (^)

        The caret (^) is more flexible. It matches the most recent MINOR version.

        It allows npm to update to new minor and patch releases but not to a new major release.

        For example, if you have ^1.2.3, npm can update to 1.3.0, 1.4.2, etc., but not to 2.0.0.

    Want to Lock a Version?
        To prevent updates entirely, use an exact version:
        "express": "4.18.2" ➡️ This means only 4.18.2 will be installed—no updates at all.

# 1️⃣4️⃣ Package-lock.json

    package-lock.json is an automatically generated file that locks the exact versions of installed dependencies.
  -  It ensures that everyone working on a project gets the same versions of packages.

    If you change dependencies in package.json, npm updates package-lock.json when running npm install.

    USES:

    ✅ Ensures Consistency – Guarantees the same dependencies are installed across different environments.
    ✅ Faster Installs – npm uses the lock file to install dependencies more efficiently.
    ✅ Prevents Unexpected Updates – Even if a package has a newer version, npm installs the exact version from package-lock.json.

    package.json	➡️  Defines dependencies with version ranges (^4.18.2, ~4.18.2).
    package-lock.json	➡️  Locks exact versions (4.18.2) to ensure consistency.

# 1️⃣5️⃣ What Are Transitive Dependencies?

    Transitive dependencies are dependencies of the dependencies in package.json — packages that are automatically installed because they are required by other packages.

    For Example:

        You installed react

        react depends on scheduler

        scheduler depends on other internal packages

        react also depends on react-dom, which has its own transitive dependencies

# 1️⃣6️⃣ Bundlers:

    A bundler is a tool that bundles our app, packages our app so that it can be shipped to production.
    webpack, parcel, veet etc.,
    https://dev.to/sayanide/the-what-why-and-how-of-javascript-bundlers-4po9#:~:text=Bundlers%20are%20not%20transpilers,-Firstly%2C%20let's%20clarify&text=A%20JavaScript%20bundler%20is%20a,and%20improve%20page%20load%20performance.

# 1️⃣7️⃣ PARCEL - The Beast

    Characteristics / features / Uses of parcel
  1. zero config ➡️ No need of any configuration setups to execute parcel - just npx parcel index.html will build the app
  2. Dev server ➡️ Parcel’s builtin dev server is automatically started when you run the default parcel command. By default, it starts a server at http://localhost:1234. If port 1234 is already in use, then a fallback port will be used.
  3. HMR (Hot Module Replacement) ➡️ As you make changes to your code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR). HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things in your code.CSS changes are automatically applied via HMR with no page reload necessary. There is File Watcher Algorithm (written in C++). It keeps track of all the files which are changing realtime and it tells the server to reload.
  4. Diagnostics ➡️ If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.
  5. Reliable caching ➡️ Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, and granularly invalidates the cache when something changes. It integrates with low-level operating system APIs to determine what files have changed in milliseconds, no matter the project size.
  6. Lazy dev builds ➡️ In development, Parcel can defer building files until they are requested in the browser.
  7. TREE SHAKING (Imp) ➡️ In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination". Tree shaking is supported for both static and dynamic import(), CommonJS and ES modules, and even across languages with CSS modules.Parcel also concatenates modules into a single scope when possible, rather than wrapping each module in a separate function. This is called “scope hoisting”. This helps make minification more effective, and also improves runtime performance by making references between modules static rather than dynamic object lookups.
  8. Minification ➡️ Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box. Minification reduces the file size of your output bundles by removing whitespace, renaming variables to shorter names, and many other optimizations.By default, minification is enabled when using the parcel build command. You can use the --no-optimize CLI flag to disable minification and other optimizations if needed.
  9. Image Optimization ➡️ Parcel supports resizing, converting, and optimizing images! Just pass query parameters for the format and size you need when referencing the image file in your HTML, CSS, JavaScript, etc. and Parcel will take care of the conversion and optimization process.
  10. Code Splitting ➡️ When multiple parts of your application depend on the same common modules, they are automatically deduplicated into a separate bundle. This allows commonly used dependencies to be loaded in parallel with your application code and cached separately by the browser!.Code splitting is also supported for CSS. 
  11. Content Hashing ➡️Parcel automatically includes content hashes in the names of all output files. This enables long-term browser caching, because the output is guaranteed not to change unless the name does.
  12. Transpilation ➡️ Parcel transpiles your JavaScript and CSS for your target browsers automatically! Just declare a browserslist in your package.json, and Parcel takes care of transpiling only what's needed.
  13. Differential Bundling ➡️ When you use <script type="module">, Parcel automatically generates a nomodule fallback for old browsers as well, depending on your browser targets.This results in much smaller bundles for a majority of users in modern browsers, while still supporting older browsers as well!

    *npx parcel index.html(for dev build) , npx parcel build index.html(for prod build)*

# 1️⃣8️⃣ Dist folder
     once the build is done - whatever we are seeing in browser comes from the dist folder - not from the files(like index.html or app.js) - everytime build is done - dist folder is regenerated. (since so, exclude it from adding to github - put it in .gitignore file)
     It keeps the files minified for us. When bundler builds the app, the build goes into a folder called dist. 
     The `/dist` folder contains the minimized and optimised version the source code.

     Also, .parcel-cache folder is created - parcel enables faster dev builds because of caching   - it is also regenerable at every build 
     ❌❌❌❌❌❌❌(imp) ➡️ parcel-cache is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. ❌❌❌❌❌❌❌

     "browserlist":[] in package.json ➡️ to configure the browser that our app could support
     Browserslist is a tool that specifies which browsers should be supported/compatible in your frontend app. It makes our code compatible for a lot of browsers. 

# 1️⃣9️⃣ "Script" Section in Package.json

    The scripts section is a key in package.json where you define shortcut commands to run tasks like starting a server, building a project, testing, or deploying.

    ⭐npm run <script-name>⭐

    ❌❌npm start and npm test works without "run" word because "start" and "test" are special scripts in npm.❌❌

    What is another way of starting the build of the project? -----> By creating scripts instead of using “npx parcel index.html”. We can create different scripts for starting our project in Development and Production.

# 2️⃣0️⃣ React Element:

    const heading = React.createElement("h1",{},"Welcome!)  -----> refer 7th point above

    React.createElement  returns an js object
    Upon rendering , react element(which is an object)  --->converts to HTML element

    <div id = 'root'>
        <h1>Not rendered</h1>
    </div>

    const root = ReactDOM.createRoot("document.getElementById("root"));
    root.render(heading)



    🔺whatever happens in react, happens in root
    🔺Upon rendering, ReactDOM takes react element and turns it into HTML nad sends to browser
    🔺Element rendered( heading element) replaces (❌NOT APPENDED❌) the <h1> tag inside the <div> that has id = "root"

     A React element is a JavaScript object that tells React what to render and how it should look.A React element is not the same as a DOM element (it’s just a description of what should be rendered).

    React elements are immutable. Once created, they can’t be changed. This immutability helps React do fast comparisons during rendering because it knows any change requires a new object. This makes UIs more predictable and improves performance with techniques like memoization and pure rendering.
    

# 2️⃣1️⃣ HTML Elements vs React Elements

  - React elements are not actual DOM nodes, but plain JavaScript objects that describe what should appear on the screen. They're created via JSX or React.createElement() and are used by React’s virtual DOM for efficient updates.

  - In contrast, HTML elements are the actual DOM nodes rendered in the browser.

  - The actual rendering of React elements into HTML elements is handled by ReactDOM, which compares the virtual DOM to the real DOM and updates only what’s necessary.

# 2️⃣2️⃣ JSX:

    When we used React.createElement() for displaying content on the webpage but its syntax is very bad. It’s not developer friendly, and very hard to read. To solve this problem Facebook developers built JSX.

    ⭐ JSX is HTML-like or XML-like syntax. JSX stands for JavaScript XML. It's a syntax extension for JavaScript. to create react elements

    💡A JavaScript extension is like adding new words or grammar to that language that JavaScript doesn’t understand by itself. You can write using that new style, but you need a translator (BABEL) to turn it back into normal JavaScript.

    ❌ JSX is not a part of react. JavaScript engine cannot understand JSX as it only understands ECMAScript .
    ❌JSX is not a valid Javascript syntax as it’s not pure HTML or pure JavaScript for a browser to understand. JS does not have built-in JSX. The JS engine does not understand JSX because the JS engine understands ECMAScript or ES6+ code

    Q ) If the browser can’t understand JSX how is it still working?

        📍 This is because of Parcel.

        📍 Before the code gets to JS Engine it is sent to Parcel and Transpiled there. Then after transpilation, the browser gets the code that it can understand.

        📍 Transpilation ⇒ Converting the code in such a format that the browsers can understand.
                Transpilation = Transforming + Compiling
                    It's the process of converting code from one version or form of a language to another.
                    In the JavaScript Taking code written in new or extended JavaScript (like JSX or TypeScript) and converting it into plain JavaScript that all browsers understand.
                        Real-world transpilers:
                            Babel — for JSX and modern JS (like ES6+) ➡ ES5

                            TypeScript compiler (tsc) — for TypeScript ➡ plain JavaScript

                            SWC / esbuild / Vite — newer, faster transpilers

- Parcel is like a manager who gives the responsibility of transpilation to a package called Babel.

- Babel is a package that is a compiler/transpiler of JavaScript that is already present inside ‘node-modules’ which is depended by parcel, so upon installing parcel bable is installed as its dependency(transitive dependency). It takes JSX and converts it into the code that browsers understand, as soon as we write it and save the file. It is not created by Facebook.
        
- JSX (transpiled by Babel) ⇒ React.createElement ⇒ ReactElement ⇒ JS Object ⇒ HTML Element(render)

- Single Line and Multi Line JSX Code
    
        ```Single line code:
            const jsxHeading = <h1>Namaste React</h1>
            
        Multi-line code:
            If writing JSX in multiple lines then using ‘()’ parenthesis is mandatory. To tell Babel from where JSX is starting and ending.
                    const jsxHeading = (
                    <div>
                    <h1>Namaste React</h1>
                    </div>
                    )```
- Advantages of JSX: (FROM Namaste React):

  1. Sanitizes the data
            If someone gets access to your JS code and sends some malicious data which will then get displayed on the screen, that attack is called cross-site scripting. It can read cookies, local storage, session storage, get cookies, get info about your device, and read data. JSx takes care of your data.
            If some API passes some malicious data JSX will escape it. It prevents cross-site scripting and sanitizes the data before rendering
        2. Makes code readable JSX makes it easier to write code as we are no longer creating elements using React.createElement()
        3. Makes code simple and elegant
        4. Show more useful errors and warnings
        5. JSX prevents code injections (attacks)

# 2️⃣3️⃣ React Components

    A component in React is a function (or class) that returns JSX — which is basically HTML inside JavaScript.

    There are 2 types of components:
        1.Class-based Components 
        2.Functional Components 

   React Functional Components:
        It is just a JavaScript Function that returns some JSX or a react element.
        Always name React Functional Component with Capital Letters

    To render a functional component we call them ‘<Heading1 />’.
        This is the syntax that Babel understands.
        You can also call them using these ways,
        ‘<Title></Title>’
        or
        ‘{Title()}’


        ⚠️⚠️⚠️
        Both <Comp /> and {Comp()} are valid ways to use components in React — but they are not the same.
            ✅ <Comp /> — This is the correct and standard JSX way
                                function Comp() {
                                return <h2>Hello!</h2>;
                                }

                                export default function App() {
                                return <Comp />;
                                }
                🧠 What happens:
                React recognizes <Comp /> as a React component
                It automatically handles props, state, hooks, lifecycle, etc.
                This is how 99% of React components are used

            ⚠️ {Comp()} — This is calling the function manually
                                function Comp() {
                                return <h2>Hello!</h2>;
                                }

                                export default function App() {
                                return <div>{Comp()}</div>;  // Works, but not recommended
                                }
                🧠 What happens:
                You're just calling a function that returns JSX
                React doesn’t treat it as a component:
                            ❌ No hooks allowed inside
                            ❌ No useEffect, useState, etc.
                            ❌ No React lifecycle support
                    ✅ Might be fine for small, stateless utility components

                ❗ Avoid {Comp()} when:
                                You’re using hooks inside Comp
                                You need React's full component power
                                You care about performance optimizations (React's diffing, etc.)

    COMPONENT COMPOSITION:
        putting (calling) a component inside another component.
    
    Inside a React Component when ‘{}’ parenthesis is present we can write any JavaScript expression inside it.

# 2️⃣4️⃣ styles in html and jsx

    HTML: style="property: value;" ← CSS string ✅
    React (JSX): style={{ propertyName: 'value' }} ← JS object ✅

# 2️⃣5️⃣ What happens behind the scenes when importing a json file

    For ex:
    consider a json file named user.json  ---> it is not exported like export default json name;
    Even though JSON doesn’t have "exports" inside, your build tool (like Webpack, Vite, or CRA) will treat the JSON file like this behind the scenes:

        export default [
        { "id": 1, "name": "Alice" },
        { "id": 2, "name": "Bob" }
        ];

    how importing converts json to array of objects?   /   How the JSON file becomes usable JavaScript?

        🧱 What a .json file really is:

            A .json file is just plain text written in a special structure that follows JSON rules.

            Example content in data.json:

            [
            { "id": 1, "name": "Alice" },
            { "id": 2, "name": "Bob" }
            ]

            So at this point it’s just text — not actual JavaScript yet.

            🔄 How It Becomes JavaScript in Your App:

            When you do:

            import users from './data.json';

            Behind the scenes, your build tool (like Webpack, Vite, or CRA) does the following steps:

            🧠 Step-by-Step Breakdown:

                    🔸 1. Reads the file
                    It loads data.json like plain text:

                    '[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]'

                    🔸 2. Parses it using JSON.parse()

                    Just like you’d do manually:

                    const users = JSON.parse('[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]');
                    Now users is:

                    [
                    { id: 1, name: "Alice" },
                    { id: 2, name: "Bob" }
                    ]

                    ✅ This is real, usable JavaScript data: an array of objects.

                    🔸 3. Exports the parsed value

                    The bundler turns it into a module like this behind the scenes:

                    // This is what your bundler creates automatically:
                    export default [
                    { id: 1, name: "Alice" },
                    { id: 2, name: "Bob" }
                    ];

            🧠 So when you write:
                    import users from './data.json';
                    ...you’re really just importing this default export — a ready-to-use JavaScript array of objects. No need to manually parse anything!

            💡 Why This Works Automatically?

                    Because:

                    Modern tools like Webpack, Vite, Next.js, etc. include built-in support for importing .json files.

                    They intercept the import and do all the parsing for you during build time.

# 2️⃣6️⃣ React Fragments

      React Fragments lets to group multiple elements without adding extra wrapper elements (like div) - so No extra elements added to the DOM.

      Syntax: <Fragment>...</Fragment> or shorthand <>...</>.

      Purpose: 
        No Extra DOM Elements: Helps you avoid adding unnecessary wrapper elements like <div>.
        Cleaner Code: Keeps your DOM structure neat and free of unnecessary elements.
        Efficient Rendering: React can render the elements directly without creating extra nodes.

    Simply put, a component can return only one react element (thats y we r wrapping multiple elements within a div)   --- but by usng a fragment we can group multiple elements together and return them as a group

    ⚠️ when using a loop / map fn , use <Fragment></Fragment>  instead of <></>, so that we can give key to <Fragment>

    When rendering a list of fragments, you need to provide a key to each fragment to help React efficiently re-render items.
                function ListWithKeys() {
                    const list = ['Item 1', 'Item 2', 'Item 3'];

                    return (
                        <>
                        {list.map((item, index) => (
                            <Fragment key={index}>
                            <h2>{item}</h2>
                            <p>Description for {item}</p>
                            </Fragment>
                        ))}
                        </>
                    );
                    }

# 2️⃣7️⃣ Never use index as key
    https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

# 2️⃣8️⃣ PROPS:

    props are the properties used to send data dynamically to components

    Passing a prop to a component is like passing an argument to a function.

    while receiving, Props will be wrapped and send in Javascript object

# 2️⃣9️⃣ Config driven UI

    It is a user Interface that is built and configured using a declaration configuration file or data structure, rather than being hardcoded. Config is the data coming from the api which keeps on changing according to different factors like user, location, etc. 

# 3️⃣0️⃣ HOOKS:
    React hooks are normal javascript functions which are prebuilt with super powers

## 🔹 Hooks Are Exclusive to Functional Components

- **Hooks are exclusive to functional components**. They were introduced to give functional components the ability to manage state, handle lifecycle methods, and perform other operations that were previously only available in class components.

## 🔹 What Can Class Components Do?

- Class components **cannot** use hooks directly. However, class components can still use state, lifecycle methods, and other features without hooks.

  ## 1️⃣useMemo:
        i) "useMemo is a React Hook that memoizes the result of a computation and recalculates it only when its dependencies change.
        ii) It’s mainly used to optimize performance for expensive calculations like filtering, sorting, or processing large datasets.
        iii) useMemo doesn’t prevent re-renders but avoids unnecessary recalculations.
        iv) I usually apply it after identifying real performance bottlenecks, not by default, because overusing it can lead to memory overhead."

        Real world example
            "Sure! Recently, I built a food delivery dashboard that fetched a list of restaurants from an API.
                To show only top-rated restaurants, I used useMemo to filter the list.
                Without useMemo, the filtering happened on every small input change like typing in the search bar.
                With useMemo, the filtering only recomputed when the restaurant list or the filter option changed, which significantly improved the performance and reduced unnecessary computations."

 ## 2️⃣useState:        
        i) useState is react hook which lets to create and manage local state variables
        ii) useState returns a state variable and a setter function to update the state
        iii) whenever a state variable changes/updates, the component will be re-rendered

 ## 3️⃣useEffect:
        i) useEffect is a prebuilt react hook which will run after the component renders accepts a callback function and a dependency array - useEffect is a hook for running side effects in React function components.
        ii) useEffect returns undefined ⚠️
        iii) useEffect runs based on the dependency array
        Depends on the dependency array:
                [] → runs once (like componentDidMount)
                [someVar] → runs when someVar changes
                No array → runs after every render
*Why can't the callback function of useEffect be async?*
-   An async function always returns a Promise
-   But React expects the return value of useEffect to be:
    undefined → means “no cleanup” or a cleanup function → runs on unmount or before re-run
-   If a Promise is returned, React can’t treat it as a cleanup function

## 4️⃣useNavigate:
`useParams` is a React Router hook that lets you access dynamic segments of the URL.  
For example, if your route is `/user/:id`, calling `const { id } = useParams()` inside the component will give you the value of `id` from the URL.

```jsx
<Route path="/user/:id" element={<UserProfile />} />
function UserProfile() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}
```

## 5️⃣ useParams:
`useNavigate` is a hook that allows you to change routes programmatically. It's especially useful after actions like form submissions, login success, or conditional redirects.
```
function LoginSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/dashboard');
  }, []);
  
  return <p>Redirecting...</p>;
}
```

## 6️⃣useRouteError:
* useRouteError is a React Router hook (v6.4+) used inside an error element to access the error that was thrown during data loading, action submission, or rendering in a route.
* You use useRouteError in a route’s errorElement to get information about what went wrong. This is useful for custom error handling and displaying helpful messages to users.
* useRouteError is a React Router hook that gives you access to errors caught by the router so you can display them in a custom error UI.

## 7️⃣CUSTOM HOOKS:
* Custom hooks are utility functions that lets us to encapsulate logic and reuse it across different components.
* Custom hooks are just functions that:
-    Start with the word use (e.g., useFetch, useForm, useAuth)
-    Can use other hooks inside them (useState, useEffect, etc.)
-    Return some value (data, state, or functions)
**uses of custom hooks**
- Reusability – Share logic across components.
- Cleaner code – Keep components focused on rendering UI, not logic.
- Separation of concerns – Logic and UI are decoupled.
- Testability – You can test hooks separately.


# 3️⃣1️⃣ Imports and Exports

    - Exports:
        - Default export:
            To export only one value (function, component, object, etc.) from a file.
            can import it with any name we want
            When to use: When a file has one main thing to export.
        -Named export:
            To export multiple values from a file, each with their name.
            Ex:
                export const Loader = () => { ... };
                export const Spinner = () => { ... };
            Must use ** curly braces {} and the exact same name ** when importing
            Ex:
                import { Loader, Spinner } from './utils';
            When to use: When you have multiple utilities/functions/components in a file.
    
    -Imports:
        - * as import (namespace import)
            To import everything from a file and give it a namespace name.
            Ex:
                import * as Utils from './utils';
                <Utils.Loader />
                <Utils.Spinner />
            When to use: If you want to group all exports under one object (makes code organized).

        - default import:
            Importing the default export of a file.
            No curly braces {} needed.
            You can rename it while importing.
        - named import:
            To import specific named exports from a file.
            Curly braces {} are mandatory.
            The name must exactly match the exported name.

    - Default + named export and import:
        Ex:
            export const Pen = () => { ... };
            export const Eraser = () => { ... };
            const Sharpener = () => { ... };
            export default Sharpener;

            import Sharpener, { Pen, Eraser } from './tools';     //first default import, then named imports inside curly braces
            
        No conflicts between default and named exports. Both can coexist in the same file.

# 3️⃣2️⃣ Routing :
    
    createBrowserRouter: (from chatGPT)

---

### Overview

`createBrowserRouter()` is a function introduced in **React Router v6.4+** that powers routing in modern React applications. It allows you to build route-based apps using clean URLs (like `/about`) and offers advanced features like data loading, form handling, nested routes, and error boundaries.

---

### 1. Creates a Router Object

`createBrowserRouter()` generates a central router object that: (accepts array of route objects)

* Stores route definitions
* Manages matching rules for URLs
* Supports loader and action hooks
* Handles errors and layouts

This router object is passed to `<RouterProvider />`, which injects routing capabilities into your app.

---

### 2. Uses the Browser's History API

It uses the browser's built-in **History API** (`pushState`, `replaceState`, `onpopstate`) to change the URL path without refreshing the page. This enables navigation with:

* Clean URLs like `/about` (not `#/about`)
* Native back/forward button support
* No full page reloads

---

### 3. Parses Route Configuration

You provide an **array of route objects** that define:

* Path: The URL segment
* Element: The React component to render
* Children: Nested routes
* Loader: Function to fetch data before render
* Action: Function to handle form submissions
* ErrorElement: UI to show on errors

```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Shared layout
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);
```

---

### 4. Handles Nested Layouts

The route configuration allows nested routes. Parent routes can include a layout (e.g., navbar) and use `<Outlet />` to render child routes inside.

---

### 5. Supports Loaders

Each route can define a `loader()` that runs before the component renders. It:

* Fetches route-specific data
* Provides it to the component via `useLoaderData()`

Example:

```js
{
  path: "/user/:id",
  element: <UserPage />,
  loader: ({ params }) => fetch(`/api/user/${params.id}`),
}
```

---

### 6. Supports Actions

Routes can define an `action()` to handle POST submissions. React Router will call this function when a `<form method="post">` is submitted.

```js
{
  path: "/contact",
  element: <ContactForm />,
  action: async ({ request }) => {
    const data = await request.formData();
    // Process form
  },
}
```

---

### 7. Error Handling

Routes can define an `errorElement` to display when:

* Loaders or actions throw errors
* Navigation to a route fails

Example:

```js
{
  path: "/dashboard",
  element: <Dashboard />,
  loader: dashboardLoader,
  errorElement: <DashboardError />
}
```

---

### 8. Integrated with `<RouterProvider>`

Once created, the router is used by wrapping your app in:

```jsx
<RouterProvider router={router} />
```

This provides access to navigation functions, hooks, and context across your app.

---

### summary

| Feature            | Purpose                           |
| ------------------ | --------------------------------- |
| Router Object      | Central routing config and state  |
| History API        | Clean URLs, smooth navigation     |
| Route Tree Parsing | Handles nested and flat routes    |
| Loaders            | Fetch data before rendering       |
| Actions            | Handle form submissions           |
| Error Boundaries   | Per-route error UI                |
| Layout Nesting     | Reuse common UI with `<Outlet />` |

---

This approach replaces the older JSX-based `<BrowserRouter>` + `<Routes>` system with a more powerful, data-aware routing setup.

#### What is History API?

    What Happens When You Click a Link in a Normal Website?
            In a regular website (not a SPA), clicking a link like <a href="/about">:

            Requests a new page from the server (GET /about)

            Reloads the entire page

            You lose state (unless manually preserved)

            It’s slow and janky compared to modern apps

    What Happens in a React App?

            In a React app with React Router + createBrowserRouter, you might write:

            <Link to="/about">About</Link>

            This doesn't reload the page. 
            
            Instead:

                React intercepts the click

                It uses the History API to update the URL to /about

                It re-renders a different React component

                You stay on the same page — fast and smooth!

                This is what single-page application (SPA) behavior means.

    So What Is the History API Doing Exactly?

            Think of the browser history as a stack of pages the user has visited.

            The History API lets you manipulate that stack directly, with JavaScript, without reloading pages.

Core methods:
    history.pushState(stateObject, title, newUrl)
    history.replaceState(stateObject, title, newUrl)
    window.onpopstate = function (event) { ... }

        🔧 What These Methods Do (in plain terms):
        pushState() → Adds a new entry to the history stack and updates the URL
        🧠 Used when navigating: e.g., go to /about

        replaceState() → Replaces the current entry (no new history step)
        🔁 Used for redirects or fixing the URL

        onpopstate → Reacts to back/forward button clicks
        🔙 React Router listens here to load the right route

Real Example (behind the scenes)

        history.pushState({}, '', '/about');
        The browser address bar changes to /about

        No request is sent to the server

        React Router sees the change and renders the <About /> component

How React Router Uses It :
        When you use:

        <Link to="/profile" />

        React Router:

                Calls history.pushState({}, '', '/profile')

                Triggers the route-matching logic

                Renders the right component (e.g., <Profile />)

                And when the user hits the back button?

                The browser fires a popstate event

                React Router catches it

                Renders the previous route without a reload

Why This Matters to You as a Developer:

    You get clean, readable URLs (/dashboard, not #/dashboard)

    You don’t lose app state when navigating

    You can make fast, app-like UIs — no full reloads

    You can easily handle deep linking and browser navigation

If You Didn’t Use the History API?
        You’d have to:

        Either reload the page (slow)

        Or use hacks like window.location.hash = "#/about" (ugly)


# WHAT IS RouterProvider?

    RouterProvider is a component from react-router-dom that wraps my entire React app and connects it to a router instance—usually created using createBrowserRouter or createHashRouter.

    It's responsible for providing routing context to the application, so that all the route-related hooks and components—like <Link>, useNavigate, or useParams—can work properly.

    It listens to the browser’s history, matches the current URL with the route configuration, and renders the correct component without reloading the page.

    Compared to older versions of React Router where we used <BrowserRouter> directly, RouterProvider gives more control and works better with modern features like loaders, error boundaries, and data APIs introduced in React Router v6+.

## Why not use <BrowserRouter>?

    <BrowserRouter> is a simpler wrapper that sets up the routing context using the browser's history. But when you use route objects created with createBrowserRouter, you need RouterProvider because it’s designed to work with those richer features like nested routes, data loading, and error handling built into the modern React Router architecture.

###      Key Takeaways:

        RouterProvider is used with router objects like createBrowserRouter().

        It replaces the need for older wrappers like <BrowserRouter> when using the new route-based setup.

        It powers all routing features by providing a context that React Router hooks/components rely on.

        Required for using advanced features like loaders, actions, deferred data, and route-based error handling.

# Children routes:

## Outlet:
* <Outlet /> is a **React router component** which is like a  placeholder used in parent route components (parent route's layout) to render whatever child route matches the current path.

## Link:
* <Link /> is a __component__ from react-router-dom that lets you navigate between routes in a React app **without reloading the page**.
* uses:
   Unlike a normal HTML <a> tag, which reloads the whole page, Link:
-        Uses client-side routing (via the History API)
-        Keeps the app fast and smooth
-        Maintains React component state between page changes

# 3️⃣3️⃣ Single Page Applications:

    A Single Page Application (SPA) is a web app that:
-SPA stands for  Single Page Application . It's a type of web application or website that interacts with the user by dynamically rewriting the current web page rather than loading entire new pages from the server. In other words, a single HTML page is loaded initially, and then the content is updated  dynamically as the user interacts with the application, typically through JavaScript
-    Loads a single HTML page initially
-    Dynamically updates content on the page using JavaScript
-    Avoids full page reloads when navigating between "pages"
-    Instead of the browser requesting a new HTML file for each route, SPAs use JavaScript (often via a framework like React) to change what's shown on the screen—faster and smoother.

# How React helps in SPA , what happens underhood?
# 🚀 React SPA: How React Powers Single Page Applications

A **Single Page Application (SPA)** is a web app that loads **one HTML page** and dynamically updates content using JavaScript, without full page reloads. React, with its efficient rendering and state management, is ideal for building SPAs.

---

##  What is an SPA?

A **Single Page Application (SPA)** loads **one HTML page** and updates the content dynamically using JavaScript, without full page reloads. This results in a fast and smooth user experience, as the entire page doesn't need to be reloaded with every navigation.

---

##  How React Powers SPAs

When building an SPA with React, the following happens:

1. **Initial Page Load**:
   - The browser loads **only one HTML file** (`index.html`).
   - A JS bundle (e.g., `bundle.js`) is loaded, and React takes control of the page by rendering into a root element (`<div id="root">`).
   
2. **React Bootstraps the App**:
   - React renders the root component (`<App />`) into the DOM.
   - React uses a **Virtual DOM** to efficiently manage UI updates, so it only changes the necessary parts of the page.
   
3. **Client-Side Routing with `createBrowserRouter`**:
   - React Router listens for URL changes using the **History API**.
   - The `<Link />` component handles navigation without triggering full page reloads.
   - `<Route />` matches the URL and dynamically renders the corresponding component inside the app.

```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

---
### Summary
- **SPA**: One HTML file, dynamic content updates with JS.
- **React**: Efficient UI updates using Virtual DOM.
- **React Router**: Handles client-side routing with `createBrowserRouter` for smooth navigation.
- **Result**: Fast, seamless, app-like experience in the browser.

# Client-Side Rendering (CSR) vs Server-Side Rendering (SSR)

## Client-Side Rendering (CSR)

Client-side rendering means that the browser (the client) is responsible for rendering the content of the webpage(doesnot make any network calls). Here's how it works:
- **Initial Load**: When you first visit a website, the server sends an empty HTML file with JavaScript files.
- **JavaScript Handles Rendering**: The browser downloads the JavaScript and executes it to render the HTML content.
- **Subsequent Changes**: Once the page is loaded, all further content changes (like page navigation) are handled in the browser via JavaScript. No new HTML files are fetched from the server after the initial load.

### Benefits of CSR:
- **Fast interactions**: Once the page is loaded, interactions are faster since they don't require a full page reload.
- **Reduced server load**: The server just sends static files, and the client does the heavy lifting.

### Example:
React, Angular, and Vue.js are all frameworks that typically use CSR to render pages dynamically.

---

## Server-Side Rendering (SSR)

Server-side rendering means that the server is responsible for rendering the content of the webpage. Here's how it works:
- **Initial Load**: When you visit a website, the server generates the HTML for the requested page, including all content and layout.
- **HTML Sent to Browser**: The server sends a fully rendered HTML file to the browser, which displays it.
- **Subsequent Requests**: When you interact with the page or navigate to a new route, the server may regenerate the HTML or use JavaScript to update the content, depending on the setup.

### Benefits of SSR:
- **Faster initial load**: Since the server sends pre-rendered HTML, users see content faster, especially on slow networks or devices.
- **Better SEO**: Search engines can easily crawl the content of a page because the HTML is already rendered when the page is loaded.

### Example:
Traditional websites or frameworks like Next.js (which can use both CSR and SSR) support SSR.

---

# Dynamic routing:
"Dynamic routing in React allows us to create routes that change based on the URL parameters. For example, we can define a route like /user/:id, where :id is a placeholder for dynamic values such as user IDs. This is commonly used for pages like user profiles or product details. We use React Router to define these routes and the useParams() hook to extract the dynamic part from the URL inside the component."

---

# 3️⃣4️⃣Class-Based Components in React (CBC)

## Introduction
Class-based components (CBC) are the traditional way to define components in React. They provide a way to handle state, lifecycle methods, and other features in React. Class components extend from `React.Component` and must have a `render` method to return JSX. The constructor of a CBC is used to initialize props and state.

## Constructor in Class-Based Components
The constructor is invoked when the component is created. It receives `props` as an argument, which can be used to initialize the component's state or perform other setup tasks. The constructor should call `super(props)` to ensure that `React.Component` is properly initialized and `props` are accessible in the component.

## `super(props)`
Calling `super(props)` invokes the constructor of `React.Component` and passes the `props` to it. This is essential for initializing the CBC with the correct `props` and ensuring that React can manage the component's lifecycle correctly.
*When a child class extends a parent class, the child class can have its constructor. However, if the child class has a constructor, it must call super(props) as the first statement in its constructor. This is because super(props) is used to invoke the constructor of the parent class, ensuring that the parent class's initialization is performed before the child class's constructor code is executed. It is essential to maintain the inheritance chain correctly.*


## `this.props`
`this.props` refers to the properties passed into the component. These props are passed from the parent component when the component is rendered. Inside the CBC, `this.props` can be accessed to retrieve values like `this.props.name`.

## `this.state`
`this.state` is used to store and manage the internal state of a component. It is initialized in the constructor. State can be updated using `this.setState()` which triggers a re-render.

## `render()` Method
The `render()` method is a required method in a CBC. It returns JSX that represents what should be rendered to the UI. React automatically calls the `render()` method whenever the component's state or props change. No need to explicitly call render() in the constructor.

### How `render()` is Called
React **automatically** calls the `render()` method when:
  1. The component is initially mounted.
  2. The component's state or props change (through `this.setState()` or new props from the parent).

The `render()` method is **not** called manually inside the constructor; React manages when it is called.

## why can't we initialize this.props in the cbc rather than passing props to React.Component(calling constructor of it) and then using it in cbc?
-super(props) is necessary because JavaScript requires that you call the constructor of the parent class before using this. Without it, this.props won't be properly set up.

-React.Component needs to handle the initialization of props in its constructor, and super(props) is the mechanism to pass the props to React.Component.

-You can’t directly assign this.props in your CBC constructor because React manages how this.props is set and made available to your component instance.

-Without super(props), this refers to the CBC instance, but it doesn't have the necessary setup from the parent React.Component, and this.props would remain undefined.
## State Initialization in Constructor
In the constructor, you initialize the state using `this.state`. The state is an object that holds data that can change over time. It can be updated using the `this.setState()` method, which triggers a re-render.

## `setState()` and `forceUpdate()`
The `this.setState()` method is used to update the state of a component. When state changes, React re-renders the component. `forceUpdate()` can be used to force a re-render of the component, but it is generally not recommended unless necessary.

## Methods in `React.Component`
Here are some important methods provided by `React.Component`:

1. **`this.setState()`**: Updates the component’s state and triggers a re-render.
2. **`this.forceUpdate()`**: Forces a re-render of the component.
3. **`this.render()`**: Returns JSX and is called by React to render the component.

## Lifecycle Methods
Lifecycle methods allow you to hook into specific points in the component's lifecycle, such as when the component is mounted, updated, or unmounted. These methods include:

1. **`componentDidMount()`**: Called after the component is first rendered and added to the DOM.
2. **`componentDidUpdate(prevProps, prevState)`**: Called after the component is updated.
3. **`componentWillUnmount()`**: Called just before the component is removed from the DOM.
4. **`shouldComponentUpdate(nextProps, nextState)`**: Used to prevent unnecessary re-renders.
5. **`getDerivedStateFromProps(nextProps, nextState)`**: A static method to sync state with props.
6. **`getSnapshotBeforeUpdate(prevProps, prevState)`**: Called right before the DOM is updated.

## How does constructor of React.Component look like? 
```
class Component {
  constructor(props) {
    // Step 1: Initialize the component's internal state
    this.state = null; // This could be a default value (e.g., `null` or `{}`)

    // Step 2: Set up `this.props` — the props passed to the component
    this.props = props;

    // Step 3: Allow binding methods (this is done by the child class)
    // (Child components can override this constructor and add their own state initialization or method binding.)
  }

  // Other methods...
}
```
---

# Consider this scenario:
- The parent component has constructor, render, and componentDidMount functions. It also has three child components, and each child component includes its own constructor, render, and componentDidMount functions.

-Upon logging messages to the console from all these functions, the output was as follows:
```
parent constructor  
parent render  
child constructor first  
child render first  
child constructor second  
child render second  
child constructor third  
child render third  
child mount first  
child mount second  
child mount third  
parent mount
```

Usually, the order of function execution is: constructor, then render, followed by componentDidMount. So, we would expect the lifecycle to follow this sequence:

#### Expected(as per order of execution):
First child’s constructor, render, and componentDidMount

Second child’s constructor, render, and componentDidMount

Third child’s constructor, render, and componentDidMount

#### observed result:
However, the observed output differed from this expected sequence. This is because ,actually React updates DOM and refs before commit phase(i.e componentDidMount) and DOM manipulation is one of the most expensive operations. React optimizes this internally by batching all the render functions of the child components together before proceeding to the componentDidMount phase.

---

# Order of Execution of life cycle methods in class based component:
1. Constructor - It is executed when a component instance is created from the class.  It's where we typically initialize the component's state and bind event handlers.
2. render - responsible for rendering the component's UI (rendering the JSX).
3. componentDidMount - This method is called immediately after the component is inserted into the DOM. It's often used for making AJAX requests, setting up subscriptions, or other one-time initializations.
4. componentDidUpdate - This method is called after the component has been updated (re-rendered) due to changes in state or props. It's often used for side effects, like updating the DOM in response to state or prop changes.
5. ComponentWillUnmount - This method is called just before the component is removed from the DOM. It's used to clean up resources or perform any necessary cleanup.

---

## componentWillUnmount:
- componentWillUnmount is a lifecycle method in React class-based components (cbc) that runs just before a component is removed (unmounted) from the DOM. It’s mainly used for cleanup tasks like clearing timers, canceling network requests, or removing event listeners.
*Never call setState inside componentWillUnmount — the component is on its way out, so there’s no point in updating its state.*

## use cases for useEffect with a return function—one using an empty dependency array and one using a dependency array

- Empty dependency array ([]) → Runs once on mount; cleanup runs on unmount.
- Dependency array ([value]) → Runs on mount and whenever value changes; cleanup runs before re-run and on unmount.

 1. Empty Dependency Array ([])
 Use Case: Set up and clean up a WebSocket connection
```
useEffect(() => {
  const socket = new WebSocket("wss://example.com/socket");

  socket.onmessage = (event) => {
    console.log("Message from server:", event.data);
  };

  console.log("WebSocket connected");

  return () => {
    socket.close();
    console.log("WebSocket disconnected");
  };
}, []);
```

Why this works:
- The effect runs once when the component mounts (like componentDidMount).
- The cleanup runs once when the component unmounts (like componentWillUnmount).

 2. Dependency Array ([count])
🔧 Use Case: Set up a timer that uses count value
```
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Count value:", count);
  }, 1000);

  return () => {
    clearInterval(timer); // clean up old timer
    console.log("Timer cleared for count:", count);
  };
}, [count]);
```

 Why this works:
- Every time count changes, the old interval is cleared and a new one starts.
- Prevents multiple overlapping intervals or using stale state.

---

# Why use the function form setPageNumber(prev => prev - 1)?
When updating state in React, especially with hooks like useState, using the functional update form ensures you are working with the latest state value.

**Explanation**:
*setPageNumber(pageNumber - 1) uses the current value of pageNumber from the closure at render time. If multiple state updates happen quickly, this value might be outdated, leading to bugs (like skipping or repeating pages).*
*setPageNumber(prev => prev - 1) passes a function to React. React then calls it with the most recent state value (prev), so the update is always based on the latest state, no matter how many updates are queued.*

-Use functional updates when your new state depends on the previous state.
-It avoids bugs caused by stale closures and asynchronous state updates in React.

---

# online status custom hook:
```
import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
    const [onlineStatus,setOnlineStatus] = useState(true);
 useEffect(()=>{
    window.addEventListener("offline",()=>{
        setOnlineStatus(false);
    })
    window.addEventListener("online",()=>{
        setOnlineStatus(true);
    })
 },[]);

 return onlineStatus;
}
export default useOnlineStatus;
```

---

# 3️⃣5️⃣ LAZY LOADING:
*lazy loading refers to deferring the loading of a component until it’s actually needed (e.g., when a user navigates to a certain route or interacts with a feature).This is especially useful for large applications where loading everything at once would hurt performance.*

lets look at a situation like this:
- we have a huge file(huge is relative to the no.of. components it has) is bundled by parcel, all code compressed into 1 JS file that will be very huge - Home page gets longer time to load.
- It is necessary to optimize the code and to do so we are creating small bundles (logical seperation of bundles)
- This process is called "lazy loading" | "dynamic import" | "code chunking" | "code splitting" | "on-demand loading" | "dynamic bundling" | "Deferred loading"

**Without lazy loading**, all your components and assets are bundled together, meaning the user has to download a big JavaScript file before anything renders. This leads to:
1. Longer initial load times
2. Poor performance, especially on slow networks
3. Bad user experience

## **Benefits of Lazy Loading**:
1. Faster initial load – only the necessary components are loaded first
2. Improved performance – smaller JS bundles, optimized memory usage
3. Better user experience – users get to the content they want faster
4. Ideal for mobile – reduces data usage

```
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));            // home is a seperate bundle
const About = lazy(() => import('./pages/About'));          // About is a seperate bundle

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

1. React.lazy()
This function is used to lazy-load a component. lazy function has a callback function. That cb func has import function(not our usual import that imports component) that will take component's path as argument.

2. Suspense
This is used to show a fallback UI (like a spinner or message) while the lazy-loaded component is being fetched. Also used to overcome suspended error.

## Notes to be remembered on Lazy Loading
- React.lazy only works with default exports.
- Always wrap lazy-loaded components inside <Suspense>.
- You can customize the fallback – spinner, skeleton screen, etc.
- You can combine lazy loading with code-splitting tools like Webpack or Vite.
**Bonus: Lazy Load Images**
For images, lazy loading can be done like this:
```
<img src="image.jpg" loading="lazy" alt="example" />
```
Or use a library like react-lazyload or react-intersection-observer.

Another Example relevant to lazy loading:
```

--- 

# Higher Order Components (HOCs)

- A **Higher-Order Component (HOC)** is a function that takes a component and returns a new component with additional props, behavior, or logic.
- It’s a design pattern based on the concept of higher-order functions.

---

## So why not just "add features" directly?

You *can*, but that quickly leads to:

1. Code duplication  
2. Tightly coupled logic  
3. Harder testing  
4. More bugs when things change  

---

## Use Cases of Higher-Order Components

### 1. Code Reuse / Logic Sharing

When multiple components share similar behavior (e.g., fetching data, logging, authentication), HOCs help avoid repeating code.

```jsx
function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <WrappedComponent {...props} />;
  };
}

const UserListWithLoading = withLoading(UserList);
```

---

### 2. Conditional Rendering / Authorization

Show or hide components based on permissions or roles.

```jsx
function withAuthorization(WrappedComponent) {
  return function AuthorizedComponent(props) {
    if (!props.isAuthorized) {
      return <p>You do not have access to this content.</p>;
    }
    return <WrappedComponent {...props} />;
  };
}

const AdminPanelWithAuth = withAuthorization(AdminPanel);
```

---

### 3. Adding Styling or Theming

Wrap components to add common styles or themes without modifying each component.

```jsx
function withBorder(WrappedComponent) {
  return function ComponentWithBorder(props) {
    return (
      <div style={{ border: "2px solid blue", padding: "10px" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

const ButtonWithBorder = withBorder(Button);
```

---

### 4. Enhancing Props / Injecting Data

Provide additional data or functionality via props.

```jsx
function withUser(WrappedComponent) {
  return function ComponentWithUser(props) {
    const user = { name: "Alice", loggedIn: true }; // Imagine fetched from context or API
    return <WrappedComponent {...props} user={user} />;
  };
}

const ProfileWithUser = withUser(Profile);
```

---

### Summary

HOCs help keep your React components **clean, reusable, and easy to maintain** by abstracting common functionality outside of individual components.

---

# 3️⃣6️⃣ PROPS DRILLING AND CONTEXT:

-   Prop drilling in React is the process of passing data from a parent component down to deeply nested child components through intermediate components that don’t necessarily need that data themselves.

---

## disadvantages of prop drilling:

| Disadvantage                   | Effect on Code              |
| ------------------------------ | --------------------------- |
| Unnecessary re-renders         | Performance loss            |
| Reduced readability            | Hard to follow and debug    |
| Tightly coupled components     | Low reusability             |
| More boilerplate               | Verbose and repetitive code |
| Hard to refactor               | Fragile and error-prone     |
| Difficult to manage deep trees | Inflexible UI architecture  |
| No easy selective updates      | Inefficient updates         |

---

### Alternatives to Avoid Prop Drilling:
-Context API – Share state globally without passing through every component.
-Redux/Zustand/Jotai/Recoil – State management libraries.
-React Query / SWR – For server state and caching.
- Custom Hooks – Abstract and centralize logic.

---

# 3️⃣7️⃣ Context API:

* The Context API in React is a built-in feature that allows you to share data globally across components without prop drilling (like a global store /central store).can use anywhere

---

#### when to use context:
* when need to share state or data (e.g. **user info, theme, language, auth status**) across many nested components.
* when want to avoid prop drilling.
* use when data is needed in all parts(most of the parts)

---

####
| Part                 | What It Does                                  |
| -------------------- | --------------------------------------------- |
| `createContext()`    | Creates a new context object                  |
| `<Context.Provider>` | Makes the data available to child components  |
| `useContext()`       | Allows any child component to access the data |

---

## what createContext() is doing internally?
* createContext function will create a context object which has two main components(functions):
      - User.Provider → a react component used to provide the context value to the component tree
      - User.Consumer → a react component used to consume the context value (useContext hook is used nowadays)

---

## What happens when we use createContext() with and without a default value?

*With default value*
const MyContext = createContext("default");

*Without default value*
const MyContext = createContext();

**Behind the scenes:**
The argument passed to createContext() becomes the default value used by consumers if there is no <Provider> higher in the component tree.
If no default is provided, undefined is the fallback.

| *Scenario*                   | *Code*                                | *`useContext()` returns if no `<Provider>`* |
| ---------------------------  | -----------------------------------   | ----------------------------------------- |
| With default value           | `createContext("Hello")`              | `"Hello"`                                 |
| With default object          | `createContext({ theme: "light" })`   | `{ theme: "light" }`                      |
| With `undefined` explicitly  | `createContext(undefined)`            | `undefined`                               |
| With no argument             | `createContext()`                     | `undefined`                               |

* If you always expect a Provider, consider not setting a default.
* If you want to safely use context without enforcing a provider, give a safe default like "Guest" or { user: null }.

**The default value passed to createContext() in React can be anything — literally any JavaScript value.**

| Type                     | Example                                              |
| ------------------------ | ---------------------------------------------------- |
| **Primitive**            | `createContext("hello")`<br>`createContext(42)`      |
| **Object**               | `createContext({ username: "sara", role: "admin" })` |
| **Array**                | `createContext([1, 2, 3])`                           |
| **Function**             | `createContext(() => "hi")`                          |
| **Class**                | `createContext(new MyClass())`                       |
| **`null` / `undefined`** | `createContext(null)`<br>`createContext()`           |
| **Boolean**              | `createContext(false)`                               |
| **React Element**        | `createContext(<MyComponent />)`                     |

---

* Use a shape that matches your actual context value, especially for objects/functions
* Avoid using complex values unless needed
* *For safety, even if a default function does nothing, pass a stub like () => {} to avoid runtime crashes*

---

### Why import/export is NOT a Good Replacement for React Context (with examples)
1. 🚫 Not Reactive
Problem: Changing an imported variable doesn't trigger React re-render.

```
// user.js
export const user = { name: "Sara" };

// ComponentA.jsx
import { user } from "./user";
user.name = "Saran"; // updated here

// ComponentB.jsx
import { user } from "./user";
console.log(user.name); // "Saran" – but UI won't update!
```
✅ React Context version:

```
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "Sara" });

  return (
    <UserContext.Provider value={user}>
      <ComponentB />
    </UserContext.Provider>
  );
}

function ComponentB() {
  const user = useContext(UserContext);
  return <div>{user.name}</div>; // Will update automatically
}
```
2. 🚫 Global Mutation is Risky
Problem: Any component can change shared imports → bugs.

```
// settings.js
export const settings = { theme: "light" };

// ComponentA.jsx
import { settings } from "./settings";
settings.theme = "dark"; // Changed globally

// ComponentB.jsx
import { settings } from "./settings";
console.log(settings.theme); // "dark" – unexpected change
```
✅ With Context, only components inside the provider will get the change.

3. 🚫 No Scoped or Dynamic Values
You cannot have different values in different parts of the UI with import/export.

```
// config.js
export const config = { language: "en" };

// Header.jsx
console.log(config.language); // "en"

// Footer.jsx
config.language = "fr";
console.log(config.language); // "fr" — changes everywhere
```
✅ React Context solves this:

```
<LanguageContext.Provider value={{ language: "en" }}>
  <Header />
</LanguageContext.Provider>

<LanguageContext.Provider value={{ language: "fr" }}>
  <Footer />
</LanguageContext.Provider>
```
🔁 Now each part gets a different value.

4. 🚫 No Server-Side Safety (SSR)
Global values via import/export persist between users.

In SSR, this causes cross-user data leakage.

✅ Context lets you generate per-request trees for safe rendering.

5. 🚫 Not Trackable in React DevTools
React DevTools only sees what’s inside props/state/context.
```
// config.js
export const theme = { dark: true };
```
You can’t inspect theme from DevTools.

✅ Context values are visible in React DevTools, making debugging easier.

6. 🚫 Breaks React's One-Way Flow
React encourages data flowing top → down via:

Props

Context

With import/export, updates don’t follow the render cycle. They mutate outside React's control.

✅ Context integrates naturally with React's unidirectional model.

---

#### Importance of React Context

- **Avoids Prop Drilling**  
  Share data across many components without passing props through every intermediate level.

- **Improves Code Maintainability**  
  Centralizes shared state or configuration for easier updates and debugging.

- **Enables Scoped and Dynamic Data Sharing**  
  Different parts of the component tree can receive different context values.

- **Supports Reactive Updates**  
  Consuming components automatically re-render when context values change.

- **Cleaner Component APIs**  
  Components consume only the data they need, without unnecessary props.

- **Common Use Cases**  
  Theming, user authentication, localization, global app settings, etc.

---

### Using Multiple React Contexts in React
Can we have multiple Contexts?
Yes! React encourages creating multiple contexts to separate concerns and manage different pieces of app-wide data independently. For example:

* A ThemeContext for UI theming (light/dark)
* A UserContext for authenticated user info
* A LanguageContext for localization/language settings
And more...

Each context manages a specific type of data, making your code modular, easier to maintain, and test.

---

##### Why multiple contexts instead of one big context?

Separation of Concerns: Each context handles one responsibility.

Performance: Updating one context triggers re-renders only for consumers of that context, avoiding unnecessary updates.

Scalability: You can add or remove contexts as your app grows.

Reusability: Contexts can be reused independently in different parts of your app.

---

##### How to wrap the root element with multiple contexts?

1. Nesting Providers:

You wrap your component tree inside multiple providers by nesting them. Each provider makes its context value available to the subtree inside it.

Example:
```
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <ThemeProvider value={{ theme: "light" }}>
      <UserProvider value={{ name: "Sara", isLoggedIn: true }}>
        <LanguageProvider value={{ language: "en" }}>
          {/* Your app components here */}
          <MainApp />
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
```

In this example:

ThemeProvider wraps everything and provides the theme.

UserProvider wraps inside theme and provides user data.

LanguageProvider wraps inside user and provides language settings.

Every component inside MainApp can access one or more of these contexts independently using useContext.

2. Using a Single AppProviders Wrapper Component:

Nesting multiple providers inline can get verbose and clutter your root file. A common practice is to create a dedicated component that encapsulates all providers:
```
function AppProviders({ children }) {
  return (
    <ThemeProvider value={{ theme: "light" }}>
      <UserProvider value={{ name: "Sara", isLoggedIn: true }}>
        <LanguageProvider value={{ language: "en" }}>
          {children}
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

// Then use it like this:
function Root() {
  return (
    <AppProviders>
      <App />
    </AppProviders>
  );
}
```
This keeps the root or index file clean and the provider logic organized.

---

##### How consuming multiple contexts looks inside components?

You can consume multiple contexts independently using the useContext hook.

```
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";
import { LanguageContext } from "./LanguageContext";

function Profile() {
  const { theme } = useContext(ThemeContext);
  const { name, isLoggedIn } = useContext(UserContext);
  const { language } = useContext(LanguageContext);

  return (
    <div style={{ background: theme === "dark" ? "#333" : "#fff" }}>
      <h1>{isLoggedIn ? `Hello, ${name}!` : "Welcome, Guest"}</h1>
      <p>Language: {language}</p>
    </div>
  );
}
```

Each useContext call is independent, so React optimizes re-renders for each context separately.

**Important Notes:**

Order matters only if context values depend on one another. Otherwise, the order is arbitrary.

Avoid deeply nested providers in very large apps by grouping logically or creating separate context trees.

Using multiple contexts can improve performance because updates to one context do not force consumers of other contexts to re-render.

**Summary**

You can and should use multiple React Contexts to handle different types of app-wide data.

Wrap your root component by nesting multiple Providers or use a dedicated wrapper component to keep code clean.

Consume each context independently using useContext.

This approach leads to better separation of concerns, maintainability, and performance.

---

# 3️⃣8️⃣ React setState Deep Dive:

### What Happens When You Call setState()?

1. React does not immediately update the state.

2. It queues the update and schedules a re-render.

3. State updates are asynchronous, not in the sense of promises, but they defer execution until the event loop or render cycle ends.

### State Queue Mechanics

* React maintains an internal queue of state updates.

* Each setState() call adds a function or value to this queue.

* After the current event handler completes, React processes this queue and applies updates in order.

### What Happens with Regular Updates?
```
setCount(count + 1);
setCount(count + 1);
```

*Both use the stale value of count.*
*They both calculate count + 1 as 1, so React ends up setting count = 1 after both calls.*

### How to Fix: Use Function Updater:
```
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

*This approach gives React an updater function, not a final value.*
*React applies updates one by one:*
*First: prev = 0 → 1*
*Second: prev = 1 → 2*
*Final count = 2*

### Key Reasons Why React Uses Asynchronous Updates:

**Batching:**

React groups multiple state updates to improve performance.

Avoids re-rendering after every tiny change.

**Consistency:**

Ensures all state updates are processed predictably after the event loop.

**Avoids Race Conditions:**

Using updater functions avoids bugs from stale values during re-renders.

### How to Observe This?

Use useEffect to track when the state actually updates:

```
useEffect(() => {
  console.log("Count updated to:", count);
}, [count]);
```

### Best Practice for Dependent Updates:

Always use the function updater when the next state depends on the previous one:

```
setState(prev => prev + 1);
```

---

# 3️⃣9️⃣ Controlled vs Uncontrolled Components in React

### Controlled Components

- Controlled components are those where **React holds the source of truth** for the component’s state or data.
- The **parent component manages the state** and passes the current state as **props** to the child components.
- Child components **do not keep their own internal state** but rely fully on the props they receive.
- When a child component needs to change its state (e.g., a user action), it **notifies the parent via callbacks**.
- This approach makes state **centralized, predictable, and easier to synchronize** across multiple components.
- Controlled components enable **clear and consistent data flow** and make debugging easier because you always know where your data lives.
- This pattern is particularly useful when multiple components need to **share or coordinate state** to behave consistently.

### Uncontrolled Components

- Uncontrolled components **manage their own state internally**, without external control.
- They maintain their own internal data, typically through React’s `useState` or similar hooks inside themselves.
- The parent component is mostly **unaware of the child’s internal state**.
- This makes the child component more **self-contained and independent**, but it limits the ability to coordinate or synchronize behavior between components.
- Uncontrolled components are simpler to build when **state coordination is unnecessary**.
- However, when state synchronization or shared behavior is needed, this approach can become **limiting and harder to manage**.

### Core Idea: State Ownership and Sharing

- The main difference is about **who owns the state**: the child (uncontrolled) or the parent (controlled).
- When state is **lifted up to a common parent**, React components can easily share and synchronize their behavior.
- This leads to a **unidirectional data flow** where parents pass data down via props, and children send updates upward via callbacks.

### When to Use Which?

#### Use Controlled Components When:
- You need **consistent behavior** across multiple components.
- You want to **centralize logic and validation**.
- Your UI requires **state synchronization or coordinated user interactions**.

#### Use Uncontrolled Components When:
- You want **quick, isolated behavior** without complex coordination.
- The component’s state is **simple and self-contained**.
- Performance or simplicity outweigh the need for shared state control.

### Summary

Controlled components provide **predictability and control** by centralizing state, enabling multiple components to work together seamlessly. Uncontrolled components offer **simplicity and encapsulation**, suitable for independent pieces of UI where coordination is unnecessary.

---



Top Scenario-Based React hashtag#Interview Questions

1. How to display dynamic html data in react ?
2. How do you send data from parent component to child component in react ?
3. How to call parent component method from child component in react ?
4. How do you access the dom element ?
5. How to bind array/array of objects to dropdown in react ?
6. Create a lazy loaded component in react ?
7. How to display data entered by the user in another textbox ?
8. How to loop array/array of objects in react ?
9. How to conditionally render an element or text in react ?
10. How to change styles based on condition in react ?
11. How to dhow and hide data based on condition in react ?
12.Bind array/array of objects to radio button in react ?
13.Display radio button data selected by user in another textbox ?
14. How to call a method when component is rendered for the first time in react ?
15.Display keys and values of objects in a loop in react?
16. How to rerender a component on value change in react ?
17. How to call a method on every rerender of a component ?
18. How to add data into useState array in functional component in react ?
19. Create a search textbox filter ?
20.Create a counter component using useState ?
21.Create a counter component using useReducer ?
22.Change focus/enable/disable textbox in child component based on parent component button click ? 
23. How to perform debouncing ?
24.Create a component to fetch data from api ?
25.Force a component to rerender with out using useState in react ?
26. How to call a method immediately after state is updated or 
after component is rerendered ?
27. How to display number of characters remaining functionality for textarea using react useRef?
28.Given two dropdowns, select 2nd dropdown options based on value selected in one dropdown ?
(Load states based on country selected)
29.Perform type checking using prop-types ?
30.Share data between components using context api ?
31.Give an example of optimization using useMemo ?
32.Give an example of optimization using usecallbacks in react ?
33.Create an error boundary component in react ?
34. How to display dropdown value selected by user in another textbox ?
35.Create a pure component ?
36.Create a controlled and uncontrolled component in react ?
37.Create a custom hook using ?
38.Create a popup using portal ?
39.Which lifecycle hooks in class component are replaced with useEffect in functional components ? 
40.Create a pagination component ?
41. How do you safeguard your application ?