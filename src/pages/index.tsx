import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();
  
  useEffect(() => {
    history.push('/docs/getting-started/quick-start');
  }, [history]);
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '1.2rem'
    }}>
      Redirecting to documentation...
    </div>
  );
}
