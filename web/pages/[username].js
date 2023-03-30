import { Poppins } from 'next/font/google'
import styles from '../styles/Username.module.css'

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getUser } from '../services/user';

const poppins = Poppins({ weight: "400", subsets: ['latin'] })

export default function UserPage() {
  const router = useRouter();
  const { username } = router.query;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser(username);
      setUserData(data);
    };
    fetchData();
  }, [username]);

  if (userData === "") {
    return (
      <p className={poppins.className}>User not found!</p>
    )
  }

  return (  
    <>
      {
        userData ?
        (
          <div className={styles.wrapper}>
            <p className={poppins.className}>
              Hello, my name is <span>{username}</span></p>
            <h1 className={poppins.className}>My history</h1>
            <p className={poppins.className}>You can contact me by</p>
            <div className={poppins.className}>
              <Link href={userData.linkedin}>
                <button>LinkedIn</button>
              </Link>
              
              <Link href={userData.github}>
                <button>GitHub</button>
              </Link>
            </div>
          </div>  
        ) : (
          <p className={poppins.className}>Loading...</p>
        )
      }
    </>
   
  );
}
