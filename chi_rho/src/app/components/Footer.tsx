import Link from 'next/link';
import { Seal } from '@/components/log';

export default function Footer() {
  return (
    <footer className="lg-footer">
      <div className="lg-wrap lg-footer-grid">
        <div>
          <Seal size={64} />
        </div>
        <div>
          <b>Coaching</b>
          <p>
            <Link href="/coaching">Online &amp; in-person</Link>
            <br />
            <Link href="/coaching/group-classes">Group classes 50+</Link>
            <br />
            <Link href="/apply">Apply</Link>
          </p>
        </div>
        <div>
          <b>Learn</b>
          <p>
            <Link href="/book">Book &amp; journal</Link>
            <br />
            <Link href="/philosophy">Philosophy</Link>
            <br />
            <Link href="/blog">Articles</Link>
            <br />
            <Link href="/templates">Programs</Link>
          </p>
        </div>
        <div>
          <b>About</b>
          <p>
            <Link href="/mystory">My story</Link>
            <br />
            <Link href="/gym">Barbell Club</Link>
            <br />
            <Link href="/faq">FAQ</Link>
            <br />
            <a href="https://chirholifts.com/" target="_blank" rel="noopener noreferrer">Chi-Rho Lifts app</a>
            <br />
            <a href="https://www.stickermule.com/chirhops" target="_blank" rel="noopener noreferrer">Merch</a>
          </p>
        </div>
        <div>
          <b>Reach me</b>
          <p>
            Toledo, Ohio
            <br />
            <span className="lg-sel">(419) 343-9894</span>
            <br />
            <span className="lg-sel">chirhostrength@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="lg-wrap lg-legal">
        <span>© {new Date().getFullYear()} Chi-Rho Power &amp; Strength</span>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
    </footer>
  );
}
