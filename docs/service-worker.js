self.__precacheManifest = [{"url":"/_next/f0f8dd83-9555-4a7f-9c74-a0972d0e092b/page/_app.js","revision":"f0f8dd83-9555-4a7f-9c74-a0972d0e092b"},{"url":"/_next/f0f8dd83-9555-4a7f-9c74-a0972d0e092b/page/_document.js","revision":"f0f8dd83-9555-4a7f-9c74-a0972d0e092b"},{"url":"/_next/f0f8dd83-9555-4a7f-9c74-a0972d0e092b/page/_error.js","revision":"f0f8dd83-9555-4a7f-9c74-a0972d0e092b"},{"url":"/_next/f0f8dd83-9555-4a7f-9c74-a0972d0e092b/page/chronometer.js","revision":"f0f8dd83-9555-4a7f-9c74-a0972d0e092b"},{"url":"/_next/f0f8dd83-9555-4a7f-9c74-a0972d0e092b/page/countdowns.js","revision":"f0f8dd83-9555-4a7f-9c74-a0972d0e092b"},{"url":"/_next/f0f8dd83-9555-4a7f-9c74-a0972d0e092b/page/new-countdown.js","revision":"f0f8dd83-9555-4a7f-9c74-a0972d0e092b"}];
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
