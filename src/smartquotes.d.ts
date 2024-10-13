declare module "smartquotes" {
  function smartquotes(): void;
  function smartquotes(element: HTMLElement): void;
  function smartquotes(text: string): string;

  namespace smartquotes {
    function string(text: string): string;
    function element(element: HTMLElement): void;
    function listen(): void;
  }

  export = smartquotes;
}
