import { useReducer, useRef, useLayoutEffect } from 'react';
import { FetchQRcode } from "./components/FetchQRcode.jsx";
import styled from "styled-components";
import Lottie from 'react-lottie';

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  img {
    width: 150px;
    height: 150px;
  }
`;
const QrContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #f5f5f5;  

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  @media (max-width: 375px) {
    width: 100%;
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
    overflow-x: hidden;
    scroll-behavior: smooth;


    h1 {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }

    
  }


`;



const initialState = {
  url: '',
  qr: '',
  showInput: true,
};

function reducer(state, action) {
  switch (action.type) {
    case 'setUrl':
      return { ...state, url: action.payload };
    case 'setQr':
      return { ...state, qr: action.payload };
    case 'toggleShowInput':
      return { ...state, showInput: !state.showInput };
    default:
      throw new Error();
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef();

  useLayoutEffect(() => {
    if (state.showInput) {
      inputRef.current.focus();
    }
  }, [state.showInput]);

  return (
    <QrContainer>
      <Logo>
      <img className="logo" src="../public/qrlogo.jpeg" alt="logo" />
      </Logo>
      <h1>Simple QR Code Generator</h1>
      <FetchQRcode 
        url={state.url} 
        setUrl={(url) => dispatch({ type: 'setUrl', payload: url })} 
        qr={state.qr} 
        setQr={(qr) => dispatch({ type: 'setQr', payload: qr })} 
        showInput={state.showInput} 
        toggleShowInput={() => dispatch({ type: 'toggleShowInput' })}
        inputRef={inputRef}
      />
    </QrContainer>
  );
};



