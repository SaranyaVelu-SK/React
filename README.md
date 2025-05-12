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

    npm is a package manager for the JavaScript programming language maintained by npm, Inc., a subsidiary of GitHub. npm is the default package manager for the JavaScript runtime environment Node.js and is included as a recommended feature in the Node.js installer.[4]

    It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.

# 1️⃣1️⃣ npm init <initializer> vs npm init

    npm init <initializer> ---> uses create-<initializer> package to create a new project; npm init <initializer> runs as npx create-<initailzer> name_of_the_project
    This will automatically setup the basic structure(necessary project files) of project so that developers won't need to create it from scratch.

    Ex: npm init react-app my-app ➡️ npx create-react-app my-app ➡️ creates a basic react project structure
        my-app/
            ├── node_modules/
            ├── public/
            ├── src/
            ├── package.json
            ├── .gitignore
            ├── README.md
    npm init  ---> The command npm init is used to create a new package.json file for your project, which is essential for managing dependencies and scripts. Its like creating a project structure but with no packages to install( or like initializing create-  nothing)

# 1️⃣2️⃣ Package.json

    package.json is a configuration file in a Node.js project that stores important project information such as:

        Project metadata (name, version, description, author, etc.).

        Dependencies (packages needed for the project).

        Scripts (commands to run tasks like starting a server).

    USES:

        ✅ Manages dependencies → Keeps track of installed packages.
        ✅ Automates scripts → Simplifies commands like npm start or npm test.
        ✅ Project metadata → Documents project details.
        ✅ Version control → Helps maintain package versions.

    
    No package.json	➡️ npm does nothing and shows a warning.
    Empty package.json	➡️ npm does nothing but creates node_modules/ and package-lock.json.
    package.json with dependencies	➡️ npm installs dependencies into node_modules/.

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

    package-lock.json is an automatically generated file that locks the exact versions of installed dependencies. It ensures that everyone working on a project gets the same versions of packages.

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
    3. HMR (Hot Module Replacement) ➡️ As you make changes to your code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR). HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things in your code.CSS changes are automatically applied via HMR with no page reload necessary. 
    There is File Watcher Algorithm (written in C++). It keeps track of all the files which are changing realtime and it tells the server to reload.
    4. Diagnostics ➡️ If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.
    5.Reliable caching ➡️ Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, and granularly invalidates the cache when something changes. It integrates with low-level operating system APIs to determine what files have changed in milliseconds, no matter the project size.
    6.Lazy dev builds ➡️ In development, Parcel can defer building files until they are requested in the browser.
    7. TREE SHAKING (Imp) ➡️ In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination". Tree shaking is supported for both static and dynamic import(), CommonJS and ES modules, and even across languages with CSS modules.Parcel also concatenates modules into a single scope when possible, rather than wrapping each module in a separate function. This is called “scope hoisting”. This helps make minification more effective, and also improves runtime performance by making references between modules static rather than dynamic object lookups.
    8.Minification ➡️ Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box. Minification reduces the file size of your output bundles by removing whitespace, renaming variables to shorter names, and many other optimizations.By default, minification is enabled when using the parcel build command. You can use the --no-optimize CLI flag to disable minification and other optimizations if needed.
    9.Image Optimization ➡️ Parcel supports resizing, converting, and optimizing images! Just pass query parameters for the format and size you need when referencing the image file in your HTML, CSS, JavaScript, etc. and Parcel will take care of the conversion and optimization process.
    10.Code Splitting ➡️ When multiple parts of your application depend on the same common modules, they are automatically deduplicated into a separate bundle. This allows commonly used dependencies to be loaded in parallel with your application code and cached separately by the browser!.Code splitting is also supported for CSS. 
    11.Content Hashing ➡️Parcel automatically includes content hashes in the names of all output files. This enables long-term browser caching, because the output is guaranteed not to change unless the name does.
    12.Transpilation ➡️ Parcel transpiles your JavaScript and CSS for your target browsers automatically! Just declare a browserslist in your package.json, and Parcel takes care of transpiling only what's needed.
    13. Differential Bundling ➡️ When you use <script type="module">, Parcel automatically generates a nomodule fallback for old browsers as well, depending on your browser targets.This results in much smaller bundles for a majority of users in modern browsers, while still supporting older browsers as well!

    npx parcel index.html(for dev build) , npx parcel build index.html(for prod build)

