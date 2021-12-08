import { useState } from 'react';
import styled from 'styled-components';
import Signin from '../../components/auth/Signin';
import Signup from '../../components/auth/Signup';
import Image from 'next/image';

export default function index() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <main className="bg-authScreenBg sm:pb-0 pb-36 px-4 lg:px-0">
            <div className="container mx-auto grid sm:grid-cols-3 h-screen w-full pt-14 px-4 sm:pt-0 sm:px-0 sm:gap-4 sm:justify-center sm:items-center">
                <div className={`sm:col-span-1 lg:col-span-2 bg-black md:shadow-lg sm:rounded-2xl md:w-5/6 h-44 md:h-6/7 sm:relative overflow-hidden relative z-40 primary-linear-gradient`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image src='/logo.png' alt="MEXIL" width={320} height={150} />
                    </div>
                </div>
                <div className="px-4 sm:col-span-2 lg:col-span-1">
                    <AuthSwitcher toggle={toggle} onClick={handleToggle}></AuthSwitcher>
                    {
                        toggle ?
                            <Signup setToggle={setToggle} toggle={toggle} /> :
                            <Signin setToggle={setToggle} toggle={toggle} />
                    }
                </div>
            </div >
        </main >
    )
};

const AuthSwitcher = styled.div`
    border: 1px solid black;
    height: .1rem;
    width: 35%;
    margin: 2rem auto 3rem auto;
    background-color: black;
    position: relative;

    @keyframes slide-in-left {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slide-out-right {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }

    &:before{
        content: "";
        position: absolute;
        bottom: -2.5px;
        right: ${props => props.toggle ? 0 : ""};
        text-align: center;
        width: 45%;
        height: 4.5px;
        border-radius: 40px;
        background: #3B88C3;
        animation: ${props => props.toggle ? 'slide-in-left' : 'slide-out-right'} .5s ease-in-out;
    }
    &:after{
        content: ${props => props.toggle ? '"Sign Up"' : '"Sign In"'};
        position: absolute;
        font-size: clamp(.6rem, 4vw, .9rem);
        bottom: -.5rem;
        right: ${props => props.toggle ? 0 : ""};
        text-align: center;
        cursor: pointer;
        width: ${props => props.toggle ? '50%' : '45%'};
        height: 4px;
    }
`;
