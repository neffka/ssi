var geoip = require('geoip-lite'),
	request = require('superagent'),
	fs = require('fs'),
	path = require('path'),
	ipaddr = require('ipaddr.js');

var loadSos = b => {
	var sos = [];
	if (0 < b.length) {
		clus = [];
		b.charAt(0);
		for (var f = 1, c = {}, h = 0, c = h = 0, u, q = 0, e = 0, w = [], C = [], x = [], D = []; f < b.length;)
			if (u = (b.charCodeAt(f++) - 97 - e) % 26, 0 > u && (u += 26), q *= 16, q += u, e += 7, 1 == c) {
				if (0 == h) w.push(q), 4 == w.length && h++;
				else if (1 == h) C.push(q), 3 == C.length && h++;
				else if (2 == h) x.push(q), 3 == x.length && h++;
				else if (3 == h && (D.push(q), 1 == D.length)) {
					c = {};
					for (h = u = 0; h < C.length; h++) u *= 256, u += C[h];
					for (h = C = 0; h < x.length; h++) C *= 256, C += x[h];
					c.ip = w.join(".");
					c.po = u;
					c.ac = C;
					c.wg = C + 5;
					c.clu = D[0];
					clus[c.clu] ?
						w = clus[c.clu] : (w = {}, clus[c.clu] = w, w.sis = [], w.ptms = [], w.swg = 0, w.tac = 0, w.sos = []);
					c.cluo = w;
					w.swg += c.wg;
					w.sos.push(c);
					w.tac += C;
					sos.push(c);
					w = [];
					C = [];
					x = [];
					D = [];
					h = 0
				}
				c = q = 0
			} else c++;
	}
	return sos;
}


module.exports = () => {
	request.get('http://slither.io/i33628.txt')
		.end((err, res) => {
			if (err) {
				console.log(err);
			} else {
				var ips = loadSos(res.text),
					servers = [];
 				for (var i = 0; i < ips.length; i++) {
					servers.push(geoip.lookup(ipaddr.process(ips[i].ip).toString()));
				};
				fs.writeFileSync(path.resolve(__dirname, `../../../logs/servers_info.json`), JSON.stringify(servers));
			}
		});
};
