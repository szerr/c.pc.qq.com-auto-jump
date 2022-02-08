u = window.location.search.split('url=')
if (u.length > 1) {
    window.location.href = unescape(u[1].split('&')[0])
}
