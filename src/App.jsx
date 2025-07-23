import { useState } from 'react';
import PasswordDisplay from './components/PasswordDisplay';
import PasswordOptions from './components/PasswordDisplay';
import GenerateButton from './components/PasswordDisplay';
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

  

  return (
    <div>
      <h1>Advanced Password Generator</h1>
    </div>
  );
}

export default App;