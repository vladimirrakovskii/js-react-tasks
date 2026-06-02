import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
export default class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
        this.editorInstance = null;
    }

    componentDidMount() {
        this.initializeEditor();
    }

    componentWillUnmount() {
        if (this.editorInstance) {
            this.editorInstance.destroy();
        }
    }

    initializeEditor = () => {
        const { onContentChange } = this.props;

        this.editorInstance = new Editor({
            el: this.editorRef.current,
            hideModeSwitch: true,
            height: '500px',
            initialEditType: 'markdown',
            previewStyle: 'vertical',
        });

        this.editorInstance.addHook('change', () => {
            const content = this.editorInstance.getMarkdown();
            if (onContentChange) {
                onContentChange(content);
            }
        });
    }

    render() {
        return (
            <div ref={this.editorRef} />
        );
    }
}
// END
