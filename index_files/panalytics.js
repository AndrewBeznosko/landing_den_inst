var pAnalytics = pAnalytics || (function () {

    return {
        version: "0.1",
        position: null,
        vid: null,
        args: {},
        firstTLDs: "ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|be|bf|bg|bh|bi|bj|bm|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|cl|cm|cn|co|cr|cu|cv|cw|cx|cz|de|dj|dk|dm|do|dz|ec|ee|eg|es|et|eu|fi|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|im|in|io|iq|ir|is|it|je|jo|jp|kg|ki|km|kn|kp|kr|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|na|nc|ne|nf|ng|nl|no|nr|nu|nz|om|pa|pe|pf|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|yt".split('|'),
        secondTLDs: "com|edu|gov|net|mil|org|nom|sch|caa|res|off|gob|int|tur|ip6|uri|urn|asn|act|nsw|qld|tas|vic|pro|biz|adm|adv|agr|arq|art|ato|bio|bmd|cim|cng|cnt|ecn|eco|emp|eng|esp|etc|eti|far|fnd|fot|fst|g12|ggf|imb|ind|inf|jor|jus|leg|lel|mat|med|mus|not|ntr|odo|ppg|psc|psi|qsl|rec|slg|srv|teo|tmp|trd|vet|zlg|web|ltd|sld|pol|fin|k12|lib|pri|aip|fie|eun|sci|prd|cci|pvt|mod|idv|rel|sex|gen|nic|abr|bas|cal|cam|emr|fvg|laz|lig|lom|mar|mol|pmn|pug|sar|sic|taa|tos|umb|vao|vda|ven|mie|北海道|和歌山|神奈川|鹿児島|ass|rep|tra|per|ngo|soc|grp|plc|its|air|and|bus|can|ddr|jfk|mad|nrw|nyc|ski|spy|tcm|ulm|usa|war|fhs|vgs|dep|eid|fet|fla|flå|gol|hof|hol|sel|vik|cri|iwi|ing|abo|fam|gok|gon|gop|gos|aid|atm|gsm|sos|elk|waw|est|aca|bar|cpa|jur|law|sec|plo|www|bir|cbg|jar|khv|msk|nov|nsk|ptz|rnd|spb|stv|tom|tsk|udm|vrn|cmw|kms|nkz|snz|pub|fhv|red|ens|nat|rns|rnu|bbs|tel|bel|kep|nhs|dni|fed|isa|nsn|gub|e12|tec|орг|обр|упр|alt|nis|jpn|mex|ath|iki|nid|gda|inc".split('|'),
        init: function () {
            this.vid = this.uuidv4();
            this.args = this.getFileParams('panalytics');
            this.setId();
            this.send();
        },
        setCookie: function (name, value) {
            let max_age = 60 * 60 * 24 * 360 * 2;
            let domain = this.getDomain(location.hostname);
            document.cookie = name + "=" + (value || "") + ';domain=' + domain + ';max-age=' + max_age + "; path=/";
        },
        getCookie: function (name) {
            let nameEQ = name + "=";
            let ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },
        getFileParams: function (script_name) {
            let scripts = document.getElementsByTagName("script");
            for (let i = 0; i < scripts.length; i++) {
                if (scripts[i].src.indexOf("/" + script_name) > -1) {
                    let pa = scripts[i].src.split("?").pop().split("&");
                    let p = function (src) {
                        let a = document.createElement('a');
                        a.href = src;

                        return {
                            "protocol": a.protocol,
                            "host": a.hostname,
                            "port": a.port
                        }
                    }(scripts[i].src);
                    for (let j = 0; j < pa.length; j++) {
                        let kv = pa[j].split("=");
                        p[kv[0]] = kv[1];
                    }
                    return p;
                }
            }
            return {};
        },
        getDomain: function (s) {
            s = s.replace(/^www\./, '');

            let parts = s.split('.');

            while (parts.length > 3) {
                parts.shift();
            }

            if (parts.length === 3 && ((parts[1].length > 2 && parts[2].length > 2) || (this.secondTLDs.indexOf(parts[1]) === -1) && this.firstTLDs.indexOf(parts[2]) === -1)) {
                parts.shift();
            }

            return parts.join('.');
        },
        setId: function () {
            let id = this.getId();
            if (!id) {
                let i = this.getInfo();
                id = this.hash(i.browserEngine + i.browserLanguage + i.timezone + i.browserPlatform + i.browserVersion1a + i.browserVersion1b + i.sizeScreenH + i.sizeScreenW);
                this.setCookie('_paid', id);
            }
            return id;
        },
        getId: function () {
            return this.getCookie('_paid');
        },
        hash: function (s) {
            let h = 0, l = s.length, i = 0;
            if (l > 0)
                while (i < l)
                    h = (h << 5) - h + s.charCodeAt(i++) | 0;
            h |= 0;
            return Math.abs(h);
        },
        getPosition: function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    this.position = position;
                    return position;
                }, function (e) {
                });
            }
            return null;
        },
        getReferrer: function () {
            let referrer = document.referrer;
            // if (document.referrer) {
            //     referrer = document.referrer.split('://')[1];
            //     referrer = referrer.split(referrer.split('/', 1))[1]
            // }
            return referrer;
        },
        getInfo: function () {
            return {
                "host": location.host,
                "location": location.pathname,
                "query": location.search,
                "referrer": this.getReferrer(),
                "timeOpened": new Date(),
                "timezone": (new Date()).getTimezoneOffset() / 60,
                "browserName": navigator.appName,
                "browserEngine": navigator.product,
                "browserVersion1a": navigator.appVersion,
                "browserVersion1b": navigator.userAgent,
                "browserLanguage": navigator.language,
                "browserOnline": navigator.onLine,
                "browserPlatform": navigator.platform,
                "javaEnabled": navigator.javaEnabled(),
                "dataCookiesEnabled": navigator.cookieEnabled,
                "sizeScreenW": screen.width,
                "sizeScreenH": screen.height,
                "sizeDocW": document.width,
                "sizeDocH": document.height,
                "sizeInW": innerWidth,
                "sizeInH": innerHeight,
                "sizeAvailW": screen.availWidth,
                "sizeAvailH": screen.availHeight,
                "scrColorDepth": screen.colorDepth,
                "scrPixelDepth": screen.pixelDepth
                //
                // latitude(){return position.coords.latitude},
                // longitude(){return position.coords.longitude},
                // accuracy(){return position.coords.accuracy},
                // altitude(){return position.coords.altitude},
                // altitudeAccuracy(){return position.coords.altitudeAccuracy},
                // heading(){return position.coords.heading},
                // speed(){return position.coords.speed},
                // timestamp(){return position.timestamp},
            };
        },
        uuidv4: function () {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        },
        serialize: function (obj, prefix) {
            let str = [],
                p;
            for (p in obj) {
                if (obj.hasOwnProperty(p)) {
                    let k = prefix ? prefix + "[" + p + "]" : p,
                        v = obj[p];
                    str.push((v !== null && typeof v === "object") ?
                        this.serialize(v, k) :
                        encodeURIComponent(k) + "=" + encodeURIComponent(v));
                }
            }
            return str.join("&");
        },
        tag: function (d) {

            let i = pAnalytics.getInfo();
            let data = {
                '_id': this.getId(),
                '_vid': this.vid,
                '_tag': d.tag
            };

            for (let j in d.data) {
                data[j] = d.data[j];
            }

            if (navigator.sendBeacon) {
                navigator.sendBeacon(pAnalytics.args.protocol + '//' + pAnalytics.args.host + (pAnalytics.args.port ? ':' + pAnalytics.args.port : '') + '/v1/tag?' + this.serialize(data));
            } else {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("POST", pAnalytics.args.protocol + '//' + pAnalytics.args.host + (pAnalytics.args.port ? ':' + pAnalytics.args.port : '') + '/v1/tag?' + this.serialize(data), true);
                xmlHttp.send(null);
                return xmlHttp.responseText;
            }
        },
        send: function () {
            document.addEventListener('DOMContentLoaded', function () {
                let i = pAnalytics.getInfo();
                let img = document.createElement('img');
                img.width = 1;
                img.height = 1;
                img.style.display = 'none';
                img.src = pAnalytics.args.protocol + '//' + pAnalytics.args.host + (pAnalytics.args.port ? ':' + pAnalytics.args.port : '') + '/v1/visit?c=' + pAnalytics.args['cid']
                    + '&u=' + pAnalytics.getId()
                    + '&v=' + pAnalytics.vid
                    + '&r=' + encodeURI(i.location)
                    + '&q=' + encodeURIComponent(i.query.substr(1))
                    + '&rf=' + encodeURI(i.referrer);
                document.getElementsByTagName('body')[0].appendChild(img);

                // let url = pAnalytics.args.protocol + '//' + pAnalytics.args.host + (pAnalytics.args.port ? ':' + pAnalytics.args.port : '') + '/v1/visit?c=' + pAnalytics.args['cid']
                //     + '&u=' + pAnalytics.getId()
                //     + '&r=' + encodeURI(i.location)
                //     + '&q=' + encodeURIComponent(i.query.substr(1))
                //     + '&rf=' + encodeURI(i.referrer);
                //
                // var xmlHttp = new XMLHttpRequest();
                // xmlHttp.open("GET", url, true);
                // xmlHttp.send(null);
                //
                // xmlHttp.onreadystatechange = function () {
                //     if (xmlHttp.readyState === 4) {
                //         let response = JSON.parse(xmlHttp.responseText);
                //         pAnalytics.vid = response.vid
                //     }
                // }

            });
        }
    };

}());

pAnalytics.init();


