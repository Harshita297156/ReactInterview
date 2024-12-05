export const questions =[
    {
        id:1,
        question:"What is the virtual DOM, and how does it work?",
        answer:"React JS Virtual DOM is an in-memory representation of the DOM. DOM refers to the Document Object Model that represents the content of XML or HTML documents as a tree structure so that the programs can be read, accessed and changed in the document structure, style, and content.The virtual DOM is a lightweight copy of the real DOM. React keeps a virtual DOM to compare changes before updating the real DOM. This helps minimize expensive DOM operations, resulting in better performance.",
    },
    {
        id:2,
        question:"What is React?",
        answer:"Answer: React is a JavaScript library for building user interfaces, primarily maintained by Facebook. It allows developers to create reusable UI components, making the development process more efficient. It’s known for its virtual DOM concept, which optimizes UI rendering.",
    },
    {
        id:3,
        question:"What are the key features of React?",
        answer:"the key features of React include jsx  A syntax extension for JavaScript that looks like HTML, used for building React components.Components Building blocks of a React application, which can be reusable.Virtual DOM A lightweight representation of the real DOM to optimize re-rendering.Unidirectional Data Flow Data flows in a single direction, making it easier to debug.Hooks Functions like useState and useEffect to manage state and side effects in functional components.",
    },
    {
        id:4,
        question:"What is JSX?",
        answer:"JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like syntax directly in JavaScript files. It makes code easier to read and write by combining markup with logic.",
    },
    {
        id:5,
        question:"What are components in React?",
        answer:"Components are reusable building blocks of a React application. There are two types:Functional Components: JavaScript functions that accept props and return React elements.Class Components: ES6 classes that extend React.Component and can manage their own state.",
    },
    {
        id:6,
        question:"What are props and state in React?",
        answer:"Props: Short for properties, props are read-only data passed from a parent component to a child component.State: State is a way to manage data that can change within a component. It’s mutable and can be updated with setState in class components or useState in functional components.",
    },
    {
        id:7,
        question:"What are React Hooks?",
        answer:"Hooks are functions that let developers use state and lifecycle features in functional components. Examples include:useState: Used for adding state to a functional component.useEffect: Used for managing side effects like API calls and subscriptions.Custom Hooks: User-defined functions that reuse stateful logic between components.",
    },
    {
        id:8,
        question:"What is the Context API?",
        answer:"The Context API is a way to pass data through the component tree without having to pass props manually at every level. It’s used to manage global state, such as user authentication or theme settings."
    },
    {
        id:9,
        question:"What are higher-order components (HOCs)?",
        answer:"A higher-order component is a function that takes a component and returns a new component. HOCs are used to add additional functionality to a component, like logging, permissions, or state management.",
    },
    {
        id:10,
        question:"How does React handle events?",
        answer:"React events are handled using camelCase syntax (e.g., onClick instead of onclick). Event handlers in React receive a synthetic event, which is a wrapper around the native event to ensure consistent behavior across browsers.",
    },
    {
        id:11,
        question:"What is the purpose of useEffect?",
        answer:"useEffect is a hook used to handle side effects in functional components, such as fetching data, setting up subscriptions, or manually updating the DOM. It can run after the initial render and on updates, depending on its dependency array.",
    },
    {
        id:12,
        question:" How do you optimize a React application?",
        answer:"Techniques to optimize a React app include:Code Splitting: Using React.lazy() and Suspense to load components only when needed.Lazy Loading: Loading assets or data when required instead of at the start.Memoization: Using React.memo or useMemo to prevent unnecessary re-rendering.Using React Profiler: Analyzing component performance.Avoiding Anonymous Functions in JSX: Prevents unnecessary re-renders.",
    },
    {
        id:13,
        question:"What is Redux, and how does it integrate with React?",
        answer:"Redux is a state management library for JavaScript applications. It helps manage the global state of an application in a predictable way. It integrates with React using the react-redux library, which provides Provider, connect, and hooks like useSelector and useDispatch to connect React components with the Redux store.",
    },
    {
        id:14,
        question:"What are controlled and uncontrolled components?",
        answer:"Controlled Components: Components where form data is handled by the React state. For example, <input value={this.state.inputValue} onChange={this.handleChange} />.Uncontrolled Components: Components where form data is handled by the DOM itself. Refs are typically used to access the values (<input ref={this.inputRef} />).",
    },
    {
        id:15,
        question:"What is the significance of keys in React?",
        answer:"Keys are used to identify which items have changed, been added, or removed from a list. This helps React optimize rendering by only updating the necessary elements, rather than re-rendering the entire list. The key should be a stable identifier unique to each list item.",
    },
    {
        id:16,
        question:"What is a synthetic event in React?",
        answer:"A synthetic event in React is a cross-browser wrapper around the native DOM event. It is part of React's event system that ensures consistency across different browsers, providing a unified interface for handling events like onClick, onChange, etc.React creates a synthetic event to improve performance and compatibility. This synthetic event mimics the native event's properties and methods but ensures that the behavior is consistent regardless of the browser being used. It also allows React to efficiently manage and pool events to reduce memory overhead."
    }  

]