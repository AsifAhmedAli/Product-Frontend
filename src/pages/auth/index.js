import { useState } from 'react';
import styled from 'styled-components';
import styles from './Auth.module.css';
import Signin from '../../components/Signin';
import Signup from '../../components/Signup';

export default function index() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <main className="bg-authScreenBg sm:pb-0 pb-14">
            <div className="container mx-auto grid sm:grid-cols-3 h-screen w-full pt-14 px-4 sm:pt-0 sm:px-0 sm:gap-4 sm:justify-center sm:items-center">
                <div className="hidden sm:block sm:col-span-1 lg:col-span-2 sm:bg-blue-500 sm:shadow-lg sm:rounded-2xl md:w-6/7 md:h-6/7 sm:relative bg-gradient-to-r from-Auth_box_left to-Auth_box_right overflow-hidden">
                    <div className={`${styles.moving_circle} absolute bottom-12 right-4 w-96 h-96 bg-blue-400 bg-opacity-10 rounded-full`}></div>
                </div>
                <form className="px-4 sm:col-span-2 lg:col-span-1">
                    <AuthSwitcher toggle={toggle} onClick={handleToggle}></AuthSwitcher>
                    {
                        toggle ?
                            <Signup setToggle={setToggle} toggle={toggle} /> :
                            <Signin setToggle={setToggle} toggle={toggle} />
                    }
                </form>
            </div >
        </main >
    )
};

const AuthSwitcher = styled.div`
    border: 1px solid black;
    height: .1rem;
    width: 35%;
    margin: 2rem auto 3rem auto;
    background-color: red;
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
        width: 40%;
        height: 4.5px;
        border-radius: 40px;
        background: #3B88C3;
        animation: ${props => props.toggle ? 'slide-in-left' : 'slide-out-right'} .5s ease-in-out;
    }
    &:after{
        content: ${props => props.toggle ? '"Sign Up"' : '"Sign In"'};
        position: absolute;
        font-size: .9rem;
        bottom: -.5rem;
        right: ${props => props.toggle ? 0 : ""};
        text-align: center;
        cursor: pointer;
        width: 41%;
        height: 4px;
    }
`;
