import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function ToolsHome() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/tools/evmdev');
  }, [navigate]);

  return null;
}
