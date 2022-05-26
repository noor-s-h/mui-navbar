import Link from '../../Link';

export default function NavLink({ label, href, navClose }) {
  return (
    <>
        <Link
          sx={{ display: "block", textDecoration: 'none', fontWeight: '500' }}
          color="inherit"
          href={href}
          onClick={navClose}
        >
          {label}
        </Link>
    </>
  );
}
