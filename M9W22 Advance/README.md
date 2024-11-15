# Advance Lecture

- [x] What is Next JS
- [x] Server and Serverless
- [x] Tailwind
- [x] Pages
- [x] Serverless
- [x] Client Side components vs Server Side components
- [x] API calls

### How to start a next js app

```bash
npx create-next-app demo
```

## Server side vs Client side

In Next.js, server-side components (Server Components) are rendered on the server before being sent to the client. They are great for heavy data fetching or computations since they avoid shipping unnecessary JavaScript to the browser. Server Components can access server-only resources, like databases or file systems, and they ensure better performance and security by keeping sensitive operations on the server.

Client-side components (Client Components), on the other hand, are rendered in the browser. They are necessary for interactive features like modals, forms, or dynamic updates to the UI that rely on JavaScript in the client. These components require hydration, meaning they are initialized on the client with JavaScript after the HTML is loaded.

### Creating pages

Inside of your app directory create a folder with the name of the route and inside of that create a `page.jsx` inside of that export a React functional component

```js
const About = () => {
  return (
    <div>
      <h1>About page!</h1>
    </div>
  );
};

export default About;
```

This will auto create the `localhost:3000/about/` route.

### Components

Components are created the same way as react but they don't live in the App Directory but in the main project directory.

### File Directory

Next Js routes based on file.

Something like this

![image](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fproject-organization-routable.png&w=1920&q=75&dpl=dpl_CtFW1w4mEKLHK5AgaQwzED6jBD75)
