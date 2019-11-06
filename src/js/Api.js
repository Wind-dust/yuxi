define(function () {
    let baseUrl = 'https://wwwapi.pzlive.vip/';
    let isDebug = false;
    let api = {

        doPost: function (api, data, success) {
            let url = baseUrl + api;
            if (isDebug) {
                console.log('[URL]' + url);
                console.log('[PARM]' + JSON.stringify(data));
            }
            $.post(url,
                data,
                function (obj) {
                    if (isDebug) console.log('[Res]' + JSON.stringify(obj));
                    success(obj);
                }, 'json');
        },

        doGet: function (api, data, success, error) {
            let url = baseUrl + api + data;
            if (isDebug) {
                console.log('[URL]' + url);
                console.log('[PARM]' + JSON.stringify(data));
            }
            $.get(url, function (obj) { obj = JSON.parse(obj); if (isDebug) console.log('[Res]' + JSON.stringify(obj)); success(obj); });
        }

    }
    return api
});