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
