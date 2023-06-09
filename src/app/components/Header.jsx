import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import Image from 'next/image';
import Nav from './Nav';

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/" />
                <Image src='/logo.png' alt='logo' width={100} height={30} />
            </div>
            <Nav/>
        </header>
    )
}

export default Header