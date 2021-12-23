import React from 'react';
import { Editor, EditorState, RichUtils, Modifier } from 'draft-js';
// import {
//     RichUtils,
//     KeyBindingUtil,
//     EditorState,
//     CompositeDecorator
// } from "draft-js";
import 'draft-js/dist/Draft.css';



const Draftjs = ({ control }) => {

    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );


    const toggleInlineStyle = inlineStyle => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));

    };

    const toggleBlockType = inlineStyle => {
        setEditorState(RichUtils.toggleBlockType(editorState, inlineStyle));
    };

    // const toggleColor = (toggledColor) => {
    //     const selection = editorState.getSelection();
    //     // Let's just allow one color at a time. Turn off all active colors.
    //     const nextContentState = Object.keys(colorStyleMap)
    //         .reduce((contentState, color) => {
    //             return Modifier.removeInlineStyle(contentState, selection, color)
    //         }, editorState.getCurrentContent());
    //     let nextEditorState = EditorState.push(
    //         editorState,
    //         nextContentState,
    //         'change-inline-style'
    //     );

    //     const currentStyle = editorState.getCurrentInlineStyle();
    //     // Unset style override for current color.
    //     if (selection.isCollapsed()) {
    //         nextEditorState = currentStyle.reduce((state, color) => {
    //             return RichUtils.toggleInlineStyle(state, color);
    //         }, nextEditorState);
    //     }

    //     // If the color is being toggled on, apply it.
    //     if (!currentStyle.has(toggledColor)) {
    //         // debugger;
    //         nextEditorState = RichUtils.toggleInlineStyle(
    //             nextEditorState,
    //             toggledColor
    //         );
    //     }
    //     setEditorState(nextEditorState);
    // }


    const inlineStyles = [
        { label: "Gras", style: "BOLD", buttonStyle: "styleButtonBold" },
        { label: "Italic", style: "ITALIC", buttonStyle: "styleButtonItalic" },
        { label: "Souligné", style: "UNDERLINE", buttonStyle: "styleButtonUnderline" },
        { label: "Barré ", style: "STRIKETHROUGH", buttonStyle: "styleButtonLine-through" },
    ];

    const listStyle = [
        { label: "-Liste", blockType: 'unordered-list-item', buttonStyle: "styleButtonLine-list" },
        { label: "'Citation'", blockType: 'blockquote', buttonStyle: "styleButtonLine-quote" },
        { label: "Titre 1", blockType: 'header-one', buttonStyle: "styleButtonLine-h1" },
        { label: "Titre 2", blockType: 'header-two', buttonStyle: "styleButtonLine-H2" },
    ]

    const colors = [
        { label: 'Blue', style: 'blue' },
        { label: 'Yellow', style: 'yellow' },
        { label: 'Noir', style: 'black' },
        { label: 'Gris', style: 'grey' },
    ];
    const colorStyleMap = {
        blue: {
            color: 'rgba(127,183,190)',
        },
        yellow: {
            color: 'rgba(218,204,62)',
        },
        black: {
            color: 'rgba(0,0,0,0)',
        },
        grey: {
            color: 'rgba(0, 180, 0, 1.0)',
        }
    };

    return (
        <div className="editorContainer">
            {inlineStyles.map(type => (
                <button
                    type="button"
                    className={(editorState.getCurrentInlineStyle().has(type.style) ? 'styleButtonActive ' + type.buttonStyle : 'styleButton ' + type.buttonStyle)}
                    key={type.label}
                    onMouseDown={e => {
                        e.preventDefault();
                        toggleInlineStyle(type.style);
                    }}
                >
                    {type.label}
                </button>
            ))
            }
            {listStyle.map(type => (
                <button
                    type="button"
                    className={RichUtils.getCurrentBlockType(editorState) === type.blockType ? 'styleButtonActive ' + type.buttonStyle : 'styleButton ' + + type.buttonStyle}
                    key={type.label}
                    onMouseDown={e => {
                        e.preventDefault();
                        toggleBlockType(type.blockType);
                    }}
                >{type.label}</button>
            ))
            }

            {/* {colors.map(type => (
                <button
                    type="button"
                    className={editorState.getCurrentInlineStyle().has(type.style) ? 'styleButtonActive' : 'styleButton'}
                    key={type.label}
                    onMouseDown={e => {
                        e.preventDefault();
                        // toggleColor(type.style);
                        toggleColor(colorStyleMap[type.style]);
                    }}
                >{type.label}</button>
            ))
            } */}

            <div className="editors">
                {/* <Controller
                    name="DraftJS"
                    control={control}
                    render={({ value, onChange }) => ( */}
                <Editor
                    editorState={editorState}
                    onChange={setEditorState}
                    placeholder={"Start typing!"}
                />
                {/* )}
                /> } */}
            </div>
        </div >
    );
}
export default Draftjs;
