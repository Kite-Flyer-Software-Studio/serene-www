import { Navbar } from '@/components/revamp/Navbar/Navbar';
import { Footer } from '@/components/revamp/Footer/Footer';
import { DeleteAccountForm } from '@/components/core/DeleteAccount/DeleteAccountForm';

export async function generateMetadata() {
  return {
    title: 'Serene — Real IRL Connections',
    description:
      'Serene finds people who click. Weekly prompts keep convo lively. Try now — first three months free.',
    openGraph: {
      title: 'Serene — Real IRL Connections',
      description:
        'Serene finds people who click. Weekly prompts keep convo lively. Try now — first three months free.',
    },
  };
}

export default function DeleteAccount() {
  return (
    <>
      <Navbar />
      <DeleteAccountForm />
      <Footer />
      </>
  );
}