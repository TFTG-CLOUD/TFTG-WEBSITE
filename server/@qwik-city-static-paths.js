const staticPaths = new Set(["/404.html/","/_headers","/_redirects","/favicon.svg","/images/1.webp","/images/2.webp","/images/3.webp","/images/4.webp","/images/hero.jpg","/images/logo.png","/images/placeholder-1024x640.png","/manifest.json","/q-manifest.json","/qwik-prefetch-service-worker.js","/robots.txt","/service-worker.js","/sitemap.xml"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };