# Caching Strategies in Web Performance

## 1. Browser Caching
- Stores static assets (images/css/js) in the browser
- HTTP Headers - `Cache-Control`, `Expires` and `ETag`
- Example: `Cache-Control: public, max-age=31536000`
- For static resources that rarely change

## 2. CDN Caching
- CDN caches the content on the edge server closest to users
- Serve static content (images, CSS, HTML) from Cloudflare, Akamai, CloudFront
- Reduces latency and offloads traffic from your origin server
- Use case: High traffic websites or global users

## 3. Server Side Caching
### a. Page Caching
- Stores the entire rendered HTML page
- Sites with mostly static pages i.e., blogs, landing pages
- NGINX FastCGI Cache

### b. Fragment Caching
- Caching specific parts of the page
- Dynamic pages with reusable components e.g., Footer, Header

### c. Object/Query Caching
- Caches database query results or expensive computations
- Redis, Memcached
- High-load applications, e-commerce product listings, doctor listings

## 4. API Response Caching
- Cache HTTP responses at the server, edge (CDN), or client
- Use:
  - `Cache-Control` headers
  - Conditional requests with `ETag`
  - `Last-Modified` headers
- Ideal for REST APIs or GraphQL APIs where data doesn't change frequently

## 5. Prefetching or Preloading
- **Prefetch**: Downloads resources likely to be needed in the future
- **Preload**: Instructs the browser to load important assets as soon as possible
- **Preconnect**: Instructs the browser to create a connection with a particular domain or URL
- Example:
  ```html
  <link rel="prefetch" href="/next-page.html">
  <link rel="preload" href="/styles.css" as="style">
  <link rel="preconnect" href="https://example.com">
  ```
- Enhanced perceived performance, especially in SPAs and multi-page applications

## 6. Service Workers
- Runs in the background and intercepts network requests to serve cached responses or offline pages
- Use cases:
  - PWAs (Progressive Web Apps)
  - Offline-first apps
- Tool: Workbox (Google's library for service workers)

## 7. Cache Invalidation Strategies
- **Time To Live (TTL)**: Automatically expires cached data after a set time
- **Manual Purging**: Clear cache manually via API or admin panel
- **Versioning URLs**: Example: `/app.v2.js` to bust the cache
- **ETag/Last-Modified**: Conditional requests to validate cached content

## 8. Database Caching
### Levels:
- **Query Caching**: Stores results of expensive queries
- **In-Memory Caching**: Tools like Redis or Memcached for rapid data retrieval
- **Materialized Views**: Precomputed tables for faster access
