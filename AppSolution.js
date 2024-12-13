```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactOutlet/>} >
          <Route path="form" element={<ContactForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function Contact() { return <h1>Contact</h1>; }
function ContactForm() { return <h1>Contact Form</h1>; }

function ContactOutlet() {
  let location = useLocation();
  console.log(location);
  if(location.pathname === '/contact'){
    return <Contact/>
  } else {
    return <Outlet/>
  }
}

export default App;
```