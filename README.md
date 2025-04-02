1️⃣ document Object (Created by JavaScript Engine):

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

1️⃣0️⃣ NPM:

    npm is a package manager for the JavaScript programming language maintained by npm, Inc., a subsidiary of GitHub. npm is the default package manager for the JavaScript runtime environment Node.js and is included as a recommended feature in the Node.js installer.[4]

    It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.

1️⃣1️⃣ npm init <initializer> vs npm init

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

1️⃣2️⃣ Package.json

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

1️⃣3️⃣ Tilde (~) vs. Caret (^) in package.json

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

1️⃣4️⃣ Package-lock.json

    package-lock.json is an automatically generated file that locks the exact versions of installed dependencies. It ensures that everyone working on a project gets the same versions of packages.

    If you change dependencies in package.json, npm updates package-lock.json when running npm install.

    USES:

    ✅ Ensures Consistency – Guarantees the same dependencies are installed across different environments.
    ✅ Faster Installs – npm uses the lock file to install dependencies more efficiently.
    ✅ Prevents Unexpected Updates – Even if a package has a newer version, npm installs the exact version from package-lock.json.

    package.json	➡️  Defines dependencies with version ranges (^4.18.2, ~4.18.2).
    package-lock.json	➡️  Locks exact versions (4.18.2) to ensure consistency.

1️⃣5️⃣ What Are Transitive Dependencies?

    Transitive dependencies are dependencies of the dependencies in package.json — packages that are automatically installed because they are required by other packages.

    For Example:

        You installed react

        react depends on scheduler

        scheduler depends on other internal packages

        react also depends on react-dom, which has its own transitive dependencies

1️⃣6️⃣ Bundlers:

    webpack, parcel, veet etc.,
    https://dev.to/sayanide/the-what-why-and-how-of-javascript-bundlers-4po9#:~:text=Bundlers%20are%20not%20transpilers,-Firstly%2C%20let's%20clarify&text=A%20JavaScript%20bundler%20is%20a,and%20improve%20page%20load%20performance.

    