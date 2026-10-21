import { useState } from 'react';

const ROUTES = ['Wuse II ↔ Garki · 26 min', 'Gwarinpa ↔ Maitama · 31 min', 'Lugbe ↔ Wuse · 44 min', 'Kubwa ↔ Central · 58 min', 'Jabi ↔ Asokoro · 24 min', 'Gwagwalada ↔ Airport Rd · 70 min', 'Karshi ↔ Karu · 22 min', 'Bwari ↔ Wuse · 65 min'];

const CLASSES = [
  { n: 'Express', eta: '≤ 90 min', price: '₦2,200 flat', body: 'One rider, one parcel, straight line. Phone keeps ringing until handover.' },
  { n: 'Standard', eta: '≤ 4 hrs', price: '₦1,400 + zone', body: 'Pooled van across three zones. Cheapest way to move the office.' },
  { n: 'Bulk run', eta: 'same day', price: 'from ₦18,000', body: 'Up to forty crates, boxes or folded chairs. Tailgate counted a crate.' },
  { n: 'Night dispatch', eta: '≤ 5 hrs', price: '₦2,800 flat', body: 'Documents and medicines after dark. Riders pair up; the city sleeps anyway.' },
];

const MAP = ['WUSE II', 'WUSE', 'MAITAMA', 'ASOKORO', 'GARKI', 'CENTRAL', 'GARKI', 'JABI', 'GWARINPA', 'UTAKO', 'WUYE', 'LUGBE', 'KUBWA', 'KARU', 'NYANYA', 'APO'] as const;

export default function App() {
  const [sent, setSent] = useState(false);
  return (
    <div className="kr">
      <div className="top">
        <a className="brand" href="#top">KUDI<span>RUNNERS</span></a>
        <nav className="tnav">
          <a href="#classes">Delivery classes</a><a href="#coverage">Coverage</a><a href="#proof">Proof</a><a href="#recruit">Ride with us</a>
        </nav>
        <a className="tcta" href="#recruit">Dispatch a parcel</a>
      </div>
      <div className="ticker" aria-hidden="true">
        <div className="tick-in">
          {[...ROUTES, ...ROUTES].map((r, i) => <span key={i}>{r}</span>)}
        </div>
      </div>
      <header className="hero" id="top">
        <p className="kick">SAME-DAY COURIER · ABUJA · 62 RIDERS ON THE ROAD</p>
        <h1>Parcels move at <em>chop-money speed.</em></h1>
        <p className="lede">Booked by phone, WhatsApp or the counter at Wuse Market. Tracked by the rider calling you, as it should be.</p>
        <div className="hstats">
          <div className="hstat"><b>11,400</b><span>parcels this quarter</span></div>
          <div className="hstat"><b>96.4%</b><span>inside promised window</span></div>
          <div className="hstat"><b>17</b><span>zones covered daily</span></div>
        </div>
      </header>
      <section className="classes" id="classes">
        <h2>Four ways a parcel leaves</h2>
        <div className="clgrid">
          {CLASSES.map((c) => (
            <article className="clcard" key={c.n}>
              <div className="cltop"><h3>{c.n}</h3><span className="etachip">{c.eta}</span></div>
              <p>{c.body}</p>
              <b className="clprice">{c.price}</b>
            </article>
          ))}
        </div>
      </section>
      <section className="coverage" id="coverage">
        <div className="covhead"><h2>Coverage, block by block</h2><p>Lit blocks = zones with same-day pickup before 3 PM. The city keeps growing; the map keeps catching up.</p></div>
        <div className="cmap" role="img" aria-label="Coverage map of Abuja zones">
          {MAP.map((z, i) => (
            <div className={i % 5 === 0 ? 'cblock dim' : 'cblock'} key={i + z}><span>{z}</span></div>
          ))}
        </div>
      </section>
      <section className="proof" id="proof">
        <div className="pband">
          <div><b>7 yrs</b><span>no lost crate on bulk runs</span></div>
          <div><b>04:55</b><span>earliest dispatch this week</span></div>
          <div><b>₦0</b><span>booking fee — you pay the run</span></div>
          <div><b>62</b><span>riders, all on motorbikes with boxes</span></div>
        </div>
      </section>
      <section className="recruit" id="recruit">
        <div className="r-in">
          <div>
            <p className="kick light">RIDER RECRUITMENT · ALWAYS OPEN</p>
            <h2>Know Abuja by its shortcuts?</h2>
            <p className="rlede">Bike with a box, papers in order, phone that never dies. We pay per run plus fuel; first week is paired rides.</p>
          </div>
          {sent ? (
            <div className="rsent">Application received — dispatch training holds every Tuesday, 9 AM, Wuse yard.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label>Full name<input required placeholder="Your name" /></label>
              <label>Your zone strength<input required placeholder="e.g. Gwarinpa, Jabi, Kubwa" /></label>
              <label>Bike &amp; papers<select required defaultValue="">
                <option value="" disabled>Choose</option>
                <option>Own bike, papers complete</option><option>Own bike, papers pending</option><option>Need guidance</option>
              </select></label>
              <button type="submit">Apply to ride</button>
            </form>
          )}
        </div>
      </section>
      <section className="nightstrip">
        <p>NIGHT DISPATCH DESK · 8 PM – 5 AM · 0803 000 0000 · DOCUMENTS &amp; MEDICINES ONLY</p>
      </section>
      <footer className="foot">
        <span>© {new Date().getFullYear()} Kudi Runners · Wuse Market counter 12, Abuja.</span>
        <span>PED Forge template draft · batch-3</span>
      </footer>
    </div>
  );
}