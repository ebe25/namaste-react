#Learned about how to inject react using cdn links

#Learned about React.createElement("Element", {obj of attributes}, ["children"])

#Learned how to use ReactDOM.createRoot(document.getElementsById("root"))

    #Render the root using the render() method
    #All the created elements by createElement are not HTML, but they are Js Variables=> Objects

    #const heading = React.createElement(
    "h1",
    {id: "heading", class: "rootdiv"},
    "Hello world from React!"
    );
    console.log(heading); //Js object not html


    #npm => It does not stand for node package manager.It is a js package manager, manages all our dependicies

    #Bundler => bundles your app properly so that it can be pushed from dev to production

    #Bundlers => percel, webpack, vite


    #CRA -template => creates a prod level scaffold for your build, uses the WebPack bundler.

#Dependencies => Dev depend & Normal dependency

#package.json => Configuration for npm that tracks all your dependencies and the approximate versions (tilde(~) & caret(^))
tilde -> updates the major bug fixes and updates the package version to major changes 2.8.4 -> 3.0.0
caret -> updates the minor bug fixes and updates the package version to minor changes 2.8.3 -> 2.8.4

#package.lock-json => tracks all the current exact dependencies and their exact versions that are being installed.
tracks all the dev-dependencies and locks the state of your dependencies to exact versions
So by this when you push something to prod you donot push node modules,since they can be installed using your package.json and package-lock.json

#Node-modules => it contains all the data that is fetched by npm to your machine.So like a db to fetch

#Package-lock.json => Important file. Never include in your git.ignore. It maintains the exact version of the dependency and the hash of that version. So you don't encounter with prodlems like working in local but not in prod.The integrity keyword inside the package-lock.json keeps the hash of every version of dep installed so that it can be tracked in future.

#Npx-> exceute using npm

# use browserlists for making the build compatible to older or different versions of the browser

"browserslist": [
"last 2 versions",
"maintained node versions"
]
