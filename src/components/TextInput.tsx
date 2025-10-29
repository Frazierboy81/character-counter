 interface TextInputProps {
    onTextChange: (text: string) => void;
    placeholder?: string;
    initialValue?: string;
}

function TextInput({onTextChange}: TextInputProps) {

    return  (<div>
                <textarea 
                placeholder="Enter text here..." onChange={(e) => onTextChange(e.target.value)} />
            </div>)
}

export default TextInput;