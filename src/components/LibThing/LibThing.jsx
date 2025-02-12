import { useEffect } from 'react';
import './LibThing.css'

function LibThing() {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');

    script.src = 'https://www.librarything.com/widget_get.php?userid=translota&theID=wb8bb991bc300873716d1abf4e9e51c06';
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Load the RemoteCalc script after the remote-widgets.js has loaded
    script.onload = () => {
      const lib_thing_script = document.createElement('script');
      
      // Append the RemoteCalc script to the document body
      document.body.appendChild(lib_thing_script);
    };

    // Cleanup: Remove the script elements when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // The empty dependency array ensures that this effect runs once on component mount

  return (
    <>
      <div id="wb8bb991bc300873716d1abf4e9e51c06" className="lib-thing-widget"/>
      <noscript>
        <a href="https://www.librarything.com/profile/translota">
          LOTA Library
        </a>
        at 
        <a href="https://www.librarything.com">
          LibraryThing
        </a>
      </noscript>
    </>
  );
}

export default LibThing;