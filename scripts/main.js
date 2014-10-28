require.config({
    baseUrl: 'scripts/helper',
    paths: {
        jquery: 'jquery'
    }
});

require(["jquery"], function(jquery) {

    if (jquery('.a').length !== 0) {
        require(["a"], function (a) {
            a.status();
        });
    }

    if (jquery('.b').length !== 0) {
        require(["b"], function (b) {
            b.status();
        });
    }

});
