self.__precacheManifest = [{"url":"/_next/819b29ab-3d65-40d7-9e31-4122dc60cc33/page/_app.js","revision":"819b29ab-3d65-40d7-9e31-4122dc60cc33"},{"url":"/_next/819b29ab-3d65-40d7-9e31-4122dc60cc33/page/_document.js","revision":"819b29ab-3d65-40d7-9e31-4122dc60cc33"},{"url":"/_next/819b29ab-3d65-40d7-9e31-4122dc60cc33/page/_error.js","revision":"819b29ab-3d65-40d7-9e31-4122dc60cc33"},{"url":"/_next/819b29ab-3d65-40d7-9e31-4122dc60cc33/page/chronometer.js","revision":"819b29ab-3d65-40d7-9e31-4122dc60cc33"},{"url":"/_next/819b29ab-3d65-40d7-9e31-4122dc60cc33/page/countdowns.js","revision":"819b29ab-3d65-40d7-9e31-4122dc60cc33"},{"url":"/_next/819b29ab-3d65-40d7-9e31-4122dc60cc33/page/new-countdown.js","revision":"819b29ab-3d65-40d7-9e31-4122dc60cc33"}];
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
