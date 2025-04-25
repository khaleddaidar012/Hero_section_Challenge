/* eslint-disable no-undef */
import React,{useState} from "react";;

const AiGenerator =( props) =>{
    const images = ['/png1.jpg','/png2.jpg','/png3.png','/png4.png'];
    const text = ['The React Fundementales' , 'Main Features Of Ai' , ' Whats is Design Patterns' , ' How Neural Network Works'];

    const [genImage , SetImage] = useState('');
    const [genText , SetText] = useState('');
    const handleGenerate = () =>{
        const RandomImg= images[Math.floor(Math.random() * images.length)];
        const RandomText= text[Math.floor(Math.random() * text.length)];
        SetImage(RandomImg);
        SetText(RandomText);
    }


    return(
<div className="max-w-[400px] max-h-[400px] flex flex-col p-[10px] sm:relative sm:left-[5%] sm:top-[23%]">
<button onClick={handleGenerate}  className="text-[#1e2939] relative left-[15%] bottom-[45%] bg-green-600 rounded-md w-[250px] h-[40px] font-bold  text-white cursor-pointer">{props.text}</button> 
        {genImage && (<div>
            <img src={genImage} className="py-10 transition-opacity duration-700 opacity-100  rounded-ls" />
            <p className="text-center bg-[rgba(255,250,240,0.7)] p-4 rounded-md">{genText}</p>
            
        </div>)}
    </div>

    )
}

export default AiGenerator;