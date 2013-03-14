var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Aden 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Aden").zone(), -180, "2013-01-01T00:00:00+00:00 should be -180 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Aden").zone(), -180, "2013-12-31T23:59:59+00:00 should be -180 minutes offset");

		test.done();
	},

	"Asia/Aden 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Aden").format("HH:mm"), "03:00", "2013-01-01T00:00:00+00:00 should be 03:00 in Asia/Aden");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Aden").format("HH:mm"), "02:59", "2013-12-31T23:59:59+00:00 should be 02:59 in Asia/Aden");

		test.done();
	}
};