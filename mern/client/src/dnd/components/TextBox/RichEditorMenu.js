import {Motion, spring} from 'react-motion';
import {Component} from 'react';
import Button from 'react-bootstrap/Button';

class RichEditorMenu extends Component {
    constructor() {
        super();
        this.onBoldClick = this.onBoldClick.bind(this);
        this.onItalicsClick = this.onItalicsClick.bind(this);
        this.onUnderlineClick = this.onUnderlineClick.bind(this);
    }
    state = {
        xPos: "0px",
        yPos: "0px",
        showMenu: false,
        bold: false,
        italized: false,
        underlined: false
    }

    componentDidMount() {
        document.addEventListener("click", this.handleClick);
        document.addEventListener("contextmenu", this.handleContextMenu);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick);
        document.removeEventListener("contextmenu", this.handleContextMenu);
    }

    handleClick = (e) => {
        if (this.state.showMenu) this.setState({ showMenu: false });
    };

    handleContextMenu = (e) => {
        e.preventDefault();
        this.setState({
          xPos: `${e.pageX}px`,
          yPos: `${e.pageY}px`,
          showMenu: true,
        });
    };

    onBoldClick(event) {
        event.target.setAttribute("class", !this.state.bold ? "Selected" : "");
    }

    onItalicsClick(event) {
        event.target.setAttribute("class", !this.state.italized ? "Selected" : "");
    }

    onUnderlineClick(event) {
        event.target.setAttribute("class", !this.state.underlined ? "Selected" : "");
    }

    render() {
        const { showMenu, xPos, yPos } = this.state;
    
        if (showMenu)
          return (
            <ul
              className="menu"
              style={{
                top: yPos,
                left: xPos,
              }}
            >
            <Button onClick={this.onBoldClick}><strong>B</strong></Button>
            <Button onClick={this.onItalicsClick}><em>I</em></Button>
            <Button onClick={this.onUnderlineClick}><u>U</u></Button>
            </ul>
          );
        else return null;
      }
  }

  export default RichEditorMenu;