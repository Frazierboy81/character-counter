 interface TextInputProps {
    onTextChange: (text: string) => void;
    placeholder?: string;
    initialValue?: string;
}

function TextInput({onTextChange, placeholder, initialValue}: TextInputProps) {

    return  (
            <div>
                <textarea className="h-42 border rounded-md"
                placeholder={placeholder} onChange={(e) => onTextChange(e.target.value)} value={initialValue}/>
            </div>
            );
        }

export default TextInput;