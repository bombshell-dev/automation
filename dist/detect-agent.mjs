import { t as setOutput } from "./utils-DQae65qb.mjs";
//#region node_modules/.pnpm/@unveil+identity@1.6.0/node_modules/@unveil/identity/dist/index.mjs
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == `object` || typeof i == `function`) for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, a) => (a = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule ? t(a, `default`, {
	value: n,
	enumerable: !0
}) : a, n));
function l(e) {
	return e ? e === `organic` ? {
		label: `Organic activity`,
		description: `No automation signals detected in the analyzed events.`
	} : e === `mixed` ? {
		label: `Mixed activity`,
		description: `Activity patterns show a mix of organic and automated signals.`
	} : {
		label: `Automation signals`,
		description: `Activity patterns show signs of automation.`
	} : {
		label: `Analysis unavailable`,
		description: `Classification is not available for this account.`
	};
}
const u = {
	THRESHOLD_HUMAN: 70,
	THRESHOLD_SUSPICIOUS: 50,
	AGE_NEW_ACCOUNT: 30,
	AGE_YOUNG_ACCOUNT: 90,
	POINTS_NEW_ACCOUNT: 20,
	POINTS_YOUNG_ACCOUNT: 10,
	POINTS_NO_IDENTITY: 15,
	FOLLOW_RATIO_FOLLOWING_MIN: 50,
	FOLLOW_RATIO_FOLLOWERS_MAX: 5,
	POINTS_FOLLOW_RATIO: 15,
	POINTS_ZERO_FOLLOWERS: 10,
	MIN_EVENTS_FOR_ANALYSIS: 10,
	FORKS_EXTREME: 8,
	FORKS_HIGH: 5,
	FORKS_SURGE_SEVERE: 20,
	FORKS_SURGE_EXTREME_HIGH: 35,
	FORK_SURGE_WINDOW_HOURS: 24,
	POINTS_FORK_SURGE: 51,
	POINTS_FORK_SURGE_SEVERE: 70,
	POINTS_FORK_SURGE_EXTREME_HIGH: 85,
	POINTS_MULTIPLE_FORKS: 26,
	FORKS_SURGE_48H: 18,
	FORKS_SURGE_72H: 25,
	POINTS_FORK_SURGE_48H: 65,
	POINTS_FORK_SURGE_72H: 75,
	FORKS_PER_DAY_HIGH: 8,
	POINTS_FORKS_PER_DAY_HIGH: 55,
	CONSECUTIVE_FORK_DAYS: 6,
	POINTS_CONSECUTIVE_FORK_DAYS: 40,
	FORK_COMBINED_ACTIVITY_MIN: 12,
	FORK_COMBINED_BRANCHES: 6,
	FORK_COMBINED_PRS: 8,
	POINTS_FORK_COMBINED_ACTIVITY: 60,
	FORK_REPO_DIVERSITY_HIGH: 15,
	POINTS_FORK_DIVERSITY: 45,
	HOURS_PER_DAY_INHUMAN: 16,
	CONSECUTIVE_INHUMAN_DAYS_EXTREME: 3,
	FREQUENT_MARATHON_DAYS: 5,
	POINTS_NONSTOP_ACTIVITY: 40,
	POINTS_FREQUENT_MARATHON: 25,
	REPO_SPREAD_EXTREME: 30,
	REPO_SPREAD_HIGH: 20,
	POINTS_EXTREME_REPO_SPREAD_YOUNG: 30,
	POINTS_WIDE_REPO_SPREAD_YOUNG: 15,
	PRS_TODAY_EXTREME: 15,
	PRS_WEEK_HIGH: 20,
	POINTS_PR_BURST: 20,
	POINTS_HIGH_PR_FREQUENCY: 15,
	PRS_DAY_EXTREME: 30,
	POINTS_PRS_DAY_EXTREME: 45,
	PRS_WEEK_EXTREME: 100,
	POINTS_PRS_WEEK_EXTREME: 50,
	PRS_WEEK_VERY_HIGH: 50,
	POINTS_PRS_WEEK_VERY_HIGH: 40,
	PRS_SPAM_VOLUME: 50,
	REPOS_SPAM_SPREAD: 15,
	POINTS_PR_SPAM_COMBINED: 45,
	PRS_SPAM_DENSITY_PER_WEEK: 15,
	PRS_SPAM_ROLLING_30DAYS: 60,
	POINTS_PR_SPAM_DISTRIBUTED: 45,
	EXTERNAL_PRS_MIN: 15,
	PERSONAL_REPOS_LOW: 5,
	POINTS_PR_ONLY_CONTRIBUTOR: 20,
	FOREIGN_RATIO_FULL: 1,
	FOREIGN_RATIO_HIGH: .95,
	PERSONAL_REPOS_NONE: 3,
	POINTS_NO_PERSONAL_ACTIVITY: 30,
	POINTS_EXTERNAL_FOCUS: 20,
	ZERO_REPOS_MIN_EVENTS: 20,
	POINTS_ZERO_REPOS_ACTIVE: 20,
	ACTIVITY_DENSITY_HIGH: 8,
	ACTIVITY_DENSITY_EXTREME: 15,
	POINTS_HIGH_ACTIVITY_DENSITY: 15,
	POINTS_EXTREME_ACTIVITY_DENSITY: 25,
	HOURLY_ACTIVITY_HIGH: 50,
	HOURLY_ACTIVITY_EXTREME: 100,
	TIGHT_COMMIT_SECONDS: 600,
	TIGHT_COMMIT_THRESHOLD: 3,
	POINTS_TIGHT_BURST: 25,
	CREATE_EVENTS_MIN: 5,
	CREATE_BURST_EXTREME: 16,
	CREATE_BURST_HIGH: 8,
	POINTS_CREATE_BURST_EXTREME: 35,
	POINTS_CREATE_BURST_HIGH: 25,
	HOURS_ACTIVE_EXTREME: 21,
	HOURS_ACTIVE_EXTREME_ESTABLISHED: 23,
	EVENTS_PER_HOUR_MIN: 2,
	POINTS_24_7_ACTIVITY: 25,
	AGE_ESTABLISHED_ACCOUNT: 1e3,
	EVENT_TYPE_DIVERSITY_MIN: 2,
	POINTS_LOW_DIVERSITY: 20,
	ISSUE_COMMENT_SPAM_WINDOW_MINUTES: 2,
	ISSUE_COMMENT_SPRAY_EXTREME: 15,
	ISSUE_COMMENT_SPRAY_HIGH: 10,
	ISSUE_COMMENT_MIN_FOR_SPRAY: 10,
	POINTS_ISSUE_COMMENT_SPRAY_EXTREME: 40,
	POINTS_ISSUE_COMMENT_SPRAY_HIGH: 30,
	PR_COMMENT_SPAM_WINDOW_MINUTES: 2,
	PR_COMMENT_SPRAY_EXTREME: 12,
	PR_COMMENT_SPRAY_HIGH: 8,
	PR_COMMENT_MIN_FOR_SPRAY: 8,
	POINTS_PR_COMMENT_SPRAY_EXTREME: 38,
	POINTS_PR_COMMENT_SPRAY_HIGH: 28,
	BRANCH_PR_TIME_WINDOW_SECONDS: 90,
	BRANCH_PR_PATTERN_MIN_PAIRS: 8,
	BRANCH_PR_PATTERN_MIN_PAIRS_ESTABLISHED: 15,
	BRANCH_PR_PATTERN_RATIO_MIN: .65,
	BRANCH_PR_PATTERN_RATIO_MIN_ESTABLISHED: .8,
	BRANCH_PR_COUNT_RATIO_MIN: .65,
	POINTS_BRANCH_PR_AUTOMATION: 35,
	RAPID_PR_SPAM_MIN_PRS: 4,
	RAPID_PR_SPAM_MIN_PRS_ESTABLISHED: 6,
	POINTS_RAPID_PR_SPAM: 40,
	CLOSED_PR_SPAM_MIN: 5,
	CLOSED_PR_SPAM_MIN_ESTABLISHED: 8,
	CLOSED_PR_REPO_SPREAD: 3,
	CLOSED_PR_TIME_WINDOW_MINUTES: 60,
	POINTS_CLOSED_PR_SPAM: 35,
	POINTS_CLOSED_PR_SPAM_HIGH: 55,
	POINTS_CLOSED_PR_SPAM_EXTREME: 75,
	POINTS_CLOSED_PR_SPAM_BURST_EXTREME: 80,
	AI_COMMIT_MIN_COMMITS: 5,
	AI_COMMIT_TIERS: [
		{
			ratio: .9,
			multiplier: 1.5
		},
		{
			ratio: .85,
			multiplier: 1.3
		},
		{
			ratio: .75,
			multiplier: 1.15
		}
	]
};
var d = o(((e, t) => {
	(function(n, r) {
		typeof e == `object` && t !== void 0 ? t.exports = r() : typeof define == `function` && define.amd ? define(r) : (n = typeof globalThis < `u` ? globalThis : n || self).dayjs = r();
	})(e, (function() {
		var e = 1e3, t = 6e4, n = 36e5, r = `millisecond`, i = `second`, a = `minute`, o = `hour`, s = `day`, c = `week`, l = `month`, u = `quarter`, d = `year`, f = `date`, p = `Invalid Date`, m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = {
			name: `en`,
			weekdays: `Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday`.split(`_`),
			months: `January_February_March_April_May_June_July_August_September_October_November_December`.split(`_`),
			ordinal: function(e) {
				var t = [
					`th`,
					`st`,
					`nd`,
					`rd`
				], n = e % 100;
				return `[` + e + (t[(n - 20) % 10] || t[n] || t[0]) + `]`;
			}
		}, _ = function(e, t, n) {
			var r = String(e);
			return !r || r.length >= t ? e : `` + Array(t + 1 - r.length).join(n) + e;
		}, v = {
			s: _,
			z: function(e) {
				var t = -e.utcOffset(), n = Math.abs(t), r = Math.floor(n / 60), i = n % 60;
				return (t <= 0 ? `+` : `-`) + _(r, 2, `0`) + `:` + _(i, 2, `0`);
			},
			m: function e(t, n) {
				if (t.date() < n.date()) return -e(n, t);
				var r = 12 * (n.year() - t.year()) + (n.month() - t.month()), i = t.clone().add(r, l), a = n - i < 0, o = t.clone().add(r + (a ? -1 : 1), l);
				return +(-(r + (n - i) / (a ? i - o : o - i)) || 0);
			},
			a: function(e) {
				return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
			},
			p: function(e) {
				return {
					M: l,
					y: d,
					w: c,
					d: s,
					D: f,
					h: o,
					m: a,
					s: i,
					ms: r,
					Q: u
				}[e] || String(e || ``).toLowerCase().replace(/s$/, ``);
			},
			u: function(e) {
				return e === void 0;
			}
		}, y = `en`, b = {};
		b[y] = g;
		var x = `$isDayjsObject`, S = function(e) {
			return e instanceof E || !(!e || !e[x]);
		}, C = function e(t, n, r) {
			var i;
			if (!t) return y;
			if (typeof t == `string`) {
				var a = t.toLowerCase();
				b[a] && (i = a), n && (b[a] = n, i = a);
				var o = t.split(`-`);
				if (!i && o.length > 1) return e(o[0]);
			} else {
				var s = t.name;
				b[s] = t, i = s;
			}
			return !r && i && (y = i), i || !r && y;
		}, w = function(e, t) {
			if (S(e)) return e.clone();
			var n = typeof t == `object` ? t : {};
			return n.date = e, n.args = arguments, new E(n);
		}, T = v;
		T.l = C, T.i = S, T.w = function(e, t) {
			return w(e, {
				locale: t.$L,
				utc: t.$u,
				x: t.$x,
				$offset: t.$offset
			});
		};
		var E = function() {
			function g(e) {
				this.$L = C(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[x] = !0;
			}
			var _ = g.prototype;
			return _.parse = function(e) {
				this.$d = function(e) {
					var t = e.date, n = e.utc;
					if (t === null) return /* @__PURE__ */ new Date(NaN);
					if (T.u(t)) return /* @__PURE__ */ new Date();
					if (t instanceof Date) return new Date(t);
					if (typeof t == `string` && !/Z$/i.test(t)) {
						var r = t.match(m);
						if (r) {
							var i = r[2] - 1 || 0, a = (r[7] || `0`).substring(0, 3);
							return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a);
						}
					}
					return new Date(t);
				}(e), this.init();
			}, _.init = function() {
				var e = this.$d;
				this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds();
			}, _.$utils = function() {
				return T;
			}, _.isValid = function() {
				return this.$d.toString() !== p;
			}, _.isSame = function(e, t) {
				var n = w(e);
				return this.startOf(t) <= n && n <= this.endOf(t);
			}, _.isAfter = function(e, t) {
				return w(e) < this.startOf(t);
			}, _.isBefore = function(e, t) {
				return this.endOf(t) < w(e);
			}, _.$g = function(e, t, n) {
				return T.u(e) ? this[t] : this.set(n, e);
			}, _.unix = function() {
				return Math.floor(this.valueOf() / 1e3);
			}, _.valueOf = function() {
				return this.$d.getTime();
			}, _.startOf = function(e, t) {
				var n = this, r = !!T.u(t) || t, u = T.p(e), p = function(e, t) {
					var i = T.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
					return r ? i : i.endOf(s);
				}, m = function(e, t) {
					return T.w(n.toDate()[e].apply(n.toDate(`s`), (r ? [
						0,
						0,
						0,
						0
					] : [
						23,
						59,
						59,
						999
					]).slice(t)), n);
				}, h = this.$W, g = this.$M, _ = this.$D, v = `set` + (this.$u ? `UTC` : ``);
				switch (u) {
					case d: return r ? p(1, 0) : p(31, 11);
					case l: return r ? p(1, g) : p(0, g + 1);
					case c:
						var y = this.$locale().weekStart || 0, b = (h < y ? h + 7 : h) - y;
						return p(r ? _ - b : _ + (6 - b), g);
					case s:
					case f: return m(v + `Hours`, 0);
					case o: return m(v + `Minutes`, 1);
					case a: return m(v + `Seconds`, 2);
					case i: return m(v + `Milliseconds`, 3);
					default: return this.clone();
				}
			}, _.endOf = function(e) {
				return this.startOf(e, !1);
			}, _.$set = function(e, t) {
				var n, c = T.p(e), u = `set` + (this.$u ? `UTC` : ``), p = (n = {}, n[s] = u + `Date`, n[f] = u + `Date`, n[l] = u + `Month`, n[d] = u + `FullYear`, n[o] = u + `Hours`, n[a] = u + `Minutes`, n[i] = u + `Seconds`, n[r] = u + `Milliseconds`, n)[c], m = c === s ? this.$D + (t - this.$W) : t;
				if (c === l || c === d) {
					var h = this.clone().set(f, 1);
					h.$d[p](m), h.init(), this.$d = h.set(f, Math.min(this.$D, h.daysInMonth())).$d;
				} else p && this.$d[p](m);
				return this.init(), this;
			}, _.set = function(e, t) {
				return this.clone().$set(e, t);
			}, _.get = function(e) {
				return this[T.p(e)]();
			}, _.add = function(r, u) {
				var f, p = this;
				r = Number(r);
				var m = T.p(u), h = function(e) {
					var t = w(p);
					return T.w(t.date(t.date() + Math.round(e * r)), p);
				};
				if (m === l) return this.set(l, this.$M + r);
				if (m === d) return this.set(d, this.$y + r);
				if (m === s) return h(1);
				if (m === c) return h(7);
				var g = (f = {}, f[a] = t, f[o] = n, f[i] = e, f)[m] || 1, _ = this.$d.getTime() + r * g;
				return T.w(_, this);
			}, _.subtract = function(e, t) {
				return this.add(-1 * e, t);
			}, _.format = function(e) {
				var t = this, n = this.$locale();
				if (!this.isValid()) return n.invalidDate || p;
				var r = e || `YYYY-MM-DDTHH:mm:ssZ`, i = T.z(this), a = this.$H, o = this.$m, s = this.$M, c = n.weekdays, l = n.months, u = n.meridiem, d = function(e, n, i, a) {
					return e && (e[n] || e(t, r)) || i[n].slice(0, a);
				}, f = function(e) {
					return T.s(a % 12 || 12, e, `0`);
				}, m = u || function(e, t, n) {
					var r = e < 12 ? `AM` : `PM`;
					return n ? r.toLowerCase() : r;
				};
				return r.replace(h, (function(e, r) {
					return r || function(e) {
						switch (e) {
							case `YY`: return String(t.$y).slice(-2);
							case `YYYY`: return T.s(t.$y, 4, `0`);
							case `M`: return s + 1;
							case `MM`: return T.s(s + 1, 2, `0`);
							case `MMM`: return d(n.monthsShort, s, l, 3);
							case `MMMM`: return d(l, s);
							case `D`: return t.$D;
							case `DD`: return T.s(t.$D, 2, `0`);
							case `d`: return String(t.$W);
							case `dd`: return d(n.weekdaysMin, t.$W, c, 2);
							case `ddd`: return d(n.weekdaysShort, t.$W, c, 3);
							case `dddd`: return c[t.$W];
							case `H`: return String(a);
							case `HH`: return T.s(a, 2, `0`);
							case `h`: return f(1);
							case `hh`: return f(2);
							case `a`: return m(a, o, !0);
							case `A`: return m(a, o, !1);
							case `m`: return String(o);
							case `mm`: return T.s(o, 2, `0`);
							case `s`: return String(t.$s);
							case `ss`: return T.s(t.$s, 2, `0`);
							case `SSS`: return T.s(t.$ms, 3, `0`);
							case `Z`: return i;
						}
						return null;
					}(e) || i.replace(`:`, ``);
				}));
			}, _.utcOffset = function() {
				return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
			}, _.diff = function(r, f, p) {
				var m, h = this, g = T.p(f), _ = w(r), v = (_.utcOffset() - this.utcOffset()) * t, y = this - _, b = function() {
					return T.m(h, _);
				};
				switch (g) {
					case d:
						m = b() / 12;
						break;
					case l:
						m = b();
						break;
					case u:
						m = b() / 3;
						break;
					case c:
						m = (y - v) / 6048e5;
						break;
					case s:
						m = (y - v) / 864e5;
						break;
					case o:
						m = y / n;
						break;
					case a:
						m = y / t;
						break;
					case i:
						m = y / e;
						break;
					default: m = y;
				}
				return p ? m : T.a(m);
			}, _.daysInMonth = function() {
				return this.endOf(l).$D;
			}, _.$locale = function() {
				return b[this.$L];
			}, _.locale = function(e, t) {
				if (!e) return this.$L;
				var n = this.clone(), r = C(e, t, !0);
				return r && (n.$L = r), n;
			}, _.clone = function() {
				return T.w(this.$d, this);
			}, _.toDate = function() {
				return new Date(this.valueOf());
			}, _.toJSON = function() {
				return this.isValid() ? this.toISOString() : null;
			}, _.toISOString = function() {
				return this.$d.toISOString();
			}, _.toString = function() {
				return this.$d.toUTCString();
			}, g;
		}(), D = E.prototype;
		return w.prototype = D, [
			[`$ms`, r],
			[`$s`, i],
			[`$m`, a],
			[`$H`, o],
			[`$W`, s],
			[`$M`, l],
			[`$y`, d],
			[`$D`, f]
		].forEach((function(e) {
			D[e[1]] = function(t) {
				return this.$g(t, e[0], e[1]);
			};
		})), w.extend = function(e, t) {
			return e.$i ||= (e(t, E, w), !0), w;
		}, w.locale = C, w.isDayjs = S, w.unix = function(e) {
			return w(1e3 * e);
		}, w.en = b[y], w.Ls = b, w.p = {}, w;
	}));
})), f = o(((e, t) => {
	(function(n, r) {
		typeof e == `object` && t !== void 0 ? t.exports = r() : typeof define == `function` && define.amd ? define(r) : (n = typeof globalThis < `u` ? globalThis : n || self).dayjs_plugin_minMax = r();
	})(e, (function() {
		return function(e, t, n) {
			var r = function(e, t) {
				if (!t || !t.length || t.length === 1 && !t[0] || t.length === 1 && Array.isArray(t[0]) && !t[0].length) return null;
				var n;
				t.length === 1 && t[0].length > 0 && (t = t[0]), n = (t = t.filter((function(e) {
					return e;
				})))[0];
				for (var r = 1; r < t.length; r += 1) t[r].isValid() && !t[r][e](n) || (n = t[r]);
				return n;
			};
			n.max = function() {
				return r(`isAfter`, [].slice.call(arguments, 0));
			}, n.min = function() {
				return r(`isBefore`, [].slice.call(arguments, 0));
			};
		};
	}));
})), p = c(o(((e, t) => {
	(function(n, r) {
		typeof e == `object` && t !== void 0 ? t.exports = r() : typeof define == `function` && define.amd ? define(r) : (n = typeof globalThis < `u` ? globalThis : n || self).dayjs_plugin_utc = r();
	})(e, (function() {
		var e = `minute`, t = /[+-]\d\d(?::?\d\d)?/g, n = /([+-]|\d\d)/g;
		return function(r, i, a) {
			var o = i.prototype;
			a.utc = function(e) {
				return new i({
					date: e,
					utc: !0,
					args: arguments
				});
			}, o.utc = function(t) {
				var n = a(this.toDate(), {
					locale: this.$L,
					utc: !0
				});
				return t ? n.add(this.utcOffset(), e) : n;
			}, o.local = function() {
				return a(this.toDate(), {
					locale: this.$L,
					utc: !1
				});
			};
			var s = o.parse;
			o.parse = function(e) {
				e.utc && (this.$u = !0), this.$utils().u(e.$offset) || (this.$offset = e.$offset), s.call(this, e);
			};
			var c = o.init;
			o.init = function() {
				if (this.$u) {
					var e = this.$d;
					this.$y = e.getUTCFullYear(), this.$M = e.getUTCMonth(), this.$D = e.getUTCDate(), this.$W = e.getUTCDay(), this.$H = e.getUTCHours(), this.$m = e.getUTCMinutes(), this.$s = e.getUTCSeconds(), this.$ms = e.getUTCMilliseconds();
				} else c.call(this);
			};
			var l = o.utcOffset;
			o.utcOffset = function(r, i) {
				var a = this.$utils().u;
				if (a(r)) return this.$u ? 0 : a(this.$offset) ? l.call(this) : this.$offset;
				if (typeof r == `string` && (r = function(e) {
					e === void 0 && (e = ``);
					var r = e.match(t);
					if (!r) return null;
					var i = (`` + r[0]).match(n) || [
						`-`,
						0,
						0
					], a = i[0], o = 60 * i[1] + +i[2];
					return o === 0 ? 0 : a === `+` ? o : -o;
				}(r), r === null)) return this;
				var o = Math.abs(r) <= 16 ? 60 * r : r;
				if (o === 0) return this.utc(i);
				var s = this.clone();
				if (i) return s.$offset = o, s.$u = !1, s;
				var c = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
				return (s = this.local().add(o + c, e)).$offset = o, s.$x.$localOffset = c, s;
			};
			var u = o.format;
			o.format = function(e) {
				var t = e || (this.$u ? `YYYY-MM-DDTHH:mm:ss[Z]` : ``);
				return u.call(this, t);
			}, o.valueOf = function() {
				var e = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
				return this.$d.valueOf() - 6e4 * e;
			}, o.isUTC = function() {
				return !!this.$u;
			}, o.toISOString = function() {
				return this.toDate().toISOString();
			}, o.toString = function() {
				return this.toDate().toUTCString();
			};
			var d = o.toDate;
			o.toDate = function(e) {
				return e === `s` && this.$offset ? a(this.format(`YYYY-MM-DD HH:mm:ss:SSS`)).toDate() : d.call(this);
			};
			var f = o.diff;
			o.diff = function(e, t, n) {
				if (e && this.$u === e.$u) return f.call(this, e, t, n);
				var r = this.local(), i = a(e).local();
				return f.call(r, i, t, n);
			};
		};
	}));
}))(), 1), m = c(f(), 1), h = c(d(), 1);
const g = [
	/co-authored-by:.*<[^>]*@anthropic\.com>/i,
	/co-authored-by:.*<[^>]*copilot@github\.com>/i,
	/co-authored-by:.*<[^>]*\+copilot@users\.noreply\.github\.com>/i,
	/co-authored-by:\s*github copilot\b/i,
	/co-authored-by:.*<[^>]*@cursor\.com>/i,
	/co-authored-by:.*devin-ai-integration/i,
	/co-authored-by:\s*devin ai\b/i,
	/co-authored-by:.*<[^>]*@openai\.com>/i,
	/co-authored-by:\s*openai[- ]codex\b/i,
	/co-authored-by:\s*aider\s*[(<]/i,
	/co-authored-by:.*openhands-agent/i,
	/co-authored-by:.*<[^>]*@sourcegraph\.com>/i,
	/generated with \[?claude code/i,
	/🤖 generated with/i,
	/generated by cursor/i
];
function _(e) {
	return e ? g.some((t) => t.test(e)) : !1;
}
function v(e) {
	let t = /* @__PURE__ */ new Set(), n = 0, r = 0;
	for (let i of e) {
		if (i.sha) {
			if (t.has(i.sha)) continue;
			t.add(i.sha);
		}
		n++, _(i.message) && r++;
	}
	let i = n > 0 ? r / n : 0;
	return {
		totalCommits: n,
		aiCommits: r,
		ratio: i
	};
}
function y(e) {
	let t = [];
	return e < u.AGE_NEW_ACCOUNT ? t.push({
		label: `Recently created`,
		points: u.POINTS_NEW_ACCOUNT,
		detail: `Account is ${e} days old`
	}) : e < u.AGE_YOUNG_ACCOUNT && t.push({
		label: `Young account`,
		points: u.POINTS_YOUNG_ACCOUNT,
		detail: `Account is ${e} days old`
	}), t;
}
h.default.extend(p.default);
function b(e) {
	let t = [];
	if (e.length < u.MIN_EVENTS_FOR_ANALYSIS) return t;
	let n = /* @__PURE__ */ new Map();
	e.forEach((e) => {
		let t = h.default.utc(e.created_at).format(`YYYY-MM-DD`), r = h.default.utc(e.created_at).hour();
		n.has(t) || n.set(t, /* @__PURE__ */ new Set()), n.get(t)?.add(r);
	});
	let r = null, i = 24;
	if (n.forEach((t, n) => {
		let a = t.size, o = e.filter((e) => h.default.utc(e.created_at).format(`YYYY-MM-DD`) === n).length;
		if (a >= u.HOURS_ACTIVE_EXTREME && o >= 10 && o / a >= u.EVENTS_PER_HOUR_MIN) {
			let e = Array.from(t).sort((e, t) => e - t), s = e[0], c = 24 - e[e.length - 1] + s - 1;
			for (let t = 0; t < e.length - 1; t++) {
				let n = e[t + 1] - e[t] - 1;
				c = Math.max(c, n);
			}
			c < i && (i = c, r = {
				day: n,
				hoursActive: a,
				restGap: c,
				eventCount: o
			});
		}
	}), r) {
		let e = r;
		if (i < 3) {
			let n = u.POINTS_24_7_ACTIVITY;
			i < 1 && (n = Math.round(n * 1.5)), t.push({
				label: `24/7 activity pattern`,
				points: n,
				amplifiable: !0,
				detail: `${e.day}: active across ${e.hoursActive} hours with only ${i} hour${i === 1 ? `` : `s`} rest`
			});
		}
	}
	return t;
}
function x(e, t) {
	let n = [], r = t >= u.AGE_ESTABLISHED_ACCOUNT, i = r ? u.BRANCH_PR_PATTERN_MIN_PAIRS_ESTABLISHED : u.BRANCH_PR_PATTERN_MIN_PAIRS, a = r ? u.BRANCH_PR_PATTERN_RATIO_MIN_ESTABLISHED : u.BRANCH_PR_PATTERN_RATIO_MIN, o = e.filter((e) => e.type === `CreateEvent` && e.payload?.ref_type === `branch`), s = e.filter((e) => e.type === `PullRequestEvent` && e.payload?.action === `opened`);
	if (o.length >= i && s.length >= i && o.length / s.length >= u.BRANCH_PR_COUNT_RATIO_MIN) {
		let e = o.map((e) => ({
			event: e,
			time: (0, h.default)(e.created_at)
		})).sort((e, t) => e.time.valueOf() - t.time.valueOf()), t = s.map((e) => ({
			event: e,
			time: (0, h.default)(e.created_at)
		})).sort((e, t) => e.time.valueOf() - t.time.valueOf()), r = /* @__PURE__ */ new Map();
		for (let e of t) {
			let t = e.event.repo?.name;
			t && (r.has(t) || r.set(t, []), r.get(t)?.push(e));
		}
		let c = 0, l = 0, d = /* @__PURE__ */ new Map();
		for (let t of e) {
			let e = t.event.repo?.name;
			if (!e) continue;
			let n = r.get(e);
			if (!n || n.length === 0) continue;
			d.has(e) || d.set(e, 0);
			let i = d.get(e) ?? 0;
			for (; i < n.length && n[i].time.valueOf() < t.time.valueOf();) i++;
			if (i < n.length) {
				let e = n[i].time.diff(t.time, `second`);
				e >= 0 && e <= u.BRANCH_PR_TIME_WINDOW_SECONDS && (c++, l = Math.max(l, e), i++);
			}
			d.set(e, i);
		}
		if (c >= i) c / o.length >= a && n.push({
			label: `Automated branch/PR workflow`,
			points: u.POINTS_BRANCH_PR_AUTOMATION,
			amplifiable: !0,
			detail: `${c}/${o.length} branch creations followed by PRs within ${l}s`
		});
		else {
			let r = 0, s = 0, c = /* @__PURE__ */ new Set();
			for (let t of e) {
				let e = t.event.repo?.name;
				if (e) {
					let t = e.split(`/`)[1];
					t && c.add(t);
				}
			}
			for (let n of c) {
				let i = e.filter((e) => {
					let t = e.event.repo?.name;
					return t && t.split(`/`)[1] === n;
				}), a = t.filter((e) => {
					let t = e.event.repo?.name;
					return t && t.split(`/`)[1] === n;
				});
				if (i.length > 0 && a.length > 0) {
					let e = 0;
					for (let t of i) {
						for (; e < a.length && a[e].time.valueOf() < t.time.valueOf();) e++;
						if (e < a.length) {
							let n = a[e].time.diff(t.time, `second`);
							n >= 0 && n <= u.BRANCH_PR_TIME_WINDOW_SECONDS && (r++, s = Math.max(s, n), e++);
						}
					}
				}
			}
			r >= i && r / o.length >= a && n.push({
				label: `Automated fork/PR workflow`,
				points: u.POINTS_BRANCH_PR_AUTOMATION,
				amplifiable: !0,
				detail: `${r}/${o.length} fork branches followed by upstream PRs within ${s}s`
			});
		}
	}
	return n;
}
function S(e, t) {
	let n = [], r = t >= u.AGE_ESTABLISHED_ACCOUNT ? u.CLOSED_PR_SPAM_MIN_ESTABLISHED : u.CLOSED_PR_SPAM_MIN, i = e.filter((e) => e.type === `PullRequestEvent` && e.payload?.action === `closed`);
	if (i.length < r) return n;
	let a = new Set(i.map((e) => e.repo?.name).filter((e) => e !== void 0)), o = i.map((e) => (0, h.default)(e.created_at)), s = o.reduce((e, t) => t.isBefore(e) ? t : e), c = o.reduce((e, t) => t.isAfter(e) ? t : e), l = c.diff(s, `minute`), d = c.diff(s, `day`), f = c.diff(s, `day`, !0), p = d > 0 ? `${d}d` : `${Math.ceil(l / 60)}h`, m = /* @__PURE__ */ new Map();
	i.forEach((e) => {
		let t = h.default.utc(e.created_at).format(`YYYY-MM-DD`);
		m.set(t, (m.get(t) || 0) + 1);
	});
	let g = Array.from(m.entries()).filter(([e, t]) => t >= 10).sort((e, t) => t[1] - e[1]).map(([e, t]) => t), _ = ``;
	g.length > 0 && (_ = g.length === 1 ? `, with a spike of ${g[0]} rejections on one day` : `, with spike days of ${g.slice(0, -1).join(`, `) + ` and ${g[g.length - 1]}`} rejections each`);
	let v = u.POINTS_CLOSED_PR_SPAM;
	i.length >= 100 ? v = u.POINTS_CLOSED_PR_SPAM_EXTREME : i.length >= 25 && (v = u.POINTS_CLOSED_PR_SPAM_HIGH);
	let y = f > 0 ? i.length / f : i.length, b = g.length > 0, x = i.length >= 25, S = y >= .5;
	if (a.size >= u.CLOSED_PR_REPO_SPREAD && (b || x || S)) return n.push({
		label: `Closed PR spam scatter`,
		points: v,
		amplifiable: !0,
		detail: `${i.length} PRs were rejected across ${a.size} repositories in ${p}${_}.`
	}), n;
	if (a.size >= 2 && l <= u.CLOSED_PR_TIME_WINDOW_MINUTES) {
		let e = i.length >= 100 ? u.POINTS_CLOSED_PR_SPAM_BURST_EXTREME : v;
		n.push({
			label: `Closed PR spam burst`,
			points: e,
			amplifiable: !0,
			detail: `${i.length} PRs closed across ${a.size} repos in ${l}m (concentrated rejection/spam activity)`
		});
	}
	return n;
}
function C(e) {
	let t = [];
	if (e.length < u.MIN_EVENTS_FOR_ANALYSIS) return t;
	let n = e.filter((e) => e.type === `IssueCommentEvent`);
	if (n.length >= u.ISSUE_COMMENT_MIN_FOR_SPRAY) {
		let e = n.map((e) => ({
			event: e,
			time: (0, h.default)(e.created_at)
		})).sort((e, t) => e.time.valueOf() - t.time.valueOf()), r = 0, i = 0, a = 0, o = 0, s = u.ISSUE_COMMENT_SPAM_WINDOW_MINUTES;
		for (let t = 0; t < e.length; t++) {
			let n = e[t]?.time;
			for (; e[o] && n && n.diff(e[o].time, `minute`, !0) > s;) o++;
			let c = new Set(e.slice(o, t + 1).map((e) => e.event.repo?.name).filter((e) => e !== void 0));
			c.size > r && (r = c.size, i = o, a = t);
		}
		if (r >= u.ISSUE_COMMENT_SPRAY_EXTREME) {
			let n = e[i]?.time, o = e[a]?.time, s = a - i + 1, c = o && n ? Math.round(o.diff(n, `minute`, !0)) : 0;
			t.push({
				label: `Issue comment spam`,
				points: u.POINTS_ISSUE_COMMENT_SPRAY_EXTREME,
				amplifiable: !0,
				detail: `${s} comments to ${r} different repos in just ${c} minute${c === 1 ? `` : `s`}`
			});
		} else if (r >= u.ISSUE_COMMENT_SPRAY_HIGH) {
			let n = e[i]?.time, o = e[a]?.time, s = a - i + 1, c = o && n ? Math.round(o.diff(n, `minute`, !0)) : 0;
			t.push({
				label: `High comment frequency across repos`,
				points: u.POINTS_ISSUE_COMMENT_SPRAY_HIGH,
				amplifiable: !0,
				detail: `${s} comments to ${r} different repos in just ${c} minute${c === 1 ? `` : `s`}`
			});
		}
	}
	let r = e.filter((e) => e.type === `PullRequestReviewCommentEvent`);
	if (r.length >= u.PR_COMMENT_MIN_FOR_SPRAY) {
		let e = r.map((e) => ({
			event: e,
			time: (0, h.default)(e.created_at)
		})).sort((e, t) => e.time.valueOf() - t.time.valueOf()), n = 0, i = 0, a = 0, o = 0, s = u.PR_COMMENT_SPAM_WINDOW_MINUTES;
		for (let t = 0; t < e.length; t++) {
			let r = e[t]?.time;
			for (; e[o] && r && r.diff(e[o].time, `minute`, !0) > s;) o++;
			let c = new Set(e.slice(o, t + 1).map((e) => {
				let t = e.event.repo?.name, n = e.event.payload?.pull_request?.number;
				return t && n ? `${t}#${n}` : t;
			}).filter((e) => e !== void 0));
			c.size > n && (n = c.size, i = o, a = t);
		}
		if (n >= u.PR_COMMENT_SPRAY_EXTREME) {
			let r = e[i]?.time, o = e[a]?.time, s = a - i + 1, c = o && r ? Math.round(o.diff(r, `minute`, !0)) : 0;
			t.push({
				label: `PR comment spam`,
				points: u.POINTS_PR_COMMENT_SPRAY_EXTREME,
				amplifiable: !0,
				detail: `${s} comments on ${n} different PRs in just ${c} minute${c === 1 ? `` : `s`}`
			});
		} else if (n >= u.PR_COMMENT_SPRAY_HIGH) {
			let r = e[i]?.time, o = e[a]?.time, s = a - i + 1, c = o && r ? Math.round(o.diff(r, `minute`, !0)) : 0;
			t.push({
				label: `High PR comment frequency`,
				points: u.POINTS_PR_COMMENT_SPRAY_HIGH,
				amplifiable: !0,
				detail: `${s} comments on ${n} different PRs in just ${c} minute${c === 1 ? `` : `s`}`
			});
		}
	}
	return t;
}
function w(e) {
	if (e.length === 0) return 0;
	let t = e.reduce((e, t) => e + t, 0);
	if (t === 0) return 0;
	let n = 0;
	for (let r of e) if (r > 0) {
		let e = r / t;
		n -= e * Math.log2(e);
	}
	return n;
}
function T(e) {
	return e.length <= 1 ? 0 : w(e) / Math.log2(e.length);
}
function E(e) {
	let t = [];
	if (e.length < u.MIN_EVENTS_FOR_ANALYSIS) return t;
	let n = /* @__PURE__ */ new Map();
	e.forEach((e) => {
		e.type && n.set(e.type, (n.get(e.type) || 0) + 1);
	});
	let r = T(Array.from(n.values())), i = new Set(e.map((e) => e.type).filter((e) => e != null)), a = i.has(`IssueCommentEvent`) || i.has(`PullRequestReviewEvent`) || i.has(`PullRequestReviewCommentEvent`), o = i.has(`WatchEvent`), s = i.size <= 3 && r < .8, c = r > .85 && i.size >= 5;
	return (s || c) && !a && !o && t.push({
		label: `Narrow activity focus`,
		points: u.POINTS_LOW_DIVERSITY,
		amplifiable: !0,
		detail: `${i.size} event types (entropy: ${r.toFixed(2)}) without interpersonal interactions`
	}), t;
}
h.default.extend(p.default), h.default.extend(m.default);
function D(e) {
	let t = [], n = e.filter((e) => e.type === `ForkEvent`);
	if (n.length < u.FORKS_HIGH) return t;
	let r = n.map((e) => (0, h.default)(e.created_at)).sort((e, t) => e.valueOf() - t.valueOf()), i = (e) => {
		let t = 0, n = 0;
		for (let i = 0; i < r.length; i++) {
			let a = r[i];
			for (; a && a.diff(r[n], `hour`, !0) > e;) n++;
			let o = i - n + 1;
			t = Math.max(t, o);
		}
		return t;
	}, a = i(24), o = i(48), s = i(72), c = null;
	if (a >= u.FORKS_SURGE_EXTREME_HIGH ? c = {
		label: `Extreme fork automation`,
		points: u.POINTS_FORK_SURGE_EXTREME_HIGH,
		amplifiable: !0,
		detail: `${a} repositories forked in rapid succession (within 24 hours)`
	} : a >= u.FORKS_SURGE_SEVERE ? c = {
		label: `Severe fork surge`,
		points: u.POINTS_FORK_SURGE_SEVERE,
		amplifiable: !0,
		detail: `${a} repositories forked in rapid succession (within 24 hours)`
	} : a >= u.FORKS_EXTREME ? c = {
		label: `Fork spike detected`,
		points: u.POINTS_FORK_SURGE,
		amplifiable: !0,
		detail: `Burst of ${a} fork events in a single 24-hour window`
	} : a >= u.FORKS_HIGH ? c = {
		label: `Multiple forks`,
		points: u.POINTS_MULTIPLE_FORKS,
		amplifiable: !0,
		detail: `${a} repositories forked in a single 24-hour window`
	} : o >= u.FORKS_SURGE_48H ? c = {
		label: `Multi-day fork surge`,
		points: u.POINTS_FORK_SURGE_48H,
		amplifiable: !0,
		detail: `Concentrated burst: ${o} repositories forked over 2 days`
	} : s >= u.FORKS_SURGE_72H && (c = {
		label: `Severe multi-day fork surge`,
		points: u.POINTS_FORK_SURGE_72H,
		amplifiable: !0,
		detail: `Rapid burst: ${s} repositories forked over 72 hours`
	}), c && t.push(c), r.length > 0 && !c) {
		let e = r[0], i = r[r.length - 1];
		if (e && i) {
			let r = Math.max(1, i.diff(e, `day`)), a = n.length / r;
			a >= u.FORKS_PER_DAY_HIGH && r >= 3 && t.push({
				label: `Sustained fork rate`,
				points: u.POINTS_FORKS_PER_DAY_HIGH,
				amplifiable: !0,
				detail: `Average of ${a.toFixed(1)} forks per day over ${r} days (${n.length} total)`
			});
		}
	}
	let l = /* @__PURE__ */ new Set();
	if (n.forEach((e) => {
		l.add(h.default.utc(e.created_at).format(`YYYY-MM-DD`));
	}), l.size >= u.CONSECUTIVE_FORK_DAYS && !c) {
		let e = Array.from(l).map((e) => (0, h.default)(e, `YYYY-MM-DD`)).sort((e, t) => e.valueOf() - t.valueOf()), r = 1, i = 1;
		for (let t = 1; t < e.length; t++) {
			let n = e[t - 1], a = e[t];
			a && n && a.diff(n, `day`) === 1 ? (i++, r = Math.max(r, i)) : i = 1;
		}
		if (r >= u.CONSECUTIVE_FORK_DAYS) {
			let e = l.size;
			t.push({
				label: `Extended forking pattern`,
				points: u.POINTS_CONSECUTIVE_FORK_DAYS,
				amplifiable: !0,
				detail: `Forking activity on ${e} days (${r} consecutive), ${n.length} repositories total`
			});
		}
	}
	let d = new Set(n.map((e) => e.repo?.name).filter((e) => e !== void 0));
	if (d.size >= u.FORK_REPO_DIVERSITY_HIGH && !c) {
		let e = ``;
		if (r.length > 1) {
			let t = r[0], n = r[r.length - 1].diff(t, `day`);
			e = n > 0 ? ` over ${n} days` : ` in a short timeframe`;
		}
		t.push({
			label: `Fork scatter pattern`,
			points: u.POINTS_FORK_DIVERSITY,
			amplifiable: !0,
			detail: `Targeting ${d.size} different repositories${e}`
		});
	}
	return t;
}
function O(e) {
	let t = [], n = e.filter((e) => e.type === `ForkEvent`);
	if (n.length < u.FORK_COMBINED_ACTIVITY_MIN || e.length < u.MIN_EVENTS_FOR_ANALYSIS) return t;
	let r = new Set(n.map((e) => e.repo?.name).filter((e) => e !== void 0)), i = e.filter((e) => e.type === `CreateEvent` && e.payload?.ref_type === `branch`).filter((e) => r.has(e.repo?.name || ``)), a = e.filter((e) => e.type === `PullRequestEvent` && e.payload?.action === `opened`).filter((e) => r.has(e.repo?.name || ``));
	if (i.length >= u.FORK_COMBINED_BRANCHES && a.length >= u.FORK_COMBINED_PRS) {
		let e = n.map((e) => (0, h.default)(e.created_at)), r = i.map((e) => (0, h.default)(e.created_at)), o = a.map((e) => (0, h.default)(e.created_at)), s = h.default.max(e), c = h.default.min(r), l = h.default.min(o);
		if (s && c && l && s.isBefore(c) && c.isBefore(l) && a.length <= i.length * 2) {
			let e = n.length + i.length + a.length;
			t.push({
				label: `Suspicious chained automations`,
				points: u.POINTS_FORK_COMBINED_ACTIVITY,
				amplifiable: !0,
				detail: `${e} chained repository operations: ${n.length} forks followed by ${i.length} branches, then ${a.length} pull requests (based on available event history)`
			});
		}
	}
	return t;
}
h.default.extend(m.default);
function k(e) {
	let t = [];
	if (e.length < u.MIN_EVENTS_FOR_ANALYSIS) return t;
	let n = e.filter((e) => e.type === `PullRequestEvent` && e.payload?.action === `opened`), r = n.map((e) => (0, h.default)(e.created_at)), i = h.default.max(r) || (0, h.default)(), a = i.subtract(1, `day`), o = i.subtract(1, `week`), s = n.filter((e) => (0, h.default)(e.created_at).isAfter(a)), c = n.filter((e) => (0, h.default)(e.created_at).isAfter(o));
	if (s.length >= u.PRS_DAY_EXTREME && t.push({
		label: `Extreme PR spam (daily)`,
		points: u.POINTS_PRS_DAY_EXTREME,
		amplifiable: !0,
		detail: `${s.length} PRs in the last 24 hours`
	}), c.length >= u.PRS_WEEK_EXTREME ? t.push({
		label: `Extreme PR spam (weekly)`,
		points: u.POINTS_PRS_WEEK_EXTREME,
		amplifiable: !0,
		detail: `${c.length} PRs in the last 7 days`
	}) : c.length >= u.PRS_WEEK_VERY_HIGH && t.push({
		label: `Very high PR spam frequency`,
		points: u.POINTS_PRS_WEEK_VERY_HIGH,
		amplifiable: !0,
		detail: `${c.length} PRs in the last 7 days`
	}), n.length >= u.PRS_SPAM_VOLUME && !t.some((e) => e.label === `Extreme PR spam (daily)` || e.label === `Extreme PR spam (weekly)` || e.label === `Very high PR spam frequency`)) {
		let e = new Set(n.map((e) => e.repo?.name).filter((e) => e !== void 0));
		if (e.size >= u.REPOS_SPAM_SPREAD) {
			let r = n.map((e) => (0, h.default)(e.created_at)).sort((e, t) => e.valueOf() - t.valueOf()), a = r[0], o = r[r.length - 1], s = o ? o.diff(a, `days`, !0) : 0, c = s / 7, l = c > 0 ? n.length / c : Infinity, d = i.subtract(30, `days`), f = n.filter((e) => (0, h.default)(e.created_at).isAfter(d)).length, p = l >= u.PRS_SPAM_DENSITY_PER_WEEK, m = f >= u.PRS_SPAM_ROLLING_30DAYS;
			(p || m) && t.push({
				label: `Distributed PR spam pattern`,
				points: u.POINTS_PR_SPAM_DISTRIBUTED,
				amplifiable: !0,
				detail: `${n.length} PRs spread across ${e.size} different repositories${s > 0 ? ` (${l.toFixed(1)} PRs/week)` : ``}`
			});
		}
	}
	return t;
}
function A(e, t) {
	let n = [], r = t >= u.AGE_ESTABLISHED_ACCOUNT ? u.RAPID_PR_SPAM_MIN_PRS_ESTABLISHED : u.RAPID_PR_SPAM_MIN_PRS, i = e.filter((e) => e.type === `PullRequestEvent` && e.payload?.action === `opened`);
	if (i.length < r) return n;
	let a = i.map((e) => ({
		event: e,
		time: (0, h.default)(e.created_at)
	})).sort((e, t) => e.time.valueOf() - t.time.valueOf()), o = /* @__PURE__ */ new Map();
	for (let e of a) {
		let t = e.event.repo?.name;
		t && (o.has(t) || o.set(t, []), o.get(t)?.push(e));
	}
	let s = 0, c = 0, l = ``;
	for (let [e, t] of o.entries()) {
		if (t.length < r) continue;
		let n = 0, i = 0;
		for (let e = 0; e < t.length - 1; e++) {
			let r = t[e + 1].time.diff(t[e].time, `second`);
			r <= u.BRANCH_PR_TIME_WINDOW_SECONDS && (n++, i = Math.max(i, r));
		}
		n > s && (s = n, c = i, l = e);
	}
	return s >= r - 1 && n.push({
		label: `Rapid PR spam to repository`,
		points: u.POINTS_RAPID_PR_SPAM,
		amplifiable: !0,
		detail: `${s + 1} PRs opened to ${l} within ${c}s intervals`
	}), n;
}
function j(e) {
	let t = [];
	if (e.length < u.MIN_EVENTS_FOR_ANALYSIS) return t;
	let n = e.filter((e) => e.type === `CreateEvent` && e.payload?.ref_type === `repository`);
	if (n.length >= u.CREATE_EVENTS_MIN) {
		let e = n.map((e) => (0, h.default)(e.created_at)).sort((e, t) => e.valueOf() - t.valueOf()), r = 0, i = 0;
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			for (; n && n.diff(e[i], `hour`, !0) > 24;) i++;
			let a = t - i + 1;
			r = Math.max(r, a);
		}
		r >= u.CREATE_BURST_EXTREME ? t.push({
			label: `Concentrated repository creation`,
			points: u.POINTS_CREATE_BURST_EXTREME,
			amplifiable: !0,
			detail: `${r} repositories created in a short timeframe (within 24 hours)`
		}) : r >= u.CREATE_BURST_HIGH && t.push({
			label: `Frequent repository creation`,
			points: u.POINTS_CREATE_BURST_HIGH,
			amplifiable: !0,
			detail: `${r} repositories created in a short timeframe (within 24 hours)`
		});
	}
	return t;
}
h.default.extend(m.default);
function M(e, t, n, r) {
	let i = [];
	if (!n || e.length < u.MIN_EVENTS_FOR_ANALYSIS) return i;
	let a = r.toLowerCase(), o = e.filter((e) => e.type === `PushEvent`);
	if (o.length >= u.MIN_EVENTS_FOR_ANALYSIS) {
		let e = o.map((e) => (0, h.default)(e.created_at)).sort((e, t) => e.valueOf() - t.valueOf()), t = 0, n = 0;
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			for (; i && i.diff(e[n], `hour`, !0) > 1;) n++;
			let a = r - n + 1;
			t = Math.max(t, a);
		}
		t >= u.HOURLY_ACTIVITY_EXTREME ? i.push({
			label: `Extreme commit burst`,
			points: u.POINTS_EXTREME_ACTIVITY_DENSITY,
			detail: `${t} commits within 1 hour`
		}) : t >= u.HOURLY_ACTIVITY_HIGH && i.push({
			label: `High commit burst`,
			points: u.POINTS_HIGH_ACTIVITY_DENSITY,
			detail: `${t} commits within 1 hour`
		});
		let r = 0;
		for (let t = 1; t < e.length; t++) e[t] !== void 0 && e[t - 1] !== void 0 && e[t].diff(e[t - 1], `second`) <= u.TIGHT_COMMIT_SECONDS && r++;
		r >= u.TIGHT_COMMIT_THRESHOLD && i.push({
			label: `High commit frequency`,
			points: u.POINTS_TIGHT_BURST,
			detail: `${r + 1} commits within very short intervals`
		});
	}
	let s = e.filter((e) => e.type === `PullRequestEvent` && e.payload?.action === `opened`);
	if (s.length >= u.MIN_EVENTS_FOR_ANALYSIS) {
		let e = s.map((e) => (0, h.default)(e.created_at)), t = h.default.min(e), n = h.default.max(e);
		if (n) {
			let e = Math.max(1, n.diff(t, `day`)), r = s.length / e;
			r >= u.ACTIVITY_DENSITY_EXTREME / 2 ? i.push({
				label: `Very high PR volume`,
				points: u.POINTS_EXTREME_ACTIVITY_DENSITY + 10,
				detail: `${s.length} PRs in ${e} day${e === 1 ? `` : `s`}`
			}) : r >= u.ACTIVITY_DENSITY_HIGH / 2 && i.push({
				label: `High PR volume`,
				points: u.POINTS_HIGH_ACTIVITY_DENSITY + 5,
				detail: `${s.length} PRs in ${e} day${e === 1 ? `` : `s`}`
			});
		}
	}
	let c = new Set([`PushEvent`, `PullRequestEvent`]), l = e.filter((e) => e.type && c.has(e.type) || e.type === `PullRequestReviewEvent` || e.type === `PullRequestReviewCommentEvent`), d = /* @__PURE__ */ new Map();
	l.forEach((e) => {
		if (!e.created_at) return;
		let t = new Date(e.created_at), n = t.toISOString().slice(0, 10);
		d.has(n) || d.set(n, []), d.get(n)?.push(t);
	});
	let f = [];
	if (d.forEach((e, t) => {
		let n = /* @__PURE__ */ new Map();
		e.forEach((e) => {
			let t = e.getUTCHours();
			n.set(t, (n.get(t) || 0) + 1);
		});
		let r = n.size, i = T(Array.from(n.values()));
		r >= u.HOURS_PER_DAY_INHUMAN && i > .8 && f.push(t);
	}), f.length >= u.CONSECUTIVE_INHUMAN_DAYS_EXTREME) {
		f.sort();
		let e = 1, t = 1;
		for (let n = 1; n < f.length; n++) {
			let r = (0, h.default)(f[n - 1]);
			(0, h.default)(f[n]).diff(r, `day`) === 1 ? (e++, t = Math.max(t, e)) : e = 1;
		}
		t >= u.CONSECUTIVE_INHUMAN_DAYS_EXTREME ? i.push({
			label: `Extended daily coding`,
			points: u.POINTS_NONSTOP_ACTIVITY,
			detail: `${t} days in a row with ${u.HOURS_PER_DAY_INHUMAN}+ hours of coding`
		}) : f.length >= u.FREQUENT_MARATHON_DAYS && i.push({
			label: `Frequent long coding days`,
			points: u.POINTS_FREQUENT_MARATHON,
			detail: `${f.length} days with ${u.HOURS_PER_DAY_INHUMAN}+ hours of coding and uniform hourly distribution`
		});
	}
	let p = new Set(e.map((e) => e.repo?.name).filter((e) => e ? e.split(`/`)[0]?.toLowerCase() !== a : !1));
	p.size >= u.REPO_SPREAD_EXTREME ? i.push({
		label: `Highly distributed activity`,
		points: u.POINTS_EXTREME_REPO_SPREAD_YOUNG,
		detail: `Activity spread across ${p.size} external repositories`
	}) : p.size >= u.REPO_SPREAD_HIGH && i.push({
		label: `Distributed activity`,
		points: u.POINTS_WIDE_REPO_SPREAD_YOUNG,
		detail: `Activity spread across ${p.size} external repositories`
	});
	let m = s.filter((e) => {
		let t = e.repo?.name?.split(`/`)[0]?.toLowerCase();
		return t && t !== a;
	}), g = (0, h.default)(), _ = g.subtract(1, `week`), v = g.subtract(1, `day`), y = m.filter((e) => (0, h.default)(e.created_at).isAfter(_)), b = m.filter((e) => (0, h.default)(e.created_at).isAfter(v));
	if (b.length >= u.PRS_TODAY_EXTREME ? i.push({
		label: `High PR volume in the past 24 hours`,
		points: u.POINTS_PR_BURST,
		detail: `${b.length} PRs to other repos in the last 24 hours`
	}) : y.length >= u.PRS_WEEK_HIGH && i.push({
		label: `High PR volume during last week`,
		points: u.POINTS_HIGH_PR_FREQUENCY,
		detail: `${y.length} PRs to other repos this week`
	}), m.length >= u.EXTERNAL_PRS_MIN && t < u.PERSONAL_REPOS_LOW) {
		let e = `${m.length} PRs to other repos, but only ${t} of their own`;
		t === 0 && (e = `${m.length} PRs to other repos, none of their own`), i.push({
			label: `Primarily external contributions`,
			points: u.POINTS_PR_ONLY_CONTRIBUTOR,
			detail: e
		});
	}
	let x = e.filter((e) => {
		let t = e.repo?.name?.split(`/`)[0]?.toLowerCase();
		return t && t !== a;
	}), S = x.length / e.length;
	return x.length > 0 && S >= u.FOREIGN_RATIO_HIGH && t < u.PERSONAL_REPOS_LOW && i.push({
		label: `Mostly external activity`,
		points: u.POINTS_EXTERNAL_FOCUS,
		detail: `${Math.round(S * 100)}% of activity on other people's repos`
	}), i;
}
function N(e, t, n) {
	let r = [];
	return e === 0 && t.length === n.length && n.length >= u.ZERO_REPOS_MIN_EVENTS && r.push({
		label: `Only active on other people's repos`,
		points: u.POINTS_ZERO_REPOS_ACTIVE + u.POINTS_NO_PERSONAL_ACTIVITY,
		detail: `No personal repos, all ${n.length} events are on repos they don't own`
	}), r;
}
h.default.extend(m.default), h.default.extend(p.default);
function P({ createdAt: e, reposCount: t, accountName: n, events: r, excludeRepos: i = [], commits: a = [] }) {
	let o = [], s = i.map((e) => e.toLowerCase()), c = r.filter((e) => {
		let t = e.repo?.name?.toLowerCase();
		return t && !s.includes(t);
	}), l = (0, h.default)().diff(e, `days`), d = c.filter((e) => {
		let t = e.repo?.name?.split(`/`)[0]?.toLowerCase();
		return t && t !== n.toLowerCase();
	}), f = l < u.AGE_YOUNG_ACCOUNT;
	o.push(...y(l)), o.push(...N(t, d, c)), o.push(...j(c)), o.push(...b(c)), o.push(...E(c)), o.push(...C(c)), o.push(...x(c, l)), o.push(...A(c, l)), o.push(...S(c, l)), o.push(...D(c)), o.push(...O(c)), o.push(...M(c, t, f, n)), o.push(...k(c));
	let p = v(a.filter((e) => !e.repo || !s.includes(e.repo.toLowerCase()))), m = p.totalCommits >= u.AI_COMMIT_MIN_COMMITS ? u.AI_COMMIT_TIERS.find((e) => p.ratio >= e.ratio) : void 0, g = o.some((e) => e.amplifiable && e.points > 0);
	if (m) {
		let { ratio: e, aiCommits: t, totalCommits: n } = p, r = Math.round(e * 100), i = g ? `${t}/${n} commits (${r}%) AI-attributed — ${m.multiplier}x multiplier applied to automation signals` : `${t}/${n} commits (${r}%) AI-attributed — no automation signals to amplify`;
		o.push({
			label: `Predominantly AI-attributed commits`,
			points: 0,
			detail: i
		});
	}
	let _ = m?.multiplier ?? 1, w = o.reduce((e, t) => e + (t.amplifiable ? Math.round(t.points * _) : t.points), 0), T = Math.max(0, 100 - w), P = `automation`;
	return T >= u.THRESHOLD_HUMAN ? P = `organic` : T >= u.THRESHOLD_SUSPICIOUS && (P = `mixed`), {
		score: T,
		classification: P,
		flags: o,
		profile: {
			age: l,
			repos: t
		}
	};
}
//#endregion
//#region src/detect-agent.ts
const jsonMode = process.argv.includes("--json");
const log = jsonMode ? console.error : console.log;
const { GITHUB_TOKEN, PR_AUTHOR } = process.env;
if (!GITHUB_TOKEN || !PR_AUTHOR) throw new Error(`Missing input.\nRequired environment variables: GITHUB_TOKEN, PR_AUTHOR\n`);
const headers = {
	Accept: "application/vnd.github+json",
	Authorization: `Bearer ${GITHUB_TOKEN}`,
	"X-GitHub-Api-Version": "2022-11-28"
};
const userRes = await fetch(`https://api.github.com/users/${PR_AUTHOR}`, { headers });
if (!userRes.ok) throw new Error(`Failed to fetch user ${PR_AUTHOR}: ${userRes.status}`);
const user = await userRes.json();
const events = [];
for (let page = 1; page <= 2; page++) {
	const eventsRes = await fetch(`https://api.github.com/users/${PR_AUTHOR}/events/public?per_page=100&page=${page}`, { headers });
	if (!eventsRes.ok) break;
	const pageEvents = await eventsRes.json();
	events.push(...pageEvents);
	if (pageEvents.length < 100) break;
}
const { classification, score, flags } = P({
	accountName: PR_AUTHOR,
	reposCount: user.public_repos,
	createdAt: user.created_at,
	events
});
let verifiedAutomationList = [];
try {
	const response = await fetch(`https://api.github.com/repos/matteogabriele/agentscan/contents/data/verified-automations-list.json`, { headers });
	if (!response.ok) throw new Error(`Failed to fetch verified automations list: ${response.status}`);
	const data = await response.json();
	if ("content" in data) {
		const content = Buffer.from(data.content, "base64").toString("utf-8");
		verifiedAutomationList = JSON.parse(content);
	}
} catch (error) {
	log("Could not fetch verified automations list");
}
const details = !!verifiedAutomationList.find((account) => account.username === PR_AUTHOR) ? {
	label: "Flagged by community",
	description: "This account has been flagged as potentially automated by the community."
} : l(classification);
const flagsTable = flags.map((f) => `| ${f.label} | ${f.points > 0 ? "+" : ""}${f.points} | ${f.detail} |`).join("\n");
const comment = `### ${details.label}

[@${PR_AUTHOR}](https://github.com/${PR_AUTHOR}) ${details.description}

**Classification:** \`${classification}\` (score: ${score})

| Signal | Points | Detail |
|--------|--------|--------|
${flagsTable}

<sub>Analyzed ${events.length} public events via <a href="https://www.npmx.dev/package/@unveil/identity">@unveil/identity</a></sub>`;
log(`Classification: ${classification} (score: ${score})`);
for (const flag of flags) log(`  [${flag.points > 0 ? "+" : ""}${flag.points}] ${flag.label}: ${flag.detail}`);
const isAgent = classification === "automation";
if (jsonMode) console.log(JSON.stringify({
	classification,
	score,
	isAgent,
	comment
}));
else {
	setOutput("CLASSIFICATION", classification);
	setOutput("SCORE", String(score));
	setOutput("IS_AGENT", isAgent ? "true" : "false");
	setOutput("COMMENT", comment);
}
//#endregion
export {};

//# sourceMappingURL=detect-agent.mjs.map