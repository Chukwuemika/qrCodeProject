import React, { useState } from 'react';

type Props = {
    name?: string;
    other?: string;
}

const HelloWorld: React.FC<Props> = (props) => {
    //const [state, setState] = useState(initialState);
    const [url, setUrl] = useState(props.name); //url here is the placeholder and setUrl is for url to be changed or assigned something
    const QRCode = require ('qrcode.react'); // this is basically for the generation of the QR code
    
    const changeUrl = (event: any) => {
        setUrl(event.target.value);
    }

    return (
        <div>
            <p>Hello, generate your QR codes for your mail, URL and SMS.</p>
            <p>
                <input type="text" placeholder="Copy your URL from here..."
                 name = "Url"
                 onInput={changeUrl} />
            </p>
            <div>
            <QRCode value={url} size={256} fgColor="darkblue" />
            </div>

        </div>
        // the codes above deal with the appearance of the output. Here, you will see the first statement and the arrangement of the place where you can write/change the url
    );
};
export default HelloWorld; //this line is for the codes above to run