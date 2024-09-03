import React, { useRef, useEffect } from "react"
import CloseIcon from '@mui/icons-material/Close';

const EmailSignUp = ({ handleClick }) => {
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
            <div class="emailLeftWrapper">
                <p class="emailTextLarge">Join the wait list and receive 10% off!</p>
                <p class="emailTextSmall">Get tips on how to save time with household chores, talk with me one on one, get the latest on the Pop Wash launch, and new products!</p>
            </div>
            <div class="emailRightWrapper">
                <div ref={myRef}></div>
                <button class="emailCloseButton" onClick={handleClick}>
                    <CloseIcon />
                </button>
            </div>

        </div>
    )
}

export default EmailSignUp