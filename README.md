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

    Shadow DOM

        Each time when an iterative collection of data in state gets
        modified, regenerating the entire DOM is a costly process.

        Instead, ReactJS maintaiens a temporary copy the DOM called Shadow DOM.
        Actual DOM is directly linked to the screen whereas the Shadow DOM has no
        link with the screen.

        This means modifing shadow dom is less costlier than modifing the actual DOM.

        Now changes are first made on shadow DOM and after all the state is placed on 
        shadow DOM, the shadow DOM is super imposed on the actual DOM and the actual
        DOM will have only the final changes.

        To facilitate the comparaison between shadow DOM and actual DOM,
        each element iterated is expected to have a unique 'key'.

    Integrating Bootstrap With ReactJS

        npm i bootstrap

        bootstrap.min.css and bootstrap.bundle.js must be imported into index.js.

    Working with Forms - Controlled Components vs UnControlled Components 
    
    Component LifeCycle Methods

        constructor()                   receice the 'props' and initlize the 'state'.
            |
            ↓
            render()                    returns the DOM to be displayed for the current component.
                |
                ↓
                componentDidMount()     is used to execute an operation after the first render. (like rest-api calls)

                    /***********************************************************/
                        whenever setState() is called...
                    /***********************************************************/
                            |
                            ↓
                            render() 
                                |
                                ↓
                                componentDidUpdate()        is used to execute an operation after each render 
                                                            except the first time. 

        componentWillUnmount()      is used to execute an operation just before the component is unmounted.

    ReactJS Hooks

        A Hook is a special function used to add features to a function component.

        useState        is a hook that allows a function component to have a state.

                        let [reader,writer] = useState(initalValue);

                        let [x,setX] = useState(0);

                        'x' is used to read the value and 'setX()' can be used to change the value.

        useEffect       is a hook that provides lifeCycle methods to a function component.

                        useEffect(callBack, dependencyArray )

                            if the depenencyArray is empty, the callBack is executed only once that too after the first render..

                                useEffect( ()=> {
                                    // this is equivalent ot componentDidMount
                                } , []);
                            
                            if the depenencyArray is not empty, the callBack is executed after every render each time the fields in the array change their value.

                                useEffect( ()=> {
                                    // this is equivalent ot componentDidUpdate
                                } , [x,y]);

    Application Level State Management - Redux

        Redux is a third party library, used to isolate state management from the UI-Components.

        npm i redux

            Store           is a object that holds all the data related to an application.
                            one application has only one store.

                            cosnt store = createStore(reducer);

            reducer         is a function that accpets an action, and existing state, and returns
                            the modified state as per the given action.

                            const reducer = (currentState,action) => {

                                //create a new modified state based on the action and the currentState

                                return modifiedNewState
                            }

            action          is an object that has two fields 'type' and payload.

                            const action1 = { type:"ADD_EMP",emp:{id:1,fullName:"VAmsy",salary:450000} }

                            const action2 = { type:"DEL_EMP",empId:101}

            dispatch        is a method provided by 'redux'. used to throw an action from a ui-component inot the reducer.

                            dispatch(action) --------> reducer(store.state,action);

        npm i react-redux

            react-redux si an integration library between redux and reactjs.

            useSelector     is a hook provided by 'react-redux'. it is sued to select a part of the state
                            into a component.   useSelector is boudn to the state and hence everytime the 
                            state is modified, useSelector will automatically update the component too.

                            let empsList = useSelector( state => state.emps );

            useDispatch     is a hook that gives access to 'dispatch' method.

                            const dispatch = useDispatch();

            Provider        is a component from 'react-redux' that is sued to wrap the store on the 'App' component.

                                    <Provider store={store}>
                                        <App />
                                    </Provider>

            store -------------→ ----(useSelector)----
             ↑                      |                |
             |                      ↓                |
             |                      Component1       ↓
             |                      |               Component2
             |                      |                |
             |                      dispatch(action) |
             |                      |                dispatch(action)
             |(modified state)      |                |  
             |                      ↓                ↓   
             reducer ←---(action)---------------------   

    Create a fake rest-api using json-server

    Calling rest-api using axios

        npm i axios

        axios.get(endPoint) : Promise
        axios.post(endPoint,reqBody) : Promise
        axios.put(endPoint,reqBody) : Promise
        axios.delete(endPoint) : Promise

        axios.get("http://localhost:9999/contacts")
            .then ( data => { } )
            .catch( err => { } );

    Integrating axios calls with redux reducer through redux-thunk (middelware).

    React Routing



         