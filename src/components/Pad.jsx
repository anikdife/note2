import { useEffect, useState } from "react";

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
    const styleProperties=[
        "accentColor",
        "additiveSymbols",
        "alignContent",
        "alignItems",
        "alignSelf",
        "alignmentBaseline",
        "all",
        "animation",
        "animationDelay",
        "animationDirection",
        "animationDuration",
        "animationFillMode",
        "animationIterationCount",
        "animationName",
        "animationPlayState",
        "animationTimingFunction",
        "appRegion",
        "appearance",
        "ascentOverride",
        "aspectRatio",
        "backdropFilter",
        "backfaceVisibility",
        "background",
        "backgroundAttachment",
        "backgroundBlendMode",
        "backgroundClip",
        "backgroundColor",
        "backgroundImage",
        "backgroundOrigin",
        "backgroundPosition",
        "backgroundPositionX",
        "backgroundPositionY",
        "backgroundRepeat",
        "backgroundRepeatX",
        "backgroundRepeatY",
        "backgroundSize",
        "basePalette",
        "baselineShift",
        "blockSize",
        "border",
        "borderBlock",
        "borderBlockColor",
        "borderBlockEnd",
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth",
        "borderBlockStart",
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth",
        "borderBlockStyle",
        "borderBlockWidth",
        "borderBottom",
        "borderBottomColor",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderBottomStyle",
        "borderBottomWidth",
        "borderCollapse",
        "borderColor",
        "borderEndEndRadius",
        "borderEndStartRadius",
        "borderImage",
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth",
        "borderInline",
        "borderInlineColor",
        "borderInlineEnd",
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth",
        "borderInlineStart",
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth",
        "borderInlineStyle",
        "borderInlineWidth",
        "borderLeft",
        "borderLeftColor",
        "borderLeftStyle",
        "borderLeftWidth",
        "borderRadius",
        "borderRight",
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth",
        "borderSpacing",
        "borderStartEndRadius",
        "borderStartStartRadius",
        "borderStyle",
        "borderTop",
        "borderTopColor",
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderTopStyle",
        "borderTopWidth",
        "borderWidth",
        "bottom",
        "boxShadow",
        "boxSizing",
        "breakAfter",
        "breakBefore",
        "breakInside",
        "bufferedRendering",
        "captionSide",
        "caretColor",
        "clear",
        "clip",
        "clipPath",
        "clipRule",
        "color",
        "colorInterpolation",
        "colorInterpolationFilters",
        "colorRendering",
        "colorScheme",
        "columnCount",
        "columnFill",
        "columnGap",
        "columnRule",
        "columnRuleColor",
        "columnRuleStyle",
        "columnRuleWidth",
        "columnSpan",
        "columnWidth",
        "columns",
        "contain",
        "containIntrinsicBlockSize",
        "containIntrinsicHeight",
        "containIntrinsicInlineSize",
        "containIntrinsicSize",
        "containIntrinsicWidth",
        "container",
        "containerName",
        "containerType",
        "content",
        "contentVisibility",
        "counterIncrement",
        "counterReset",
        "counterSet",
        "cursor",
        "cx",
        "cy",
        "d",
        "descentOverride",
        "direction",
        "display",
        "dominantBaseline",
        "emptyCells",
        "fallback",
        "fill",
        "fillOpacity",
        "fillRule",
        "filter",
        "flex",
        "flexBasis",
        "flexDirection",
        "flexFlow",
        "flexGrow",
        "flexShrink",
        "flexWrap",
        "float",
        "floodColor",
        "floodOpacity",
        "font",
        "fontDisplay",
        "fontFamily",
        "fontFeatureSettings",
        "fontKerning",
        "fontOpticalSizing",
        "fontPalette",
        "fontSize",
        "fontStretch",
        "fontStyle",
        "fontSynthesis",
        "fontSynthesisSmallCaps",
        "fontSynthesisStyle",
        "fontSynthesisWeight",
        "fontVariant",
        "fontVariantCaps",
        "fontVariantEastAsian",
        "fontVariantLigatures",
        "fontVariantNumeric",
        "fontVariationSettings",
        "fontWeight",
        "forcedColorAdjust",
        "gap",
        "grid",
        "gridArea",
        "gridAutoColumns",
        "gridAutoFlow",
        "gridAutoRows",
        "gridColumn",
        "gridColumnEnd",
        "gridColumnGap",
        "gridColumnStart",
        "gridGap",
        "gridRow",
        "gridRowEnd",
        "gridRowGap",
        "gridRowStart",
        "gridTemplate",
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows",
        "height",
        "hyphenateCharacter",
        "hyphenateLimitChars",
        "hyphens",
        "imageOrientation",
        "imageRendering",
        "inherits",
        "initialLetter",
        "initialValue",
        "inlineSize",
        "inset",
        "insetBlock",
        "insetBlockEnd",
        "insetBlockStart",
        "insetInline",
        "insetInlineEnd",
        "insetInlineStart",
        "isolation",
        "justifyContent",
        "justifyItems",
        "justifySelf",
        "left",
        "letterSpacing",
        "lightingColor",
        "lineBreak",
        "lineGapOverride",
        "lineHeight",
        "listStyle",
        "listStyleImage",
        "listStylePosition",
        "listStyleType",
        "margin",
        "marginBlock",
        "marginBlockEnd",
        "marginBlockStart",
        "marginBottom",
        "marginInline",
        "marginInlineEnd",
        "marginInlineStart",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marker",
        "markerEnd",
        "markerMid",
        "markerStart",
        "mask",
        "maskType",
        "mathDepth",
        "mathShift",
        "mathStyle",
        "maxBlockSize",
        "maxHeight",
        "maxInlineSize",
        "maxWidth",
        "minBlockSize",
        "minHeight",
        "minInlineSize",
        "minWidth",
        "mixBlendMode",
        "negative",
        "objectFit",
        "objectPosition",
        "objectViewBox",
        "offset",
        "offsetDistance",
        "offsetPath",
        "offsetRotate",
        "opacity",
        "order",
        "orphans",
        "outline",
        "outlineColor",
        "outlineOffset",
        "outlineStyle",
        "outlineWidth",
        "overflow",
        "overflowAnchor",
        "overflowClipMargin",
        "overflowWrap",
        "overflowX",
        "overflowY",
        "overrideColors",
        "overscrollBehavior",
        "overscrollBehaviorBlock",
        "overscrollBehaviorInline",
        "overscrollBehaviorX",
        "overscrollBehaviorY",
        "pad",
        "padding",
        "paddingBlock",
        "paddingBlockEnd",
        "paddingBlockStart",
        "paddingBottom",
        "paddingInline",
        "paddingInlineEnd",
        "paddingInlineStart",
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "page",
        "pageBreakAfter",
        "pageBreakBefore",
        "pageBreakInside",
        "pageOrientation",
        "paintOrder",
        "perspective",
        "perspectiveOrigin",
        "placeContent",
        "placeItems",
        "placeSelf",
        "pointerEvents",
        "position",
        "prefix",
        "quotes",
        "r",
        "range",
        "resize",
        "right",
        "rotate",
        "rowGap",
        "rubyPosition",
        "rx",
        "ry",
        "scale",
        "scrollBehavior",
        "scrollMargin",
        "scrollMarginBlock",
        "scrollMarginBlockEnd",
        "scrollMarginBlockStart",
        "scrollMarginBottom",
        "scrollMarginInline",
        "scrollMarginInlineEnd",
        "scrollMarginInlineStart",
        "scrollMarginLeft",
        "scrollMarginRight",
        "scrollMarginTop",
        "scrollPadding",
        "scrollPaddingBlock",
        "scrollPaddingBlockEnd",
        "scrollPaddingBlockStart",
        "scrollPaddingBottom",
        "scrollPaddingInline",
        "scrollPaddingInlineEnd",
        "scrollPaddingInlineStart",
        "scrollPaddingLeft",
        "scrollPaddingRight",
        "scrollPaddingTop",
        "scrollSnapAlign",
        "scrollSnapStop",
        "scrollSnapType",
        "scrollbarGutter",
        "shapeImageThreshold",
        "shapeMargin",
        "shapeOutside",
        "shapeRendering",
        "size",
        "sizeAdjust",
        "speak",
        "speakAs",
        "src",
        "stopColor",
        "stopOpacity",
        "stroke",
        "strokeDasharray",
        "strokeDashoffset",
        "strokeLinecap",
        "strokeLinejoin",
        "strokeMiterlimit",
        "strokeOpacity",
        "strokeWidth",
        "suffix",
        "symbols",
        "syntax",
        "system",
        "tabSize",
        "tableLayout",
        "textAlign",
        "textAlignLast",
        "textAnchor",
        "textCombineUpright",
        "textDecoration",
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationSkipInk",
        "textDecorationStyle",
        "textDecorationThickness",
        "textEmphasis",
        "textEmphasisColor",
        "textEmphasisPosition",
        "textEmphasisStyle",
        "textIndent",
        "textOrientation",
        "textOverflow",
        "textRendering",
        "textShadow",
        "textSizeAdjust",
        "textTransform",
        "textUnderlineOffset",
        "textUnderlinePosition",
        "top",
        "touchAction",
        "transform",
        "transformBox",
        "transformOrigin",
        "transformStyle",
        "transition",
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction",
        "translate",
        "unicodeBidi",
        "unicodeRange",
        "userSelect",
        "vectorEffect",
        "verticalAlign",
        "visibility",
        "webkitAlignContent",
        "webkitAlignItems",
        "webkitAlignSelf",
        "webkitAnimation",
        "webkitAnimationDelay",
        "webkitAnimationDirection",
        "webkitAnimationDuration",
        "webkitAnimationFillMode",
        "webkitAnimationIterationCount",
        "webkitAnimationName",
        "webkitAnimationPlayState",
        "webkitAnimationTimingFunction",
        "webkitAppRegion",
        "webkitAppearance",
        "webkitBackfaceVisibility",
        "webkitBackgroundClip",
        "webkitBackgroundOrigin",
        "webkitBackgroundSize",
        "webkitBorderAfter",
        "webkitBorderAfterColor",
        "webkitBorderAfterStyle",
        "webkitBorderAfterWidth",
        "webkitBorderBefore",
        "webkitBorderBeforeColor",
        "webkitBorderBeforeStyle",
        "webkitBorderBeforeWidth",
        "webkitBorderBottomLeftRadius",
        "webkitBorderBottomRightRadius",
        "webkitBorderEnd",
        "webkitBorderEndColor",
        "webkitBorderEndStyle",
        "webkitBorderEndWidth",
        "webkitBorderHorizontalSpacing",
        "webkitBorderImage",
        "webkitBorderRadius",
        "webkitBorderStart",
        "webkitBorderStartColor",
        "webkitBorderStartStyle",
        "webkitBorderStartWidth",
        "webkitBorderTopLeftRadius",
        "webkitBorderTopRightRadius",
        "webkitBorderVerticalSpacing",
        "webkitBoxAlign",
        "webkitBoxDecorationBreak",
        "webkitBoxDirection",
        "webkitBoxFlex",
        "webkitBoxOrdinalGroup",
        "webkitBoxOrient",
        "webkitBoxPack",
        "webkitBoxReflect",
        "webkitBoxShadow",
        "webkitBoxSizing",
        "webkitClipPath",
        "webkitColumnBreakAfter",
        "webkitColumnBreakBefore",
        "webkitColumnBreakInside",
        "webkitColumnCount",
        "webkitColumnGap",
        "webkitColumnRule",
        "webkitColumnRuleColor",
        "webkitColumnRuleStyle",
        "webkitColumnRuleWidth",
        "webkitColumnSpan",
        "webkitColumnWidth",
        "webkitColumns",
        "webkitFilter",
        "webkitFlex",
        "webkitFlexBasis",
        "webkitFlexDirection",
        "webkitFlexFlow",
        "webkitFlexGrow",
        "webkitFlexShrink",
        "webkitFlexWrap",
        "webkitFontFeatureSettings",
        "webkitFontSmoothing",
        "webkitHighlight",
        "webkitHyphenateCharacter",
        "webkitJustifyContent",
        "webkitLineBreak",
        "webkitLineClamp",
        "webkitLocale",
        "webkitLogicalHeight",
        "webkitLogicalWidth",
        "webkitMarginAfter",
        "webkitMarginBefore",
        "webkitMarginEnd",
        "webkitMarginStart",
        "webkitMask",
        "webkitMaskBoxImage",
        "webkitMaskBoxImageOutset",
        "webkitMaskBoxImageRepeat",
        "webkitMaskBoxImageSlice",
        "webkitMaskBoxImageSource",
        "webkitMaskBoxImageWidth",
        "webkitMaskClip",
        "webkitMaskComposite",
        "webkitMaskImage",
        "webkitMaskOrigin",
        "webkitMaskPosition",
        "webkitMaskPositionX",
        "webkitMaskPositionY",
        "webkitMaskRepeat",
        "webkitMaskRepeatX",
        "webkitMaskRepeatY",
        "webkitMaskSize",
        "webkitMaxLogicalHeight",
        "webkitMaxLogicalWidth",
        "webkitMinLogicalHeight",
        "webkitMinLogicalWidth",
        "webkitOpacity",
        "webkitOrder",
        "webkitPaddingAfter",
        "webkitPaddingBefore",
        "webkitPaddingEnd",
        "webkitPaddingStart",
        "webkitPerspective",
        "webkitPerspectiveOrigin",
        "webkitPerspectiveOriginX",
        "webkitPerspectiveOriginY",
        "webkitPrintColorAdjust",
        "webkitRtlOrdering",
        "webkitRubyPosition",
        "webkitShapeImageThreshold",
        "webkitShapeMargin",
        "webkitShapeOutside",
        "webkitTapHighlightColor",
        "webkitTextCombine",
        "webkitTextDecorationsInEffect",
        "webkitTextEmphasis",
        "webkitTextEmphasisColor",
        "webkitTextEmphasisPosition",
        "webkitTextEmphasisStyle",
        "webkitTextFillColor",
        "webkitTextOrientation",
        "webkitTextSecurity",
        "webkitTextSizeAdjust",
        "webkitTextStroke",
        "webkitTextStrokeColor",
        "webkitTextStrokeWidth",
        "webkitTransform",
        "webkitTransformOrigin",
        "webkitTransformOriginX",
        "webkitTransformOriginY",
        "webkitTransformOriginZ",
        "webkitTransformStyle",
        "webkitTransition",
        "webkitTransitionDelay",
        "webkitTransitionDuration",
        "webkitTransitionProperty",
        "webkitTransitionTimingFunction",
        "webkitUserDrag",
        "webkitUserModify",
        "webkitUserSelect",
        "webkitWritingMode",
        "whiteSpace",
        "widows",
        "width",
        "willChange",
        "wordBreak",
        "wordSpacing",
        "wordWrap",
        "writingMode",
        "x",
        "y",
        "zIndex",
        "zoom"
    ];
    const [showAlt, setShowAlt]=useState(false);
    const [altPressed,setAltPressed]=useState(false);
    const [showSymbol, setShowSymbol]=useState(false);
    const [symbolIndex, setSymbolIndex]=useState(0);
    const [classes,setClasses]=useState([]);
    const [firstFocus,setFirstFocus]=useState(false);
    const [focus,setFocus]=useState("");
    const [childElementCount,setChildElementCount]=useState(1);
    const [paragraphStyle, setParagraphStyle]=useState(false);
    const [lastCharacterParagraphStyle, setLastCharacterParagraphStyle]=useState("");
    const [paragraphStyleProperty,setParagraphStyleProperty]=useState("");
    const [currentParagraphStyle, setCurrentParagraphStyle]=useState("")
    useEffect(()=>{
        onFocusFirst();
    },[firstFocus]);
    useEffect(()=>{
        let divs=document.querySelector(".pad-center").children;
        let lastDiv=[...divs].pop();
        let className="c"+randomString(31);
        if(lastDiv)lastDiv.className=className;
        setClasses([...classes,className]);
    },[childElementCount]);
    const selectTextRange=(obj, start, stop)=>{
        var endNode, startNode = endNode = obj.firstChild
      
        startNode.nodeValue = startNode.nodeValue.trim();
        
        var range = document.createRange();
        range.setStart(startNode, start);
        range.setEnd(endNode, stop + 1);
        
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    };
    const filterWord=(word,list)=>{
        return list.filter(item=>item.match(new RegExp("^"+word.split("").join("\\w*"),"i")));
    }
    const keyDownPad=e=>{
        let divs=document.querySelector(".pad-center").childElementCount;
        setChildElementCount(divs);
        setFocus(document.getSelection().focusNode.parentElement.className);
        //console.log(e.key,altPressed, focus);
        if(altPressed && paragraphStyle && e.key && e.key.length==1){
            //console.log(e.target, document.getSelection().focusNode);
            setLastCharacterParagraphStyle(e.key);
            setParagraphStyleProperty(paragraphStyleProperty+""+e.key);
            let styleSpan=document.querySelector("."+currentParagraphStyle);
            if(styleSpan.innerText!=""){
                let filter=filterWord(styleSpan.innerText+e.key,styleProperties);
                console.log(styleSpan,styleSpan.innerText+e.key,filter);
                if(filter.length==1){
                    e.preventDefault();
                    styleSpan.innerText=filter;
                    let selection = window.getSelection();        
                    let range = document.createRange();
                    range.selectNodeContents(styleSpan);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    //setParagraphStyleProperty("");
                }
            }
            return;
        }
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
        if(altPressed && (e.key=="s" || e.key=="S" || e.key=="h" || e.key=="H" || e.key=="l" || e.key=="L" || e.key=="p" || e.key=="P")){
            e.preventDefault();
            let className="";
            let selection=window.getSelection();
            let range = document.createRange();
            switch (e.key) {
                case "s":
                case "S":
                    setShowSymbol(!showSymbol);                    
                    break;
                case "h":
                case "H":
                    let div1=document.createElement("div");
                    //div1.innerHTML="<br/>";
                    className="c"+randomString(31);
                    div1.className=className;
                    div1.style="height:1px;border-top:1px solid black;"
                    setClasses([...classes,className]);
                    document.activeElement.appendChild(div1);
                    let div2=document.createElement("div");
                    div2.innerHTML="type...";
                    className="c"+randomString(31);
                    div2.className=className;
                    setClasses([...classes,className]);
                    document.activeElement.appendChild(div2);
                    //div2.focus();
                    console.log(document.getSelection().focusNode.parentElement);
                    selection = window.getSelection();        
                    range = document.createRange();
                    range.selectNodeContents(div2);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    setAltPressed(false);
                    setShowAlt(false);
                    break;
                case "l":
                case "L":
                    let ul=document.createElement('ul');
                    let li=document.createElement("li");
                    ul.appendChild(li);
                    document.activeElement.appendChild(ul);
                    setShowSymbol(false);
                    setAltPressed(false);  
                    setShowAlt(false);
                    break;
                case "p":
                case "P":
                    let span=document.createElement("span");
                    span.innerText="style...";
                    className="c"+randomString(31);
                    span.className=className;
                    setCurrentParagraphStyle(className);
                    document.getSelection().focusNode.parentElement.appendChild(span);
                    selection = window.getSelection();        
                    range = document.createRange();
                    range.selectNodeContents(span);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    setParagraphStyle(true);
                    break;         
                default:
                    break;
            }
        }
        if(e.key=="Alt"){
            e.preventDefault();
            setAltPressed(!altPressed);
            setShowAlt(!showAlt);
            setParagraphStyle(false);
            if(!altPressed){
                setShowSymbol(false);
            }
        }
    }
    const insertSymbol=symbol=>{
        let selection=window.getSelection();
        let string=selection.focusNode.nodeValue;
        let offset=selection.focusOffset;
        if(!string)string="";
        console.log(string.substring(0,offset)+symbol+string.substring(offset,string.length));
        selection.focusNode.textContent=string.substring(0,offset)+symbol+string.substring(offset,string.length);
        console.log(string,offset, selection.focusNode);
        //document.execCommand('selectAll', false, null);
        let range=document.createRange();
        range.setStart(selection.focusNode,offset+1);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
        selection.collapseToEnd();
    };
    const randomString=(length) => {
        const chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    const removeStartingText=event=>{
        console.log(event);
        event.target.innerText="";
        event.target.removeEventListener("focus",removeStartingText,true);
    }
    const onFocusFirst=()=>{
        let elem=document.querySelector(".pad-center");
        if(elem.innerHTML===""){
            let div=document.createElement("div");
            div.contentEditable=true;
            let className="c"+randomString(31);
            setClasses([...classes,className]);
            div.className=className;
            div.innerText="type...";
            elem.appendChild(div);
            console.log(document.activeElement);
        }
    };
    return (<div className="pad">
        <div className="pad-left">
            { altPressed && showSymbol?<div className="pad-left-symbols">{symbols.slice(symbolIndex,symbolIndex+10).map((item,index)=><span key={index}>{index}&nbsp;:&nbsp;{item.symbol}</span>)}</div>:null}
        </div>
        <div className="pad-center" contentEditable="true" onFocus={e=>setFirstFocus(true)} onKeyDown={e=>keyDownPad(e)}></div>
        <div className="pad-right">
            {showAlt?<div className="pad-right-alt">Alt</div>:null}
            <div className="pad-right-sections">Sections:
                {classes.map(div=>document.querySelector("."+div)).map((div,index)=><span className={"pad-right-section"+" "+(div && (div.className==focus?"pad-right-section-focused":""))} key={index}>{div?div.innerText:""}</span>)}
            </div>
        </div>
    </div>)
}
export default Pad;
