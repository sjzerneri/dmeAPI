$(document).ready(function () {
    /*function to sanitize the JSON if it is necesary*/
    function sanitizeJSON(unsanitized) {
        var str = JSON.stringify(unsanitized);
        var output = str.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\f/g, "\\f").replace(/"/g, "\\\"").replace(/'/g, "\\\'").replace(/\&/g, "\\&");
        return output;
    }
    /*
            JSONP, which stands for "JSON with Padding" (and JSON stands for JavaScript Object Notation), is a way to get data from another domain that bypasses CORS (Cross Origin Resource Sharing) rules. CORS is a set of "rules," about transferring data between sites that have a different domain name from the client.
            We would like to see if we can get an valid JSON result which we can parse in using AJAX
            */
    /* Update all the parameters for your API test*/

    $.ajax({
        /* update API end point */
        url: "https://data.medicare.gov/resource/pqp8-xrjv.json",
        method: "GET",
        dataType: "json",
        data: {
            "$$app_token": "7QuT4kttVYO8PCZrRHMNk26bc",
            "$select": "count(dba_name)"
        },
        success: function (data, status, jqxhr) {
            console.log("Request received:", data[0].count_dba_name);
        },
        error: function (jqxhr, status, error) {
            console.log("Something went wrong!");
        }
    });
});
