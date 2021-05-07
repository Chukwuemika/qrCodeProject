import React, { useState } from 'react';

type Props = {
    name?: string;
    other?: string;
}

const HelloWorld2: React.FC<Props> = (props) => {
    //const [state, setState] = useState(initialState);
    const [sms, setSms] = useState(props.name); //sms here is the placeholder and setSms is for sms to be changed or assigned something
    const [message, setMessage] = useState('') //setBody allows for the body to be changed or set
    const QRCode = require ('qrcode.react'); // this is basically for the generation of the QR code
    

    const changeSms = (event: any) => {
        setSms(event.target.value);
    }
    const changeMessage = (event: any) => {
        setMessage(event.target.value);
    }

 

    return (
        <div>
            <p>Hello, generate your QR codes for your mail{message}, URL and SMS.</p>
            <p>
                <input type="number" placeholder="Copy a number from here..."
                 onInput={changeSms} />
            </p>
            <p>
                <input type="text" placeholder="Copy a message here..."
                 onInput={changeMessage} />
            </p>
            <div>
                    <QRCode
                        value={`SMS:${sms}:Hello`}
                        size={256}
                        fgColor="black"
                    />
                </div>
        </div>
        // the codes above deal with the appearance of the output. Here, you will see the first statement and the arrangement of the place where you can write/change the sms
    );
};
export default HelloWorld2; //this line is for the codes above to run