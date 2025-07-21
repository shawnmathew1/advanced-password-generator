export default function PasswordDisplay({ password, onCopy }) {
    return (
        <div>
            <p>{password || 'Your password will appear here'}</p>           
            <button onClick={onCopy}>Copy</button>
        </div>
    );
}