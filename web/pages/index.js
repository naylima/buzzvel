import { Poppins } from 'next/font/google'
import styles from "../styles/Generate.module.css"

import { useState } from 'react';
import { useRouter } from 'next/router';
import QRCode from 'qrcode.react';

import { createUser } from '../services/user';

const poppins = Poppins({ weight: "400", subsets: ['latin'] })

export default function Generate() {

  const [username, setUsername] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const router = useRouter();

  const handleSubmit = async(event) => {
    event.preventDefault();

    try {
      await createUser({username, linkedin, github});

      router.push(`/qrcode?username=${username}&linkedin=${linkedin}&github=${github}`);
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
    
  };

  return (
    <div>
      <h1 className={poppins.className} >QR Code Image Generator</h1>

      <div className={poppins.className} >
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label for="name">Name</label>
            <input 
              className={poppins.className} 
              type="text" 
              name="name" 
              placeholder="Type your name..." 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label for="url">Linkedin URL</label>
            <input 
              className={poppins.className} 
              type="url" 
              name="name" 
              placeholder="Type your Linkedin URL..."
              value={linkedin} 
              onChange={(e) => setLinkedin(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label for="url">Github URL</label>
            <input 
              className={poppins.className} 
              type="url" 
              name="name" 
              placeholder="Type your Github URL..." 
              value={github} 
              onChange={(e) => setGithub(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={poppins.className}>Generate Image</button>
        </form>
      </div>
    </div>
  )
}