import { useState } from "react";

const Pad=()=>{
    const symbols=[
        {
            "symbol": "∀",
            "code": "8704"
        },
        {
            "symbol": "∁",
            "code": "8705"
        },
        {
            "symbol": "∂",
            "code": "8706"
        },
        {
            "symbol": "∃",
            "code": "8707"
        },
        {
            "symbol": "∄",
            "code": "8708"
        },
        {
            "symbol": "∅",
            "code": "8709"
        },
        {
            "symbol": "∆",
            "code": "8710"
        },
        {
            "symbol": "∇",
            "code": "8711"
        },
        {
            "symbol": "∈",
            "code": "8712"
        },
        {
            "symbol": "∉",
            "code": "8713"
        },
        {
            "symbol": "∊",
            "code": "8714"
        },
        {
            "symbol": "∋",
            "code": "8715"
        },
        {
            "symbol": "∌",
            "code": "8716"
        },
        {
            "symbol": "∍",
            "code": "8717"
        },
        {
            "symbol": "∎",
            "code": "8718"
        },
        {
            "symbol": "∏",
            "code": "8719"
        },
        {
            "symbol": "∐",
            "code": "8720"
        },
        {
            "symbol": "∑",
            "code": "8721"
        },
        {
            "symbol": "−",
            "code": "8722"
        },
        {
            "symbol": "∓",
            "code": "8723"
        },
        {
            "symbol": "∔",
            "code": "8724"
        },
        {
            "symbol": "∕",
            "code": "8725"
        },
        {
            "symbol": "∖",
            "code": "8726"
        },
        {
            "symbol": "∗",
            "code": "8727"
        },
        {
            "symbol": "∘",
            "code": "8728"
        },
        {
            "symbol": "∙",
            "code": "8729"
        },
        {
            "symbol": "√",
            "code": "8730"
        },
        {
            "symbol": "∛",
            "code": "8731"
        },
        {
            "symbol": "∜",
            "code": "8732"
        },
        {
            "symbol": "∝",
            "code": "8733"
        },
        {
            "symbol": "∞",
            "code": "8734"
        },
        {
            "symbol": "∟",
            "code": "8735"
        },
        {
            "symbol": "∠",
            "code": "8736"
        },
        {
            "symbol": "∡",
            "code": "8737"
        },
        {
            "symbol": "∢",
            "code": "8738"
        },
        {
            "symbol": "∣",
            "code": "8739"
        },
        {
            "symbol": "∤",
            "code": "8740"
        },
        {
            "symbol": "∥",
            "code": "8741"
        },
        {
            "symbol": "∦",
            "code": "8742"
        },
        {
            "symbol": "∧",
            "code": "8743"
        },
        {
            "symbol": "∨",
            "code": "8744"
        },
        {
            "symbol": "∩",
            "code": "8745"
        },
        {
            "symbol": "∪",
            "code": "8746"
        },
        {
            "symbol": "∫",
            "code": "8747"
        },
        {
            "symbol": "∬",
            "code": "8748"
        },
        {
            "symbol": "∭",
            "code": "8749"
        },
        {
            "symbol": "∮",
            "code": "8750"
        },
        {
            "symbol": "∯",
            "code": "8751"
        },
        {
            "symbol": "∰",
            "code": "8752"
        },
        {
            "symbol": "∱",
            "code": "8753"
        },
        {
            "symbol": "∲",
            "code": "8754"
        },
        {
            "symbol": "∳",
            "code": "8755"
        },
        {
            "symbol": "∴",
            "code": "8756"
        },
        {
            "symbol": "∵",
            "code": "8757"
        },
        {
            "symbol": "∶",
            "code": "8758"
        },
        {
            "symbol": "∷",
            "code": "8759"
        },
        {
            "symbol": "∸",
            "code": "8760"
        },
        {
            "symbol": "∹",
            "code": "8761"
        },
        {
            "symbol": "∺",
            "code": "8762"
        },
        {
            "symbol": "∻",
            "code": "8763"
        },
        {
            "symbol": "∼",
            "code": "8764"
        },
        {
            "symbol": "∽",
            "code": "8765"
        },
        {
            "symbol": "∾",
            "code": "8766"
        },
        {
            "symbol": "∿",
            "code": "8767"
        },
        {
            "symbol": "≀",
            "code": "8768"
        },
        {
            "symbol": "≁",
            "code": "8769"
        },
        {
            "symbol": "≂",
            "code": "8770"
        },
        {
            "symbol": "≃",
            "code": "8771"
        },
        {
            "symbol": "≄",
            "code": "8772"
        },
        {
            "symbol": "≅",
            "code": "8773"
        },
        {
            "symbol": "≆",
            "code": "8774"
        },
        {
            "symbol": "≇",
            "code": "8775"
        },
        {
            "symbol": "≈",
            "code": "8776"
        },
        {
            "symbol": "≉",
            "code": "8777"
        },
        {
            "symbol": "≊",
            "code": "8778"
        },
        {
            "symbol": "≋",
            "code": "8779"
        },
        {
            "symbol": "≌",
            "code": "8780"
        },
        {
            "symbol": "≍",
            "code": "8781"
        },
        {
            "symbol": "≎",
            "code": "8782"
        },
        {
            "symbol": "≏",
            "code": "8783"
        },
        {
            "symbol": "≐",
            "code": "8784"
        },
        {
            "symbol": "≑",
            "code": "8785"
        },
        {
            "symbol": "≒",
            "code": "8786"
        },
        {
            "symbol": "≓",
            "code": "8787"
        },
        {
            "symbol": "≔",
            "code": "8788"
        },
        {
            "symbol": "≕",
            "code": "8789"
        },
        {
            "symbol": "≖",
            "code": "8790"
        },
        {
            "symbol": "≗",
            "code": "8791"
        },
        {
            "symbol": "≘",
            "code": "8792"
        },
        {
            "symbol": "≙",
            "code": "8793"
        },
        {
            "symbol": "≚",
            "code": "8794"
        },
        {
            "symbol": "≛",
            "code": "8795"
        },
        {
            "symbol": "≜",
            "code": "8796"
        },
        {
            "symbol": "≝",
            "code": "8797"
        },
        {
            "symbol": "≞",
            "code": "8798"
        },
        {
            "symbol": "≟",
            "code": "8799"
        },
        {
            "symbol": "≠",
            "code": "8800"
        },
        {
            "symbol": "≡",
            "code": "8801"
        },
        {
            "symbol": "≢",
            "code": "8802"
        },
        {
            "symbol": "≣",
            "code": "8803"
        },
        {
            "symbol": "≤",
            "code": "8804"
        },
        {
            "symbol": "≥",
            "code": "8805"
        },
        {
            "symbol": "≦",
            "code": "8806"
        },
        {
            "symbol": "≧",
            "code": "8807"
        },
        {
            "symbol": "≨",
            "code": "8808"
        },
        {
            "symbol": "≩",
            "code": "8809"
        },
        {
            "symbol": "≪",
            "code": "8810"
        },
        {
            "symbol": "≫",
            "code": "8811"
        },
        {
            "symbol": "≬",
            "code": "8812"
        },
        {
            "symbol": "≭",
            "code": "8813"
        },
        {
            "symbol": "≮",
            "code": "8814"
        },
        {
            "symbol": "≯",
            "code": "8815"
        },
        {
            "symbol": "≰",
            "code": "8816"
        },
        {
            "symbol": "≱",
            "code": "8817"
        },
        {
            "symbol": "≲",
            "code": "8818"
        },
        {
            "symbol": "≳",
            "code": "8819"
        },
        {
            "symbol": "≴",
            "code": "8820"
        },
        {
            "symbol": "≵",
            "code": "8821"
        },
        {
            "symbol": "≶",
            "code": "8822"
        },
        {
            "symbol": "≷",
            "code": "8823"
        },
        {
            "symbol": "≸",
            "code": "8824"
        },
        {
            "symbol": "≹",
            "code": "8825"
        },
        {
            "symbol": "≺",
            "code": "8826"
        },
        {
            "symbol": "≻",
            "code": "8827"
        },
        {
            "symbol": "≼",
            "code": "8828"
        },
        {
            "symbol": "≽",
            "code": "8829"
        },
        {
            "symbol": "≾",
            "code": "8830"
        },
        {
            "symbol": "≿",
            "code": "8831"
        },
        {
            "symbol": "⊀",
            "code": "8832"
        },
        {
            "symbol": "⊁",
            "code": "8833"
        },
        {
            "symbol": "⊂",
            "code": "8834"
        },
        {
            "symbol": "⊃",
            "code": "8835"
        },
        {
            "symbol": "⊄",
            "code": "8836"
        },
        {
            "symbol": "⊅",
            "code": "8837"
        },
        {
            "symbol": "⊆",
            "code": "8838"
        },
        {
            "symbol": "⊇",
            "code": "8839"
        },
        {
            "symbol": "⊈",
            "code": "8840"
        },
        {
            "symbol": "⊉",
            "code": "8841"
        },
        {
            "symbol": "⊊",
            "code": "8842"
        },
        {
            "symbol": "⊋",
            "code": "8843"
        },
        {
            "symbol": "⊌",
            "code": "8844"
        },
        {
            "symbol": "⊍",
            "code": "8845"
        },
        {
            "symbol": "⊎",
            "code": "8846"
        },
        {
            "symbol": "⊏",
            "code": "8847"
        },
        {
            "symbol": "⊐",
            "code": "8848"
        },
        {
            "symbol": "⊑",
            "code": "8849"
        },
        {
            "symbol": "⊒",
            "code": "8850"
        },
        {
            "symbol": "⊓",
            "code": "8851"
        },
        {
            "symbol": "⊔",
            "code": "8852"
        },
        {
            "symbol": "⊕",
            "code": "8853"
        },
        {
            "symbol": "⊖",
            "code": "8854"
        },
        {
            "symbol": "⊗",
            "code": "8855"
        },
        {
            "symbol": "⊘",
            "code": "8856"
        },
        {
            "symbol": "⊙",
            "code": "8857"
        },
        {
            "symbol": "⊚",
            "code": "8858"
        },
        {
            "symbol": "⊛",
            "code": "8859"
        },
        {
            "symbol": "⊜",
            "code": "8860"
        },
        {
            "symbol": "⊝",
            "code": "8861"
        },
        {
            "symbol": "⊞",
            "code": "8862"
        },
        {
            "symbol": "⊟",
            "code": "8863"
        },
        {
            "symbol": "⊠",
            "code": "8864"
        },
        {
            "symbol": "⊡",
            "code": "8865"
        },
        {
            "symbol": "⊢",
            "code": "8866"
        },
        {
            "symbol": "⊣",
            "code": "8867"
        },
        {
            "symbol": "⊤",
            "code": "8868"
        },
        {
            "symbol": "⊥",
            "code": "8869"
        },
        {
            "symbol": "⊦",
            "code": "8870"
        },
        {
            "symbol": "⊧",
            "code": "8871"
        },
        {
            "symbol": "⊨",
            "code": "8872"
        },
        {
            "symbol": "⊩",
            "code": "8873"
        },
        {
            "symbol": "⊪",
            "code": "8874"
        },
        {
            "symbol": "⊫",
            "code": "8875"
        },
        {
            "symbol": "⊬",
            "code": "8876"
        },
        {
            "symbol": "⊭",
            "code": "8877"
        },
        {
            "symbol": "⊮",
            "code": "8878"
        },
        {
            "symbol": "⊯",
            "code": "8879"
        },
        {
            "symbol": "⊰",
            "code": "8880"
        },
        {
            "symbol": "⊱",
            "code": "8881"
        },
        {
            "symbol": "⊲",
            "code": "8882"
        },
        {
            "symbol": "⊳",
            "code": "8883"
        },
        {
            "symbol": "⊴",
            "code": "8884"
        },
        {
            "symbol": "⊵",
            "code": "8885"
        },
        {
            "symbol": "⊶",
            "code": "8886"
        },
        {
            "symbol": "⊷",
            "code": "8887"
        },
        {
            "symbol": "⊸",
            "code": "8888"
        },
        {
            "symbol": "⊹",
            "code": "8889"
        },
        {
            "symbol": "⊺",
            "code": "8890"
        },
        {
            "symbol": "⊻",
            "code": "8891"
        },
        {
            "symbol": "⊼",
            "code": "8892"
        },
        {
            "symbol": "⊽",
            "code": "8893"
        },
        {
            "symbol": "⊾",
            "code": "8894"
        },
        {
            "symbol": "⊿",
            "code": "8895"
        },
        {
            "symbol": "⋀",
            "code": "8896"
        },
        {
            "symbol": "⋁",
            "code": "8897"
        },
        {
            "symbol": "⋂",
            "code": "8898"
        },
        {
            "symbol": "⋃",
            "code": "8899"
        },
        {
            "symbol": "⋄",
            "code": "8900"
        },
        {
            "symbol": "⋅",
            "code": "8901"
        },
        {
            "symbol": "⋆",
            "code": "8902"
        },
        {
            "symbol": "⋇",
            "code": "8903"
        },
        {
            "symbol": "⋈",
            "code": "8904"
        },
        {
            "symbol": "⋉",
            "code": "8905"
        },
        {
            "symbol": "⋊",
            "code": "8906"
        },
        {
            "symbol": "⋋",
            "code": "8907"
        },
        {
            "symbol": "⋌",
            "code": "8908"
        },
        {
            "symbol": "⋍",
            "code": "8909"
        },
        {
            "symbol": "⋎",
            "code": "8910"
        },
        {
            "symbol": "⋏",
            "code": "8911"
        },
        {
            "symbol": "⋐",
            "code": "8912"
        },
        {
            "symbol": "⋑",
            "code": "8913"
        },
        {
            "symbol": "⋒",
            "code": "8914"
        },
        {
            "symbol": "⋓",
            "code": "8915"
        },
        {
            "symbol": "⋔",
            "code": "8916"
        },
        {
            "symbol": "⋕",
            "code": "8917"
        },
        {
            "symbol": "⋖",
            "code": "8918"
        },
        {
            "symbol": "⋗",
            "code": "8919"
        },
        {
            "symbol": "⋘",
            "code": "8920"
        },
        {
            "symbol": "⋙",
            "code": "8921"
        },
        {
            "symbol": "⋚",
            "code": "8922"
        },
        {
            "symbol": "⋛",
            "code": "8923"
        },
        {
            "symbol": "⋜",
            "code": "8924"
        },
        {
            "symbol": "⋝",
            "code": "8925"
        },
        {
            "symbol": "⋞",
            "code": "8926"
        },
        {
            "symbol": "⋟",
            "code": "8927"
        },
        {
            "symbol": "⋠",
            "code": "8928"
        },
        {
            "symbol": "⋡",
            "code": "8929"
        },
        {
            "symbol": "⋢",
            "code": "8930"
        },
        {
            "symbol": "⋣",
            "code": "8931"
        },
        {
            "symbol": "⋤",
            "code": "8932"
        },
        {
            "symbol": "⋥",
            "code": "8933"
        },
        {
            "symbol": "⋦",
            "code": "8934"
        },
        {
            "symbol": "⋧",
            "code": "8935"
        },
        {
            "symbol": "⋨",
            "code": "8936"
        },
        {
            "symbol": "⋩",
            "code": "8937"
        },
        {
            "symbol": "⋪",
            "code": "8938"
        },
        {
            "symbol": "⋫",
            "code": "8939"
        },
        {
            "symbol": "⋬",
            "code": "8940"
        },
        {
            "symbol": "⋭",
            "code": "8941"
        },
        {
            "symbol": "⋮",
            "code": "8942"
        },
        {
            "symbol": "⋯",
            "code": "8943"
        },
        {
            "symbol": "⋰",
            "code": "8944"
        },
        {
            "symbol": "⋱",
            "code": "8945"
        },
        {
            "symbol": "⋲",
            "code": "8946"
        },
        {
            "symbol": "⋳",
            "code": "8947"
        },
        {
            "symbol": "⋴",
            "code": "8948"
        },
        {
            "symbol": "⋵",
            "code": "8949"
        },
        {
            "symbol": "⋶",
            "code": "8950"
        },
        {
            "symbol": "⋷",
            "code": "8951"
        },
        {
            "symbol": "⋸",
            "code": "8952"
        },
        {
            "symbol": "⋹",
            "code": "8953"
        },
        {
            "symbol": "⋺",
            "code": "8954"
        },
        {
            "symbol": "⋻",
            "code": "8955"
        },
        {
            "symbol": "⋼",
            "code": "8956"
        },
        {
            "symbol": "⋽",
            "code": "8957"
        },
        {
            "symbol": "⋾",
            "code": "8958"
        },
        {
            "symbol": "⋿",
            "code": "8959"
        }
    ];
    const [altPressed,setAltPressed]=useState(false);
    const [showSymbol, setShowSymbol]=useState(false);
    const [symbolIndex, setSymbolIndex]=useState(0);
    const keyDownPad=e=>{
        console.log(e.key,altPressed);
        if(altPressed && showSymbol){
            console.log(symbolIndex);
            switch (e.key) {
                case "ArrowDown":
                    if(symbolIndex+10>symbols.length)
                    setSymbolIndex(0);
                    else setSymbolIndex(symbolIndex+10);                    
                    break;
                case "ArrowUp":
                    if(symbolIndex-10<0)
                    setSymbolIndex(symbols.length-1);
                    else setSymbolIndex(symbolIndex-10);                    
                    break;
                default:
                    break;
            }
            if(/\d/.test(e.key)){
                e.preventDefault();
                insertSymbol(symbols[symbolIndex+parseInt(e.key)].symbol);
            }
        }
        if(altPressed){
            e.preventDefault();
            switch (e.key) {
                case "s":
                case "S":
                    setShowSymbol(!showSymbol);                    
                    break;            
                default:
                    break;
            }
        }
        if(e.key=="Alt"){
            e.preventDefault();
            setAltPressed(!altPressed);
            if(!altPressed){
                setShowSymbol(false);
            }
        }
    }
    const insertSymbol=symbol=>{
        let string=document.getSelection().focusNode.nodeValue;
        let offset=document.getSelection().focusOffset;
        console.log(string.substring(0,offset)+symbol+string.substring(offset,string.length));
        document.getSelection().focusNode.textContent=string.substring(0,offset)+symbol+string.substring(offset,string.length);
        //document.getSelection().anchorNode.setSelectionRange(offset,offset);
    };
    return (<div className="pad">
        <div className="pad-left">
            {showSymbol?<div className="pad-left-symbols">{symbols.slice(symbolIndex,symbolIndex+10).map((item,index)=><span key={index}>{index}&nbsp;:&nbsp;{item.symbol}</span>)}</div>:null}
        </div>
        <div className="pad-center" contentEditable="true" onKeyDown={e=>keyDownPad(e)}></div>
        <div className="pad-right"></div>
    </div>)
}
export default Pad;