import { useState } from "react";

const isValidEmail = (email) => {
    var pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
    var match = pattern.test(email);
    return match;
}


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const [nameClass, setNameClass] = useState('')
    const [emailClass, setEmailClass] = useState('');
    const [messageClass, setMessageClass] = useState('');

    const checkEmail = (email) => {
        console.log(email);
        setEmail(email)
        if (email !== '') {
            setEmailClass(isValidEmail(email) ? "is-valid" : "is-invalid")
        }
        else {
            setEmailClass('is-invalid')
        }
        console.log(emailClass);
    }
    

    return (
        <div className="row">
            <div className="col">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form>
                                <div className="mb-3">
                                    <label for="nameInput" className="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        className={`form-control ${nameClass}`}
                                        id="nameInput" 
                                        placeholder="John Doe" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onMouseLeave={() => name !== '' ? setNameClass('is-valid') : setNameClass('is-invalid') }
                                    />
                                    <div class="invalid-feedback">
                                        Please provide a name.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="emailInput" className="form-label">Email address</label>
                                    <input 
                                        type="email" 
                                        className={`form-control ${emailClass}`}
                                        id="emailInput" 
                                        placeholder="name@example.com" 
                                        value={email}
                                        onChange={(e) => checkEmail(e.target.value)}
                                        onMouseLeave={() => checkEmail(email)}
                                    />
                                    <div class="invalid-feedback">
                                        Please provide a valid email.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="textInput" className="form-label">Message</label>
                                    <textarea 
                                        className={`form-control ${messageClass}`}
                                        id="textInput"
                                        rows="3"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        onMouseLeave={() => text !== '' ? setMessageClass('is-valid') : setMessageClass('is-invalid')}
                                    />
                                    {console.log(text)}
                                </div>
                                <div class="invalid-feedback">
                                    Please provide a message.
                                </div>
                                <button className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;