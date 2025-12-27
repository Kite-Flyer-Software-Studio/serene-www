'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/revamp/Button';
import axios from 'axios';

export const DeleteAccountForm = () => {
  const [sendOtp, setSendOtp] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const t = useTranslations('DeleteAccount');

  const onSendOtp = async () => {
    try {
      setIsLoading(true);
      setError(false);
      await axios.post('https://core-service-production.sereneexperience.com/api/auth/mobile-otp', { email });
      setSendOtp(false);
    } catch {
      setError(t('otpError'))
    } finally {
      setIsLoading(false);
    }
  }

  const onDeleteAccount = async () => {
    try {
      setIsLoading(true);
      setError(false);
      const confirm = window.confirm(t('deleteConfirm'));
      if (!confirm) return;
  
      const { data: { accessToken } } = await axios.post('https://core-service-production.sereneexperience.com/api/auth/mobile-login', { email, otp });

      if (accessToken) {
        await axios.delete('https://core-service-production.sereneexperience.com/api/mobile/profile', { headers: { Authorization: `Bearer ${accessToken}` } });
        setDeleteSuccess(true);
      } else {
        throw new Error('No access token');
      }
    } catch {
      setError(t('deleteAccountError'))
    } finally {
      setIsLoading(false);
    }
  }

  console.log(deleteSuccess)

  return (
    <div style={{ height: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'black', gap: 4 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600, textAlign: 'center' }}>{t(deleteSuccess ? 'Title2' : 'Title1')}</h1>
        {!!error && (<p style={{ color: 'red', textAlign: 'center', fontSize: '0.8rem' }}>{error}</p>)}
        {
          !deleteSuccess && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 16 }}>
              <input
                style={{ width: 320, padding: 8, border: '1px solid #ccc', borderRadius: 4 }}
                type={sendOtp ? "email" : "otp"}
                placeholder={t(sendOtp ? "emailPlaceholder" : "otpPlaceholder")}
                value={sendOtp ? email : otp}
                onChange={(e) => sendOtp ? setEmail(e.target.value) : setOtp(e.target.value)}
              />
              <Button disabled={isLoading} onClick={sendOtp ? onSendOtp : onDeleteAccount} variant="primary">{t(sendOtp ? 'sendOtp' : 'deleteAccount')}</Button>
            </div>
          )
        }
      </div>
  );
}