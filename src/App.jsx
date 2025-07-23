

import { useState } from 'react';
import PasswordDisplay from './components/PasswordDisplay';
import PasswordOptions from './components/PasswordOptions';
import GenerateButton from './components/GenerateButton';
import "./App.css";

function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeLower, setLower] = useState(true);
  const [includeUpper, setUpper] = useState(true);
  const [includeNumbers, setNumbers] = useState(true);
  const [includeSymbols, setSymbols] = useState(true);

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolsChars = '!@#$%^&*()_+[]{}<>?,./';


  const generatePassword = () => {
    let chars = '';
    if (includeLower) chars+= lowercaseChars;
    if (includeUpper) chars+= uppercaseChars;
    if (includeNumbers) chars+= numberChars;
    if (includeSymbols) chars+= symbolsChars;


    if (chars.length === 0) {
      setPassword('Please select atleast one option!');
      return;
    }

    let newPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex]
    }

    setPassword(newPassword);
    
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    .then(() => alert('Password copied!'))
    .catch(err => console.error('Failed to copy:', err));
  };


  return (
    <div>
      <h1>Advanced Password Generator</h1>

      <PasswordDisplay password={password} onCopy={copyToClipboard}/>

      <PasswordOptions 
      length={length} setLength={setLength}
      includeLower={includeLower} setLower={setLower}
      includeUpper={includeUpper} setUpper={setUpper}
      includeNumbers={includeNumbers} setNumbers={setNumbers}
      includeSymbols={includeSymbols} setSymbols={setSymbols}
      />

      <GenerateButton onGenerate={generatePassword}/>
    </div>
  );
}

export default App;

