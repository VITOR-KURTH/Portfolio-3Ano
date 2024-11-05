import { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [isCorrecting, setIsCorrecting] = useState(false);
  const [blink, setBlink] = useState(false);
  const originalText = 'Portfolio';
  const correctedText = 'Portfólio Vítor Kurth';

  const [buttonText, setButtonText] = useState('');
  const [buttonIndex, setButtonIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isCorrecting) {
        if (isDeleting) {
          if (index > 0) {
            setText(originalText.substring(0, index - 1));
            setIndex(index - 1);
          } else {
            setIsDeleting(false);
            setIsCorrecting(true);
          }
        } else {
          if (index < originalText.length) {
            setText(originalText.substring(0, index + 1));
            setIndex(index + 1);
          } else {
            setIsDeleting(true);
          }
        }
      } else {
        if (index < correctedText.length) {
          setText(correctedText.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          setBlink(true); 
          clearInterval(intervalId);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [index, isDeleting, isCorrecting, originalText, correctedText, blink]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowButton(true);
    }, 2500); 

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (showButton) {
      const buttonIntervalId = setInterval(() => {
        if (buttonIndex < 'Entrar'.length) {
          setButtonText('Entrar'.substring(0, buttonIndex + 1));
          setButtonIndex(buttonIndex + 1);
        } else {
          clearInterval(buttonIntervalId);
        }
      }, 100);

      return () => clearInterval(buttonIntervalId);
    }
  }, [showButton, buttonIndex]);

  return (
    
    <div className="background">
    

      <div className="wrapper">
        <div className="typing-demo">
          {text}
          <span className={blink ? 'blink complete' : 'blink'}>|</span>
        </div>
        {showButton && (
         <Link to="/home">
         <button className="learn-more"> {buttonText} </button>
       </Link>
        )}
      </div>
    </div>
    
  );
}

export default App;