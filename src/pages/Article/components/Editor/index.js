import React, { Component } from 'react';
import E from 'wangeditor';
import './index.less'

class Editor extends Component {
    state = {}
    editorElemBodyRef = React.createRef()
    myEditor = null

    componentDidMount() {
        this.initEditor()
    }

    componentWillUnmount() {
        this.myEditor.destroy()
    }

    initEditor = () => {
        const elemBody = this.editorElemBodyRef.current
        const editor = new E(elemBody)
        // editor.config.height = 500
        editor.config.focus = false
        editor.config.showFullScreen = false
        editor.config.placeholder = '请输入正文'
        // 設置不需要的menu
        editor.config.excludeMenus = ['video', 'todo', 'image', 'undo', 'redo', 'link',]
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.config.onchange = (html) => {
        //   console.log(editor.txt.text())
          this.props.onChange(html)
        }
        editor.create()
        this.myEditor = editor
      }

    render() {
        return (
            <div
                  ref={this.editorElemBodyRef}
                  className="editorElem-body"
                ></div>
        );
    }
}

export default Editor;