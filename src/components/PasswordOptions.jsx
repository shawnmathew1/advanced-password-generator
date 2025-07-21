export default function PasswordOptions({ length, setLength, includeLower, setIncludeLower, includeUpper, setIncludeUpper, includeNumbers, setIncludeNumbers, includeSymbols, setIncludeSymbols }) {
    return (
        <div>
            <label>
                Length: {length}
                <input type="range" min="8" max="32" value={length} onChange={(e) => setLength(Number(e.target.value))}/>
            </label>

            <label>
                <input type="checkbox" checked={includeLower} onChange={(e) => setIncludeLower(e.target.checked)} /> Lowercase
            </label>

            <label>
                <input type="checkbox" checked={includeUpper} onChange={(e) => setIncludeUpper(e.target.checked)} /> Uppercase
            </label>

            <label>
                <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} /> Numbers
            </label>

            <label>
                <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} /> Symbols
            </label>
        </div>
    );
}