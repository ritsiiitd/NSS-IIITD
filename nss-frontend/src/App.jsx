import {About,Departments,Events,Footer,Intro,Statistics,Subscribe,Testimonial} from './sections'
import {AdminEvent, Navbar} from './components'
import { BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import {Home,EventPage,Gallery,ContactForm,GalleryPage,TeamSection, BlogPost, AccessDenied} from './Pages';
import { useAuth0 } from '@auth0/auth0-react';
import {AdminDasboard} from './Pages';
// import TeamSection from './Pages/TeamSection';

// import ContactForm from './Pages';

const App = () => (
  
  <BrowserRouter>
    <main className="relative">
      <Navbar />
      
      <Routes>
        <Route path="/:sectionId?" element={<Home/>}></Route>
        <Route path="/events/:eventId" element={<EventPage/>}></Route>
        <Route path="/galleryOf/:galleryId" element={<GalleryPage/>}></Route>
        <Route path="/blog/:blogId" element={<BlogPost/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/about-us" element={<About/>}></Route>
        <Route path="/contact-us" element={<ContactForm/>}></Route>
        <Route path="/team" element={<TeamSection/>}></Route>
        <Route path="/blog" element={<BlogPost/>}></Route>
        <Route path="/forbidden" element={<AccessDenied/>}></Route>
        <Route path="/admin/*" element={<AdminDasboard/>}></Route>
        {/* <Route path="/adminEvent" element={<AdminEvent/>}></Route> */}
        {/* <Route path="/team" element={<Teams/>}></Route> */}
        {/* :eventId is a URL parameter that can be used to identify the specific event */}
      </Routes>
      
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  </BrowserRouter>
);

export default App;

// This Is the main Application component rendering our navbar and containing the Routes
// Which makes this NSS IIITD website an SPA(Single page application), 
// We render Navbar and Footer Components here and provide Routes for different Pages