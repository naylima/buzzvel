import { Poppins } from 'next/font/google'
import styles from "../styles/QRcode.module.css"

import { useRouter } from 'next/router';
import QRCode from 'qrcode.react';

const poppins = Poppins({ weight: "400", subsets: ['latin'] })

export default function QRCodePage() {
  const router = useRouter();
  const { username } = router.query;

  if (!username) {
    return (
      <>
        <h1 className={poppins.className}>Usuário não encontrado</h1>
      </>
    );
  }

  const qrCodeData = `http://localhost:3000/${username}`;

  return (
    <div className={styles.wrapper}>
      <h1 className={poppins.className}>{username}</h1>
      <h2 className={poppins.className}>Scan Me</h2>
      <QRCode className={styles.qrCode} value={qrCodeData} size={256} />
    </div>
  );
}
