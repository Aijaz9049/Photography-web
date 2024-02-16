import React, { useEffect, useState } from 'react';
import Home from "./Header/Home";
import Gallery from "./Gallery/Gallery";
import Blog from "./Blog/Blog";
import Contact from "./Blog/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {




const WhatsAppWidget = () => {
  const [ctaText, setCtaText] = useState("WhatsApp Us");

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the text every 3 seconds
      setCtaText(prevText => prevText === "WhatsApp Us" ? "Chat with Us" : "WhatsApp Us");

      // Blink animation after 3 seconds for 0.5 seconds
      setTimeout(() => {
        document.getElementById('whatsapp-container').classList.add('blink');
        setTimeout(() => {
          document.getElementById('whatsapp-container').classList.remove('blink');
        }, 1000);
      }, 3000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js';
    script.async = true;
    document.body.appendChild(script);

    const wa_btnSetting = {
      "btnColor": "#16BE45",
      "ctaText": ctaText, // Use the state variable here
      "cornerRadius": 40,
      "marginBottom": 20,
      "marginLeft": 20,
      "marginRight": 20,
      "btnPosition": "right",
      "whatsAppNumber": "9129929919",
      "welcomeMessage": "Hello!",
      "zIndex": 999999,
      "btnColorScheme": "Dark"
    };

    script.onload = () => {
      window._waEmbed(wa_btnSetting);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [ctaText]);

  return (
    <div id="whatsapp-container"></div>
  );
};





  return (
    <div className="App"> 

<div>
      {/* Your main application content */}
      <WhatsAppWidget />
    </div>

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="Gallery" element={<Gallery/>}></Route>
          <Route path="Blog" element={<Blog />}></Route>
          <Route path="Contact" element={<Contact />}></Route>

        </Routes>
      </BrowserRouter>

  </div>
  );
}

export default App;
