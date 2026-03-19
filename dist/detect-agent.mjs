import { t as setOutput } from "./utils-DQae65qb.mjs";
//#region node_modules/.pnpm/voight-kampff-test@2.2.1/node_modules/voight-kampff-test/dist/index.mjs
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
const l = {
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
	POINTS_FORK_SURGE: 30,
	POINTS_MULTIPLE_FORKS: 20,
	HOURS_PER_DAY_INHUMAN: 16,
	CONSECUTIVE_INHUMAN_DAYS_EXTREME: 3,
	FREQUENT_MARATHON_DAYS: 5,
	POINTS_NONSTOP_ACTIVITY: 40,
	POINTS_FREQUENT_MARATHON: 25,
	CONSECUTIVE_DAYS_STREAK: 21,
	POINTS_CONTINUOUS_ACTIVITY: 25,
	REPO_SPREAD_EXTREME: 30,
	REPO_SPREAD_HIGH: 20,
	POINTS_EXTREME_REPO_SPREAD_YOUNG: 30,
	POINTS_WIDE_REPO_SPREAD_YOUNG: 15,
	PRS_TODAY_EXTREME: 15,
	PRS_WEEK_HIGH: 20,
	POINTS_PR_BURST: 20,
	POINTS_HIGH_PR_FREQUENCY: 15,
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
	EVENTS_PER_HOUR_MIN: 2,
	POINTS_24_7_ACTIVITY: 25,
	EVENT_TYPE_DIVERSITY_MIN: 2,
	POINTS_LOW_DIVERSITY: 20,
	ISSUE_COMMENT_SPAM_WINDOW_MINUTES: 2,
	ISSUE_COMMENT_SPRAY_EXTREME: 15,
	ISSUE_COMMENT_SPRAY_HIGH: 10,
	ISSUE_COMMENT_MIN_FOR_SPRAY: 10,
	POINTS_ISSUE_COMMENT_SPRAY_EXTREME: 40,
	POINTS_ISSUE_COMMENT_SPRAY_HIGH: 30
};
var u = o(((e, t) => {
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
})), d = o(((e, t) => {
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
})), f = c(u(), 1), p = c(d(), 1);
f.default.extend(p.default);
function m({ createdAt: e, reposCount: t, accountName: n, events: r }) {
	let i = [], a = (0, f.default)().diff(e, `days`);
	a < l.AGE_NEW_ACCOUNT ? i.push({
		label: `Recently created`,
		points: l.POINTS_NEW_ACCOUNT,
		detail: `Account is ${a} days old`
	}) : a < l.AGE_YOUNG_ACCOUNT && i.push({
		label: `Young account`,
		points: l.POINTS_YOUNG_ACCOUNT,
		detail: `Account is ${a} days old`
	});
	let o = r.filter((e) => {
		let t = e.repo?.name?.split(`/`)[0]?.toLowerCase();
		return t && t !== n.toLowerCase();
	}), s = t === 0 && o.length === r.length;
	s && r.length >= l.ZERO_REPOS_MIN_EVENTS && i.push({
		label: `Only active on other people's repos`,
		points: l.POINTS_ZERO_REPOS_ACTIVE + l.POINTS_NO_PERSONAL_ACTIVITY,
		detail: `No personal repos, all ${r.length} events are on repos they don't own`
	});
	let c = a < l.AGE_YOUNG_ACCOUNT;
	if (r.length >= l.MIN_EVENTS_FOR_ANALYSIS) {
		let e = r.filter((e) => e.type === `CreateEvent` && e.payload?.ref_type === `repository`);
		if (e.length >= l.CREATE_EVENTS_MIN) {
			let t = e.map((e) => (0, f.default)(e.created_at)).sort((e, t) => e.valueOf() - t.valueOf()), n = 0, r = 0;
			for (let e = 0; e < t.length; e++) {
				let i = t[e];
				for (; i && i.diff(t[r], `hour`, !0) > 24;) r++;
				let a = e - r + 1;
				n = Math.max(n, a);
			}
			n >= l.CREATE_BURST_EXTREME ? i.push({
				label: `Concentrated repository creation`,
				points: l.POINTS_CREATE_BURST_EXTREME,
				detail: `${n} repositories created in a short timeframe (within 24 hours)`
			}) : n >= l.CREATE_BURST_HIGH && i.push({
				label: `Frequent repository creation`,
				points: l.POINTS_CREATE_BURST_HIGH,
				detail: `${n} repositories created in a short timeframe (within 24 hours)`
			});
		}
		let t = /* @__PURE__ */ new Map();
		if (r.forEach((e) => {
			let n = (0, f.default)(e.created_at).hour();
			t.set(n, (t.get(n) || 0) + 1);
		}), r.length > 0 && t.size > 0) {
			let e = t.size, n = Array.from(t.values()), a = r.length / e, o = a, s = n.reduce((e, t) => e + (t - o) ** 2, 0) / n.length, c = Math.sqrt(s) / o, u = Array.from(t.keys()).sort((e, t) => e - t), d = u[0], f = u[u.length - 1], p = d !== void 0 && f !== void 0 ? 24 - f + d : 0;
			for (let e = 0; e < u.length - 1; e++) {
				let t = u[e], n = u[e + 1];
				t !== void 0 && n !== void 0 && (p = Math.max(p, n - t - 1));
			}
			let m = c < .3, h = p < 3, g = a >= l.EVENTS_PER_HOUR_MIN;
			if (e >= l.HOURS_ACTIVE_EXTREME && g && (m || h)) {
				let t = l.POINTS_24_7_ACTIVITY;
				m && h && (t = Math.round(t * 1.5)), i.push({
					label: `24/7 activity pattern`,
					points: t,
					detail: `Active ${e}/24 hours, ${p}h max rest, ${a.toFixed(1)} events/hour`
				});
			}
		}
		let n = new Set(r.map((e) => e.type)), a = n.has(`IssueCommentEvent`) || n.has(`PullRequestReviewEvent`) || n.has(`PullRequestReviewCommentEvent`), o = n.has(`WatchEvent`);
		n.size <= l.EVENT_TYPE_DIVERSITY_MIN && !a && !o && i.push({
			label: `Narrow activity focus`,
			points: l.POINTS_LOW_DIVERSITY,
			detail: `Activity concentrated on ${n.size} specific event types without interpersonal interactions`
		});
		let s = r.filter((e) => e.type === `IssueCommentEvent`);
		if (s.length >= l.ISSUE_COMMENT_MIN_FOR_SPRAY) {
			let e = s.map((e) => ({
				event: e,
				time: (0, f.default)(e.created_at)
			})).sort((e, t) => e.time.valueOf() - t.time.valueOf()), t = 0, n = 0, r = 0, a = 0, o = l.ISSUE_COMMENT_SPAM_WINDOW_MINUTES;
			for (let i = 0; i < e.length; i++) {
				let s = e[i]?.time;
				for (; e[a] && s && s.diff(e[a].time, `minute`, !0) > o;) a++;
				let c = new Set(e.slice(a, i + 1).map((e) => e.event.repo?.name).filter((e) => e !== void 0));
				c.size > t && (t = c.size, n = a, r = i);
			}
			if (t >= l.ISSUE_COMMENT_SPRAY_EXTREME) {
				let a = e[n]?.time, o = e[r]?.time, s = r - n + 1, c = o && a ? Math.round(o.diff(a, `minute`, !0) * 10) / 10 : 0, u = c > 0 ? Math.round(s / c * 10) / 10 : s;
				i.push({
					label: `Issue comment spam`,
					points: l.POINTS_ISSUE_COMMENT_SPRAY_EXTREME,
					detail: `${s} comments to ${t} different repos in ${c} minutes (${u} comments/min)`
				});
			} else if (t >= l.ISSUE_COMMENT_SPRAY_HIGH) {
				let a = e[n]?.time, o = e[r]?.time, s = r - n + 1, c = o && a ? Math.round(o.diff(a, `minute`, !0) * 10) / 10 : 0, u = c > 0 ? Math.round(s / c * 10) / 10 : s;
				i.push({
					label: `High comment frequency across repos`,
					points: l.POINTS_ISSUE_COMMENT_SPRAY_HIGH,
					detail: `${s} comments to ${t} different repos in ${c} minutes (${u} comments/min)`
				});
			}
		}
	}
	if (c && r.length >= l.MIN_EVENTS_FOR_ANALYSIS) {
		let e = n.toLowerCase(), a = r.filter((e) => e.type === `PushEvent`);
		if (a.length >= l.MIN_EVENTS_FOR_ANALYSIS) {
			let e = a.map((e) => (0, f.default)(e.created_at)).sort((e, t) => e.valueOf() - t.valueOf()), t = 0, n = 0;
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				for (; i && i.diff(e[n], `hour`, !0) > 1;) n++;
				let a = r - n + 1;
				t = Math.max(t, a);
			}
			t >= l.HOURLY_ACTIVITY_EXTREME ? i.push({
				label: `Extreme commit burst`,
				points: l.POINTS_EXTREME_ACTIVITY_DENSITY,
				detail: `${t} commits within 1 hour`
			}) : t >= l.HOURLY_ACTIVITY_HIGH && i.push({
				label: `High commit burst`,
				points: l.POINTS_HIGH_ACTIVITY_DENSITY,
				detail: `${t} commits within 1 hour`
			});
			let r = 0;
			for (let t = 1; t < e.length; t++) e[t] !== void 0 && e[t - 1] !== void 0 && e[t].diff(e[t - 1], `second`) <= l.TIGHT_COMMIT_SECONDS && r++;
			r >= l.TIGHT_COMMIT_THRESHOLD && i.push({
				label: `High commit frequency`,
				points: l.POINTS_TIGHT_BURST,
				detail: `${r + 1} commits within very short intervals`
			});
		}
		let u = r.filter((e) => e.type === `PullRequestEvent`);
		if (u.length >= l.MIN_EVENTS_FOR_ANALYSIS) {
			let e = u.map((e) => (0, f.default)(e.created_at)), t = f.default.min(e), n = f.default.max(e);
			if (n) {
				let e = Math.max(1, n.diff(t, `day`)), r = u.length / e;
				r >= l.ACTIVITY_DENSITY_EXTREME / 2 ? i.push({
					label: `Very high PR volume`,
					points: l.POINTS_EXTREME_ACTIVITY_DENSITY + 10,
					detail: `${u.length} PRs in ${e} day${e === 1 ? `` : `s`}`
				}) : r >= l.ACTIVITY_DENSITY_HIGH / 2 && i.push({
					label: `High PR volume`,
					points: l.POINTS_HIGH_ACTIVITY_DENSITY + 5,
					detail: `${u.length} PRs in ${e} day${e === 1 ? `` : `s`}`
				});
			}
		}
		let d = r.filter((e) => e.type === `ForkEvent`);
		d.length >= l.FORKS_EXTREME ? i.push({
			label: `Many recent forks`,
			points: l.POINTS_FORK_SURGE,
			detail: `${d.length} repos forked recently`
		}) : d.length >= l.FORKS_HIGH && i.push({
			label: `Multiple forks`,
			points: l.POINTS_MULTIPLE_FORKS,
			detail: `${d.length} repos forked recently`
		});
		let p = new Set([`PushEvent`, `PullRequestEvent`]), m = r.filter((e) => e.type && p.has(e.type) || e.type === `PullRequestReviewEvent` || e.type === `PullRequestReviewCommentEvent`), h = /* @__PURE__ */ new Map();
		m.forEach((e) => {
			if (!e.created_at) return;
			let t = new Date(e.created_at), n = t.toISOString().slice(0, 10);
			h.has(n) || h.set(n, []), h.get(n).push(t);
		});
		let g = [];
		if (h.forEach((e, t) => {
			new Set(e.map((e) => e.getUTCHours())).size >= l.HOURS_PER_DAY_INHUMAN && g.push(t);
		}), g.length >= l.CONSECUTIVE_INHUMAN_DAYS_EXTREME) {
			g.sort();
			let e = 1, t = 1;
			for (let n = 1; n < g.length; n++) {
				let r = (0, f.default)(g[n - 1]);
				(0, f.default)(g[n]).diff(r, `day`) === 1 ? (e++, t = Math.max(t, e)) : e = 1;
			}
			t >= l.CONSECUTIVE_INHUMAN_DAYS_EXTREME ? i.push({
				label: `Extended daily coding`,
				points: l.POINTS_NONSTOP_ACTIVITY,
				detail: `${t} days in a row with ${l.HOURS_PER_DAY_INHUMAN}+ hours of coding`
			}) : g.length >= l.FREQUENT_MARATHON_DAYS && i.push({
				label: `Frequent long coding days`,
				points: l.POINTS_FREQUENT_MARATHON,
				detail: `${g.length} days with ${l.HOURS_PER_DAY_INHUMAN}+ hours of coding each`
			});
		}
		let _ = /* @__PURE__ */ new Set();
		r.forEach((e) => {
			_.add((0, f.default)(e.created_at).format(`YYYY-MM-DD`));
		});
		let v = Array.from(_).map((e) => (0, f.default)(e, `YYYY-MM-DD`)).sort((e, t) => e.valueOf() - t.valueOf()), y = 1, b = 1;
		for (let e = 1; e < v.length; e++) {
			let t = v[e - 1], n = v[e];
			n && t && n.diff(t, `day`) === 1 ? (b++, y = Math.max(y, b)) : b = 1;
		}
		if (y >= l.CONSECUTIVE_DAYS_STREAK && i.push({
			label: `Long activity streak`,
			points: l.POINTS_CONTINUOUS_ACTIVITY,
			detail: `${y} days in a row with activity`
		}), c) {
			let t = new Set(r.map((e) => e.repo?.name).filter((t) => t ? t.split(`/`)[0]?.toLowerCase() !== e : !1));
			t.size >= l.REPO_SPREAD_EXTREME ? i.push({
				label: `Highly distributed activity`,
				points: l.POINTS_EXTREME_REPO_SPREAD_YOUNG,
				detail: `Activity spread across ${t.size} external repositories`
			}) : t.size >= l.REPO_SPREAD_HIGH && i.push({
				label: `Distributed activity`,
				points: l.POINTS_WIDE_REPO_SPREAD_YOUNG,
				detail: `Activity spread across ${t.size} external repositories`
			});
		}
		let x = u.filter((t) => {
			let n = t.repo?.name?.split(`/`)[0]?.toLowerCase();
			return n && n !== e;
		}), S = (0, f.default)(), C = S.subtract(1, `week`), w = S.subtract(1, `day`), T = x.filter((e) => (0, f.default)(e.created_at).isAfter(C)), E = x.filter((e) => (0, f.default)(e.created_at).isAfter(w));
		if (E.length >= l.PRS_TODAY_EXTREME ? i.push({
			label: `High PR volume in the past 24 hours`,
			points: l.POINTS_PR_BURST,
			detail: `${E.length} PRs to other repos in the last 24 hours`
		}) : T.length >= l.PRS_WEEK_HIGH && i.push({
			label: `High PR volume during last week`,
			points: l.POINTS_HIGH_PR_FREQUENCY,
			detail: `${T.length} PRs to other repos this week`
		}), x.length >= l.EXTERNAL_PRS_MIN && t < l.PERSONAL_REPOS_LOW) {
			let e = `${x.length} PRs to other repos, but only ${t} of their own`;
			t === 0 && (e = `${x.length} PRs to other repos, none of their own`), i.push({
				label: `Primarily external contributions`,
				points: l.POINTS_PR_ONLY_CONTRIBUTOR,
				detail: e
			});
		}
		let D = o.length / r.length;
		!s && D >= l.FOREIGN_RATIO_HIGH && t < l.PERSONAL_REPOS_LOW && i.push({
			label: `Mostly external activity`,
			points: l.POINTS_EXTERNAL_FOCUS,
			detail: `${Math.round(D * 100)}% of activity on other people's repos`
		});
	}
	let u = i.reduce((e, t) => e += t.points, 0), d = Math.max(0, 100 - u), p = `automation`;
	return d >= l.THRESHOLD_HUMAN ? p = `organic` : d >= l.THRESHOLD_SUSPICIOUS && (p = `mixed`), {
		score: d,
		classification: p,
		flags: i,
		profile: {
			age: a,
			repos: t
		}
	};
}
function h(e) {
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
const { classification, score, flags } = m({
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
} : h(classification);
const flagsTable = flags.map((f) => `| ${f.label} | ${f.points > 0 ? "+" : ""}${f.points} | ${f.detail} |`).join("\n");
const comment = `### ${details.label}

[@${PR_AUTHOR}](https://github.com/${PR_AUTHOR}) ${details.description}

**Classification:** \`${classification}\` (score: ${score})

| Signal | Points | Detail |
|--------|--------|--------|
${flagsTable}

<sub>Analyzed ${events.length} public events via <a href="https://www.npmx.dev/package/voight-kampff-test">voight-kampff-test</a></sub>`;
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