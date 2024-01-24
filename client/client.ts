if (location.host.includes('localhost')) {
  // Load livereload script if we are on localhost
  document.write(
    '<script src="http://' +
      (location.host || 'localhost').split(':')[0] +
      ':35729/livereload.js?snipver=1"></' +
      'script>'
  )
}

console.log('This is a Test')

// Code zum speichern des Token (lokal storage oder cookie)

// Token bei jeder API-Anfrage im Authorization-Header mitsendet.