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
    switch (data) {
      case 'Enter':
        ele.textContent = `${ele.textContent.slice(0, caretPos)}\n${ele.textContent.slice(caretPos)}`;
        caretPos += 1;
        break;
      case 'Tab':
        ele.innerHTML = `${ele.innerHTML.slice(0, caretPos)}   ${ele.innerHTML.slice(caretPos)}`;
        caretPos += 3;
        break;
      default:
        ele.innerHTML = ele.innerHTML.slice(0, caretPos) + data + ele.innerHTML.slice(caretPos);
        caretPos += data.length;
        break;
    }
    this.setCaretIndex(ele, caretPos);
  }

  getCaretIndex(element: Element) {
    let position = 0;
    const isSupported = typeof window.getSelection !== "undefined";
    if (isSupported) {
      const selection: any = window.getSelection();
      if (selection.rangeCount !== 0) {
        const range = selection.getRangeAt(0);
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(element);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        position = preCaretRange.toString().length;
      }
    }
    return position;
  }

  setCaretIndex(element: Element, position: number) {
    var range = document.createRange();
    var sel: any = window.getSelection();
    range.setStart(element.childNodes[0], position);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }
}
