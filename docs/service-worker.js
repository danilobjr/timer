self.__precacheManifest = [{"url":"/_next/92aa2ca7-3813-4554-afed-b0d74fd54c8d/page/_app.js","revision":"92aa2ca7-3813-4554-afed-b0d74fd54c8d"},{"url":"/_next/92aa2ca7-3813-4554-afed-b0d74fd54c8d/page/_document.js","revision":"92aa2ca7-3813-4554-afed-b0d74fd54c8d"},{"url":"/_next/92aa2ca7-3813-4554-afed-b0d74fd54c8d/page/_error.js","revision":"92aa2ca7-3813-4554-afed-b0d74fd54c8d"},{"url":"/_next/92aa2ca7-3813-4554-afed-b0d74fd54c8d/page/chronometer.js","revision":"92aa2ca7-3813-4554-afed-b0d74fd54c8d"},{"url":"/_next/92aa2ca7-3813-4554-afed-b0d74fd54c8d/page/countdowns.js","revision":"92aa2ca7-3813-4554-afed-b0d74fd54c8d"},{"url":"/_next/92aa2ca7-3813-4554-afed-b0d74fd54c8d/page/new-countdown.js","revision":"92aa2ca7-3813-4554-afed-b0d74fd54c8d"}];
/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, workbox.strategies.networkFirst(), 'GET');
