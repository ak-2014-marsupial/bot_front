const staticCacheName="static-cache-v0";

const staticAssets=[

]

self.addEventListener("install", async event=>{
    console.log("Service worker has been installed");
})

self.addEventListener("activate", async event=>{
    console.log("Service worker has been activated");
})

self.addEventListener("fetch", event =>{
    console.log(`Trying to fetch ${event.request.url}`);
} )