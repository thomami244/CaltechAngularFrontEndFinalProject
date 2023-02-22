export function Sticker(configuration: any) {
  return function(target: any) {
    target.prototype.stickers = configuration.stickers;
  }
}

export function HookLogger(configuration: any) {
  return function(target: any) {
    const defaultHooks: string[] = [
      'ngOnChanges',
      'ngOnInit',
      'ngDoCheck',
      'ngAfterContentInit',
      'ngAfterContentChecked',
      'ngAfterViewInit',
      'ngAfterViewChecked',
      'ngOnDestroy'
    ];

    let hooksToLogFor: any = (configuration && configuration.hooks) || defaultHooks;
    const componentName: string = target.name;

    hooksToLogFor.forEach((hookToLogFor: any) => {
      const original = target.prototype[hookToLogFor];

      target.prototype[hookToLogFor] = function(...args: any) {
        console.log(`Component Name: ${componentName} | Hook Name: ${hookToLogFor} |`, ...args);
        original && original.apply(this, args);
      }
    });

  }
}
