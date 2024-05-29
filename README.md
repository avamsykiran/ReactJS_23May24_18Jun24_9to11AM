ReactJS
-----------------------------------------------------------------------------------

    Lab Setup
    -----------------------------

        NodeJS
        VSCode
        Chrome

    Pre-Requisites
    -----------------------------

        HTML 5
        CSS 3
        Bootstrap 5
        JavaScript (ES6)

    ReactJS Intro

        is a javascript based SinglePageApplication Framework.

        Static Website

            a folder of pre-scripted html documents hosted on a http-server.

        Dynamic Web Application

            HttpServer                                              Browser
                ServerSidePrograms
                (Servlet & JSP/ASPX/PHP...etc.,)

                    <--------------REQ1--------------------------
                based on the data in the
                req, an html content is
                generated on the go ("dynamically")
                    ------------(generated html content) RESP1------->
                    
                    <--------------REQ2--------------------------
                based on the data in the
                req, an html content is
                generated on the go ("dynamically")
                    ------------(generated html content) RESP2------->

        Single Page Application

            HttpServer                                              Browser
                spa-bundle
                (index.html + .js)

                    <--------------REQ-------------------
                    ------------(spa-bundle) RESP------->       index.html along with the JS is loaded

                                                                any event or form submittion or links ..etc,
                                                                are all handled by the JS on the client itself.

                                                                JS on the client can generate html content
                                                                dynamically on the client side and can
                                                                replace the index.html content when and as 
                                                                needed.

                rest-api    <----.json/.xml---------------->    spa-bundle


        SPA-Frameworks
            Angular
            ReactJS
            VueJS
            ......etc.,

    ReactJS Features

        1. Html Extendability   ( we can create our own html-eleemnts and html-attribtes using ReactJS).
        2. State Binding        ( the changes tot he data or state is monitored and the output on the screen is updated)
        3. Shadow DOM / Virtual DOM
        4. Server Side Rendering      

    Creating a ReactJS application

        npx create-react-app app-name

    ReactJS Components

        The html-elements created in ReactJS are called ReactJS Components.
        A Single Page App is made up of a stack of these Components.

        index.html
        <html>....</html>
            | - <head>...</head>
            | - <body>...</body> 
                    |- <div id="root">....</div>
                                        |- <App>...</App> (Top Level Component)
                                                |- <Component1 />
                                                    |- <Component2 />
                                                    |- <Component3 />
                                                |- <Component4 />
                                                    |- <Component5 />
                                                    |- <Component6 />

        Function Components

            is any javascrupt function that accpets 'props' as argument and return one and only one Html-Element.
            We use JSX for scripting. 
            Function Components are also called state-less components.

            const ComponentName = (props)   =>  HtmlElement;

            const TitleBar1 = () => <h1>My First ReactJS App</h1> ;

            <TitleBar />

            const TitelBar2 = function(){
                return <h1>My First ReactJS App</h1> ;
            }

            <TitleBar2 />

        Class Components

            is any sub-class of React.Component class.

            From React.Component a Class Component inherits
                1. state                        is used to hold all the data related to the component.
                2. setState()                   is a method used to change state.
                3. render()                     must be overriden to return the html-element that has to be displayed for this component.
                4. componentDidMount()
                5. componentDidUpdate()
                6. componentWillUnMount()
                7. and a few more life cycle methods.


            class EmployeesList extends React.Component {
                constructor(props){
                    super(props);
                    this.state = {}; //initial data into the state.
                }

                render(){
                    return (
                        <table>
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    );
                }
            }

            <EmployeesList />

    JSX ?

        JavaScript Extended. is an amogamation script of html with javascript to facilitate
        easier html manipulation.

        JS
            let pObj = document.createElement("p");
            pObj.innerText = "This is a sample content of the para";

        JSX
            let pObj = <p>This is a sample content of the para</p> ;

        JS
            let userName = "Vamsy Kiran";
            let pObj = document.createElement("p");
            pObj.innerText = "Hello! " + userName + "! Welcome Here...!";

        JSX
            let userName = "Vamsy Kiran";
            let pObj = <p>Hello! {userName} Welcome Here...!</p> ;

        JS
            let friends = ["Swathi",'Suma","Sudha","Sita"];
            let olObj = document.createElement("ol");

            for(let i=0;i<friends.length;i++) {
                let liObj = document.createElement("li");
                liObj.innerText = friends[i];
                olObj.appendChild(liObj);
            }

        JSX
            let friends = ["Swathi",'Suma","Sudha","Sita"];
            let olObj = (
                <ol>
                    { friends.map( f => <li> {f} </li> ) }
                </ol>
            );

        JSX Rules

            1. 'class' attribute is not be used, 'className' attribute is used instead.
            2. All html-element tag-names must be lowwer in case.
            3. All attributes must  follow camelCase.
            4. All ReactJS Component must be InitialCapaitalized.
    
    ReactJS Component State

        1. 'state' is sued to hold all the data related to a component.
        2. 'state' is immutable.
        3. 'state' is only replacable using 'setState()' method.
        4. Each time 'state' is replaced, the 'render()' is invoked.
