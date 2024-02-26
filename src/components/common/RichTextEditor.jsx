

import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const RichTextEditor = ({ content, handleContentChange }) => {
    return (
        <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={(event, editor) => {
                const data = editor.getData();
                handleContentChange(data);
            }}
        />
    );
};

export default RichTextEditor;
