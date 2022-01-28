import React from 'react';
import { Controller } from "react-hook-form";
import { Editor, EditorState, RichUtils, Modifier } from 'draft-js';

import 'draft-js/dist/Draft.css';



const Draftjs = ({ props }) => {


    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );

    const toggleInlineStyle = inlineStyle => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));

    };

    const toggleBlockType = inlineStyle => {
        setEditorState(RichUtils.toggleBlockType(editorState, inlineStyle));
    };


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
            <div className="editors">
                <Editor
                    name={props.name}
                    editorState={props.value}
                    onChange={props.onChange}
                    // onChange={setEditorState}
                    // editorState={editorState}
                    placeholder={"Start typing!"}
                    defaultValue=''
                />
            </div>
        </div >
    );
}
export default Draftjs;