# 1️⃣8️⃣ Dist folder
     once the build is done - whatever we are seeing in browser comes from the dist folder - not from the files(like index.html or app.js) - everytime build is done - dist folder is regenerated. (since so, exclude it from adding to github - put it in .gitignore file)
     It keeps the files minified for us. When bundler builds the app, the build goes into a folder called dist. The `/dist` folder contains the minimized and optimised version the source code.

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

    TL;DR ➡️ A React element is a JavaScript object that tells React what to render and how it should look.A React element is not the same as a DOM element (it’s just a description of what should be rendered).

    React elements are immutable. Once created, they can’t be changed. This immutability helps React do fast comparisons during rendering because it knows any change requires a new object. This makes UIs more predictable and improves performance with techniques like memoization and pure rendering.
    

# 2️⃣1️⃣ HTML Elements vs React Elements

    React elements are not actual DOM nodes, but plain JavaScript objects that describe what should appear on the screen. They're created via JSX or React.createElement() and are used by React’s virtual DOM for efficient updates.

    In contrast, HTML elements are the actual DOM nodes rendered in the browser.

    The actual rendering of React elements into HTML elements is handled by ReactDOM, which compares the virtual DOM to the real DOM and updates only what’s necessary.

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

        📍 Parcel is like a manager who gives the responsibility of transpilation to a package called Babel.

        📍 Babel is a package that is a compiler/transpiler of JavaScript that is already present inside ‘node-modules’ which is depended by parcel, so upon installing parcel bable is installed as its dependency(transitive dependency). It takes JSX and converts it into the code that browsers understand, as soon as we write it and save the file. It is not created by Facebook.
        
        JSX (transpiled by Babel) ⇒ React.createElement ⇒ ReactElement ⇒ JS Object ⇒ HTML Element(render)

    Single Line and Multi Line JSX Code
    
        Single line code:
            const jsxHeading = <h1>Namaste React</h1>
            
        Multi-line code:
            If writing JSX in multiple lines then using ‘()’ parenthesis is mandatory. To tell Babel from where JSX is starting and ending.
                    const jsxHeading = (
                    <div>
                    <h1>Namaste React</h1>
                    </div>
                    )
    Advantages of JSX: (FROM Namaste React):

        1) Sanitizes the data
            If someone gets access to your JS code and sends some malicious data which will then get displayed on the screen, that attack is called cross-site scripting. It can read cookies, local storage, session storage, get cookies, get info about your device, and read data. JSx takes care of your data.
            If some API passes some malicious data JSX will escape it. It prevents cross-site scripting and sanitizes the data before rendering
        2) Makes code readable JSX makes it easier to write code as we are no longer creating elements using React.createElement()
        3) Makes code simple and elegant
        4) Show more useful errors and warnings
        5) JSX prevents code injections (attacks)

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

`createBrowserRouter()` generates a central router object that:

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

# Single Page Applications:

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

# Class-Based Components in React (CBC)

## Introduction
Class-based components (CBC) are the traditional way to define components in React. They provide a way to handle state, lifecycle methods, and other features in React. Class components extend from `React.Component` and must have a `render` method to return JSX. The constructor of a CBC is used to initialize props and state.

## Constructor in Class-Based Components
The constructor is invoked when the component is created. It receives `props` as an argument, which can be used to initialize the component's state or perform other setup tasks. The constructor should call `super(props)` to ensure that `React.Component` is properly initialized and `props` are accessible in the component.

## `super(props)`
Calling `super(props)` invokes the constructor of `React.Component` and passes the `props` to it. This is essential for initializing the CBC with the correct `props` and ensuring that React can manage the component's lifecycle correctly.

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


