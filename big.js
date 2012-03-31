window.onload = function() {
    var s = document.getElementsByTagName('div'), cur = 0;
    if (!s) return;
    function go(n) {
        cur = n;
        var i = 406.419, e = s[n];
        for (var k = 0; k < s.length; k++) s[k].style.display = 'none';
        e.style.display = 'inline';
        e.style.fontSize = i + 'px';
        if (e.firstChild.nodeName === 'IMG') {
            document.body.style.backgroundImage = 'url(' + e.firstChild.src + ')';
            e.firstChild.style.display = 'none';
        } else {
            document.body.style.backgroundImage = '';
        }
        while ( e.offsetWidth > window.innerWidth/1.5 || e.offsetHeight > window.innerHeight/2 ) {
            e.style.fontSize = (i -= 11.089) + 'px';
			e.style.left = ( window.innerWidth - e.offsetWidth )/2 + 'px';
			e.style.top = ( window.innerHeight - e.offsetHeight )/2 + 'px';
        }
        if (window.location.hash !== n) window.location.hash = n;
        document.title = e.textContent || e.innerText;
		console.log(e.style.margin.left, window.innerWidth/2);
    }
    document.onclick = function() {
        go(++cur % (s.length));
    };
    document.onkeydown = function(e) {
        (e.which === 39) && go(Math.min(s.length - 1, ++cur));
        (e.which === 37) && go(Math.max(0, --cur));
    };
    function parse_hash() {
        return Math.max(Math.min(
            s.length - 1,
            parseInt(window.location.hash.substring(1), 10)), 0);
    };
    if (window.location.hash) cur = parse_hash() || cur;
    window.onhashchange = function() {
        var c = parse_hash();
        if (c !== cur) go(c);
    };

    go(cur);
};
