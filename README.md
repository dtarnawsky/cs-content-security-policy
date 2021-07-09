# Content Security Policy with Angular
This project is an tutorial and example of using a Content Security Policy with Angular.

To create a Content Security Policy add the following to `app.component.ts`:

```Typescript
import { Meta } from '@angular/platform-browser';
import { environment } from '../environments/environment';
...
this.meta.addTag({
      'http-equiv': 'Content-Security-Policy',
      content: environment.csp
    });
```

You will need CSP options set in your environment file as they differ for development compared to production. During development Angular uses its JIT (Just In Time) compiler which uses the Eval javascript method, so our CSP requires the `unsafe-eval` option for `script-src`. In production the Angular compiler uses AOT (Ahead of Time) which doesn't use Eval.

For development the `environment.ts` should look like this:

```Typescript
export const environment = {
  production: false,
  csp:
    `default-src 'none';
         script-src 'self' 'unsafe-eval';
         style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/*;
         img-src 'self';
         connect-src 'self';
         font-src https://fonts.gstatic.com/*'
         `
};
```

For production the `environment.prod.ts` file should look like this:
```Typescript
export const environment = {
  production: true,
  csp:
  `default-src 'none';
       script-src 'self';
       style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/*;
       img-src 'self';
       connect-src 'self';
       font-src https://fonts.gstatic.com/*'
       `
};
```

## Whitelisting Domains
In the example above I've also included references to Google fonts. You can remove this. This is an example of how you can whitelist one or more urls that you may be using in your application.

## Why use a CSP?
Specifying a Content Security Policy is a technique that helps prevent cross site scripting attacks (XSS) by white listing where assets can be loaded from. You can read more about CSP at [https://developers.google.com/web/fundamentals/security/csp](https://developers.google.com/web/fundamentals/security/csp).
