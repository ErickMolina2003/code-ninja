import { Component } from '@angular/core';
import { encode, decode } from 'js-base64';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent {
  $js = this.$('#js');
  $html = this.$('#html');
  $css = this.$('#css');

  ngOnInit(): void {
    this.$js = this.$('#js');
    this.$html = this.$('#html');
    this.$css = this.$('#css');
    this.$css?.addEventListener('input', this.update.bind(this));
    this.$js?.addEventListener('input', this.update.bind(this));
    this.$html?.addEventListener('input', this.update.bind(this));

    // this.init();
  }

  $(selector: string): HTMLInputElement | null {
    return document.querySelector(selector);
  }

  init() {
    const { pathname } = window.location;

    const [rawHtml, rawCss, rawJs] = pathname.slice(6).split('%7C');

    console.log(pathname);
    console.log(pathname.slice(6).split('%7C'));

    console.log(rawHtml);
    console.log(rawCss);
    console.log(rawJs);

    const html = rawHtml ? decode(`${rawHtml}`) : '';
    const css = rawCss ? decode(`${rawCss}`) : '';
    const js = rawJs ? decode(`${rawJs}`) : '';

    if (this.$html && this.$css && this.$js) {
      this.$html.value = html;
      this.$css.value = css;
      this.$js.value = js;
    }

    const newHtml = this.createHtml({ html, css, js });
    this.$('iframe')?.setAttribute('srcdoc', `${newHtml}`);
  }

  update() {
    const html = this.$html?.value;
    const js = this.$js?.value;
    const css = this.$css?.value;

    const hashedCode = `${encode(`${html}`)}|${encode(
      `${css}`
    )}|${encode(`${js}`)}`;

    window.history.replaceState(null, '', `code/${hashedCode}`);

    const newHtml = this.createHtml({ html, css, js });
    this.$('iframe')?.setAttribute('srcdoc', `${newHtml}`);
  }

  createHtml({ html, js, css }: { html: any; js: any; css: any }) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
        ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
        ${js}
      </script>
      </body>
    </html>
    `;
  }
}
