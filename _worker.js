export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const match = url.pathname.match(/^\/b\/([^/]+)\/?$/);

    if (match) {
      const slug = match[1];

      url.pathname = "/profile.html";
      url.searchParams.set("p", slug);

      return env.ASSETS.fetch(
        new Request(url, request)
      );
    }

    return env.ASSETS.fetch(request);
  }
};
