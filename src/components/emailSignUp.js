import React, { useRef, useEffect } from "react"
import CloseIcon from '@mui/icons-material/Close';

const EmailSignUp = ({handleClick}) => {
    const myRef = useRef();

    useEffect(() => {
        const script = document.createElement('script');
        script.src =
            'https://eocampaign1.com/form/40967c20-6a0e-11ef-8d78-49431321b769.js';
        script.async = true;
        script.setAttribute('data-form', '40967c20-6a0e-11ef-8d78-49431321b769');

        const myRefNode = myRef.current
        myRefNode.appendChild(script);

        return () => {
            const nodes = document.querySelectorAll(`[data-form="40967c20-6a0e-11ef-8d78-49431321b769"]`);
            nodes.forEach(function (node) {
                node.parentNode.removeChild(node);
            });
        };
    }, []);
    return (
        <div class="emailSignUpWrapper">
            <div ref={myRef}></div>
            <button class="emailCloseButton" onClick={handleClick}>
                <CloseIcon />
            </button>
        </div>
    )
}

export default EmailSignUp