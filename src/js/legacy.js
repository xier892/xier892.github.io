const [isInternetExplorer, isWindowsPhone] = [
  Boolean(navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1 || navigator.userAgent.match(/iemobile/i)),
  Boolean(navigator.userAgent.match(/Windows Phone/i))
];
