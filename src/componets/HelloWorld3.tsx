import React, { useState } from 'react';

type Props = {
    name?: string;
    other?: string;
}

const HelloWorld3: React.FC<Props> = (props) => {
    const [mail, setMail] = useState(props.name); //mail here is the placeholder and setMail is for mail to be changed or assigned something
    const [body, setBody] = useState('') //setBody allows for the body to be changed or set
    const QRCode = require ('qrcode.react'); // this is basically for the generation of the QR code
   

    const changeMail = (event: any) => {
        setMail(event.target.value);
    }
    const changBody = (event: any) => {
        setBody(event.target.value);
    }



    return (
        <div>
            <p>Hello, generate your QR codes for your mail, URL and SMS.</p>
            <p>
                <input type="text" placeholder="Copy your Mail from here..."
                 onInput={changeMail} />
            </p>
            <p>
                <input type="text" placeholder="Copy your message from here..."
                 onInput={changBody} />
            </p>
            <div>
                <QRCode value={`mailto:${mail}&body=${body}`} size={256} fgColor="black"/>
            </div>
        </div>
        // the codes above deal with the appearance of the output. Here, you will see the first statement and the arrangement of the place where you can write/change the mail
    );
};
export default HelloWorld3; //this line is for the codes above to run