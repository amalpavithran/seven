type InputProps = {
    name: string
    text: string
    type: InputType
}

export enum InputType {
    text,
    password,
    phoneno
}

const InputBox: React.FC<InputProps> = ({ name, text, type }) => {
    const isPhoneNumber = type === InputType.phoneno
    return (
        <div className="flex flex-col static">
            <label className="text-xs bg-white w-fit" htmlFor={name}>{text}</label>
            {isPhoneNumber ?
                <input type={String(type)} className="mb-2 p-2 rounded-sm border-1 text-sm w-full border-gray-300 focus:outline-signature-green" name={name} inputMode="tel" defaultValue="+91" />
                :
                <input type={String(type)} className="mb-2 p-2 rounded-sm border-1 text-sm w-full border-gray-300 focus:outline-signature-green" name={name} />
            }
        </div>
    )
}

export default InputBox;