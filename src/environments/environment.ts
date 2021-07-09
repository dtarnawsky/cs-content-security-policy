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
