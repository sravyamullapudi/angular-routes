import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  textContent: string = 'Welcome';
  keyBoardInputs = ['Enter', 'Tab', '|', ',', '.', '?', '"', '[]', '{}', '()', ';', ":"];
  showkeyboard: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openKeyboard() {
    this.showkeyboard = !this.showkeyboard;
  }

  onKeyPress(data: any) {
    const ele: any = document.querySelector('#textArea') as Element;
    let caretPos = this.getCaretIndex(ele);
    console.log(caretPos);
    switch (data) {
      case 'Enter':
        let content = '';
        if (caretPos[1] == ele.textContent.length) {
          content = '\n ';
        } else {
          content = '\n';
        }
        ele.innerHTML = `${ele.innerHTML.slice(0, caretPos[1])}${content}${ele.innerHTML.slice(caretPos[1])}`;
        // caretPos[0] += 1;
        break;
      case 'Tab':
        ele.innerHTML = `${ele.innerHTML.slice(0, caretPos[1])}\t${ele.innerHTML.slice(caretPos[1])}`;
        // caretPos[0] += 3;
        break;
      default:
        ele.innerHTML = ele.innerHTML.slice(0, caretPos[1]) + data + ele.innerHTML.slice(caretPos[1]);
        // caretPos[0] += data.length;
        break;
    }
    this.SetCaretPosition(ele, caretPos[0]);
  }

  getCaretIndex(element: Element) {
    let posWithOutInnerHTML = 0;
    let posWithInnerHTML = 0;
    const isSupported = typeof window.getSelection !== "undefined";
    if (isSupported) {
      const selection: any = window.getSelection();
      if (selection.rangeCount !== 0) {
        const range = selection.getRangeAt(0);
        var target: any = document.createTextNode("\u0001");
        const preCaretRange = range.cloneRange();
        range.insertNode(target);
        preCaretRange.selectNodeContents(element);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        posWithOutInnerHTML = preCaretRange.toString().length;
        posWithInnerHTML = element.innerHTML.indexOf("\u0001");
        target.parentNode.removeChild(target);
      }
    }
    return [posWithOutInnerHTML, posWithInnerHTML];
  }


  setCaretIndex(element: Element, position: number) {
    var range = document.createRange();
    var sel: any = window.getSelection();
    range.setStart(element, position);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  SetCaretPosition(element: any, position: number) {
    // Loop through all child nodes
    for (var node of element.childNodes) {
      if (node.nodeType == 3) { // we have a text node
        if (node.length >= position) {
          // finally add our range
          let range = document.createRange();
          let sel: any = window.getSelection();
          range.setStart(node, position);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
          return -1; // we are done
        } else {
          position -= node.length;
        }
      } else {
        position = this.SetCaretPosition(node, position);
        if (position == -1) {
          return -1; // no need to finish the for loop
        }
      }
    }
    return position; // needed because of recursion stuff
  }
}
